export const metadata = {
  title: "Nordic Security Systems AB – Appar & projekt",
  description:
    "Samlingssida för appar och projekt utvecklade av Nordic Security Systems AB.",
};

type Tone = "emerald" | "sky" | "amber" | "rose" | "violet" | "teal";

type App = {
  name: string;
  description: string;
  href?: string;
  category:
    | "Juridik & säkerhet"
    | "Vård & hälsa"
    | "Verktyg & arbete"
    | "AI & plattform"
    | "Livsverktyg"
    | "Fritid & spel";
  tone: Tone;
};

const apps: App[] = [
  // Juridik & säkerhet
  { name: "Boris Legal", description: "Juridiskt stöd och analys.", href: "https://borislegal.se", category: "Juridik & säkerhet", tone: "violet" },
  { name: "SafeKeeper", description: "Säker förvaring av information.", category: "Juridik & säkerhet", tone: "violet" },
  { name: "Voltvakt", description: "Elsäkerhet och övervakning.", href: "https://voltvakt.se", category: "Juridik & säkerhet", tone: "amber" },
  { name: "Valfärdsvakt", description: "Bevakning av välfärdsfrågor.", category: "Juridik & säkerhet", tone: "emerald" },
  { name: "Crashcatcher", description: "Incident- och kraschhantering.", href: "https://crashcatcher.se", category: "Juridik & säkerhet", tone: "rose" },
  { name: "TrustCore", description: "Tillit och trygghet i digitala tjänster.", category: "Juridik & säkerhet", tone: "teal" },

  // Vård & hälsa
  { name: "Familjehemsportalen", description: "Tryggt stöd för familjehem och konsulenter.", href: "https://familjehemsportalen1.vercel.app", category: "Vård & hälsa", tone: "emerald" },
  { name: "Carestandard", description: "Kvalitetsstandard för vård (tidigare Vårdmatch).", href: "https://carestandard.se", category: "Vård & hälsa", tone: "sky" },
  { name: "Boris Babycare", description: "Stöd i tidig föräldraskap och barnomsorg.", href: "https://borisbabycare.se", category: "Vård & hälsa", tone: "rose" },
  { name: "Hälsakoll", description: "Översikt över din hälsa.", href: "https://halsakoll.se", category: "Vård & hälsa", tone: "emerald" },
  { name: "BorisLife", description: "Livsloggning och personlig uppföljning.", category: "Vård & hälsa", tone: "violet" },

  // Verktyg & arbete
  { name: "FakturaSnap", description: "Snabb fakturering för små företag.", href: "https://fakturasnap.se", category: "Verktyg & arbete", tone: "amber" },
  { name: "Allocta", description: "Resursallokering och planering.", href: "https://allocta.se", category: "Verktyg & arbete", tone: "sky" },
  { name: "Fraktpool", description: "Samordnad frakt för små och medelstora företag.", href: "https://fraktpool.se", category: "Verktyg & arbete", tone: "teal" },
  { name: "LeadEngine", description: "Leadhantering och uppföljning.", category: "Verktyg & arbete", tone: "sky" },
  { name: "Boriscenter (Supportcenter)", description: "Operativt nav – cockpit, support och AI-chat.", href: "https://boriscenter.vercel.app", category: "Verktyg & arbete", tone: "teal" },
  { name: "Jobbspararen", description: "Samla och strukturera jobbsökande.", category: "Verktyg & arbete", tone: "amber" },
  { name: "Stipendieransökningar", description: "Hantering av stipendieprocesser.", category: "Verktyg & arbete", tone: "violet" },
  { name: "Årsredovisning Motor", description: "Automatisering av årsredovisningar.", category: "Verktyg & arbete", tone: "emerald" },
  { name: "Textscanner", description: "Skanning och tolkning av text.", category: "Verktyg & arbete", tone: "sky" },

  // AI & plattform
  { name: "Mercury", description: "AI-plattform för specialistarbete.", category: "AI & plattform", tone: "violet" },
  { name: "Mercury AI Clinic", description: "AI-stöd för kliniska bedömningar.", category: "AI & plattform", tone: "sky" },
  { name: "Sadi Parviz egen AI", description: "Personlig AI-assistent.", category: "AI & plattform", tone: "rose" },
  { name: "TheBuild", description: "Plattform för byggande av digitala tjänster.", category: "AI & plattform", tone: "teal" },
  { name: "Boris Type", description: "Intelligent skrivstöd.", category: "AI & plattform", tone: "amber" },
  { name: "boris-run", description: "Körverktyg och automation för Boris-projekten.", category: "AI & plattform", tone: "emerald" },

  // Livsverktyg
  { name: "Min Livsbok", description: "Samla minnen och livshändelser.", category: "Livsverktyg", tone: "rose" },
  { name: "Profil", description: "Din digitala profil på ett ställe.", category: "Livsverktyg", tone: "sky" },

  // Fritid & spel
  { name: "Boule poängräknare", description: "Regler och poäng i fickan för boule.", category: "Fritid & spel", tone: "teal" },
  { name: "Boule-anywhere", description: "Spela boule var som helst.", category: "Fritid & spel", tone: "emerald" },
];

const toneClasses: Record<Tone, string> = {
  emerald: "border-emerald-500/40 from-emerald-500/20 hover:border-emerald-400",
  sky: "border-sky-500/40 from-sky-500/20 hover:border-sky-400",
  amber: "border-amber-500/40 from-amber-500/20 hover:border-amber-400",
  rose: "border-rose-500/40 from-rose-500/20 hover:border-rose-400",
  violet: "border-violet-500/40 from-violet-500/20 hover:border-violet-400",
  teal: "border-teal-500/40 from-teal-500/20 hover:border-teal-400",
};

const categories: App["category"][] = [
  "Vård & hälsa",
  "AI & plattform",
  "Verktyg & arbete",
  "Juridik & säkerhet",
  "Livsverktyg",
  "Fritid & spel",
];

export default function NordicPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <header className="mb-10 space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Nordic Security Systems AB
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Våra appar och projekt
        </h1>
        <p className="max-w-2xl text-stone-600">
          En översikt över alla appar och plattformar som utvecklas inom Nordic
          Security Systems AB. Varje verktyg löser ett konkret behov – från vård
          och familj till juridik, AI och vardagsstöd.
        </p>
      </header>

      {categories.map((cat) => {
        const list = apps.filter((a) => a.category === cat);
        if (list.length === 0) return null;
        return (
          <section key={cat} className="mb-12">
            <h2 className="mb-4 text-lg font-semibold text-stone-800">{cat}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((app) => {
                const inner = (
                  <div
                    className={
                      "group flex h-full flex-col justify-between rounded-2xl border bg-gradient-to-b via-white to-stone-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md " +
                      toneClasses[app.tone]
                    }
                  >
                    <div>
                      <h3 className="text-base font-semibold text-stone-900">
                        {app.name}
                      </h3>
                      <p className="mt-2 text-sm text-stone-600">
                        {app.description}
                      </p>
                    </div>
                    {app.href && (
                      <span className="mt-4 text-xs font-medium text-emerald-700 group-hover:text-emerald-800">
                        Öppna →
                      </span>
                    )}
                  </div>
                );
                if (!app.href) return <div key={app.name}>{inner}</div>;
                return (
                  <a
                    key={app.name}
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {inner}
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}

      <footer className="mt-16 border-t border-stone-200 pt-6 text-sm text-stone-500">
        © {new Date().getFullYear()} Nordic Security Systems AB
      </footer>
    </main>
  );
}
