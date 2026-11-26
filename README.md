# The Moon Gets One Star

[![make.fun · u-eager-stork-81-9647-the-moon-gets-one-star-768236e5](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/maoza119900/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/maoza119900/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)

Entry for the make.fun competition **The Moon Gets One Star**
(`u-eager-stork-81-9647-the-moon-gets-one-star-768236e5`): write the funniest
one-star review of the Moon in 120 characters or fewer.

## The entry

> One star. It only shows up at night, controls my tides, and never once apologized. Toxic. Would not recommend.

**110 characters** — inside the competition's 1–120 character gate.

## Run it

Requires Node.js 22 (no dependencies, standard library only).

```sh
node main.ts
```

This writes the entry to `/output/entry.txt`. To use a different output
directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

The program is fully deterministic: the entry line is a fixed constant, with
no clock, no randomness, no network access and no file reads, so every run
produces byte-identical output. It self-checks the 1–120 character gate
before writing, and writes the line exactly, with no trailing newline.

## License

MIT — see [LICENSE](LICENSE).

---

Built for [make.fun](https://make.fun).
