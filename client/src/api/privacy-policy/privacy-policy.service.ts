import type { StrapiRichTextBlock } from "@/types/strapi.interface";
import { apiGet } from "../api";

export const privacyPolicyService = {
  getPrivacyPolicy() {
    return apiGet<PrivacyPolicyResponse>(route);
  },
};

const route = "/datenschutz";

export interface PrivacyPolicy {
  title: string;
  content: StrapiRichTextBlock[];
}

export interface PrivacyPolicyResponse {
  data: PrivacyPolicy;
}
