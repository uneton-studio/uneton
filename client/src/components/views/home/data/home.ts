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

export const hero: Hero = {
  title: "Design Studio für zeitloses Webdesign",
  description:
    "Wir bauen keine Websites für dich - wir bauen sie mit dir. Corporate steht bei uns für ganzheitliche digitale Lösungen aus einer Hand und echte Partnerschaft auf Augenhöhe.",
  buttons: [
    {
      label: "Erstgespräch vereinbaren",
      href: "#services",
      variant: "outlined",
    },
    {
      label: "Projekt starten",
      href: "#contact",
      variant: "filled",
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "define",
      title: "02.<br />Define",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "develop",
      title: "03.<br />Develop",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "growth",
      title: "04.<br />Growth",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
    button: { label: "Projekt starten", href: "/", variant: "filled" },
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
      theme: "light",
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
      description: "Geschützte Datenübertragung auf höchstem Niveau.s",
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
      "We integrate environmentally friendly practices and materials into our projects.",
    button: { label: "Erstgespräch vereinbaren", href: "/", variant: "filled" },
    icon: GlobeLargeIcon,
  },
  items: [
    {
      id: "expertise",
      title: "Welche Expertise bringt euer Team mit?",
      description:
        "We integrate environmentally friendly practices and materials into our projects, ensuring that our designs are not only beautiful and functional but also responsible and sustainable.",
    },
    {
      id: "collaboration",
      title: "Wie startet die Zusammenarbeit nach Vertragsabschluss?",
      description:
        "We integrate environmentally friendly practices and materials into our projects, ensuring that our designs are not only beautiful and functional but also responsible and sustainable.",
    },
    {
      id: "result",
      title: "Was passiert, wenn mir das Ergebnis nicht gefällt?",
      description:
        "We integrate environmentally friendly practices and materials into our projects, ensuring that our designs are not only beautiful and functional but also responsible and sustainable.",
    },
    {
      id: "project-management",
      title: "Wie läuft das Projektmanagement ab?",
      description:
        "We integrate environmentally friendly practices and materials into our projects, ensuring that our designs are not only beautiful and functional but also responsible and sustainable.",
    },
    {
      id: "design-development",
      title: "Übernimmt euer Team sowohl Design als auch Entwicklung?",
      description:
        "We integrate environmentally friendly practices and materials into our projects, ensuring that our designs are not only beautiful and functional but also responsible and sustainable.",
    },
    {
      id: "communication",
      title: "Wie läuft die Kommunikation während des Projekts ab?",
      description:
        "We integrate environmentally friendly practices and materials into our projects, ensuring that our designs are not only beautiful and functional but also responsible and sustainable.",
    },
    {
      id: "existing-designs",
      title: "Können bestehende Designs oder Projekte übernommen werden?",
      description:
        "We integrate environmentally friendly practices and materials into our projects, ensuring that our designs are not only beautiful and functional but also responsible and sustainable.",
    },
    {
      id: "tools",
      title: "Mit welchen Tools arbeitet ihr?",
      description:
        "We integrate environmentally friendly practices and materials into our projects, ensuring that our designs are not only beautiful and functional but also responsible and sustainable.",
    },
  ],
};
