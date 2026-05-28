# PARTY KING

飲み会でスマホを回して遊ぶ、ネオン系の王様ゲームWebアプリです。合コン、宅飲み、クラブ後、深夜テンションに寄せた「ちょっと距離が近いけど露骨ではない」温度感で、TikTokやZ世代っぽいスクショ映えを狙っています。

## Demo URL

GitHub Pages公開後にここへURLを入れます。

https://jim-auto.github.io/party-king-game/

## Screenshot

| Home / Reveal | Setup | SSR |
| --- | --- | --- |
| ![Home reveal screenshot](docs/screenshots/home.png) | ![Setup screenshot](docs/screenshots/setup.png) | ![SSR screenshot](docs/screenshots/ssr.png) |

## Concept

- 日本の飲み会文化と海外パーティゲームUIのミックス
- 深夜バラエティ、恋愛リアリティショー、ソシャゲ演出の空気感
- ネオン、カクテル、グリッチ、カオス、SSR演出
- 友達同士で笑える範囲のドキドキ指令
- 露骨な成人向け表現は避け、SNSに載せやすい安全なパーティ感を優先

## Features

- React + TypeScript + Vite
- Tailwind CSS
- Framer Motionによるカード出現、爆発パーティクル、ヌルっとした操作感
- プレイヤー名、カテゴリ、モードをlocalStorageに保存
- 王様、対象プレイヤー、指令カードをランダム決定
- ライト、盛り上げ、恋愛、ドキドキ、飲酒、深夜テンションのカテゴリ
- SSR / LEGEND / 深夜2時モード / 酔っぱらい演出 / カオスモード
- GitHub Pages対応の相対パスビルド
- PWA化しやすいmanifestとservice workerの土台
- AI生成素材を`public/assets/ai/`に配置

## AI Generated Assets

このアプリはAI生成ビジュアル前提の構成です。現在は以下の素材を同梱しています。

- `public/assets/ai/neon-party-bg.png`
- `public/assets/ai/party-king-host.png`
- `public/assets/ai/command-card-sheet.png`
- `public/assets/ai/effects-sticker-sheet.png`

アプリ上では軽量化したWebP版を優先して参照しています。PNGは元素材として残しています。

追加・差し替え用のプロンプトは`prompts/`に用途別で整理しています。

- `prompts/backgrounds.md`
- `prompts/characters.md`
- `prompts/cards.md`
- `prompts/ui.md`
- `prompts/effects.md`

Stable Diffusion、Midjourney、GPT Image系で使える英語プロンプトを入れているため、生成した素材を`public/assets/ai/`へ追加すれば、カードアートや背景を拡張できます。

## Development Philosophy

最初の画面から「飲み会で回したい」ことを優先しています。説明ページではなくゲーム画面を出し、片手で押しやすいボタン、縦画面の密度、スクショで伝わるネオン世界観を重視しています。

指令は盛り上がる一方で、強制や露骨な性的表現に寄せすぎない方針です。飲酒カテゴリにも水を飲む指令を入れ、パスしやすい文言にしています。

## Directory

```txt
.
├─ public/
│  ├─ assets/ai/        # AI生成素材
│  ├─ manifest.webmanifest
│  └─ sw.js
├─ prompts/             # 画像生成プロンプト集
├─ src/
│  ├─ components/
│  ├─ data/
│  ├─ App.tsx
│  ├─ lib.ts
│  ├─ main.tsx
│  └─ styles.css
├─ index.html
├─ vite.config.ts
└─ package.json
```

## Setup

```bash
npm install
npm run dev
```

## Screenshots

README用スクリーンショットはPlaywrightで生成できます。ローカルサーバーを起動してから実行します。

```bash
npm run dev -- --port 5174
SCREENSHOT_URL=http://localhost:5174/ npm run screenshots
```

Windows PowerShellの場合:

```powershell
$env:SCREENSHOT_URL='http://localhost:5174/'
npm run screenshots
```

## Build

```bash
npm run build
```

AI生成素材を差し替えた場合は、WebP版を再生成します。

```bash
npm run optimize:assets
```

`dist/`がGitHub Pagesで配信する静的ファイルです。`vite.config.ts`で`base: './'`にしているため、`https://user.github.io/party-king-game/`のようなサブパスでも動作します。

## GitHub Pages Deploy

GitHub Pagesへは2通りで公開できます。

### gh-pagesブランチで公開

1. `npm run build`で`dist/`を作ります。
2. `dist/`の内容を`gh-pages`ブランチへpushします。
3. GitHubの **Settings > Pages > Build and deployment > Source** を `Deploy from a branch` にします。
4. Branchを `gh-pages`、Folderを `/ (root)` にします。
5. 公開URLをREADMEのDemo URL欄へ追記します。

### GitHub Actionsで公開

Actionsを使う場合は、`docs/github-actions-deploy.yml`を`.github/workflows/deploy.yml`へコピーしてpushします。

注意: GitHubトークンに`workflow`スコープがない環境では、workflowファイルをpushできません。その場合は`gh-pages`ブランチ公開を使います。

手元で確認する場合:

```bash
npm run lint
npm run build
```

## Future Ideas

- 指令カードの追加パック
- 生成AIによるその場の指令生成
- プレイヤーごとの称号・勝手にランキング
- カードごとの専用AIイラスト
- オフライン完全対応の強化
- 画像素材のWebP最適化
- SE実装とバイブレーション演出
- QRで部屋共有するマルチ端末モード
