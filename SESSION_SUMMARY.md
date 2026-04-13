# SESSION SUMMARY – Nordic Security Systems

## Session 2026-04-13 (skapad)

### Vad som gjordes

- Skapat fristående Next.js 16 + Tailwind 3-projekt
- Lyft `/nordic`-sidan från Familjehemsportalen och flyttat hit som startsida
- Kategoriserad app-grid (6 kategorier, 28 appar) med tonade pastellgradient-kort
  i samma stil som Familjehemsportalen
- Externa länkar på 9 appar med egen domän
- GitHub-repo skapat: `Mats6102hamberg/nordic-security-systems`
- Vercel-projekt länkat och deployat till production

### Tekniska val

- **Standalone:** ingen koppling till portalen – kan migreras till valfri domän
- **`moduleResolution: bundler`** i tsconfig (Next 16 + bundler-resolution)
- **Inga deps utöver Next/React/Tailwind** – minimal angreppsyta
- **Statisk SSG** – allt prerenderat, snabbt och billigt

### Live

- Vercel: https://nordic-security-systems.vercel.app
- Aliaser: `nordic-security-systems-mats-hambergs-projects.vercel.app` m.fl.

---

## Nästa steg

1. Koppla egen domän (Vercel → Settings → Domains)
2. Fyll i saknade URL:er (se README)
3. Ev. logo + favicon (just nu Next.js default)
4. Eventuell kontaktsektion / om-företaget
