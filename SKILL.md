---
name: wedding-invitation
description: Generate elegant single-page invitation landing pages for weddings and other celebrations (birthdays, anniversaries, engagements, showers, quinceañeras, reunions). Use this skill whenever the user wants to create a digital invitation, an "invite" web page, a save-the-date, or an event landing page, or when they provide event details like a date, time, venue, dress code, or a personal message and want them turned into a shareable page — even if they don't use the word "invitation." Defaults to an editorial black-and-white magazine aesthetic and adapts tone and palette to any event.
---

# Wedding & Event Invitation Generator

Generate a polished, mobile-first, single-page invitation that the host can preview instantly and deploy anywhere. The default look is an **elegant black-and-white editorial magazine** style: high-contrast serif display type, small-caps labels, warm ivory paper against deep charcoal, black-and-white photography, hairline rules, and generous whitespace. The skill flexes to other aesthetics and to any celebration by adjusting tone, palette, and copy.

## Workflow

1. **Collect the event details** (see the data model below). If some are missing, ask once for the essentials (celebrant/couple, date, time, venue) and make reasonable choices for the rest — don't block on optional fields.
2. **Pick a style variant** (see Style Variants). Default to **Editorial Black & White** unless the user or the theme points elsewhere.
3. **Generate the page** as a self-contained HTML file using Alpine.js and Tailwind (see Tech Stack).
4. **Always include a live countdown timer** to the event start — this is a core feature, not optional.
5. **Save the file** to the outputs directory and present it so the user can open and download it.

## Information to collect (data model)

Gather these fields. Only the first four are required; infer or omit the rest gracefully.

- **celebrant** — couple's names (wedding) or the person/group being celebrated. *Required.*
- **eventTitle** — a short headline ("We're getting married", "Turning 40!", "Save the date").
- **date** — full date including weekday. *Required.*
- **time** — start time. *Required.*
- **venue** — name of the location. *Required.*
- **address** — street address; link it to a maps search.
- **dressCode** — e.g. "Casual — black and white", "Formal", "Beach chic".
- **message** — a personal note from the host, in their own voice (keep their tone — playful stays playful, formal stays formal).
- **rsvp** — optional: a link, phone number, or note for confirming attendance.
- **schedule** — optional: an order-of-events / program (ceremony, dinner, party).
- **gallery** — optional: photos of the couple/celebrant to build a portfolio-style mosaic.
- **mode** — `invitation` (default) or `save-the-date` (a lighter, teaser version — date + place + "details to follow").
- **style** — one of the Style Variants below; defaults to Editorial Black & White.

## Style Variants

Adapt the aesthetic to the event. The first is the flagship and the default.

- **Editorial Black & White** *(default)* — magazine-inspired monochrome. High-contrast Didone serif, wide-tracked small-caps labels, ivory-and-charcoal sections, black-and-white photography, hairline dividers, outlined rectangular buttons. See the full spec below.
- **Classic Elegant** — timeless formal wedding: warm neutrals, engraved-style serif, centered symmetry.
- **Modern Minimalist** — clean and contemporary: lots of white space, a single sans typeface, one restrained accent.
- **Floral & Botanical** — garden-inspired: soft palette, script accents, leaf/flower motifs as SVG dividers.
- **Rustic & Bohemian** — earthy and organic: kraft/sand tones, textured feel, relaxed type.
- **Destination** — beach/vineyard/travel themes: airy palette drawn from the location.
- **Cultural** — traditional palettes and motifs (Indian, Chinese, Jewish, etc.) when the host specifies.

Whatever the variant, honor the design principles (mobile-first, typography-led, one cohesive palette, sparing motion, generous whitespace).

## Editorial Black & White — full visual spec

This is the signature look. Build it faithfully when it's selected (and it is the default).

**Palette (monochrome + warm paper):**
- `paper` — warm ivory background, e.g. `#f0ece4`.
- `ink` — near-black for text and dark sections, e.g. `#1a1a1a`.
- `charcoal` — the dark section background, e.g. `#2b2b2b`.
- `muted` — soft gray for secondary text on dark, e.g. `#a8a29a`.
- `line` — hairline rules, low-contrast (`ink` at ~15% opacity, or a warm gray).
- No color accents. The drama comes from contrast, type, and photography — not hue.

**Typography:**
- **Display:** a high-contrast Didone/transitional serif (Playfair Display, Cormorant, or Bodoni Moda) for names, section titles, and prices. Large, confident, with real weight.
- **Labels:** the same serif or a refined sans in **UPPERCASE with wide letter-spacing** (`tracking-[0.2em]+`) for eyebrows, service names, and buttons — the small-caps magazine voice.
- **Body:** a clean, quiet sans (Inter, Helvetica-like) at a small size with comfortable line-height.
- Load fonts from Google Fonts.

**Layout system (alternating sections, editorial rhythm):**
- Alternate **ivory** and **charcoal** full-width sections down the page so it reads like magazine spreads.
- **Hero:** full-bleed black-and-white portrait/photo; the celebrant's name set large over the image at the bottom in white serif, with a small-caps subtitle beneath. Optionally a decorative oversized initial.
- **Stats / eyebrow row:** a couple of short facts separated by a thin vertical rule (e.g. "5 years · 500+ moments"). Optional; nice for personality.
- **About / message:** ivory section, large serif heading on the left or top, a small B&W photo, body copy in the quiet sans.
- **Numbered list** (e.g. "Why this day matters" or event highlights): hanging numbers in parentheses `(01) (02) (03)` with wide indents and short sans paragraphs.
- **Details cards** (venue, schedule, or — for weddings — "the day"): on a charcoal section, each row is a small B&W thumbnail + a titled text block + a hairline divider, mirroring an editorial services list.
- **Gallery / "our work":** centered serif heading over a mosaic grid of B&W photos.
- **Countdown:** prominent, tabular numerals, small-caps unit labels.
- **RSVP / contacts:** charcoal closing section with a serif heading and outlined rectangular buttons (Telegram / WhatsApp / a form link).

**Components:**
- **Buttons:** rectangular, thin 1px border, uppercase wide-tracked label, generous padding, transparent fill; invert on hover. No rounded pills, no gradients.
- **Dividers:** hairline rules, not heavy borders.
- **Photos:** always rendered in grayscale (`filter grayscale`) so any image the host drops in matches the palette.

## Page structure

Build the sections in this order. Skip a section cleanly if its data is absent.

1. **Hero** — celebrant name(s) + event title over a B&W image, with a subtle entrance animation.
2. **Date & time** — large and legible ("Saturday, September 26 · 3:00 PM").
3. **Countdown timer** — days / hours / minutes / seconds. Always present.
4. **Location** — venue, address, and a "View on map" link that opens a maps search.
5. **Dress code** — short, set in small-caps.
6. **Personal message** — the host's note, preserved in their voice.
7. **Schedule** — optional order-of-events, as an editorial list.
8. **Gallery** — optional B&W mosaic.
9. **RSVP / contacts** — call-to-action buttons, only if provided.

## Design principles

- **Mobile-first.** Most guests open invitations on their phones. Design for a narrow viewport, then let it breathe on desktop.
- **Typography carries the elegance.** Pair a display serif for headings with a clean sans for body; use wide-tracked small-caps for labels.
- **One cohesive palette.** Derive it from the variant. Editorial B&W stays strictly monochrome over warm paper.
- **Motion, sparingly.** Gentle fade/slide-in on load and a smoothly ticking countdown. Nothing that distracts.
- **Whitespace is a feature.** Let each section land on its own, magazine-style.

## Countdown timer

Implement with Alpine so it's self-contained. Compute the target from the event date/time, update every second, and show days, hours, minutes, and seconds. When the moment arrives, swap the timer for a celebratory line (e.g. "The day is here! 🎉"). Handle the case where the date has already passed.

```html
<div x-data="countdown('2026-09-26T15:00:00')" x-init="start()"
     class="flex gap-6 justify-center text-center">
  <template x-for="unit in units" :key="unit.label">
    <div>
      <span class="text-5xl font-serif tabular-nums" x-text="String(unit.value).padStart(2,'0')"></span>
      <span class="block mt-1 text-xs uppercase tracking-[0.25em] text-muted" x-text="unit.label"></span>
    </div>
  </template>
</div>

<script>
function countdown(target) {
  return {
    units: [{label:'Days',value:0},{label:'Hours',value:0},{label:'Min',value:0},{label:'Sec',value:0}],
    done: false,
    start() {
      const tick = () => {
        const diff = new Date(target) - new Date();
        if (diff <= 0) { this.done = true; return; }
        const d = Math.floor(diff / 864e5);
        const h = Math.floor(diff % 864e5 / 36e5);
        const m = Math.floor(diff % 36e5 / 6e4);
        const s = Math.floor(diff % 6e4 / 1e3);
        this.units = [{label:'Days',value:d},{label:'Hours',value:h},{label:'Min',value:m},{label:'Sec',value:s}];
      };
      tick();
      setInterval(tick, 1000);
    }
  }
}
</script>
```

## Tech stack

Default output is a **single self-contained `index.html`** so the host can open it locally and drop it on any static host (Netlify, Vercel, GitHub Pages). Use:

- **Tailwind** for styling. For a one-file deliverable, load it via the Play CDN and declare theme tokens inline. If the user is working inside a Vite project (with `@tailwindcss/vite`), split the markup, put tokens in `@theme` in the entry CSS, and skip the CDN.
- **Alpine.js** for interactivity (countdown, RSVP toggles, small reveals, gallery), loaded from CDN with `defer`.

Define the Editorial palette as tokens so it's trivially swappable:

```html
<script>
tailwind.config = { theme: { extend: {
  colors: { paper:'#f0ece4', ink:'#1a1a1a', charcoal:'#2b2b2b', muted:'#a8a29a' },
  fontFamily: { serif:['"Playfair Display"','serif'], sans:['Inter','sans-serif'] }
} } }
</script>
```

## Voice and tone

Match the host's register. A formal wedding gets restrained, warm copy. A playful birthday keeps the host's jokes intact — don't sand down their personality into generic invitation-speak. When the host supplies their own message, reproduce its spirit exactly.

---

## Worked example

**Input (host's details):**
- Celebrant: Adrián — turning 40
- Title: "I'm turning 40!"
- Date: Saturday, September 26
- Time: 3:00 PM
- Venue: Becerra's Bar
- Address: Escobedo 179
- Dress code: Casual — black and white
- Message (host's own voice, playful): "So it turns out I'm about to turn 40! 😱😂 I don't know who authorized this, but since we're here… let's celebrate it right! 🥂🎉 So start getting your liver, your shoes, and your attitude ready… because this is just getting started! 🥳🥂❤️"
- Feature: countdown timer

**Style:** Editorial Black & White (a perfect match for the "black and white" dress code).

**Expected output:** a single `index.html` with:
- Strict monochrome palette (ivory paper, charcoal sections, near-black ink), no color accents.
- Hero: a full-bleed grayscale photo with "Adrián" set large in a Didone serif over the image, "I'm turning 40!" as a wide-tracked small-caps subtitle, gentle fade-in.
- Alternating ivory/charcoal sections with hairline dividers, magazine rhythm.
- "Saturday, September 26 · 3:00 PM" prominently displayed.
- A live countdown to `2026-09-26T15:00:00` in serif numerals with small-caps labels.
- Becerra's Bar · Escobedo 179 in an editorial details block, with a "View on map" link.
- Dress code set as "CASUAL · BLACK & WHITE".
- The host's playful message reproduced verbatim, emojis and all.
- Outlined rectangular RSVP/contact buttons in the closing charcoal section.
- Clean, mobile-first layout, deployable as-is.
