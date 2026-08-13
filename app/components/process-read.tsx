const COLS = [
  { tone: "mist", n: 3 },
  { tone: "green", n: 5 },
  { tone: "lilac", n: 4 },
  { tone: "mist", n: 6 },
  { tone: "green", n: 7 },
  { tone: "purple", n: 5 },
  { tone: "lilac", n: 8 },
  { tone: "green", n: 4 },
] as const;

function Star() {
  return (
    <svg className="process-read__star" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 .35 9.25 6.75 15.65 8 9.25 9.25 8 15.65 6.75 9.25 .35 8 6.75 6.75Z" />
    </svg>
  );
}

export function ProcessRead() {
  return (
    <div className="process-read">
      <div className="process-read__chart" aria-hidden="true">
        {COLS.map((col, index) => (
          <span
            key={`${col.tone}-${index}`}
            className={`process-read__col process-read__col--${col.tone}`}
          >
            {Array.from({ length: col.n }, (_, star) => (
              <Star key={star} />
            ))}
          </span>
        ))}
      </div>

      <ul className="process-read__legend">
        <li>Contexto</li>
        <li>Travas</li>
        <li>Crescimento</li>
      </ul>

      <ul className="process-read__findings">
        <li className="process-read__row">
          <span className="process-read__copy">
            <strong>Onde está</strong>
            <span>Leitura do briefing</span>
          </span>
          <span className="process-read__badge">Qualidade</span>
        </li>
        <li className="process-read__row">
          <span className="process-read__copy">
            <strong>O que trava</strong>
            <span>Achado do diagnóstico</span>
          </span>
          <span className="process-read__badge">Qualidade</span>
        </li>
        <li className="process-read__row process-read__row--product">
          <span className="process-read__copy">
            <strong>Estratégia personalizada</strong>
            <span>Apresentação da proposta</span>
          </span>
          <span className="process-read__badge process-read__badge--ready">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3.4 8.2 6.3 11.1 12.6 4.7"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Proposta
          </span>
        </li>
      </ul>
    </div>
  );
}
