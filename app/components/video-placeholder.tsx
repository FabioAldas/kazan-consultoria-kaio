type VideoPlaceholderProps = {
  title?: string;
  featured?: boolean;
  youtubeId?: string;
};

export function VideoPlaceholder({
  title,
  featured,
  youtubeId,
}: VideoPlaceholderProps) {
  return (
    <figure className={featured ? "video video--featured" : "video"}>
      <div className="video__frame">
        {youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
            title={title ?? "Vídeo"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <span className="video__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="11"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" />
            </svg>
          </span>
        )}
      </div>
      {title && !youtubeId ? (
        <figcaption className="video__caption">{title}</figcaption>
      ) : null}
    </figure>
  );
}
