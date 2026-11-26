# THE FIRECRACKERS 制作記録

2000年代初期のメロディックパンクをイメージした架空の4人組バンド「THE FIRECRACKERS」の、曲とMV・短尺動画の制作記録です。
AI動画生成（Seedance など）のプロンプトと試行錯誤を、版ごとに残していきます。

## バンド

| 名前 | 担当 |
|---|---|
| Jamie Miller | ボーカル／ギター |
| Simon Feather | ギター |
| Ash Brooks | ベース |
| Ronnie "The Pepper" Bennett | ドラム |

## フォルダ構成

```
README.md                 この説明
LESSONS.md                曲をまたいで使える学び（一番大事）
templates/trial_log.md    試行ログの書き方
songs/
  <曲名>/
    <作品名>/             例: hooks（Suno Hooks用短尺）、mv
      shotlist.md         構成表（カットの秒数・構図）
      prompts/            プロンプト（版ごとに別ファイル、v1, v2 …）
      logs/               試行ログ（1回の生成＝1項目）
      previz/             3Dプレビズのソース（HTML）
    suno/                 作曲の記録（歌詞、スタイルプロンプト、テイクの比較）
```

## 曲
- songs/anywhere-from-here/ … 1曲目「Anywhere from Here」（MV、Hooks）
- songs/saturdays-mine/ … 2曲目「Saturday's Mine」（Suno作曲、Hooks）

## ルール

- 画像・音声・動画はGoogle Driveに置き、ここにはリンクだけ書く（GitHubは大きいファイルに向かないため）
  - Drive: AI products → THE FIRECRACKERS → <曲名>
- プロンプトは上書きせず、直したら新しい版を作る
- 生成したら、良し悪しに関わらずログに1項目書く
- 何度も効いた・効かなかったことは LESSONS.md に昇格させる
