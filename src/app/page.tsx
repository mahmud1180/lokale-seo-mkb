"use client";

import { useState } from "react";

const packages = [
  {
    name: "Starter",
    price: "349",
    description: "Voor startende ondernemers die online willen groeien",
    features: [
      "4 SEO-geoptimaliseerde blogartikelen/maand",
      "Zoekwoordenonderzoek (maandelijks)",
      "Google Business Profile optimalisatie",
      "Maandelijks rankingrapport",
      "Basis technische SEO-check",
    ],
    cta: "Start nu",
    popular: false,
  },
  {
    name: "Groei",
    price: "499",
    description: "Voor bedrijven die serieus willen groeien in Google",
    features: [
      "8 SEO-geoptimaliseerde blogartikelen/maand",
      "Uitgebreid zoekwoordenonderzoek",
      "Google Business Profile beheer",
      "Concurrentieanalyse (maandelijks)",
      "Technische SEO-optimalisatie",
      "Maandelijks strategiegesprek (15 min)",
      "Backlink-analyse en -strategie",
    ],
    cta: "Meest gekozen",
    popular: true,
  },
  {
    name: "Dominant",
    price: "799",
    description: "Voor bedrijven die hun markt willen domineren",
    features: [
      "12 SEO-geoptimaliseerde blogartikelen/maand",
      "Volledig zoekwoorden- en contentplan",
      "Google Business Profile beheer + posts",
      "Uitgebreide concurrentieanalyse",
      "Volledige technische SEO-audit + fixes",
      "Maandelijks strategiegesprek (30 min)",
      "Actieve linkbuilding",
      "Lokale citatie-opbouw",
    ],
    cta: "Maximaal resultaat",
    popular: false,
  },
];

const testimonials = [
  {
    name: "Jan de Vries",
    role: "Eigenaar, De Vries Loodgietersbedrijf",
    text: "Binnen 3 maanden stonden we op pagina 1 voor 'loodgieter Amsterdam'. Onze telefoon gaat nu 3x vaker over.",
  },
  {
    name: "Fatima El-Amrani",
    role: "Tandarts, Kliniek El-Amrani",
    text: "Eindelijk een SEO-bureau dat resultaat levert zonder vage beloftes. Elke maand zie ik precies wat ze doen en wat het oplevert.",
  },
  {
    name: "Peter Bakker",
    role: "Restaurant De Gouden Lepel",
    text: "Van pagina 5 naar de top 3 voor 'restaurant Utrecht'. De investering heeft zich al ruimschoots terugverdiend.",
  },
];

const steps = [
  {
    num: "1",
    title: "Gratis SEO-scan",
    desc: "We analyseren uw website en laten zien waar de kansen liggen.",
  },
  {
    num: "2",
    title: "Strategie op maat",
    desc: "U krijgt een concreet plan met de zoekwoorden die klanten opleveren.",
  },
  {
    num: "3",
    title: "Wij gaan aan het werk",
    desc: "Elke maand nieuwe content, optimalisaties en een helder rapport.",
  },
  {
    num: "4",
    title: "Meer klanten",
    desc: "U stijgt in Google en krijgt meer bezoekers die klant worden.",
  },
];

const faqs = [
  {
    q: "Hoe snel zie ik resultaat?",
    a: "De eerste verbeteringen in Google zijn meestal binnen 4-8 weken zichtbaar. Significante stijgingen in verkeer en klanten ziet u doorgaans na 3-6 maanden.",
  },
  {
    q: "Zit ik ergens aan vast?",
    a: "Nee. Onze pakketten zijn maandelijks opzegbaar. We geloven dat u blijft omdat u resultaat ziet, niet omdat u vastzit aan een contract.",
  },
  {
    q: "Wat maakt jullie anders dan andere SEO-bureaus?",
    a: "Wij werken met dezelfde premium tools als de grote bureaus (SEMrush, Ahrefs), maar tegen een fractie van de prijs. Vaste prijs, vaste deliverables, geen verrassingen.",
  },
  {
    q: "Schrijven jullie de content zelf?",
    a: "Ja. Onze content wordt geschreven met behulp van AI-technologie en vervolgens geredigeerd door Nederlandse taalexperts. Elke tekst is uniek, relevant en geoptimaliseerd.",
  },
  {
    q: "Voor welke branches werken jullie?",
    a: "We werken met alle lokale MKB-bedrijven: tandartsen, loodgieters, restaurants, advocaten, kappers, installateurs, webshops, en meer. Elke branche krijgt een strategie op maat.",
  },
  {
    q: "Wat als ik al een website heb?",
    a: "Perfect. We optimaliseren uw bestaande website. We hoeven geen nieuwe site te bouwen — we maken uw huidige site beter vindbaar in Google.",
  },
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left"
      >
        <span className="text-lg font-medium text-gray-900">{q}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <p className="pb-5 text-gray-600 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LS</span>
            </div>
            <span className="font-bold text-gray-900 text-lg">LokaleSEO</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#werkwijze" className="hover:text-gray-900">Werkwijze</a>
            <a href="#pakketten" className="hover:text-gray-900">Pakketten</a>
            <a href="#reviews" className="hover:text-gray-900">Reviews</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </div>
          <a
            href="#contact"
            className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors"
          >
            Gratis SEO-scan
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Nu: Gratis SEO-scan voor uw bedrijf
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Meer klanten via Google.
            <br />
            <span className="text-emerald-600">Gegarandeerd meetbaar.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professionele lokale SEO voor MKB-bedrijven in Nederland. Vaste prijs, vaste
            deliverables, maandelijks opzegbaar. Wij zorgen dat uw klanten u vinden.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
            >
              Gratis SEO-scan aanvragen
            </a>
            <a
              href="#pakketten"
              className="w-full sm:w-auto text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold border border-gray-200 hover:border-gray-300 transition-colors"
            >
              Bekijk pakketten
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <CheckIcon /> Premium SEO-tools (SEMrush, Ahrefs)
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon /> Nederlandse content
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon /> Maandelijks opzegbaar
            </span>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Uw concurrenten staan al op pagina 1
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              93% van alle online ervaringen begint met een zoekmachine. Als uw bedrijf niet
              zichtbaar is in Google, mist u dagelijks klanten.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                title: "Niet gevonden worden",
                desc: "70% van MKB-bedrijven heeft geen SEO-strategie. Uw potentiele klanten zoeken op Google — maar vinden uw concurrent.",
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Te dure bureaus",
                desc: "Grote SEO-bureaus vragen al snel €1.500+/maand. Voor MKB is dat niet haalbaar. Wij bieden dezelfde kwaliteit voor een fractie.",
              },
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Onze oplossing",
                desc: "Professionele SEO met premium tools, vaste deliverables en een vaste prijs. Geen vage beloftes — elke maand ziet u wat we doen.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="werkwijze" className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Zo werkt het</h2>
            <p className="mt-4 text-lg text-gray-600">
              In 4 stappen naar meer klanten via Google
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center text-xl font-bold shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-1 text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pakketten" className="py-20 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Transparante pakketten
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Geen verborgen kosten. Geen langetermijncontracten. Maandelijks opzegbaar.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? "bg-emerald-600 text-white ring-4 ring-emerald-600/20 scale-105"
                    : "bg-white border border-gray-200"
                }`}
              >
                {pkg.popular && (
                  <span className="inline-block bg-emerald-500 text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
                    Meest gekozen
                  </span>
                )}
                <h3 className={`text-2xl font-bold ${pkg.popular ? "text-white" : "text-gray-900"}`}>
                  {pkg.name}
                </h3>
                <p className={`mt-2 text-sm ${pkg.popular ? "text-emerald-100" : "text-gray-500"}`}>
                  {pkg.description}
                </p>
                <div className="mt-6 mb-8">
                  <span className={`text-4xl font-bold ${pkg.popular ? "text-white" : "text-gray-900"}`}>
                    &euro;{pkg.price}
                  </span>
                  <span className={`text-sm ${pkg.popular ? "text-emerald-100" : "text-gray-500"}`}>
                    /maand excl. BTW
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <svg
                        className={`w-5 h-5 shrink-0 mt-0.5 ${pkg.popular ? "text-emerald-200" : "text-emerald-500"}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${pkg.popular ? "text-emerald-50" : "text-gray-600"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block w-full text-center py-3.5 rounded-xl font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-white text-emerald-600 hover:bg-emerald-50"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-500 text-sm">
            Alle prijzen excl. 21% BTW. Maandelijks opzegbaar. Geen opstartkosten.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Wat onze klanten zeggen
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
            Wij werken met dezelfde tools als de grote bureaus
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-2xl font-bold text-gray-300">
            <span>SEMrush</span>
            <span>Ahrefs</span>
            <span>Frase</span>
            <span>NeuronWriter</span>
            <span>SpyFu</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Veelgestelde vragen
            </h2>
          </div>
          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-20 bg-emerald-600 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Klaar om gevonden te worden?
          </h2>
          <p className="mt-4 text-lg text-emerald-100">
            Vraag een gratis SEO-scan aan en ontdek hoeveel klanten u mist.
          </p>
          <form
            className="mt-10 max-w-md mx-auto space-y-4"
            action="https://formspree.io/f/placeholder"
            method="POST"
          >
            <input
              type="text"
              name="bedrijf"
              placeholder="Bedrijfsnaam"
              required
              className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <input
              type="url"
              name="website"
              placeholder="Website URL"
              required
              className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mailadres"
              required
              className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <input
              type="tel"
              name="telefoon"
              placeholder="Telefoonnummer"
              className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <button
              type="submit"
              className="w-full bg-white text-emerald-600 py-4 rounded-xl text-lg font-bold hover:bg-emerald-50 transition-colors"
            >
              Gratis SEO-scan aanvragen
            </button>
            <p className="text-emerald-200 text-sm">
              Binnen 24 uur ontvangt u uw persoonlijke SEO-rapport per e-mail.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-400 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">LS</span>
            </div>
            <span className="font-semibold text-gray-300">LokaleSEO</span>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} LokaleSEO. Alle rechten voorbehouden. KVK: [in aanvraag]
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Voorwaarden</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
