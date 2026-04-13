# HANDOVER – Nordic Security Systems

Senast uppdaterad: 2026-04-13

## Projektöversikt

Statisk presentationssajt för Nordic Security Systems AB:s appar och plattformar.

**GitHub:** https://github.com/Mats6102hamberg/nordic-security-systems
**Vercel:** https://nordic-security-systems.vercel.app
**Lokal sökväg:** `/Users/matshamberg/nordic-security-systems/`

## Inloggning

Ingen – publik sajt.

## Infrastruktur

| Tjänst | Detalj |
|--------|--------|
| Deploy | Vercel – `mats-hambergs-projects/nordic-security-systems` |
| Databas | – ingen – |
| AI | – ingen – |
| Domän | `nordic-security-systems.vercel.app` (egen domän kan kopplas i Vercel-settings) |

## Miljövariabler

Inga. Sajten är helt statisk.

## Starta lokalt

```bash
cd /Users/matshamberg/nordic-security-systems
npm install
npm run dev    # http://localhost:3000
```

## Filer

| Fil | Syfte |
|-----|-------|
| `app/page.tsx` | Hela sajten – app-array, kategorier, rendering |
| `app/layout.tsx` | Root-layout, body-gradient |
| `app/globals.css` | Tailwind-direktiv |
| `tailwind.config.js` | Tailwind-konfig |
| `tsconfig.json` | TypeScript (`moduleResolution: bundler`) |

## Lägga till app

Ändra arrayen `apps` i `app/page.tsx`:

```ts
{ name: "...", description: "...", href: "https://...", category: "...", tone: "..." }
```

`tone` styr kortets färgton: `emerald | sky | amber | rose | violet | teal`.
`href` är valfritt; externa länkar (`https://...`) öppnas i ny flik.

## Deploy

Auto-deploy från `main` via Vercel/GitHub-integration. Manuell:

```bash
vc deploy --prod --yes
```

## Relaterade projekt

- Familjehemsportalen: https://familjehemsportalen1.vercel.app (`~/familjehemsportalen`)
- Boriscenter (operativt nav): https://boriscenter.vercel.app (`~/boriscenter`)
