# Nordic Security Systems AB

Samlingssajt för alla appar och plattformar utvecklade av Nordic Security Systems AB.

**Live:** https://nordic-security-systems.vercel.app
**Repo:** https://github.com/Mats6102hamberg/nordic-security-systems

## Stack

| Del | Teknologi |
|-----|-----------|
| Framework | Next.js 16 (App Router) |
| Språk | TypeScript (strict, `moduleResolution: bundler`) |
| Styling | Tailwind CSS 3 |
| Deploy | Vercel – `mats-hambergs-projects/nordic-security-systems` |

Ingen databas, ingen auth, ingen API – ren statisk presentation.

## Kom igång lokalt

```bash
cd ~/nordic-security-systems
npm install
npm run dev    # http://localhost:3000
```

## Innehåll

All appdata ligger i `app/page.tsx` i arrayen `apps`. Lägg till/ändra:

```ts
{
  name: "Min nya app",
  description: "Vad den gör.",
  href: "https://min-nya-app.se",   // valfritt
  category: "Verktyg & arbete",     // se befintliga kategorier
  tone: "amber",                    // emerald | sky | amber | rose | violet | teal
}
```

Externa `href` (med `https://`) öppnas i ny flik.

## Kategorier

- Vård & hälsa
- AI & plattform
- Verktyg & arbete
- Juridik & säkerhet
- Livsverktyg
- Fritid & spel

## Att göra

- Koppla egen domän i Vercel (Settings → Domains), t.ex. `nordicsecuritysystems.se`
- Fyll i URL för apparna utan länk: SafeKeeper, Valfärdsvakt, TrustCore, BorisLife, LeadEngine, Jobbspararen, Stipendieransökningar, Årsredovisning Motor, Textscanner, Mercury, Mercury AI Clinic, Sadi Parviz AI, TheBuild, Boris Type, boris-run, Min Livsbok, Profil, Boule poängräknare, Boule-anywhere
- Ev. logo + favicon
- Ev. kontakt-/om-sektion
