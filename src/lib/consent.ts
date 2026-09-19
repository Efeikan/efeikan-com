export const CONSENT_STORAGE_KEY = "efe-cookie-consent";

export type ConsentValue = "accepted" | "rejected";

const listeners = new Set<() => void>();

function isConsentValue(value: string | null): value is ConsentValue {
  return value === "accepted" || value === "rejected";
}

export function getConsent(): ConsentValue | null {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    return isConsentValue(value) ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value: ConsentValue): void {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    // ignore quota / private mode
  }
  listeners.forEach((listener) => listener());
}

export function subscribeConsent(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function hasAnalyticsConsent(): boolean {
  return getConsent() === "accepted";
}
