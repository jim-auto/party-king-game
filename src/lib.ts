import { commands, rarityWeight, type CommandCard, type CommandCategory, type Rarity } from './data/commands';

export type Player = {
  id: string;
  name: string;
};

export type SavedGame = {
  players: Player[];
  chaos: boolean;
  drunk: boolean;
  sfx: boolean;
  selectedCategories: CommandCategory[];
  recentCommandIds?: string[];
};

export const storageKey = 'party-king-game-state-v1';

export function createPlayer(name = ''): Player {
  return { id: crypto.randomUUID(), name };
}

export function pickOne<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function pickRarity(): Rarity {
  const total = Object.values(rarityWeight).reduce((sum, n) => sum + n, 0);
  let roll = Math.random() * total;
  for (const [rarity, weight] of Object.entries(rarityWeight) as [Rarity, number][]) {
    roll -= weight;
    if (roll <= 0) return rarity;
  }
  return 'N';
}

export function drawCommand(categories: CommandCategory[], chaos: boolean, recentIds: string[] = []): CommandCard {
  const targetRarity = chaos && Math.random() > 0.58 ? pickOne<Rarity>(['SR', 'SSR', 'LEGEND']) : pickRarity();
  const pool = commands.filter((command) => categories.includes(command.category));
  const freshPool = pool.filter((command) => !recentIds.includes(command.id));
  const sourcePool = freshPool.length >= Math.min(8, pool.length) ? freshPool : pool;
  const rarityPool = sourcePool.filter((command) => command.rarity === targetRarity);
  return pickOne(rarityPool.length ? rarityPool : sourcePool);
}

export function saveGame(state: SavedGame) {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

export function loadGame(): SavedGame | null {
  try {
    const raw = localStorage.getItem(storageKey);
    return raw ? (JSON.parse(raw) as SavedGame) : null;
  } catch {
    return null;
  }
}
