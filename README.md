# 19 November 2026 in one image

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/AdityaPratama0/world-page-19nov/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/AdityaPratama0/world-page-19nov/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

A program-drawn broadsheet for Wednesday 19 November 2026: three lead stories with decks, ten illustrated cards, a dot map with pins, 32 ruled briefs and a date-check panel. 45 stories, seven regions.

`gen.py` draws the page with SVG and rsvg-convert, measuring every string with Pillow before it is placed; `main.ts` copies `entry.png` to `${MAKEFUN_OUTPUT_DIR}/entry.png`.

Regenerate:

```sh
python3 gen.py entry.png
identify entry.png
mkdir -p /tmp/out && MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
sha256sum entry.png /tmp/out/entry.png
```
