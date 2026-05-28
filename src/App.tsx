import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion';
import { Crown, Dice5, Flame, GlassWater, Heart, History, Save, Sparkles, Users, Volume2, VolumeX, Zap } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Particles } from './components/Particles';
import { categories, commands, type CommandCard, type CommandCategory } from './data/commands';
import { createPlayer, drawCommand, loadGame, pickOne, saveGame, type Player } from './lib';
import { playSfx, vibrate } from './sound';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

type Phase = 'setup' | 'ready' | 'reveal';

const defaultPlayers = ['ヒカル', 'ミオ', 'レン', 'ユナ'].map(createPlayer);
const demoCardId = new URLSearchParams(window.location.search).get('card');
const queryDemoCard = commands.find((command) => command.id === demoCardId) ?? null;

function App() {
  const restored = useMemo(() => loadGame(), []);
  const [players, setPlayers] = useState<Player[]>(restored?.players.length ? restored.players : defaultPlayers);
  const [selectedCategories, setSelectedCategories] = useState<CommandCategory[]>(restored?.selectedCategories ?? categories);
  const [chaos, setChaos] = useState(restored?.chaos ?? false);
  const [drunk, setDrunk] = useState(restored?.drunk ?? false);
  const [sfx, setSfx] = useState(restored?.sfx ?? true);
  const [phase, setPhase] = useState<Phase>(queryDemoCard ? 'reveal' : 'ready');
  const [king, setKing] = useState<Player | null>(queryDemoCard ? (restored?.players[0] ?? defaultPlayers[0]) : null);
  const [target, setTarget] = useState<Player | null>(queryDemoCard ? (restored?.players[1] ?? defaultPlayers[1]) : null);
  const [card, setCard] = useState<CommandCard | null>(queryDemoCard);
  const [burstKey, setBurstKey] = useState(queryDemoCard ? 1 : 0);
  const [history, setHistory] = useState<string[]>([]);
  const [recentCommandIds, setRecentCommandIds] = useState<string[]>(restored?.recentCommandIds ?? []);
  const tiltX = useMotionValue(0);
  const rotate = useTransform(tiltX, [-120, 120], [-4, 4]);

  const activePlayers = players.filter((player) => player.name.trim());
  const canPlay = activePlayers.length >= 2 && selectedCategories.length > 0;
  const isLateNight = new Date().getHours() >= 2 && new Date().getHours() < 5;

  useEffect(() => {
    saveGame({ players, selectedCategories, chaos, drunk, sfx, recentCommandIds });
  }, [players, selectedCategories, chaos, drunk, sfx, recentCommandIds]);

  const updatePlayer = (id: string, name: string) => {
    setPlayers((current) => current.map((player) => (player.id === id ? { ...player, name } : player)));
  };

  const addPlayer = () => {
    if (players.length >= 12) return;
    playSfx('tap', sfx);
    vibrate(12);
    setPlayers((current) => [...current, createPlayer()]);
    setPhase('setup');
  };

  const removePlayer = (id: string) => {
    if (players.length <= 2) return;
    playSfx('tap', sfx);
    vibrate(10);
    setPlayers((current) => current.filter((player) => player.id !== id));
  };

  const toggleCategory = (category: CommandCategory) => {
    playSfx('toggle', sfx);
    vibrate(10);
    setSelectedCategories((current) =>
      current.includes(category) ? current.filter((item) => item !== category) : [...current, category],
    );
  };

  const roll = () => {
    if (!canPlay) return;
    const nextKing = pickOne(activePlayers);
    const candidates = activePlayers.filter((player) => player.id !== nextKing.id);
    const nextTarget = pickOne(candidates);
    const nextCard = drawCommand(selectedCategories, chaos || isLateNight, recentCommandIds);
    playSfx(nextCard.rarity === 'LEGEND' ? 'legend' : nextCard.rarity === 'SSR' ? 'ssr' : 'roll', sfx);
    vibrate(nextCard.rarity === 'LEGEND' ? [35, 35, 80, 40, 120] : nextCard.rarity === 'SSR' ? [30, 35, 90] : [18, 28, 42]);
    setKing(nextKing);
    setTarget(nextTarget);
    setCard(nextCard);
    setPhase('reveal');
    setBurstKey((value) => value + 1);
    setRecentCommandIds((current) => [nextCard.id, ...current.filter((id) => id !== nextCard.id)].slice(0, 18));
    setHistory((current) => [`${nextKing.name} 王様 / ${nextCard.title}`, ...current].slice(0, 5));
  };

  const rarityClass = card?.rarity === 'LEGEND' ? 'legend-card' : card?.rarity === 'SSR' ? 'ssr-card' : 'normal-card';

  return (
    <main className={`min-h-dvh overflow-hidden bg-[#090613] text-white ${drunk ? 'drunk-mode' : ''}`}>
      <img className="fixed inset-0 h-full w-full object-cover opacity-70" src={asset('assets/ai/neon-party-bg.webp')} alt="" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,58,214,.24),transparent_30%),linear-gradient(180deg,rgba(9,6,19,.36),#090613_86%)]" />
      <div className="party-lights" />
      <div className="relative mx-auto flex min-h-dvh w-full max-w-[480px] flex-col px-4 pb-[calc(18px+env(safe-area-inset-bottom))] pt-[calc(14px+env(safe-area-inset-top))]">
        <header className="flex items-center justify-between">
          <button
            className="icon-button"
            onClick={() => {
              playSfx('tap', sfx);
              vibrate(8);
              setPhase(phase === 'setup' ? 'ready' : 'setup');
            }}
            aria-label="プレイヤー設定"
          >
            <Users size={20} />
          </button>
          <div className="text-center">
            <p className="text-[10px] font-black tracking-[.34em] text-cyan-200">NEON DRINKING GAME</p>
            <h1 className="glitch-title text-4xl font-black leading-none" data-text="PARTY KING">
              PARTY KING
            </h1>
          </div>
          <button
            className="icon-button"
            onClick={() => {
              playSfx('toggle', sfx);
              vibrate(12);
              setDrunk((value) => !value);
            }}
            aria-label="酔っぱらい演出"
          >
            <GlassWater size={20} />
          </button>
        </header>

        <section className="mt-4 grid grid-cols-3 gap-2 text-center">
          <StatusPill icon={<Crown size={15} />} label="KING" value={king?.name ?? '未定'} />
          <StatusPill icon={<Flame size={15} />} label="MODE" value={chaos ? 'CHAOS' : isLateNight ? '2AM' : 'PARTY'} />
          <StatusPill icon={<History size={15} />} label="PLAYERS" value={`${activePlayers.length}人`} />
        </section>

        <AnimatePresence mode="wait">
          {phase === 'setup' ? (
            <motion.section
              key="setup"
              className="mt-4 flex-1 overflow-hidden rounded-[8px] border border-white/15 bg-black/46 p-4 shadow-neon backdrop-blur-xl"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-black">メンバー入力</h2>
                <button className="mini-button" onClick={addPlayer}>
                  追加
                </button>
              </div>
              <div className="mt-3 space-y-2">
                {players.map((player, index) => (
                  <div key={player.id} className="flex items-center gap-2">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px] bg-fuchsia-500/20 text-sm font-black text-fuchsia-100">
                      {index + 1}
                    </span>
                    <input
                      className="h-11 min-w-0 flex-1 rounded-[8px] border border-white/12 bg-white/10 px-3 text-base font-bold outline-none ring-cyan-300/0 transition focus:border-cyan-200 focus:ring-4"
                      value={player.name}
                      onChange={(event) => updatePlayer(player.id, event.target.value)}
                      placeholder="名前"
                    />
                    <button className="icon-button h-11 w-11" onClick={() => removePlayer(player.id)} aria-label="削除">
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <h3 className="mt-5 text-sm font-black text-cyan-100">指令カテゴリ</h3>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-button ${selectedCategories.includes(category) ? 'active' : ''}`}
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <Toggle
                  active={chaos}
                  onClick={() => {
                    playSfx('toggle', sfx);
                    vibrate(12);
                    setChaos((value) => !value);
                  }}
                  icon={<Zap size={17} />}
                  label="カオス"
                />
                <Toggle
                  active={drunk}
                  onClick={() => {
                    playSfx('toggle', sfx);
                    vibrate(12);
                    setDrunk((value) => !value);
                  }}
                  icon={<Sparkles size={17} />}
                  label="酔っぱらい"
                />
              </div>
              <Toggle
                active={sfx}
                onClick={() => {
                  const next = !sfx;
                  setSfx(next);
                  playSfx('toggle', next);
                  vibrate(12);
                }}
                icon={sfx ? <Volume2 size={17} /> : <VolumeX size={17} />}
                label={sfx ? 'SE ON' : 'SE OFF'}
              />
              <button
                className="primary-button mt-4"
                onClick={() => {
                  playSfx('tap', sfx);
                  vibrate(10);
                  setPhase('ready');
                }}
              >
                <Save size={18} /> 保存して戻る
              </button>
            </motion.section>
          ) : (
            <motion.section
              key="game"
              className="relative mt-4 flex flex-1 flex-col justify-between overflow-hidden rounded-[8px] border border-white/15 bg-black/38 p-4 shadow-neon backdrop-blur-xl"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              onPointerMove={(event) => tiltX.set(event.clientX - window.innerWidth / 2)}
              onPointerLeave={() => tiltX.set(0)}
            >
              <Particles burstKey={burstKey} />
              <AnimatePresence>
                {(card?.rarity === 'SSR' || card?.rarity === 'LEGEND') && (
                  <motion.div
                    key={`${card.id}-${burstKey}`}
                    className={`rare-flash ${card.rarity === 'LEGEND' ? 'legend' : ''}`}
                    initial={{ opacity: 0, scale: 0.74, rotate: -8 }}
                    animate={{ opacity: [0, 1, 0.42, 0], scale: [0.74, 1.08, 1.16, 1.24], rotate: [ -8, 0, 2, 5 ] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {card.rarity}
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="absolute right-[-42px] top-8 h-48 w-36 overflow-hidden rounded-[8px] opacity-90">
                <img className="h-full w-full object-cover object-top" src={asset('assets/ai/party-king-host.webp')} alt="" />
              </div>
              <div className="relative z-10">
                <p className="text-xs font-black tracking-[.22em] text-lime-200">TAP TO SUMMON THE KING</p>
                <h2 className="mt-1 max-w-[290px] text-3xl font-black leading-tight">
                  スマホを回して、王様を召喚。
                </h2>
              </div>

              <div className="relative z-10 my-4 grid place-items-center">
                <motion.div
                  className={`command-card ${rarityClass}`}
                  style={{ rotate }}
                  key={card?.id ?? 'empty-card'}
                  initial={{ scale: 0.72, rotateX: 75, opacity: 0, filter: 'blur(10px)' }}
                  animate={{ scale: 1, rotateX: 0, opacity: 1, filter: 'blur(0px)' }}
                  transition={{ type: 'spring', stiffness: 210, damping: 18, mass: 0.8 }}
                >
                  <div className="card-art">
                    <img src={asset('assets/ai/command-card-sheet.webp')} alt="" />
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-black">{card?.rarity ?? 'READY'}</span>
                    <span className="text-right text-xs font-black tracking-[.18em] text-cyan-100">{card?.tag ?? 'START'}</span>
                  </div>
                  <h3 className="mt-3 text-3xl font-black leading-none">{card?.title ?? '王様待機中'}</h3>
                  <p className="mt-3 min-h-[72px] text-base font-bold leading-relaxed text-white/88">
                    {card?.body ?? 'プレイヤーを2人以上入れて、ネオンの王様ゲームを始めよう。'}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="mini-panel">
                      <span>王様</span>
                      <strong>{king?.name ?? '???'}</strong>
                    </div>
                    <div className="mini-panel">
                      <span>相手</span>
                      <strong>{target?.name ?? '???'}</strong>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="relative z-10 space-y-3">
                <button className="primary-button h-16 text-lg" disabled={!canPlay} onClick={roll}>
                  <Dice5 size={22} /> 王様を決める
                </button>
                <div className="flex items-center justify-between gap-2">
                  <button
                    className="secondary-button"
                    onClick={() => {
                      playSfx('tap', sfx);
                      vibrate(8);
                      setPhase('setup');
                    }}
                  >
                    <Users size={17} /> 設定
                  </button>
                  <button
                    className="secondary-button"
                    onClick={() => {
                      playSfx('toggle', sfx);
                      vibrate(12);
                      setChaos((value) => !value);
                    }}
                  >
                    <Heart size={17} /> {chaos ? 'カオスON' : '通常'}
                  </button>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {history.length > 0 && (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {history.map((item) => (
              <span key={item} className="shrink-0 rounded-full border border-white/12 bg-white/10 px-3 py-2 text-xs font-bold text-white/80">
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function StatusPill({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-[8px] border border-white/12 bg-white/10 px-2 py-2 backdrop-blur">
      <div className="mx-auto flex items-center justify-center gap-1 text-[10px] font-black text-cyan-100">
        {icon}
        {label}
      </div>
      <div className="mt-1 truncate text-sm font-black">{value}</div>
    </div>
  );
}

function Toggle({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: ReactNode; label: string }) {
  return (
    <button className={`toggle-button ${active ? 'active' : ''}`} onClick={onClick}>
      {icon}
      {label}
    </button>
  );
}

export default App;
