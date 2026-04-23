export default function Loader({ label = 'Loading…' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 rounded-full border-2 border-white/15 border-t-holoCyan animate-spin"></div>
      <div className="text-xs uppercase tracking-[0.3em] text-gray-400">
        {label}
      </div>
    </div>
  )
}

