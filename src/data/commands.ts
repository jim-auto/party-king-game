export type CommandCategory = 'ライト' | '盛り上げ' | '恋愛' | 'ドキドキ' | '友情' | '深夜テンション';
export type Rarity = 'N' | 'R' | 'SR' | 'SSR' | 'LEGEND';

export type CommandCard = {
  id: string;
  category: CommandCategory;
  rarity: Rarity;
  title: string;
  body: string;
  tag: string;
};

export const categories: CommandCategory[] = ['ライト', '盛り上げ', '恋愛', 'ドキドキ', '友情', '深夜テンション'];

export const commands: CommandCard[] = [
  { id: 'light-selfie', category: 'ライト', rarity: 'N', title: 'ネオン自撮り', body: '隣の人とツーショット。盛れる角度は王様が決める。', tag: 'SELFIE' },
  { id: 'light-nickname', category: 'ライト', rarity: 'N', title: '今夜のあだ名', body: '王様が選んだ人に、今夜だけのあだ名をつける。', tag: 'VARIETY' },
  { id: 'light-compliment', category: 'ライト', rarity: 'R', title: '10秒ほめラッシュ', body: '指定された人のいいところを10秒で3つ言う。', tag: 'GOOD VIBES' },
  { id: 'light-camera-roll', category: 'ライト', rarity: 'N', title: '最新フォト審査', body: '見せられる範囲で最新写真を1枚見せる。王様がタイトルをつける。', tag: 'PHOTO' },
  { id: 'light-emoji', category: 'ライト', rarity: 'N', title: '絵文字で自己紹介', body: '今の気分を絵文字3つで表現。理由もひとこと。', tag: 'EMOJI' },
  { id: 'light-signature', category: 'ライト', rarity: 'N', title: '決めポーズ登録', body: '指定された人は今夜の決めポーズを作る。次のラウンドで全員まねする。', tag: 'POSE' },
  { id: 'light-best-smile', category: 'ライト', rarity: 'R', title: 'ベストスマイル', body: '王様が選んだ人は最高の笑顔を3秒キープ。周りは全力で盛る。', tag: 'SMILE' },
  { id: 'light-first-impression', category: 'ライト', rarity: 'R', title: '第一印象ライト', body: '指定された人の第一印象を、ポジティブ限定でひとこと。', tag: 'FIRST' },
  { id: 'light-theme-song', category: 'ライト', rarity: 'R', title: '登場曲セレクト', body: '指定された人に似合う登場曲を王様が選ぶ。歌っても流してもOK。', tag: 'BGM' },
  { id: 'light-sns-caption', category: 'ライト', rarity: 'R', title: 'SNSキャプション', body: '今この場にタイトルをつけるなら？一番それっぽい人が勝ち。', tag: 'CAPTION' },
  { id: 'light-mini-interview', category: 'ライト', rarity: 'SR', title: '30秒インタビュー', body: '王様は指定した人に質問を3つ。答えは短くテンポよく。', tag: 'TALK' },
  { id: 'light-lucky-item', category: 'ライト', rarity: 'SR', title: '今夜のラッキーアイテム', body: '王様が誰か1人の持ち物を見て、勝手にラッキーアイテム認定。', tag: 'LUCK' },
  { id: 'light-memory', category: 'ライト', rarity: 'SR', title: '今日の名シーン', body: 'ここまでで一番おもしろかった瞬間を全員でひとつ選ぶ。', tag: 'RECAP' },
  { id: 'light-ssr-host', category: 'ライト', rarity: 'SSR', title: '司会者覚醒', body: '選ばれた人は次の1ターンだけ深夜番組のMC口調で進行する。', tag: 'MC' },
  { id: 'light-legend-screenshot', category: 'ライト', rarity: 'LEGEND', title: '伝説の集合ショット', body: '全員で今日いちばんSNSっぽい集合写真を撮る。載せるかは全員確認。', tag: 'LEGEND' },

  { id: 'hype-toast', category: '盛り上げ', rarity: 'R', title: '開幕コール職人', body: '一番テンション高い開幕コールを作って全員でまねする。', tag: 'CALL' },
  { id: 'hype-dance', category: '盛り上げ', rarity: 'SR', title: '15秒MV', body: '王様が選んだ2人で15秒だけ無音MVを撮る。', tag: 'TIKTOK' },
  { id: 'hype-vote', category: '盛り上げ', rarity: 'R', title: 'モテそう王', body: 'この場で一番モテそうな人をせーので指差し。', tag: 'VOTE' },
  { id: 'hype-air-drop', category: '盛り上げ', rarity: 'N', title: 'エア差し入れ', body: '王様が誰かに架空の差し入れを渡す。受け取る側は全力リアクション。', tag: 'ACT' },
  { id: 'hype-copy', category: '盛り上げ', rarity: 'N', title: 'ものまね一口', body: '指定された人は誰かの口ぐせをやさしくものまね。悪口は禁止。', tag: 'COPY' },
  { id: 'hype-high-five', category: '盛り上げ', rarity: 'N', title: 'ハイタッチ連鎖', body: '王様から時計回りにハイタッチ。最後の人は一言コール。', tag: 'CHAIN' },
  { id: 'hype-ranking', category: '盛り上げ', rarity: 'R', title: '勝手にランキング', body: '「今日一番ノリがいい人」ランキングを全員で決める。', tag: 'RANK' },
  { id: 'hype-commercial', category: '盛り上げ', rarity: 'R', title: '10秒CM', body: '指定された人は自分の持ちキャラを10秒でCM風に紹介。', tag: 'CM' },
  { id: 'hype-silent-laugh', category: '盛り上げ', rarity: 'R', title: '無音爆笑チャレンジ', body: '選ばれた人は声を出さずに爆笑演技。周りがつられたら成功。', tag: 'MUTE' },
  { id: 'hype-call-response', category: '盛り上げ', rarity: 'R', title: 'コール&レスポンス', body: '王様が短いコールを作る。全員が同じ熱量で返す。', tag: 'CALL' },
  { id: 'hype-runway', category: '盛り上げ', rarity: 'SR', title: '深夜ランウェイ', body: '指定された人は3歩だけモデル歩き。王様がブランド名を即興で言う。', tag: 'RUNWAY' },
  { id: 'hype-drama', category: '盛り上げ', rarity: 'SR', title: '急に最終回', body: '王様と指定された人で、存在しないドラマの最終回を10秒演じる。', tag: 'DRAMA' },
  { id: 'hype-camera-pan', category: '盛り上げ', rarity: 'SR', title: 'カメラ目線リレー', body: '全員で順番にカメラ目線。最後の人が決め台詞。', tag: 'REEL' },
  { id: 'hype-ssr-idol', category: '盛り上げ', rarity: 'SSR', title: 'SSRアイドルタイム', body: '選ばれた人を全員でアイドル紹介。本人は最後にファンサを1つ。', tag: 'SSR' },
  { id: 'hype-legend-festival', category: '盛り上げ', rarity: 'LEGEND', title: '深夜フェス開幕', body: '王様の合図で全員10秒だけライブ会場のテンションになる。', tag: 'LEGEND' },

  { id: 'love-type', category: '恋愛', rarity: 'R', title: '好きなタイプ暴露', body: '好きなタイプをひとことで。具体的すぎると追加質問あり。', tag: 'LOVE' },
  { id: 'love-line', category: '恋愛', rarity: 'SR', title: '理想の口説き文句', body: '指定された人に、ドラマっぽく一言だけ言う。笑ったら成功。', tag: 'REALITY' },
  { id: 'love-praise', category: '恋愛', rarity: 'SR', title: '異性メンバーを褒める', body: '異性メンバーを1人選んで、外見以外の魅力を褒める。', tag: 'RESPECT' },
  { id: 'love-date-plan', category: '恋愛', rarity: 'N', title: '理想の初デート', body: '理想の初デートを一言で。現実味より雰囲気重視。', tag: 'DATE' },
  { id: 'love-gap', category: '恋愛', rarity: 'N', title: '好きなギャップ', body: '人のどんなギャップに弱いか発表。具体名は出さなくてOK。', tag: 'GAP' },
  { id: 'love-message', category: '恋愛', rarity: 'N', title: '返信速度チェック', body: '好きな人への返信は早い派？寝かせる派？理由もひとこと。', tag: 'DM' },
  { id: 'love-fashion', category: '恋愛', rarity: 'R', title: '刺さる服装', body: '異性・好きな相手に着てほしい服装を安全な範囲で発表。', tag: 'STYLE' },
  { id: 'love-song', category: '恋愛', rarity: 'R', title: '恋愛ソング選抜', body: '今の恋愛観に一番近い曲を1つ選ぶ。サビだけ口ずさんでもOK。', tag: 'SONG' },
  { id: 'love-crush-hint', category: '恋愛', rarity: 'R', title: '気になる人のヒント', body: '気になるタイプを、名前なしでヒント3つだけ言う。', tag: 'HINT' },
  { id: 'love-compliment-chain', category: '恋愛', rarity: 'R', title: '褒めリレー', body: '王様から時計回りに、隣の人をひとこと褒める。', tag: 'CHAIN' },
  { id: 'love-reality-confession', category: '恋愛', rarity: 'SR', title: 'リアリティショー告白', body: '指定された人に「今日話してみて思ったこと」を番組風に伝える。', tag: 'SHOW' },
  { id: 'love-heart-vote', category: '恋愛', rarity: 'SR', title: '胸きゅん投票', body: '王様がテーマを出す。「一番胸きゅん台詞が似合う人」を投票。', tag: 'VOTE' },
  { id: 'love-perfect-date', category: '恋愛', rarity: 'SR', title: '完璧デート設計', body: '指定された人に似合うデートプランを全員で30秒で作る。', tag: 'PLAN' },
  { id: 'love-ssr-main-character', category: '恋愛', rarity: 'SSR', title: '恋リア主人公', body: '選ばれた人は恋愛リアリティショーの主人公として自己紹介。', tag: 'SSR' },
  { id: 'love-legend-final-rose', category: '恋愛', rarity: 'LEGEND', title: '最後のローズ', body: '王様は今日一番話してみたい人に架空のローズを渡す。受け取りは自由。', tag: 'LEGEND' },

  { id: 'thrill-eye', category: 'ドキドキ', rarity: 'SR', title: '3秒アイコンタクト', body: '王様が選んだ2人は3秒見つめ合う。照れたら全員拍手。', tag: 'EYE LOCK' },
  { id: 'thrill-secret', category: 'ドキドキ', rarity: 'SSR', title: '秘密の第一印象', body: '選ばれた人の第一印象を、今だから言える温度で発表。', tag: 'SSR' },
  { id: 'thrill-near', category: 'ドキドキ', rarity: 'SSR', title: '肩よせショット', body: '指定された2人で、距離近めの写真を1枚。投稿するかは本人たち次第。', tag: 'PHOTO' },
  { id: 'thrill-whisper', category: 'ドキドキ', rarity: 'N', title: '耳打ち未遂', body: '王様は指定した人に、耳打ちっぽい距離で今日の感想を普通の声で言う。', tag: 'NEAR' },
  { id: 'thrill-hand-size', category: 'ドキドキ', rarity: 'N', title: '手の大きさ比べ', body: '選ばれた2人は手の大きさを一瞬だけ比べる。無理ならエアでOK。', tag: 'HAND' },
  { id: 'thrill-name-call', category: 'ドキドキ', rarity: 'N', title: '名前呼びチェンジ', body: '指定された2人は次のターンまで下の名前かあだ名で呼ぶ。嫌ならパス。', tag: 'NAME' },
  { id: 'thrill-closer-seat', category: 'ドキドキ', rarity: 'R', title: '席ちょい寄せ', body: '王様が選んだ2人は席を少し近づける。距離は本人たちが決める。', tag: 'SEAT' },
  { id: 'thrill-voice-note', category: 'ドキドキ', rarity: 'R', title: 'ボイスメッセージ風', body: '指定された人は誰かに送る体で、5秒のやさしいメッセージを言う。', tag: 'VOICE' },
  { id: 'thrill-look-away', category: 'ドキドキ', rarity: 'R', title: '先に逸らしたら負け', body: '選ばれた2人は2秒だけ見つめ合う。先に笑った人が拍手される。', tag: 'LOOK' },
  { id: 'thrill-ideal-distance', category: 'ドキドキ', rarity: 'R', title: '理想の距離感', body: '指定された人は「仲良くなる時の距離感」を一言で説明。', tag: 'DISTANCE' },
  { id: 'thrill-camera-heart', category: 'ドキドキ', rarity: 'SR', title: 'ハートフレーム', body: '王様が選んだ2人はカメラに向かって手でハート。表情は自由。', tag: 'HEART' },
  { id: 'thrill-compliment-stare', category: 'ドキドキ', rarity: 'SR', title: '目を見て褒める', body: '指定された人を目を見てひとこと褒める。照れたら成功。', tag: 'BLUSH' },
  { id: 'thrill-secret-question', category: 'ドキドキ', rarity: 'SR', title: '秘密の質問箱', body: '王様は答えやすい恋愛質問を1つ出す。答えたくなければパスOK。', tag: 'QBOX' },
  { id: 'thrill-ssr-slow-motion', category: 'ドキドキ', rarity: 'SSR', title: 'スローモーション登場', body: '選ばれた人は3秒だけ恋愛ドラマの登場シーンをする。周りは効果音担当。', tag: 'SSR' },
  { id: 'thrill-legend-neon-promise', category: 'ドキドキ', rarity: 'LEGEND', title: 'ネオンの約束', body: '王様と指定された人は「また遊ぶなら何する？」をそれぞれ答える。', tag: 'LEGEND' },

  { id: 'bond-swap', category: '友情', rarity: 'R', title: '役割チェンジ', body: '王様と相手は次のラウンドだけキャラ口調を交換する。', tag: 'SWAP' },
  { id: 'bond-water', category: '友情', rarity: 'N', title: 'クールダウン', body: '全員で深呼吸。王様は場を整える一言を言う。', tag: 'SAFE' },
  { id: 'bond-toast', category: '友情', rarity: 'SR', title: '王様宣言', body: '王様が今日の名言を作る。全員で同じポーズを決める。', tag: 'KING' },
  { id: 'bond-snack-pair', category: '友情', rarity: 'N', title: '相性ペアリング', body: '王様は2人の意外と合いそうな共通点をひとつ作る。', tag: 'PAIR' },
  { id: 'bond-water-buddy', category: '友情', rarity: 'N', title: 'セーフティバディ', body: '王様が選んだ2人は、このラウンドだけお互いをフォローする係。', tag: 'BUDDY' },
  { id: 'bond-flavor', category: '友情', rarity: 'N', title: 'キャラ味レビュー', body: '選ばれた人は自分のキャラをグルメ番組風に一言で紹介。', tag: 'REVIEW' },
  { id: 'bond-next-order', category: '友情', rarity: 'R', title: '次に話すなら', body: '次に深掘りしたい相手を1人選ぶ。理由は軽くひとこと。', tag: 'TALK' },
  { id: 'bond-cheers-camera', category: '友情', rarity: 'R', title: 'チームショット', body: '全員で架空の集合写真ポーズ。王様がセンターを決める。', tag: 'SHOT' },
  { id: 'bond-bar-name', category: '友情', rarity: 'R', title: '今夜のチーム名', body: 'このメンバーにチーム名をつける。王様が採用案を決める。', tag: 'TEAM' },
  { id: 'bond-mocktail', category: '友情', rarity: 'R', title: '架空ユニット名', body: '指定された2人の架空ユニット名を全員で作る。', tag: 'UNIT' },
  { id: 'bond-sober-check', category: '友情', rarity: 'SR', title: '空気チェック', body: '全員のテンションを1から5で発表。王様が次の方向性を決める。', tag: 'CHECK' },
  { id: 'bond-royal-toast', category: '友情', rarity: 'SR', title: 'ロイヤル称賛', body: '王様は誰か1人の今日の良さを言って、全員で拍手する。', tag: 'ROYAL' },
  { id: 'bond-menu-maker', category: '友情', rarity: 'SR', title: '限定ルール開発', body: '次の1ターンだけ使えるミニルールを10秒で考える。', tag: 'RULE' },
  { id: 'bond-ssr-champagne', category: '友情', rarity: 'SSR', title: 'SSRスポットライト', body: '選ばれた人を5秒だけ主役扱い。全員で紹介コメントを添える。', tag: 'SSR' },
  { id: 'bond-legend-aftercare', category: '友情', rarity: 'LEGEND', title: '伝説の休憩タイム', body: '全員で一度リセット。王様は「今日の安心担当」として称えられる。', tag: 'LEGEND' },

  { id: 'night-2am', category: '深夜テンション', rarity: 'SSR', title: '深夜2時モード', body: '全員、急に恋愛リアリティショーの住人として自己紹介。', tag: '2AM' },
  { id: 'night-chaos', category: '深夜テンション', rarity: 'LEGEND', title: 'カオスモード解放', body: '王様は「全員でできる変なポーズ」を指定。撮影してもいい。', tag: 'LEGEND' },
  { id: 'night-command', category: '深夜テンション', rarity: 'SSR', title: '1回だけ王命', body: '選ばれた人は王様の軽いお願いを1回聞く。無理・嫌は即パス。', tag: 'ROYAL' },
  { id: 'night-tv-host', category: '深夜テンション', rarity: 'N', title: '深夜番組の入り', body: '王様は番組MCっぽく「今夜も始まりました」と言う。全員拍手。', tag: 'TV' },
  { id: 'night-fake-news', category: '深夜テンション', rarity: 'N', title: '速報です', body: '指定された人の今日の出来事をニュース速報風に発表。盛りすぎ注意。', tag: 'NEWS' },
  { id: 'night-dramatic-look', category: '深夜テンション', rarity: 'N', title: '意味深な目線', body: '選ばれた人は遠くを見て意味深な一言。内容は浅くてOK。', tag: 'MOOD' },
  { id: 'night-plot-twist', category: '深夜テンション', rarity: 'R', title: '急展開ナレーション', body: '王様は今の場に突然のナレーションを入れる。「しかしこの後...」から開始。', tag: 'PLOT' },
  { id: 'night-main-visual', category: '深夜テンション', rarity: 'R', title: 'メインビジュアル', body: '全員で存在しない番組ポスターのポーズを作る。撮影は自由。', tag: 'VISUAL' },
  { id: 'night-random-title', category: '深夜テンション', rarity: 'R', title: '映画タイトル化', body: '今の王様ゲームを映画タイトルにする。王様が主演を決める。', tag: 'MOVIE' },
  { id: 'night-villain', category: '深夜テンション', rarity: 'R', title: '黒幕登場', body: '指定された人は3秒だけ黒幕っぽく笑う。怖くしすぎない。', tag: 'BOSS' },
  { id: 'night-y2k-pose', category: '深夜テンション', rarity: 'SR', title: 'Y2Kポーズ縛り', body: '全員で平成ギャル・Y2Kっぽいポーズ。王様が一番を決める。', tag: 'Y2K' },
  { id: 'night-glitch-reset', category: '深夜テンション', rarity: 'SR', title: 'グリッチリセット', body: '全員3秒だけ動きがバグった人になる。王様の合図で通常復帰。', tag: 'GLITCH' },
  { id: 'night-after-party', category: '深夜テンション', rarity: 'SR', title: '二次会企画会議', body: '架空の二次会プランを30秒で作る。予算も場所も現実無視でOK。', tag: 'AFTER' },
  { id: 'night-ssr-2am-cast', category: '深夜テンション', rarity: 'SSR', title: '2AMキャスティング', body: 'この場を恋愛番組にするなら、各メンバーの役割を王様が命名。', tag: 'SSR' },
  { id: 'night-legend-final-scene', category: '深夜テンション', rarity: 'LEGEND', title: '伝説のエンドロール', body: '全員で今日のエンドロールを作る。王様は最後に締めの一言。', tag: 'LEGEND' },
];

export const rarityWeight: Record<Rarity, number> = {
  N: 42,
  R: 32,
  SR: 17,
  SSR: 7,
  LEGEND: 2,
};
