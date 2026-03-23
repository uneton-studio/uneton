export const API_URL = "http://localhost:1337";

export async function apiGet<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_URL}/api${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    let message = `Request failed: ${res.status}`;

    try {
      const error = await res.json();
      message = error?.error?.message || message;
    } catch {
      // ignore if response isn't JSON
    }

    throw new Error(message);
  }

  return res.json();
}
