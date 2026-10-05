# BMG -Human Atlas

BMG -Human Atlas is an interactive 3D anatomy explorer built with React, Three.js, and shadcn/ui. Switch between adult male and female reference models in the same viewer, inspect 2,234 or 3,004 individually selectable structures, explore their anatomical systems, and search named concepts.

The upstream project provides the original demo; this BMG edition runs locally.

## Explore

- Orbit, zoom, and select structures directly on the body.
- Switch between male and female references above the systems list.
- Toggle individual systems or use skeleton and organ presets.
- Move from assembled anatomy to a spaced inventory of every visible piece.
- Search anatomical names and source identifiers.
- Isolate a selected structure and read its details.
- Use compact controls and detail panels on mobile.

## Run locally

Requires Node.js 22.13 or newer. No API keys or accounts are needed.

```sh
npm ci
npm run dev
```

Open http://localhost:3016. To build the static site, run `npm run build`; the output is in `dist/`.

## Validate

```sh
npm run check
node scripts/validate-atlas.mjs
node scripts/validate-interactions.mjs
npm run build
```

Validation covers mesh buffers, names and concept membership, nonoverlapping exploded layouts at desktop and mobile aspect ratios, search and inspection contracts, and tap-versus-drag handling. Browser interaction checks have exercised selection, system controls, search, isolation, rotation, and 390×844, 320×568, and 844×390 layouts. Phone controls stay clear of the exploded inventory, and isolated structures fit the space above or beside the detail panel. Physical-device performance and real multitouch hardware have not been tested.

## Anatomy data

The male model uses **BodyParts3D 4.0** (2,234 source meshes, 3,432 named concepts). The female model uses **Female Atlas v2.0** (3,004 structures, 2,557 named concepts), integrating the Human Reference Atlas / HuBMAP and BodyParts3D data. Both datasets are licensed **CC BY 4.0**. They have different coverage and do not represent every human structure or variation. Individual source meshes are distinct from named concepts, which may group multiple meshes.

Geometry is simplified for browser performance while retaining every source mesh. The female model's compressed geometry totals approximately 55 MB and is loaded when selected. Full credits, source links, and adaptation details are in [anatomy attribution](public/ATTRIBUTION.md).

This is an educational explorer, not a diagnostic or surgical tool.

## How it works

Geometry is merged into batches. Per-structure GPU textures control translation, visibility, and selection, while component geometry supports accurate picking. Exploded layouts pack only the visible pieces. Rendering updates when the scene changes; orbit controls remain responsive without thousands of separate draw calls.

The optional WebMCP tools expose anatomy search and inspection in compatible browsers. The visible interface works without them.

## Rebuilding geometry

The repository includes browser-ready geometry. Rebuilding it is optional: obtain the official BodyParts3D OBJ archive and English metadata tables, prepare the joined concepts and display-system mappings, run `scripts/convert-anatomy.py`, then `node scripts/optimize-anatomy.mjs` and `node scripts/compress-models.mjs`. Simplification uses a 0.2% relative error limit per structure.

## Deploy

Import this repository into Vercel as a Vite project. The included `vercel.json` configures `npm ci`, `npm run build`, and the `dist` output directory. It can also be served by a static host.

## Edition and license

BMG edition and interface customization by BMG. Required software license notices are preserved in [LICENSE](LICENSE). Anatomy dataset attribution is provided in [ATTRIBUTION.md](public/ATTRIBUTION.md).

## License

Original application code is released under the [MIT License](LICENSE). **The anatomy data has its own CC BY 4.0 license**; preserve the attribution when redistributing it. Third-party dependencies retain their respective licenses.

Issues and pull requests are welcome. Please include reproduction steps and browser/device details for interaction problems.
