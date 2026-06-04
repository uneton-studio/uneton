export interface StrapiRichTextNode {
  type: "text";
  text: string;
  bold?: boolean;
}

export interface StrapiRichTextLink {
  type: "link";
  url: string;
  target?: string;
  children: StrapiRichTextNode[];
}

export interface StrapiParagraph {
  type: "paragraph";
  children: (StrapiRichTextNode | StrapiRichTextLink)[];
}

export interface StrapiListItem {
  type: "list-item";
  children: StrapiRichTextNode[];
}

export interface StrapiList {
  type: "list";
  format: "unordered" | "ordered";
  children: StrapiListItem[];
}

export type StrapiRichTextBlock = StrapiParagraph | StrapiList;
