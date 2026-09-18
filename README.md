# National Motors — nationalmotorsva.com

Custom static site for National Motors LLC (Falmouth, VA). Pure HTML/CSS/JS — no build step, deploys as-is on Vercel.

## Structure

```
/
├── index.html            Home
├── inventory.html        Inventory (dropdown filters, endless scroll)
├── vehicle.html          Vehicle detail (reads ?id=STOCK)
├── sold.html             Sold archive
├── financing.html        Finance (Apply / Pre-Qualify / Estimate tabs)
├── calculator.html       Payment calculator
├── sell.html             Sell / Trade (value your trade)
├── delivery.html         Nationwide delivery
├── about.html            About
├── contact.html          Contact (+ Where To Next)
├── source.html           Vehicle Finder (source a car)
└── assets/
    ├── css/site.css      All styles (one file)
    ├── js/
    │   ├── data.js       ← INVENTORY DATA. Wire the live feed here.
    │   ├── helpers.js    card render / money / photo helpers
    │   ├── base.js       header, scroll, hours, reveal, forms
    │   ├── inventory.js  filters + endless scroll
    │   ├── vehicle.js    VDP (gallery, specs, calc, CARFAX, prefill links)
    │   ├── finance.js    finance tabs + form prefill (?vehicle=)
    │   ├── calc.js       payment estimate module
    │   ├── contact.js    contact form prefill (?vehicle=)
    │   ├── home.js       featured vehicles
    │   └── sold.js       sold grid
    └── img/              wordmark.png, monogram.png (swap for real logo files anytime)
```

Header, footer, and page markup live in each `.html` file (good for SEO). Styles and behavior are shared in `assets/`.

## Local preview

Any static server, e.g.:

```
npx serve .
```

Then open the printed localhost URL. (Opening files directly via file:// mostly works too.)

## Deploy (Vercel)

This is a **pure static site — no build step.**

- Framework Preset: **Other**
- Build Command: **(leave blank)**
- Output Directory: **(leave blank / default — files are in the repo root)**
- Deploy. Every push to GitHub auto-deploys.

## Daily loop

```
Claude Code edits files → commit → push to GitHub → Vercel auto-deploys
```

## Wiring the real integrations

**1. Inventory feed (DealerCenter).** Everything reads from `window.INVENTORY` / `window.SOLD` in `assets/js/data.js`. To go live, replace the static arrays with your feed data mapped to this shape:

```
{ id, year, make, model, price, miles, trans, drive, fuel, ev(bool),
  engine, range, type, color, interior, vin, highlight, features[], photos[] }
```

Options: (a) generate `data.js` from the DealerCenter outbound XML/CSV on a schedule, or (b) add a Vercel serverless function `api/inventory.js` that fetches + normalizes the feed, and have `data.js` fetch from it. Filters, cards, VDP, and featured all update automatically.

**2. Photos.** Add real image URLs to each vehicle's `photos:[...]`. Cards, the VDP gallery, and thumbnails switch from the monogram placeholder to real photos automatically.

**3. CARFAX.** `vehicle.js` already builds `https://www.carfax.com/vehicle/<VIN>` from each vehicle's `vin`. Real VINs in `data.js` = working CARFAX links. Replace the Window Sticker `#` link with your sticker URL when available.

**4. Lead forms.** All forms are demo (`data-demo` → success message). To send leads to the DealerCenter CRM, replace the demo submit handler in `base.js` (and the per-vehicle inquiry handler in `vehicle.js`) with a `fetch()` POST to your lead endpoint (e.g. an ADF/lead intake) or a Vercel function `api/lead.js`. The finance/offer/test-drive buttons already pass the vehicle into their forms via `?vehicle=`.

**5. Business facts** (phone 540-779-1258, 196 Cambridge St, hours, $999 doc fee, IG @nationalmotorsva) are set across the pages and `base.js` (live open/closed clock).
