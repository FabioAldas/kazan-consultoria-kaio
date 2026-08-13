export function ProcessLoop() {
  return (
    <div className="process-loop">
      <span className="process-loop__node process-loop__node--watch">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M2.8 12s3.4-6.2 9.2-6.2S21.2 12 21.2 12s-3.4 6.2-9.2 6.2S2.8 12 2.8 12Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        Monitorar
      </span>

      <div className="process-loop__stage">
        <span className="process-loop__pulse" aria-hidden="true" />
        <span className="process-loop__pulse process-loop__pulse--late" aria-hidden="true" />

        <svg className="process-loop__ring" viewBox="0 0 280 140" aria-hidden="true">
          <ellipse
            cx="140"
            cy="70"
            rx="124"
            ry="52"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>

        <div className="process-loop__core" aria-hidden="true">
          <span className="process-loop__pack process-loop__pack--a">
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
          <span className="process-loop__pack process-loop__pack--b">
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
          <span className="process-loop__pack process-loop__pack--c">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M3.75 8.2V18.4A1.6 1.6 0 0 0 5.35 20h13.3a1.6 1.6 0 0 0 1.6-1.6V9.6A1.6 1.6 0 0 0 18.65 8H11.4L9.3 5.5H5.35A1.6 1.6 0 0 0 3.75 7.1V8.2Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <span className="process-loop__token" aria-hidden="true" />
      </div>

      <span className="process-loop__node process-loop__node--tune">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 8h11.5M4 16h7.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="17.2" cy="8" r="2.15" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="13.2" cy="16" r="2.15" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        Ajustar
      </span>
    </div>
  );
}
