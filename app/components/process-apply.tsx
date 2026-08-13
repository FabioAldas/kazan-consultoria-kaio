export function ProcessApply() {
  return (
    <div className="process-apply">
      <span className="process-apply__badge">Diagnóstico</span>

      <div className="process-apply__board">
        <span className="process-apply__scan" aria-hidden="true" />

        <div className="process-apply__slot process-apply__slot--head">
          <span className="process-apply__pack" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M7.5 3.75h6.2L19.25 9.4V20.25H7.5A1.25 1.25 0 0 1 6.25 19V5A1.25 1.25 0 0 1 7.5 3.75Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path
                d="M13.7 3.75V9.4h5.55"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="process-apply__tag process-apply__tag--a">Posicionamento</span>
          <span className="process-apply__check process-apply__check--a" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none">
              <path
                d="M3.4 8.2 6.3 11.1 12.6 4.7"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <div className="process-apply__slot process-apply__slot--main">
          <span className="process-apply__pack" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <rect
                x="3.75"
                y="5.5"
                width="16.5"
                height="13"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M3.9 16.4 8.2 12.4l3.1 2.7 3.4-3.8 5.2 5.1"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9.1" cy="9.2" r="1.15" fill="currentColor" />
            </svg>
          </span>
          <span className="process-apply__tag process-apply__tag--b">Oferta</span>
          <span className="process-apply__check process-apply__check--b" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none">
              <path
                d="M3.4 8.2 6.3 11.1 12.6 4.7"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <div className="process-apply__slot process-apply__slot--side">
          <span className="process-apply__pack" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M3.75 8.2V18.4A1.6 1.6 0 0 0 5.35 20h13.3a1.6 1.6 0 0 0 1.6-1.6V9.6A1.6 1.6 0 0 0 18.65 8H11.4L9.3 5.5H5.35A1.6 1.6 0 0 0 3.75 7.1V8.2Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="process-apply__tag process-apply__tag--c">Canal</span>
          <span className="process-apply__check process-apply__check--c" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none">
              <path
                d="M3.4 8.2 6.3 11.1 12.6 4.7"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
