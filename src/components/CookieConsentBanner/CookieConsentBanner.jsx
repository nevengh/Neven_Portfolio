import { useState, useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';

function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent has been given before
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="cookieConsent"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={150}
      onAccept={handleAccept}
      onDecline={handleDecline}
      enableDeclineButton
    >
      <h3>Welcome to Nieven Ghasoun Portfolio</h3>
      <p>courses4arab.com asks for your consent to use your personal data to:</p>
      <ul>
        <li>Personalised advertising and content, advertising and content measurement, audience research and services development</li>
        <li>Store and/or access information on a device</li>
      </ul>
      <p>Your personal data will be processed and information from your device (cookies, unique identifiers, and other device data) may be stored by, accessed by and shared with 135 TCF vendor(s) and 63 ad partner(s), or used specifically by this site or app.</p>
      <p>Some vendors may process your personal data on the basis of legitimate interest, which you can object to by managing your options below. Look for a link at the bottom of this page to manage or withdraw consent in privacy and cookie settings.</p>
    </CookieConsent>
  );
}

export default CookieConsentBanner;
