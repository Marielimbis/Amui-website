import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Separator } from "./components/ui/separator";


// Single-file, deployable landing page for "Amui" catering (Switzerland).
// - Minimal, modern aesthetic
// - DE / EN / FR language switch
// - Trendy gallery images (Unsplash)

const i18n = {
  de: {
    langName: "Deutsch",
    nav: {
      services: "Angebot",
      gallery: "Galerie",
      process: "Ablauf",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "Catering in der Schweiz",
      title: "Amui",
      subtitle:
        "Minimalistisch. Modern. Sorgfältig komponierte Food-Erlebnisse für Events, die in Erinnerung bleiben.",
      ctaPrimary: "Angebot anfragen",
      ctaSecondary: "Galerie ansehen",
      meta: "Zürich • Basel • Genf • Schweizweit",
    },
    trust: {
      one: "Saisonale Menüs",
      two: "Design-orientierte Setups",
      three: "Pünktlich & zuverlässig",
    },
    services: {
      title: "Für Anlässe mit Stil",
      subtitle:
        "Von Business-Lunch bis Wedding Afterparty — wir bauen ein Setup, das zu deiner Marke und deiner Location passt.",
      items: [
        {
          title: "Corporate Events",
          desc: "Breakfast, Lunch, Apéro & Flying Dinner — clean präsentiert, perfekt getaktet.",
          tags: ["Apéro", "Konferenz", "Produktlaunch"],
        },
        {
          title: "Private Feiern",
          desc: "Geburtstage, Jubiläen, Intimates — warm, elegant, ohne Stress.",
          tags: ["Dinner", "Buffet", "Fingerfood"],
        },
        {
          title: "Pop-ups & Brand Moments",
          desc: "Trendige Setups, die auf Fotos wirken: minimal, modern, mit Wow-Faktor.",
          tags: ["Branding", "Set Design", "Content"],
        },
      ],
      points: [
        "Vegetarisch/Vegan & Allergie-Optionen",
        "Schweizweite Lieferung (auf Anfrage)",
        "Material, Geschirr, Styling & Service möglich",
      ],
    },
    gallery: {
      title: "Trendy Montagen",
      subtitle:
        "Ein Gefühl für unsere Ästhetik: klare Linien, natürliche Texturen, feine Details.",
    },
    process: {
      title: "So läuft’s",
      steps: [
        {
          title: "Kurzbriefing",
          desc: "Datum, Ort, Gästezahl, Stil — wir empfehlen Format & Menü.",
        },
        {
          title: "Konzept & Angebot",
          desc: "Wir schicken ein klares Angebot mit Menü, Timing und Setup-Optionen.",
        },
        {
          title: "Produktion & Setup",
          desc: "Frisch zubereitet, pünktlich geliefert, stylish aufgebaut.",
        },
        {
          title: "Event Support",
          desc: "Optional mit Service-Team — damit du einfach Gastgeber:in sein kannst.",
        },
      ],
    },
    contact: {
      title: "Angebot anfragen",
      subtitle:
        "Sag uns kurz, was du planst — wir melden uns schnell mit Vorschlägen und Preisrahmen.",
      form: {
        name: "Name",
        email: "E-Mail",
        phone: "Telefon (optional)",
        city: "Ort / Kanton",
        details: "Details (Datum, Gäste, Anlass, Wünsche)",
        send: "Anfrage senden",
        note:
          "Hinweis: Dieses Formular ist Frontend-only. Für echtes Senden kannst du es an deinen Backend-Endpunkt anbinden.",
      },
      direct: {
        title: "Direkt",
        phone: "+41 00 000 00 00",
        email: "hello@amui.ch",
        location: "Schweiz",
      },
    },
    footer: {
      line1: "Amui Catering — Swiss minimal. Modern taste.",
      line2: "© "+new Date().getFullYear()+" Amui. Alle Rechte vorbehalten.",
    },
  },
  en: {
    langName: "English",
    nav: {
      services: "Services",
      gallery: "Gallery",
      process: "Process",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Catering in Switzerland",
      title: "Amui",
      subtitle:
        "Minimal. Modern. Carefully composed food experiences for events people remember.",
      ctaPrimary: "Request a quote",
      ctaSecondary: "View gallery",
      meta: "Zurich • Basel • Geneva • Nationwide",
    },
    trust: {
      one: "Seasonal menus",
      two: "Design-led setups",
      three: "On-time & reliable",
    },
    services: {
      title: "For events with taste",
      subtitle:
        "From business lunches to wedding afterparties — we build a setup that matches your brand and your venue.",
      items: [
        {
          title: "Corporate events",
          desc: "Breakfast, lunch, apéro & flying dinner — cleanly presented, perfectly paced.",
          tags: ["Apéro", "Conference", "Launch"],
        },
        {
          title: "Private celebrations",
          desc: "Birthdays, anniversaries, intimate gatherings — effortless hosting.",
          tags: ["Dinner", "Buffet", "Bites"],
        },
        {
          title: "Pop-ups & brand moments",
          desc: "Trendy setups that look great on camera: minimal, modern, high impact.",
          tags: ["Branding", "Set design", "Content"],
        },
      ],
      points: [
        "Vegetarian/vegan & allergy-friendly options",
        "Delivery across Switzerland (upon request)",
        "Equipment, tableware, styling & service available",
      ],
    },
    gallery: {
      title: "Trendy setups",
      subtitle:
        "A feel for our aesthetic: clean lines, natural textures, considered details.",
    },
    process: {
      title: "How it works",
      steps: [
        {
          title: "Quick brief",
          desc: "Date, venue, guest count, vibe — we recommend format & menu.",
        },
        {
          title: "Concept & quote",
          desc: "You get a clear proposal with menu, timing and setup options.",
        },
        {
          title: "Production & setup",
          desc: "Freshly prepared, delivered on time, styled on site.",
        },
        {
          title: "Event support",
          desc: "Optional service team — so you can simply host.",
        },
      ],
    },
    contact: {
      title: "Request a quote",
      subtitle:
        "Tell us what you’re planning — we’ll reply quickly with ideas and a price range.",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone (optional)",
        city: "City / Canton",
        details: "Details (date, guests, occasion, preferences)",
        send: "Send request",
        note:
          "Note: This form is frontend-only. Hook it up to your backend endpoint to actually submit.",
      },
      direct: {
        title: "Direct",
        phone: "+41 00 000 00 00",
        email: "hello@amui.ch",
        location: "Switzerland",
      },
    },
    footer: {
      line1: "Amui Catering — Swiss minimal. Modern taste.",
      line2: "© "+new Date().getFullYear()+" Amui. All rights reserved.",
    },
  },
  fr: {
    langName: "Français",
    nav: {
      services: "Services",
      gallery: "Galerie",
      process: "Process",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Traiteur en Suisse",
      title: "Amui",
      subtitle:
        "Minimaliste. Moderne. Des expériences culinaires soignées pour des événements mémorables.",
      ctaPrimary: "Demander un devis",
      ctaSecondary: "Voir la galerie",
      meta: "Zurich • Bâle • Genève • Toute la Suisse",
    },
    trust: {
      one: "Menus de saison",
      two: "Mises en scène design",
      three: "Ponctuel & fiable",
    },
    services: {
      title: "Pour des événements avec style",
      subtitle:
        "Du déjeuner d’entreprise à l’afterparty de mariage — nous créons une mise en place alignée avec votre marque et votre lieu.",
      items: [
        {
          title: "Événements corporate",
          desc: "Petit-déj, lunch, apéro & flying dinner — présentation épurée, timing maîtrisé.",
          tags: ["Apéro", "Conférence", "Lancement"],
        },
        {
          title: "Fêtes privées",
          desc: "Anniversaires, célébrations, petits comités — élégant, sans stress.",
          tags: ["Dîner", "Buffet", "Bouchées"],
        },
        {
          title: "Pop-ups & moments de marque",
          desc: "Setups tendance, photogéniques : minimal, moderne, impact maximum.",
          tags: ["Branding", "Set design", "Contenu"],
        },
      ],
      points: [
        "Options végétariennes/véganes & allergènes",
        "Livraison partout en Suisse (sur demande)",
        "Matériel, vaisselle, styling & service possibles",
      ],
    },
    gallery: {
      title: "Mises en place tendance",
      subtitle:
        "Un aperçu de notre esthétique : lignes nettes, textures naturelles, détails soignés.",
    },
    process: {
      title: "Comment ça marche",
      steps: [
        {
          title: "Brief rapide",
          desc: "Date, lieu, nombre d’invités, ambiance — on recommande format & menu.",
        },
        {
          title: "Concept & devis",
          desc: "Proposition claire avec menu, timing et options de mise en place.",
        },
        {
          title: "Production & installation",
          desc: "Préparé frais, livré à l’heure, stylé sur place.",
        },
        {
          title: "Support événement",
          desc: "Équipe de service en option — pour profiter pleinement.",
        },
      ],
    },
    contact: {
      title: "Demander un devis",
      subtitle:
        "Dites-nous ce que vous préparez — réponse rapide avec idées et fourchette de prix.",
      form: {
        name: "Nom",
        email: "Email",
        phone: "Téléphone (optionnel)",
        city: "Ville / Canton",
        details: "Détails (date, invités, occasion, préférences)",
        send: "Envoyer",
        note:
          "Note : formulaire côté frontend uniquement. Branchez-le à votre backend pour envoyer réellement.",
      },
      direct: {
        title: "Direct",
        phone: "+41 00 000 00 00",
        email: "hello@amui.ch",
        location: "Suisse",
      },
    },
    footer: {
      line1: "Amui Catering — Swiss minimal. Modern taste.",
      line2: "© "+new Date().getFullYear()+" Amui. Tous droits réservés.",
    },
  },
};

const images = [
  {
    src: "https://images.unsplash.com/photo-1555243896-c709bfa0b564?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern catering setup with grazing table",
  },
  {
    src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1600&q=80",
    alt: "Minimalist table styling with pastries",
  },
  {
    src: "https://images.unsplash.com/photo-1529694157877-6a4f2e8d5c8a?auto=format&fit=crop&w=1600&q=80",
    alt: "Apéro bites and champagne",
  },
  {
    src: "https://images.unsplash.com/photo-1541542684-4bf98f9b01f0?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern event catering plating",
  },
  {
    src: "https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?auto=format&fit=crop&w=1600&q=80",
    alt: "Coffee bar catering setup",
  },
  {
    src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1600&q=80",
    alt: "Styled dessert table",
  },
];

function useText(lang) {
  return useMemo(() => i18n[lang] ?? i18n.en, [lang]);
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700 backdrop-blur">
      {children}
    </span>
  );
}

function LangButton({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition " +
        (active
          ? "bg-neutral-900 text-white"
          : "bg-white/70 text-neutral-700 hover:bg-white")
      }
      aria-pressed={active}
      type="button"
    >
      {children}
    </button>
  );
}

export default function AmuiCateringPage() {
  const [lang, setLang] = useState("de");
  const t = useText(lang);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Subtle background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-neutral-200/40 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-[520px] w-[520px] rounded-full bg-neutral-200/30 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[520px] w-[520px] rounded-full bg-neutral-200/25 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-neutral-50/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button
            onClick={() => scrollToId("top")}
            className="group inline-flex items-center gap-2"
            type="button"
          >
            <div className="grid h-9 w-9 place-items-center rounded-xl border border-neutral-200 bg-white/70 shadow-sm">
              <Sparkles className="h-4 w-4" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">Amui</div>
              <div className="text-xs text-neutral-600">Catering</div>
            </div>
          </button>

          <nav className="hidden items-center gap-6 text-sm text-neutral-700 md:flex">
            <button
              type="button"
              className="hover:text-neutral-950"
              onClick={() => scrollToId("services")}
            >
              {t.nav.services}
            </button>
            <button
              type="button"
              className="hover:text-neutral-950"
              onClick={() => scrollToId("gallery")}
            >
              {t.nav.gallery}
            </button>
            <button
              type="button"
              className="hover:text-neutral-950"
              onClick={() => scrollToId("process")}
            >
              {t.nav.process}
            </button>
            <button
              type="button"
              className="hover:text-neutral-950"
              onClick={() => scrollToId("contact")}
            >
              {t.nav.contact}
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-neutral-200 bg-white/60 p-1 md:flex">
              <LangButton active={lang === "de"} onClick={() => setLang("de")}
                >DE</LangButton
              >
              <LangButton active={lang === "en"} onClick={() => setLang("en")}
                >EN</LangButton
              >
              <LangButton active={lang === "fr"} onClick={() => setLang("fr")}
                >FR</LangButton
              >
            </div>

            <Button
              className="rounded-full"
              onClick={() => scrollToId("contact")}
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile language switch */}
        <div className="mx-auto max-w-6xl px-4 pb-3 md:hidden">
          <div className="flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 text-xs text-neutral-600">
              <Globe className="h-4 w-4" />
              <span>Language</span>
            </div>
            <div className="flex items-center gap-2">
              <LangButton active={lang === "de"} onClick={() => setLang("de")}
                >DE</LangButton
              >
              <LangButton active={lang === "en"} onClick={() => setLang("en")}
                >EN</LangButton
              >
              <LangButton active={lang === "fr"} onClick={() => setLang("fr")}
                >FR</LangButton
              >
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main id="top" className="mx-auto max-w-6xl px-4">
        <section className="grid items-center gap-8 py-10 md:grid-cols-2 md:py-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2"
            >
              <Pill>
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  {t.hero.eyebrow}
                </span>
              </Pill>
              <Pill>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" />
                  {t.hero.meta}
                </span>
              </Pill>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl"
            >
              {t.hero.title}
              <span className="text-neutral-400">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-4 max-w-xl text-base leading-relaxed text-neutral-700 md:text-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <Button
                className="rounded-full"
                size="lg"
                onClick={() => scrollToId("contact")}
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full bg-white/60"
                size="lg"
                onClick={() => scrollToId("gallery")}
              >
                {t.hero.ctaSecondary}
              </Button>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <Card className="rounded-2xl border-neutral-200 bg-white/70 shadow-sm">
                <CardContent className="flex items-center gap-3 p-4">
                  <Leaf className="h-4 w-4" />
                  <div className="text-sm text-neutral-700">{t.trust.one}</div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-neutral-200 bg-white/70 shadow-sm">
                <CardContent className="flex items-center gap-3 p-4">
                  <Sparkles className="h-4 w-4" />
                  <div className="text-sm text-neutral-700">{t.trust.two}</div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-neutral-200 bg-white/70 shadow-sm">
                <CardContent className="flex items-center gap-3 p-4">
                  <Clock className="h-4 w-4" />
                  <div className="text-sm text-neutral-700">{t.trust.three}</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white/70 shadow-sm">
              <img
                src="/hero-switzerland.jpg"
                alt="Swiss delegation carrying flag"
                className="h-[420px] w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="rounded-full bg-white/80 text-neutral-900 hover:bg-white">
                    Apéro
                  </Badge>
                  <Badge className="rounded-full bg-white/80 text-neutral-900 hover:bg-white">
                    Grazing
                  </Badge>
                  <Badge className="rounded-full bg-white/80 text-neutral-900 hover:bg-white">
                    Set design
                  </Badge>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-40 w-40 rounded-full border border-neutral-200 bg-white/40 blur-[1px] md:block" />
            <div className="pointer-events-none absolute -top-6 -right-6 hidden h-32 w-32 rounded-full border border-neutral-200 bg-white/40 blur-[1px] md:block" />
          </motion.div>
        </section>

        <Separator className="my-2 bg-neutral-200/70" />

        {/* Services */}
        <section id="services" className="py-12 md:py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {t.services.title}
            </h2>
            <p className="mt-3 text-neutral-700">{t.services.subtitle}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {t.services.items.map((it) => (
              <Card
                key={it.title}
                className="rounded-2xl border-neutral-200 bg-white/70 shadow-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-lg font-semibold tracking-tight">
                      {it.title}
                    </div>
                    <div className="grid h-9 w-9 place-items-center rounded-xl border border-neutral-200 bg-white">
                      <Check className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                    {it.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {it.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full bg-neutral-100 text-neutral-800"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Card className="rounded-2xl border-neutral-200 bg-white/70 shadow-sm">
              <CardContent className="p-6">
                <div className="text-sm font-semibold text-neutral-900">What you get</div>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                  {t.services.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-0.5">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-neutral-200 bg-white/70 shadow-sm">
              <CardContent className="p-6">
                <div className="text-sm font-semibold text-neutral-900">Signature vibe</div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                  Swiss clean meets soft textures: matte ceramics, neutral linens, natural
                  greenery, and a menu that’s modern without losing warmth.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill>Minimal plating</Pill>
                  <Pill>Natural textures</Pill>
                  <Pill>Photo-ready</Pill>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-2 bg-neutral-200/70" />

        {/* Gallery */}
        <section id="gallery" className="py-12 md:py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {t.gallery.title}
            </h2>
            <p className="mt-3 text-neutral-700">{t.gallery.subtitle}</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-12">
            <div className="md:col-span-7">
              <Card className="overflow-hidden rounded-[28px] border-neutral-200 bg-white/70 shadow-sm">
                <img
                  src={images[1].src}
                  alt={images[1].alt}
                  className="h-[360px] w-full object-cover"
                  loading="lazy"
                />
              </Card>
            </div>
            <div className="grid gap-4 md:col-span-5">
              <Card className="overflow-hidden rounded-[28px] border-neutral-200 bg-white/70 shadow-sm">
                <img
                  src={images[2].src}
                  alt={images[2].alt}
                  className="h-[172px] w-full object-cover"
                  loading="lazy"
                />
              </Card>
              <Card className="overflow-hidden rounded-[28px] border-neutral-200 bg-white/70 shadow-sm">
                <img
                  src={images[3].src}
                  alt={images[3].alt}
                  className="h-[172px] w-full object-cover"
                  loading="lazy"
                />
              </Card>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[images[4], images[0], images[3]].map((im, idx) => (
              <Card
                key={idx}
                className="overflow-hidden rounded-[28px] border-neutral-200 bg-white/70 shadow-sm"
              >
                <img
                  src={im.src}
                  alt={im.alt}
                  className="h-[220px] w-full object-cover"
                  loading="lazy"
                />
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-2 bg-neutral-200/70" />

        {/* Process */}
        <section id="process" className="py-12 md:py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {t.process.title}
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {t.process.steps.map((s, i) => (
              <Card
                key={s.title}
                className="rounded-2xl border-neutral-200 bg-white/70 shadow-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <Pill>
                      <span className="font-medium">{String(i + 1).padStart(2, "0")}</span>
                    </Pill>
                    <div className="grid h-9 w-9 place-items-center rounded-xl border border-neutral-200 bg-white">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-4 text-base font-semibold tracking-tight">
                    {s.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    {s.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-2 bg-neutral-200/70" />

        {/* Contact */}
        <section id="contact" className="py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {t.contact.title}
              </h2>
              <p className="mt-3 text-neutral-700">{t.contact.subtitle}</p>

              <Card className="mt-6 rounded-2xl border-neutral-200 bg-white/70 shadow-sm">
                <CardContent className="p-6">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert(
                        "Thanks! (Demo) — Connect this form to your backend to submit for real."
                      );
                    }}
                    className="grid gap-3"
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Input placeholder={t.contact.form.name} required />
                      <Input placeholder={t.contact.form.email} type="email" required />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Input placeholder={t.contact.form.phone} />
                      <Input placeholder={t.contact.form.city} />
                    </div>
                    <Textarea
                      placeholder={t.contact.form.details}
                      className="min-h-[120px]"
                      required
                    />
                    <Button className="rounded-full" size="lg" type="submit">
                      {t.contact.form.send}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-xs text-neutral-600">{t.contact.form.note}</p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="rounded-2xl border-neutral-200 bg-white/70 shadow-sm">
                <CardContent className="p-6">
                  <div className="text-sm font-semibold text-neutral-900">
                    {t.contact.direct.title}
                  </div>

                  <div className="mt-4 grid gap-3 text-sm text-neutral-700">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl border border-neutral-200 bg-white">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500">Phone</div>
                        <div>{t.contact.direct.phone}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl border border-neutral-200 bg-white">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500">Email</div>
                        <div>{t.contact.direct.email}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl border border-neutral-200 bg-white">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500">Location</div>
                        <div>{t.contact.direct.location}</div>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6 bg-neutral-200/70" />

                  <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white">
                    <img
                      src={images[3].src}
                      alt="Catering detail"
                      className="h-[260px] w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Pill>Zurich</Pill>
                    <Pill>Basel</Pill>
                    <Pill>Geneva</Pill>
                    <Pill>Lausanne</Pill>
                    <Pill>Bern</Pill>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-10">
          <Separator className="mb-6 bg-neutral-200/70" />
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
            <div className="text-sm text-neutral-700">{t.footer.line1}</div>
            <div className="text-xs text-neutral-500">{t.footer.line2}</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
