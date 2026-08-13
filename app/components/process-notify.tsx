export function ProcessNotify() {
  return (
    <ul className="process-notify" aria-label="Etapas da Fase 1">
      <li className="process-notify__card process-notify__card--brief">
        <span className="process-notify__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M8 3.75h6.4L19.25 8.7V20.25H8A1.25 1.25 0 0 1 6.75 19V5A1.25 1.25 0 0 1 8 3.75Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path
              d="M14.35 3.75V8.7h4.9"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path
              d="M9.4 12.4h5.4M9.4 15.6h3.6"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="process-notify__body">
          <span className="process-notify__label">Reunião 1</span>
          <strong>Briefing</strong>
        </span>
        <span className="process-notify__trend" aria-hidden="true">
          <svg viewBox="0 0 52 22" fill="none">
            <path
              d="M1 16.5 9 13.2 16.5 15.4 25 8.2 33 10.6 42 4.5 51 7.2"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Contexto</span>
        </span>
      </li>

      <li className="process-notify__card process-notify__card--diag">
        <span className="process-notify__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.7" />
            <path
              d="M15.6 15.6 20 20"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
            <path
              d="M8.4 11h5.2M11 8.4v5.2"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="process-notify__body">
          <span className="process-notify__label">Reunião 1</span>
          <strong>Diagnóstico</strong>
        </span>
        <span className="process-notify__trend" aria-hidden="true">
          <svg viewBox="0 0 52 22" fill="none">
            <path
              d="M1 12.5 8.5 14.8 16 9.4 24.5 16.2 33 6.4 41.5 10.1 51 3.8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Leitura</span>
        </span>
      </li>

      <li className="process-notify__card process-notify__card--plan">
        <span className="process-notify__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="8.1" stroke="currentColor" strokeWidth="1.7" />
            <path
              d="M12 4.2V12l5.4 5.4"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="1.35" fill="currentColor" />
          </svg>
        </span>
        <span className="process-notify__body">
          <span className="process-notify__label">Reunião 2</span>
          <strong>Estratégia</strong>
        </span>
        <span className="process-notify__trend" aria-hidden="true">
          <svg viewBox="0 0 52 22" fill="none">
            <path
              d="M1 15.2 10 12.6 17.5 14.8 26.5 7.4 35 9.8 43.5 4.2 51 6.6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Plano</span>
        </span>
      </li>
    </ul>
  );
}
