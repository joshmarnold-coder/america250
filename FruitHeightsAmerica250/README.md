# Fruit Heights Utah America 250 Founding Documents Celebration

A mobile-first static website for Fruit Heights, Utah America 250 events. Visitors can scan a QR code and explore the Declaration of Independence, the Constitution, the Preamble, the Bill of Rights, later amendments, a family quiz, and reflection prompts.

## Files

- `index.html` - page content and source links
- `styles.css` - responsive, accessible styling
- `script.js` - mobile menu, Preamble explorer, Bill of Rights cards, and quiz
- `preview-server.js` - optional local Node preview server
- `GRAPHICS_PROMPTS.md` - image-generation prompts and placement instructions
- `assets/mountain-orchard.svg` - original local mountain and orchard artwork
- `assets/community-banner.svg` - original community celebration banner artwork
- `assets/celebration-banner.svg` - Fruit Heights America 250 graphic banner
- `assets/preamble-background.svg` - Preamble section background art
- `assets/bill-of-rights-background.svg` - Bill of Rights section background art
- `assets/flag-motifs.svg` - decorative American flag motif divider art
- `assets/generated/*-generated.jpg` - optimized generated banner, section background, and flag motif images used by the live page
- `assets/generated/quiz-background-generated.jpg` - optimized generated quiz section background
- `assets/generated/benefits/*.jpg` - optimized generated benefit card images
- `assets/generated/why-matter-background.jpg` - optimized generated background for the benefits section
- `assets/generated/amendments-background.jpg` - optimized generated background for the amendments section
- `assets/generated/amendments/amendment-13.jpg` through `amendment-26.jpg` - optimized generated amendment card images
- `assets/generated/charters/*-thumb.jpg` - optimized local National Archives document thumbnails for faster loading
- `assets/generated/founders-background.jpg` - optimized generated background for the Heroes section
- `assets/generated/preamble-document.jpg` - optimized generated Preamble illustration
- `assets/generated/rights/right-01.jpg` through `right-10.jpg` - optimized generated Bill of Rights card images
- `assets/generated/hero-festival.png` - ChatGPT-generated hero illustration
- `assets/generated/hero-festival.jpg` - optimized web copy used by the live page
- `assets/generated/heroes/` - ChatGPT-generated hero headshots, with optimized JPG copies used by the live page
- `qr-instructions.md` - quick QR code checklist

## Edit The Site

Open `index.html` in a text editor. Most volunteer-editable wording is plain HTML inside sections with clear headings.

Common edits:

- Update event wording in the hero or quiz sections.
- Add city-specific event details once dates and locations are official.
- Edit quiz questions in `script.js` inside the `questions` array.
- Edit Preamble explanations in `script.js` inside the `preamblePhrases` array.
- Edit colors in `styles.css` inside the `:root` block.

Use official sources for factual additions and add each source to the Sources & Credits list.

## Preview Locally

Because this is a plain static site, you can open `index.html` directly in a browser.

For a simple local web server, from this folder run:

```powershell
node preview-server.js
```

Then visit:

```text
http://localhost:8000
```

## Deploy To GitHub Pages

1. Create a GitHub repository.
2. Add and commit this folder's files.
3. Push the repository to GitHub.
4. In GitHub, open the repository.
5. Go to `Settings` -> `Pages`.
6. Under `Build and deployment`, choose `Deploy from a branch`.
7. Select the `main` branch and the root folder.
8. Save.
9. Wait for GitHub to publish the site.
10. Copy the final GitHub Pages URL.

If this folder is part of a larger repository, either move these files to the repository root before publishing or configure a separate repository just for this site.

## Generate And Use A QR Code

1. Publish the site with GitHub Pages.
2. Copy the final URL, such as `https://your-org.github.io/your-repo/`.
3. Use a reputable QR code generator, or use a local/offline QR tool if your organization prefers.
4. Paste the GitHub Pages URL into the QR tool.
5. Download the QR code as PNG or SVG.
6. Test the QR code with multiple phones before printing.
7. Put the QR code on booth signs, handouts, parade materials, and volunteer badges.

Do not generate the QR code until the final published URL is known.

## Accessibility Checklist

- Uses semantic landmarks: header, nav, main, sections, footer.
- Includes a skip link for keyboard users.
- Uses readable color contrast and visible focus outlines.
- Uses responsive layout for phone, tablet, and desktop screens.
- Keeps interactions button-based and keyboard-friendly.
- Includes alt text for the local SVG artwork.

## Source Notes

The page cites official and educational sources directly in the Sources & Credits section. The National Archives pages are the primary sources for the Charters of Freedom and founding document images. The National Archives high-resolution downloads page states that its founding document images are public domain and asks users to credit the National Archives as the source. The local Fruit Heights details are limited to information visible on the official Fruit Heights City website, America250 Utah, plus broad geographic context about Davis County and the Wasatch Front.
