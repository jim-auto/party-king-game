export type Reward = {
  id: string;
  title: string;
  condition: string;
  image: string;
};

export const rewards: Reward[] = [
  {
    id: 'vibe-clear',
    title: 'VIBE CLEAR',
    condition: 'VIBE 80達成',
    image: 'assets/ai/reward-vibe-clear.webp',
  },
  {
    id: 'dokidoki-route',
    title: 'DOKIDOKI ROUTE',
    condition: 'ドキドキSSRを引く',
    image: 'assets/ai/reward-dokidoki-route.webp',
  },
  {
    id: 'chaos-finale',
    title: 'CHAOS FINALE',
    condition: 'LEGENDカードを引く',
    image: 'assets/ai/reward-chaos-finale.webp',
  },
  {
    id: 'friendship-afterglow',
    title: 'FRIENDSHIP AFTERGLOW',
    condition: 'パスで空気を守る',
    image: 'assets/ai/reward-friendship-afterglow.webp',
  },
  {
    id: 'midnight-ending',
    title: 'MIDNIGHT ENDING',
    condition: '10ラウンド到達',
    image: 'assets/ai/reward-midnight-ending.webp',
  },
  {
    id: 'king-spotlight',
    title: 'KING SPOTLIGHT',
    condition: '王様を5回召喚',
    image: 'assets/ai/reward-king-spotlight.webp',
  },
];
