import BfsgIcon from "@/components/icons/BfsgIcon.vue";
import CheckWebsiteIcon from "@/components/icons/CheckWebsiteIcon.vue";
import sustainableImage from "../../../../assets/images/sustainable.webp";
import barrierFreeImage from "../../../../assets/images/barrier-free.webp";
import togetherImage from "../../../../assets/images/together.webp";
import berlinCathedralImage from "../../../../assets/images/berlin-cathedral.webp";
import type {
  Hero,
  Services,
  Process,
  Mission,
  Principles,
  BarrierFree,
  Standards,
  Questions,
  Closing,
} from "./home.types";
import GlobeIcon from "@/components/icons/GlobeIcon.vue";
import LockIcon from "@/components/icons/LockIcon.vue";
import ShieldCheckIcon from "@/components/icons/ShieldCheckIcon.vue";
import StarsCircleIcon from "@/components/icons/StarsCircleIcon.vue";
import KeyIcon from "@/components/icons/KeyIcon.vue";
import TurbineIcon from "@/components/icons/TurbineIcon.vue";
import GlobeLargeIcon from "@/components/icons/GlobeLargeIcon.vue";
import ResearchAndStrategyAnimation from "../animations/ResearchAndStrategyAnimation.vue";
import ConceptionAndBrandingAnimation from "../animations/ConceptionAndBrandingAnimation.vue";
import ImplementationAndHostingAnimation from "../animations/ImplementationAndHostingAnimation.vue";
import LeafIcon from "@/components/icons/LeafIcon.vue";
import BarrierFreeIcon from "@/components/icons/BarrierFreeIcon.vue";

export const hero: Hero = {
  title: "Design Studio für ",
  subtitle: "zeitloses Webdesign",
  description:
    "Wir bauen keine Websites für dich - wir bauen sie mit dir. Corporate steht bei uns für ganzheitliche digitale Lösungen aus einer Hand und echte Partnerschaft auf Augenhöhe.",
  buttons: [
    {
      label: "Persönlich sprechen",
      href: "tel:+4915561960464",
      variant: "outlined",
    },
    {
      label: "Projekt starten",
      href: "mailto:kontakt@uneton.de",
      variant: "filled",
    },
  ],
  items: [
    {
      id: "co2-neutral-hosting",
      title: "CO₂-neutral gehostet",
      subtitle: "100% Ökotsrom",
      icon: LeafIcon,
    },
    {
      id: "barrier-free",
      title: "Barrierefrei",
      subtitle: "Mehr Reichweite durch Inklusion",
      icon: BarrierFreeIcon,
    },
    {
      id: "dsgvo-compliant",
      title: "DSGVO konform",
      subtitle: "Server in Deutschland",
      icon: ShieldCheckIcon,
    },
  ],
};

export const services: Services = {
  title: "Unsere Leistungen",
  items: [
    {
      id: "research-strategy",
      title: "Research & Strategie",
      items: [
        "Zielgruppenanalyse",
        "Wettbewerbsanalyse",
        "Markenpositionierung",
        "Markenwerte",
        "Vision & Mission",
      ],
      description:
        "Jedes erfolgreiche Projekt beginnt mit einer klaren Strategie. Wir analysieren deine Zielgruppe, den Wettbewerb und deinen Markt, um deine Marke unverwechselbar zu positionieren. Gemeinsam definieren wir Werte, Vision und Mission - als solides Fundament für alle weiteren Schritte. So entsteht eine Marke mit Profil, die bei den richtigen Menschen ankommt.",
      icon: ResearchAndStrategyAnimation,
    },
    {
      id: "concept-branding",
      title: "Konzeption & Branding",
      items: [
        "Visuelle Identität",
        "Corporate Design",
        "Wireframes & Prototyping",
        "Conversion Rate Optimierung",
        "Barrierefreiheit",
      ],
      description:
        "Aus Strategie wird Gestalt. Wir entwickeln deine visuelle Identität mit stimmigem Corporate Design, Wireframes und Prototypen - bevor eine Zeile Code geschrieben wird. Dabei denken wir Conversion Rate Optimierung und Barrierefreiheit nach WCAG 2.2 von Anfang an mit. Das Ergebnis: eine Marke, die begeistert, verkauft und wirklich alle erreicht.",
      icon: ConceptionAndBrandingAnimation,
    },
    {
      id: "implementation-hosting",
      title: "Umsetzung & Hosting",
      items: [
        "Deployment & Hosting",
        "Monitoring & Wartung",
        "Shop-Entwicklung",
        "SEO / SEA",
        "KI-Lösungen",
      ],
      description:
        "Jetzt wird geliefert. Wir übernehmen Deployment und Hosting auf sicheren, klimafreundlichen Servern in Deutschland - inklusive Monitoring und Wartung. Ob performante Shop-Entwicklung, SEO/SEA für mehr Sichtbarkeit oder smarte KI-Lösungen zur Automatisierung: Wir setzen deine digitale Vision technisch sauber um und halten sie langfristig am Laufen.",
      icon: ImplementationAndHostingAnimation,
    },
  ],
};

export const process: Process = {
  title: "Wie wir arbeiten",
  description:
    "Corporate Design, UX/UI Design und Webentwicklung - ganzheitliche digitale Lösungen aus einer Hand.",
  items: [
    {
      id: "discover",
      title: "01.<br />Discover",
      description:
        "In der Discover-Phase analysieren wir Ihre Zielgruppe, den Wettbewerb und Ihre Unternehmensziele – datenbasiert und strategisch. Wir identifizieren digitale Chancen und legen den Grundstein für Lösungen, die messbar wirken. So entsteht ein klares Bild davon, wo Potenzial liegt und wie wir es gezielt nutzen.",
    },
    {
      id: "define",
      title: "02.<br />Define",
      description:
        "In der Define-Phase übersetzen wir Erkenntnisse in eine klare digitale Strategie – mit Personas, User Journeys und einem strukturierten Anforderungsprofil. Wir definieren Projektziele, KPIs und den optimalen Technologie-Stack für Ihr Vorhaben. Diese Phase schafft die verbindliche Grundlage für effizientes Design und Entwicklung.",
    },
    {
      id: "develop",
      title: "03.<br />Develop",
      description:
        "In der Develope-Phase entstehen performante, barrierefreie digitale Produkte – von UX/UI Design bis zur technischen Umsetzung aus einer Hand. Wir entwickeln skalierbare Weblösungen mit sauberem Code und optimierter Ladegeschwindigkeit für beste Core Web Vitals. Jedes Detail wird nutzerzentriert gestaltet und iterativ getestet.",
    },
    {
      id: "growth",
      title: "04.<br />Growth",
      description:
        "In der Growth-Phase optimieren wir Ihre digitale Präsenz kontinuierlich für mehr Sichtbarkeit, Conversions und nachhaltiges Wachstum. Durch SEO, Analytics und A/B-Testing entwickeln wir datengetriebene Maßnahmen, die langfristig wirken. So wird Ihre Website zum leistungsstarken Vertriebskanal.",
    },
  ],
};

export const mission: Mission = {
  title: "Unsere Mission",
  body: `Wir unterstützen kleine und mittelständische Unternehmen dabei, <span class="text-dark font-heading font-medium italic">zukunftssicher</span> zu <span class="text-dark font-heading font-medium italic">wachsen</span>. Mit klarer Haltung, verantwortungsvollem Denken und <span class="text-dark font-heading font-medium italic">barrierefreien Lösungen</span> verbinden wir wirtschaftlichen Erfolg mit gesellschaftlichem Mehrwert. Für <span class="text-dark font-heading font-medium italic">langfristige Wirkung</span> und echten Fortschritt - <span class="text-dark font-heading font-medium italic">heute und morgen</span>.`,
};

export const principles: Principles = {
  title: "Unsere Prinzipien",
  items: [
    {
      id: "sustainable",
      title: "Nachhaltig",
      description:
        "Nachhaltigkeit ist für uns mehr als ein Konzept - sie prägt, wie wir denken, gestalten und entwickeln. Für Lösungen, die begeistern und Verantwortung übernehmen.",
      image: sustainableImage,
      imageAlt: "Wind turbine rising above green trees under a cloudy blue sky",
    },
    {
      id: "barrier-free",
      title: "Barrierefrei",
      description:
        "WCAG-konform, BFSG-ready und inklusiv gestaltet - damit deine Website wirklich jeden erreicht.",
      image: barrierFreeImage,
      imageAlt:
        "Transparent circular glass elements suspended indoors with a blurred person in the background",
      imagePosition: "left",
    },
    {
      id: "together",
      title: "Gemeinsam",
      description:
        "Keine Agentur-Floskeln, sondern echte Zusammenarbeit. Von der ersten Idee bis zum Launch - weil erfolgreiche digitale Projekte gemeinsam entstehen.",
      image: togetherImage,
      imageAlt:
        "Metal sculpture of two human figures standing in the water on a misty river in Berlin",
      imagePosition: "left",
    },
  ],
};

export const barrierFree: BarrierFree = {
  title: `Barrierefrei?<br>Nachhaltig?<br>Wir finden es heraus.`,
  description:
    "Eine Website ist barrierefrei, wenn sie trotz körperlicher oder kognitiver Einschränkungen verständlich, zugänglich und bedienbar bleibt - für echte digitale Teilhabe.",
  items: [
    {
      id: "bfsg",
      title: "Bin ich vom BFSG betroffen?",
      description:
        "Seit Juni 2025 gilt das BFSG für viele Unternehmen. Finde in wenigen Minuten heraus, ob auch du dazugehörst.",
      icon: BfsgIcon,
      buttons: [
        {
          label: "Kurz prüfen",
          href: "/",
          variant: "filled",
        },
      ],
    },
    {
      id: "check-website",
      title: "Website prüfen!",
      description:
        "Jetzt Quick-Check starten und erfahren, wie barrierefrei deine Website wirklich ist.",
      icon: CheckWebsiteIcon,
      buttons: [
        {
          label: "Website prüfen",
          href: "/",
          variant: "filled",
        },
      ],
    },
  ],
};

export const standards: Standards = {
  title: "Unsere Standards",
  image: berlinCathedralImage,
  imageAlt:
    "Berlin Cathedral beside the river with trees in the foreground under a pale blue sky",
  card: {
    title: "Zukunftsorientiert",
    description:
      "Wir entwickeln Websites, die heute überzeugen und morgen Maßstäbe setzen.",
    items: ["Nachhaltig", "Barrierefrei", "Zukunftssicher"],
    button: {
      label: "Projekt starten",
      href: "mailto:kontakt@uneton.de",
      variant: "filled",
    },
  },
  items: [
    {
      id: "server-in-germany",
      title: "Server in Deutschland",
      description: "100 % Hosting in Deutschland - sicher und schnell.",
      icon: ShieldCheckIcon,
      theme: "light",
    },
    {
      id: "data-encryption",
      title: "Datenverschlüsselung",
      description: "Sicher gespeichert auf deutschen Servern.",
      icon: LockIcon,
      theme: "purple",
    },
    {
      id: "dsgvo",
      title: "DSGVO konform",
      description: "Rechtssicher nach europäischem Datenschutz.",
      icon: GlobeIcon,
      theme: "dark",
    },
    {
      id: "barrier-free",
      title: "Barrierefrei",
      description: "Nach WCAG 2.2 und BFSG - für wirklich alle.",
      icon: StarsCircleIcon,
      theme: "light",
    },
    {
      id: "ssl-encrypted",
      title: "SSL Verschlüsselt",
      description: "Geschützte Datenübertragung auf höchstem Niveau.",
      icon: KeyIcon,
      theme: "light",
    },
    {
      id: "green-hosting",
      title: "Green Hosting",
      description: "100 % Ökostrom - klimafreundlich und nachhaltig.",
      icon: TurbineIcon,
      theme: "dark",
    },
  ],
};

export const questions: Questions = {
  title: "Weitere Fragen?",
  card: {
    title: "Kostenloses Erstgespräch!",
    description:
      "Erzähl uns in 30 Minuten von deiner Idee - wir geben dir eine ehrliche Einschätzung und erste konkrete Ansätze. Kostenfrei und unverbindlich.",
    buttons: [
      {
        label: "Persönlich sprechen",
        href: "tel:+4915561960464",
        variant: "outlined",
      },
      {
        label: "Projekt starten",
        href: "mailto:kontakt@uneton.de",
        variant: "filled",
      },
    ],
    icon: GlobeLargeIcon,
  },
  items: [
    {
      id: "expertise",
      title: "Welche Expertise bringt euer Team mit?",
      description:
        "Unser Team vereint Design, Entwicklung und Projektmanagement mit langjähriger Erfahrung.",
    },
    {
      id: "collaboration",
      title: "Wie startet die Zusammenarbeit nach Vertragsabschluss?",
      description:
        "Nach Vertragsabschluss beginnen wir mit einem Kick-off-Meeting, um Ziele und Prozesse abzustimmen.",
    },
    {
      id: "result",
      title: "Was passiert, wenn mir das Ergebnis nicht gefällt?",
      description:
        "Wir arbeiten iterativ mit Feedbackschleifen – so stellen wir sicher, dass du immer zufrieden bist.",
    },
    {
      id: "project-management",
      title: "Wie läuft das Projektmanagement ab?",
      description:
        "Wir nutzen agile Methoden und halten dich mit regelmäßigen Updates auf dem Laufenden.",
    },
    {
      id: "design-development",
      title: "Übernimmt euer Team sowohl Design als auch Entwicklung?",
      description:
        "Ja, wir decken sowohl das visuelle Design als auch die technische Umsetzung ab.",
    },
    {
      id: "communication",
      title: "Wie läuft die Kommunikation während des Projekts ab?",
      description:
        "Wir stehen über Slack, E-Mail oder Videocalls jederzeit in direktem Austausch.",
    },
    {
      id: "existing-designs",
      title: "Können bestehende Designs oder Projekte übernommen werden?",
      description:
        "Ja, wir können bestehende Projekte weiterentwickeln oder anpassen.",
    },
    {
      id: "tools",
      title: "Mit welchen Tools arbeitet ihr?",
      description:
        "Wir arbeiten mit Figma, VS Code, GitHub und modernen Frameworks wie React & Tailwind.",
    },
  ],
};

export const closing: Closing = {
  title: "Projekt im Kopf?",
  body: `Du hast eine <span class="text-dark font-heading font-medium italic">Idee</span>, ein konkretes <span class="text-dark font-heading font-medium italic">Projekt</span> oder einfach eine erste Frage? Erzähl uns, was du vorhast, und wir finden gemeinsam den passenden <span class="text-dark font-heading font-medium italic">Weg</span> für dein Vorhaben. Dabei denken wir <span class="text-dark font-heading font-medium italic">Strategie, Design und Entwicklung</span> von Anfang an zusammen.`,
  buttons: [
    {
      label: "Persönlich sprechen",
      href: "tel:+4915561960464",
      variant: "outlined",
    },
    {
      label: "Projekt starten",
      href: "mailto:kontakt@uneton.de",
      variant: "filled",
    },
  ],
};
