# pycon.jp.2021

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# generate static project
$ yarn generate

# 静的サイトとして本番環境と同等の動作をさせる場合
$ yarn generate
$ yarn start
```

## タイムテーブルの CSV 作成方法

※ENDPOINT_ID は Slack で聞いてください

```
$ pip install git+https://github.com/pyconjp/talks.domain.2021@0.1.1
$ ENDPOINT_ID=<endpoint id> python -m pyconjp_domains timetable ./content/talk/session.csv
```

/content/talk/session.csv が作成されます。

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).
