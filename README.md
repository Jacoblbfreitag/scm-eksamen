# SCM Eksamen – 62133 Supply Chain Management (DTU)

Læringsapp og talenoter til den mundtlige eksamen i 62133 Supply Chain Management, hvor man trækker ét af 36 spørgsmål og har 15 minutter.

**Live:** https://jacoblbfreitag.github.io/scm-eksamen/

## Indhold
- **Én side pr. spørgsmål** med fanerne *Forstå* (intuition og interaktive beregnere), *Talenoter*, *Quiz* og *Øv talen* (15-minutters timer med faser).
- **Beregnere** til bl.a.:
  - DuPont/ROA og gravity-modellen (5.5/5.6, iteration)
  - CPL, break-even, factor rating og center of gravity
  - joint ordering og aggregering med kapacitet
  - all-unit/marginal-rabatter og rabatdesign (11-9/11-10)
  - safety stock, fill rate og newsvendor
  - milk runs, stepping-stone, TL/LTL og en bullwhip-simulator
- **Talenoter** i [`notes/`](notes/) (én fil pr. spørgsmål) og samlet i [`TALENOTER.md`](TALENOTER.md).
- Formelsamling og printvenlig side med alle noter.

## Kilder og forbehold
Bygget ud fra Chopra & Meindl, *Supply Chain Management: Strategy, Planning, and Operation* (7. udg.) og Heizer & Render, "Location Decisions". Bogens eksempler (11-3/11-4, 11-7, 11-9, 11-10, 12-3, 13-1, Quain, Akron/Bowling Green/Chicago, Five Flags, Arizona Plumbing) er genberegnet og testet i `tests/`. Tjek dog tallene mod din egen udgave. Faulkswagon-casen og artiklerne (Larsen & Jacobsen 2016, Thierry et al. 1995, Green SCM-kapitlet) har ikke været tilgængelige, så de sider er metoder og skabeloner, hvor casens tal skal indsættes.

## Udvikling
```bash
npm install
npm run dev      # lokal udvikling
npm test         # beregninger + render-test af alle sider
npm run notes    # genskab TALENOTER.md fra notes/
npm run build
```
Deploy sker automatisk til GitHub Pages ved push til `main`.
