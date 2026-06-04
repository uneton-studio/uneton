import type { StrapiRichTextBlock } from "@/types/strapi.interface";
import { apiGet } from "../api";

export const imprintService = {
  getImprint() {
    return apiGet<ImprintResponse>(route);
  },
};

const route = "/impressum";

export interface Imprint {
  title: string;
  content: StrapiRichTextBlock[];
}

export interface ImprintResponse {
  data: Imprint;
}
