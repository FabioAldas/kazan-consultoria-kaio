import Image from "next/image";

export function ProcessSend() {
  return (
    <div className="process-send">
      <div className="process-send__node">
        <span className="process-send__avatar process-send__avatar--client" aria-hidden="true">
          <svg viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="12" r="5.2" stroke="currentColor" strokeWidth="1.7" />
            <path
              d="M6.5 26.5c1.1-5.2 4.6-8 9.5-8s8.4 2.8 9.5 8"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="process-send__name">Cliente</span>
      </div>

      <div className="process-send__flight" aria-hidden="true">
        <svg className="process-send__arc" viewBox="0 0 320 100" preserveAspectRatio="none">
          <path
            d="M12 82 Q 160 10 308 82"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>

        <span className="process-send__pack process-send__pack--a">
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
        <span className="process-send__pack process-send__pack--b">
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
        <span className="process-send__pack process-send__pack--c">
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

      <div className="process-send__node">
        <span className="process-send__avatar process-send__avatar--kaio">
          <Image
            src="/images/foto-bio-kazan-v1.webp"
            alt=""
            width={72}
            height={72}
          />
        </span>
        <span className="process-send__name">Kaio</span>
      </div>
    </div>
  );
}
