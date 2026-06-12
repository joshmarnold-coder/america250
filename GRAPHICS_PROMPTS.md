# Graphics Prompts And Placement

Use these prompts with ChatGPT image generation. Keep the style consistent with `assets/generated/hero-festival.png`: polished modern civic festival illustration, warm patriotic palette, parchment texture, navy/red/gold/cream/green accents, Wasatch-style mountain silhouettes, orchard blossoms, stars, ribbons, and family-friendly community energy.

Avoid generated text inside images unless explicitly required. For these assets, use `no text`.

## 1. Hero Illustration

Recommended filename: `assets/generated/hero-festival.png`

Recommended dimensions: `2400x1350` or 16:9 landscape.

Placement: Hero background image in `index.html`.

Prompt:

```text
A polished patriotic civic festival illustration for Fruit Heights, Utah America 250: Wasatch mountain sunrise, subtle orchard blossoms, waving American flag ribbons, parchment document texture, stars, families at a community celebration, small-town Utah parade energy, subtle historic road/stagecoach detail, no text. Modern editorial civic illustration, warm patriotic palette of navy, red, cream, parchment tan, gold, orchard green, and sunrise coral. Wide website hero composition, strong visual depth, family friendly, hopeful, no logos, no watermark, no misspelled marks.
```

## 2. Preamble Illustration

Recommended filename: `assets/generated/preamble-community.png`

Recommended dimensions: `1600x1100`.

Placement: Replace or layer behind `.preamble-art` in the Explore the Preamble section.

Prompt:

```text
A colorful educational illustration showing “We the People” as diverse families, youth, veterans, teachers, and neighbors gathered near a parchment Constitution, with Wasatch-style mountain silhouettes and orchard blossoms in the background, no text. Modern civic education illustration, warm patriotic palette, parchment texture, navy and gold accents, hopeful and family friendly, no logos, no watermark.
```

## 3. Bill Of Rights Icon Set

Recommended filename: `assets/generated/bill-of-rights-icons.png`

Recommended dimensions: `2000x2000`.

Placement: Use as source art for cropping individual icons, or export ten separate transparent PNGs named `right-01.png` through `right-10.png`.

Prompt:

```text
A cohesive set of 10 simple matching civic education icons for the Bill of Rights, arranged in a clean grid on a plain light cream background, no text. Icons: speech/religion/press/assembly/petition; neutral shield for the right to keep and bear arms; quartering/home; search/privacy; due process; fair trial; civil jury; limits on excessive punishment; rights retained by the people; powers reserved to states and people. Style: flat vector-like illustration, navy, red, gold, cream, and orchard green, rounded forms, accessible and family friendly. No aggressive weapon imagery, no logos, no watermark.
```

## 4. America Keeps Improving Illustration

Recommended filename: `assets/generated/amendments-timeline.png`

Recommended dimensions: `1800x1000`.

Placement: Replace the CSS/SVG background inside `.improving-art`.

Prompt:

```text
A bright hopeful illustration of people adding new stars to a large parchment timeline, symbolizing constitutional amendments and expanding liberty, no text. Include subtle Wasatch mountain silhouettes, orchard blossom accents, patriotic ribbons, and warm sunrise light. Modern civic festival illustration, navy, red, gold, cream, parchment tan, and green accents. Family friendly, optimistic, no logos, no watermark.
```

## 5. Heroes Medallion Style

Recommended filenames: `assets/generated/heroes-medallions.png` or individual files such as `hero-jefferson.png`, `hero-madison.png`, etc.

Recommended dimensions: `2200x2200` for a sheet, or `512x512` per medallion.

Placement: Replace the CSS initial medallions in the Heroes section if final portrait-style art is desired.

Prompt:

```text
A cohesive set of illustrated portrait-style civic medallion cards for historical figures connected to founding documents and the expansion of their promises. Use tasteful non-photorealistic civic illustration style inspired by public-domain historical portrait compositions, parchment, navy, gold, cream, and red accents. Include medallion frames, stars, subtle document and liberty motifs, no text, no logos, no watermark. Figures should be respectful and educational, not photorealistic.
```

## 6. Decorative Section Dividers

Recommended filename: `assets/generated/section-dividers.png` or SVG equivalents in `assets/`.

Recommended dimensions: `2400x300`.

Placement: Use between major sections as decorative dividers or CSS backgrounds.

Prompt:

```text
A set of decorative horizontal section dividers for a modern civic festival website: Wasatch mountain silhouettes, stars, patriotic ribbons, fruit blossoms, parchment-edge texture, and subtle historic road line motif, no text. Warm patriotic palette of navy, red, gold, cream, parchment tan, and orchard green. Clean web-ready illustration, seamless horizontal layout, no logos, no watermark.
```

## Current Project Assets

- `assets/generated/hero-festival.png` has already been generated with ChatGPT image generation. The live page uses `assets/generated/hero-festival.jpg`, an optimized web copy.
- `assets/generated/heroes/` now contains ChatGPT-generated lifelike historical portrait-style headshots for the Heroes section. The live page uses optimized JPG copies.
- `assets/generated/celebration-banner-generated.jpg`, `assets/generated/preamble-background-generated.jpg`, `assets/generated/bill-of-rights-background-generated.jpg`, and `assets/generated/flag-motifs-generated.jpg` are generated image assets currently used by the live page.
- `assets/generated/quiz-background-generated.jpg` and `assets/generated/rights/right-01.jpg` through `right-10.jpg` are generated image assets currently used by the live page.
- `assets/generated/benefits/*.jpg` are generated image assets currently used by the Why These Documents Still Matter cards.
- `assets/generated/why-matter-background.jpg`, `assets/generated/amendments-background.jpg`, `assets/generated/founders-background.jpg`, and `assets/generated/preamble-document.jpg` are generated image assets currently used by the live page.
- `assets/generated/amendments/amendment-13.jpg`, `amendment-14.jpg`, `amendment-15.jpg`, `amendment-19.jpg`, `amendment-24.jpg`, and `amendment-26.jpg` are generated image assets currently used by the live page.
- `assets/generated/charters/*-thumb.jpg` are optimized local thumbnails derived from public-domain National Archives document images.
- `assets/celebration-banner.svg`, `assets/preamble-background.svg`, `assets/bill-of-rights-background.svg`, and `assets/flag-motifs.svg` are local SVG fallback/support art.
- `assets/mountain-orchard.svg` and `assets/community-banner.svg` are local SVG placeholders/support art.
- National Archives document images are used directly from official National Archives URLs and credited in Sources & Credits.
