import { useEffect, useState } from "react";

const STORAGE_KEY = "jbr-cookie-consent";
type Consent = "accepted" | "declined";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== "accepted" && stored !== "declined") {
        const t = window.setTimeout(() => setVisible(true), 1200);
        return () => window.clearTimeout(t);
      }
    } catch {
      // localStorage unavailable (private browsing, etc.) — show banner anyway
      const t = window.setTimeout(() => setVisible(true), 1200);
      return () => window.clearTimeout(t);
    }
  }, []);

  function setConsent(value: Consent) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie notice">
      <div className="cookie-banner-inner">
        <div className="cookie-banner-text">
          <div className="cookie-banner-eyebrow">PRIVACY</div>
          <p>
            We use essential cookies and local storage to remember your
            preferences and improve site performance. By clicking
            <strong> Accept</strong> you consent to our use of cookies.
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button
            type="button"
            className="cookie-btn cookie-btn-secondary"
            onClick={() => setConsent("declined")}
          >
            Decline
          </button>
          <button
            type="button"
            className="cookie-btn cookie-btn-primary"
            onClick={() => setConsent("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
