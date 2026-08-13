type VideoPlaceholderProps = {
  title?: string;
  featured?: boolean;
};

export function VideoPlaceholder({ title, featured }: VideoPlaceholderProps) {
  return (
    <figure className={featured ? "video video--featured" : "video"}>
      <div className="video__frame" aria-hidden="true">
        <span className="video__play">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.4" />
            <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" />
          </svg>
        </span>
      </div>
      {title ? <figcaption className="video__caption">{title}</figcaption> : null}
    </figure>
  );
}
