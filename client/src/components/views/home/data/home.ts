import ResearchStrategyCircles from "@/components/icons/ResearchStrategyCircles.vue";
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

export const hero: Hero = {
  title: "Design Studio für zeitloses Webdesign",
  description:
    "Corporate Design, UX/UI Design und Webentwicklung - ganzheitliche digitale Lösungen aus einer Hand.",
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
        "Modern brand identity system built to be memorable, adaptable, and visually consistent across every touchpoint.",
      icon: ResearchStrategyCircles,
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
        "Modern brand identity system built to be memorable, adaptable, and visually consistent across every touchpoint.",
      icon: ResearchStrategyCircles,
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
        "Modern brand identity system built to be memorable, adaptable, and visually consistent across every touchpoint.",
      icon: ResearchStrategyCircles,
    },
  ],
};

export const process: Process = {
  title: "Wie wir arbeiten",
  description:
    "Prototype: After ideating, the next step is to create a prototype of the most promising solution. This could be a physical or digital prototype, depending on the nature of the problem.",
};

export const mission: Mission = {
  title: "Unsere Mission",
  body: `Wir unterstützen kleine und mittelständische Unternehmen dabei, <span class="text-dark switzer-italic">zukunftssicher</span> zu <span class="text-dark switzer-italic">wachsen</span>. Mit klarer Haltung, verantwortungsvollem Denken und <span class="text-dark switzer-italic">barrierefreien Lösungen</span> verbinden wir wirtschaftlichen Erfolg mit gesellschaftlichem Mehrwert. Für <span class="text-dark switzer-italic">langfristige Wirkung</span> und echten Fortschritt - <span class="text-dark switzer-italic">heute und morgen</span>.`,
};

export const principles: Principles = {
  title: "Unsere Prinzipien",
  items: [
    {
      id: "sustainable",
      title: "Nachhaltig",
      description:
        "We integrate environmentally friendly practices and materials into our projects, ensuring that our designs are not only beautiful and functional but also responsible and sustainable.",
      image: sustainableImage,
      imageAlt: "Wind turbine rising above green trees under a cloudy blue sky",
    },
    {
      id: "barrier-free",
      title: "Barrierefrei",
      description:
        "We integrate environmentally friendly practices and materials into our projects, ensuring that our designs are not only beautiful and functional but also responsible and sustainable.",
      image: barrierFreeImage,
      imageAlt:
        "Transparent circular glass elements suspended indoors with a blurred person in the background",
      imagePosition: "left",
    },
    {
      id: "together",
      title: "Gemeinsam",
      description:
        "We integrate environmentally friendly practices and materials into our projects, ensuring that our designs are not only beautiful and functional but also responsible and sustainable.",
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
        "We integrate environmentally friendly practices and materials into our projects.",
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
        "We integrate environmentally friendly practices and materials into our projects.",
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
      "We integrate environmentally friendly practices and materials into our projects.",
    items: ["Nachhaltig", "Barrierefrei", "Zukunftssicher"],
    button: { label: "Projekt starten", href: "/", variant: "filled" },
  },
  items: [
    {
      id: "dsgvo",
      title: "DSGVO konform",
      description: "Unser Server läuft mit grüner Energie",
      icon: GlobeIcon,
      theme: "dark",
    },
    {
      id: "data-encryption",
      title: "Datenverschlüsselung",
      description: "Daten liegen auf deutsche Servern",
      icon: LockIcon,
      theme: "light",
    },
    {
      id: "server-in-germany",
      title: "Server in Deutschland",
      description: "Unser Server läuft mit grüner Energie",
      icon: ShieldCheckIcon,
      theme: "light",
    },
    {
      id: "barrier-free",
      title: "Barrierefrei",
      description: "Unser Server läuft mit grüner Energie",
      icon: StarsCircleIcon,
      theme: "light",
    },
    {
      id: "ssl-encrypted",
      title: "SSL Verschlüsselt",
      description: "Unser Server läuft mit grüner Energie",
      icon: KeyIcon,
      theme: "light",
    },
    {
      id: "green-hosting",
      title: "Green Hosting",
      description: "Unser Server läuft mit grüner Energie",
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
