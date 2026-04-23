export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative pt-20">
      <div className="text-center z-10 max-w-4xl reveal active">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-holoCyan/20 bg-holoCyan/5 text-holoCyan text-xs tracking-widest uppercase mb-8 shadow-neon">
          <span className="w-2 h-2 rounded-full bg-holoCyan pulse-dot"></span>
          System Online
        </div>
        <h1 className="font-display text-5xl md:text-8xl font-bold mb-6 leading-tight">
          Building the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Future Interface.
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
          I am <span className="text-white font-medium">Saquib Sarfaraz</span>.
          Transforming ideas into high performance web interfaces through
          thoughtful design efficient code and seamless user experience.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="#projects"
            className="group relative px-8 py-3 rounded-full bg-white text-void font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10">View Work</span>
          </a>
          <a
            href="/saquib-cv.pdf"
            download
            className="resume-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium tracking-wide hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
