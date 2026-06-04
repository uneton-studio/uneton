export const ROUTES = {
  HOME: "/",
  IMPRINT: "/imprint",
  PRIVACY_POLICY: "/privacy-policy",
} as const;

export const ROUTE_NAMES = {
  HOME: "home",
  IMPRINT: "imprint",
  PRIVACY_POLICY: "privacy-policy",
} as const;

export type ThemeMode = "light" | "dark" | "purple";

export type ButtonVariant = "filled" | "outlined" | "link";
