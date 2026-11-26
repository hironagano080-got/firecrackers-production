# 3Dプレビズ

three.js（0.128.0）で作った簡易3Dのカメラ参照。Seedanceに @動画1 として渡し、カメラの軌道と速さを再現させる。

| ファイル | 内容 |
|---|---|
| cut05_fpv_v1.html | ⑤ FPVフライイン（5秒、720x1280） |
| cut05_fpv_v2.html | ⑤ v2：蛇行±2.0m・3往復、ロール最大約25度、終点を約0.5m寄せる、照明は灯体固定で10灯ずつ拍ごとに入れ替え |
| render.js | 書き出し用。`npm pack three@0.128.0` を展開した `package/` と同じ場所で `node render.js <出力dir> 0,5 0.0333333` → ffmpegで30fpsの動画に |

書き出した動画はDrive（Saturday's mine → Hooks 1サビ）に置く。
