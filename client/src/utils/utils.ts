import { API_URL } from "@/api/api";

export function getImageSrc(src: string): string {
  return API_URL + src;
}
