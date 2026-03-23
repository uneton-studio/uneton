import { apiGet } from "../api";

export const globalService = {
  getGlobal() {
    return apiGet<GlobalResponse>(route);
  },
};

const route = "/global";

export interface Global {
  header: {
    logo?: {
      url: string;
      alternativeText: string;
    };
    links: {
      id: number;
      label: string;
      href: string;
    }[];
    buttons: {
      id: number;
      label: string;
      href: string;
      buttonType: string;
    }[];
  };
  footer: {
    linkBlocks: {
      id: number;
      label: string;
      links: {
        id: number;
        label: string;
        href: string;
      }[];
    }[];
  };
}

export interface GlobalResponse {
  data: Global;
}
