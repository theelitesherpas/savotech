const PhoneIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6.8 3.8 9 3.2c.7-.2 1.4.2 1.7.9l1 2.4c.2.6.1 1.3-.4 1.7l-1.3 1.2a12.6 12.6 0 0 0 4.6 4.6l1.2-1.3c.4-.5 1.1-.6 1.7-.4l2.4 1c.7.3 1.1 1 .9 1.7l-.6 2.2c-.2.7-.8 1.2-1.5 1.2C11.6 18.4 5.6 12.4 5.6 5.3c0-.7.5-1.3 1.2-1.5Z" />
  </svg>
);

/** Shared "Reach us directly" card used on the contact and start pages. */
export default function DirectChannels({ showPortalNote = false }: { showPortalNote?: boolean }) {
  return (
    <div className="start-aside-card">
      <div className="aside-head">
        <div className="aside-ico" aria-hidden="true">{PhoneIcon}</div>
        <h3>Reach us directly</h3>
      </div>
      <div className="direct-rows">
        <a className="direct-row" href="mailto:hello@savotechnologies.com">
          <span className="dr-ico b" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
              <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
            </svg>
          </span>
          <span className="dr-text">
            <strong>Email</strong>
            hello@savotechnologies.com
          </span>
        </a>
        <a className="direct-row" href="tel:+917502901234">
          <span className="dr-ico r" aria-hidden="true">{PhoneIcon}</span>
          <span className="dr-text">
            <strong>Call</strong>
            +91 75029 01234
          </span>
        </a>
        <a
          className="direct-row direct-wa"
          href="https://wa.me/917502901234?text=Hi%20Savo%20Technologies%2C%20I%20would%20like%20to%20talk%20about%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="dr-ico g" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6a12.5 12.5 0 0 1-4.8-4.4c-.6-1-.9-1.9-.9-2.7 0-.8.4-1.5.7-1.8.3-.3.7-.4.9-.4h.6c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.6l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.5.3.1.5.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.8.9c.5.2.5.4.5.6 0 .1 0 .8-.2 1.3Z" />
            </svg>
          </span>
          <span className="dr-text">
            <strong>WhatsApp</strong>
            Chat with us instantly
          </span>
        </a>
      </div>
      {showPortalNote && (
        <p className="start-aside-note">
          Existing client?{" "}
          <a className="text-cta" href="/portal/">Client Login</a>
        </p>
      )}
    </div>
  );
}
