import type { Component } from "vue";
import type { ButtonVariant, ThemeMode } from "@/app.constants";

export interface TextContent {
  title: string;
  description?: string;
}

export interface Identifiable {
  id: string;
}

export interface WithIcon {
  icon: Component;
}

export interface WithButtons {
  buttons: CTAButton[];
}

export interface WithTheme {
  theme: ThemeMode;
}

export interface ImageContent {
  image: string;
  imageAlt: string;
  imagePosition?: string;
}

export interface ListContent {
  items: string[];
}

export interface BodyContent {
  body: string;
}

export interface CTAButton {
  label: string;
  href: string;
  variant: ButtonVariant;
}

export interface Section<T = never> extends TextContent {
  items?: T[];
}

export type Hero = TextContent & WithButtons;

export type ServiceItem = Identifiable & TextContent & ListContent & WithIcon;
export type Services = Section<ServiceItem>;

export type Process = TextContent;

export type Mission = TextContent & BodyContent;

export type PrincipleItem = Identifiable & TextContent & ImageContent;
export type Principles = Section<PrincipleItem>;

export type BarrierFreeItem = Identifiable &
  TextContent &
  WithIcon &
  WithButtons;
export type BarrierFree = Section<BarrierFreeItem>;

export type StandardItem = Identifiable & TextContent & WithIcon & WithTheme;
export type StandardExtraCard = TextContent &
  ListContent & {
    button: CTAButton;
  };
export type Standards = Section<StandardItem> &
  ImageContent & {
    card?: StandardExtraCard;
  };

export type QuestionItem = Identifiable & TextContent;
export type QuestionExtraCard = TextContent &
  WithIcon & {
    button: CTAButton;
  };
export type Questions = Section<QuestionItem> & {
  card?: QuestionExtraCard;
};
