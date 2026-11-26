# The World Today — Thursday 26 November 2026

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/arnoldswingtaiger/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/arnoldswingtaiger/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

A one-page newspaper front page for Thursday 26 November 2026, built for
the [make.fun](https://make.fun/bounty/news-image-20261126) daily news-image
contest. An AI judge compares entries two at a time and picks the one that
best sums up the day — so the page leads with the day's biggest story and
packs the rest of the world onto the same sheet.

## What's on the page

- **Lead story:** the Houthis claim a strike on Ras Tanura, Saudi Arabia's
  biggest refinery — Brent crude jumps past $94; the coalition says four
  drones were shot down and missiles were fired at Riyadh.
- **North Korea:** Kim Jong Un calls for wider deployment of tactical
  nuclear weapons; Pyongyang tells Switzerland to shut its new
  diplomatic office.
- **Ukraine:** Kyiv says it hit the Savasleyka air base deep inside Russia,
  damaging five warplanes — three MiG-31 jets and two Su-34 bombers.
- **Markets:** the Nasdaq slides nearly 4% as the US plans new tariffs;
  Taiwan shares plunge and chip stocks lead the fall.
- **Also on the page:** a Gaza strike kills a senior Hamas official; 31
  killed in a Cairo tanker fire; Israeli judges urge dropping the gravest
  Netanyahu charges; the first Pakistani astronaut joins China's space
  mission; Bangladesh lifts garment pay 36%.

## How it works

`entry.png` is the finished 1024×1024 front page (613,956 bytes, palette
PNG). `main.ts` copies it to `/output/entry.png` with Node's standard
library alone — no network, no packages — then checks the copy's size,
SHA-256 and PNG signature, so two runs produce byte-identical output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
