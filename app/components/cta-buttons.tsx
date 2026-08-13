export function CtaButtons() {
  return (
    <div className="btn-row">
      <a className="btn btn--ghost" href="#contato">
        <span className="btn__icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none">
            <path
              d="M3 4.2h10c.7 0 1.25.5 1.25 1.15v5c0 .64-.55 1.15-1.25 1.15H7.1L4.15 14V11.5H3c-.7 0-1.25-.51-1.25-1.15v-5C1.75 4.7 2.3 4.2 3 4.2Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="btn__label">Falar conosco</span>
      </a>
      <a className="btn btn--primary" href="#contato">
        <span className="btn__label">Agendar diagnóstico gratuito</span>
        <span className="btn__icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none">
            <rect
              x="2.5"
              y="3.6"
              width="11"
              height="10.2"
              rx="1.6"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path d="M2.5 7h11" stroke="currentColor" strokeWidth="1.6" />
            <path
              d="M5.3 2.3v2.6M10.7 2.3v2.6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </a>
    </div>
  );
}
