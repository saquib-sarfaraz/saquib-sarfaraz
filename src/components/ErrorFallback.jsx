export default function ErrorFallback({
  title = 'Unable to load',
  message,
  openUrl,
  onRetry,
}) {
  return (
    <div className="p-10 md:p-12 text-center">
      <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">{message}</p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
        {openUrl ? (
          <a
            href={openUrl}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-white text-void font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all"
          >
            Open in new tab
          </a>
        ) : null}
        {onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            className="px-6 py-3 rounded-full border border-white/10 text-gray-200 hover:bg-white/5 transition-all"
          >
            Try again
          </button>
        ) : null}
      </div>
    </div>
  )
}

