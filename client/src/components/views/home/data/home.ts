import ResearchStrategyCircles from "@/components/icons/ResearchStrategyCircles.vue";
import type { ButtonVariant } from "@/app.constants";
import type { Component } from "vue";
import sustainableImage from "../../../../assets/images/sustainable.webp";
import barrierFreeImage from "../../../../assets/images/barrier-free.webp";
import togetherImage from "../../../../assets/images/together.webp";

export interface BaseSection {
  title: string;
  description?: string;
}

export interface Hero extends BaseSection {
  buttons: { label: string; href: string; variant: ButtonVariant }[];
}

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
    { label: "Projekt starten", href: "#contact", variant: "filled" },
  ],
};

export interface Services extends BaseSection {
  serviceItems: ServiceItem[];
}

export interface ServiceItem extends BaseSection {
  id: string;
  items: string[];
  icon: Component;
}

export const services: Services = {
  title: "Unsere Leistungen",
  serviceItems: [
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

export const process: BaseSection = {
  title: "Wie wir arbeiten",
  description:
    "Prototype: After ideating, the next step is to create a prototype of the most promising solution. This could be a physical or digital prototype, depending on the nature of the problem.",
};

export interface Mission extends BaseSection {
  body: string;
}

export const mission: Mission = {
  title: "Unsere Mission",
  body: `Wir unterstützen kleine und mittelständische Unternehmen dabei, <span class="text-dark switzer-italic">zukunftssicher</span> zu <span class="text-dark switzer-italic">wachsen</span>. Mit klarer Haltung, verantwortungsvollem Denken und <span class="text-dark switzer-italic">barrierefreien Lösungen</span> verbinden wir wirtschaftlichen Erfolg mit gesellschaftlichem Mehrwert. Für <span class="text-dark switzer-italic">langfristige Wirkung</span> und echten Fortschritt - <span class="text-dark switzer-italic">heute und morgen</span>.`,
};

export interface Principles extends BaseSection {
  principleItems: PrincipleItem[];
}

export interface PrincipleItem extends BaseSection {
  id: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
}

export const principles: Principles = {
  title: "Unsere Prinzipien",
  principleItems: [
    {
      id: "sustainable",
      title: "Nachhaltig",
      description:
        "We integrate environmentally friendly practices and materials into our  projects, ensuring that our designs are not only beautiful and  functional but also responsible and sustainable.",
      image: sustainableImage,
      imageAlt: "Wind turbine rising above green trees under a cloudy blue sky",
    },
    {
      id: "barrier-free",
      title: "Barrierefrei",
      description:
        "We integrate environmentally friendly practices and materials into our  projects, ensuring that our designs are not only beautiful and  functional but also responsible and sustainable.",
      image: barrierFreeImage,
      imageAlt:
        "Transparent circular glass elements suspended indoors with a blurred person in the background",
      imagePosition: "left",
    },
    {
      id: "together",
      title: "Gemeinsam",
      description:
        "We integrate environmentally friendly practices and materials into our  projects, ensuring that our designs are not only beautiful and  functional but also responsible and sustainable.",
      image: togetherImage,
      imageAlt:
        "Metal sculpture of two human figures standing in the water on a misty river in Berlin",
      imagePosition: "left",
    },
  ],
};

export const barrierFree: BaseSection = {
  title: `Barrierefrei?<br>Nachhaltig?<br>Wir finden es heraus.`,
  description:
    "Eine Website ist barrierefrei, wenn sie trotz körperlicher oder kognitiver Einschränkungen verständlich, zugänglich und bedienbar bleibt – für echte digitale Teilhabe.",
};
