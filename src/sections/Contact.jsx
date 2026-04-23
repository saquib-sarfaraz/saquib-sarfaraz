import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const revealRef = useReveal()

  return (
    <section id="contact" className="py-20 px-6 pb-32">
      <div ref={revealRef} className="max-w-3xl mx-auto text-center reveal">
        <h2 className="font-display text-4xl font-bold mb-8">
          Ready to <span className="text-holoCyan">Collaborate?</span>
        </h2>

        <form
          action="https://formspree.io/f/mrblvrzv"
          method="POST"
          className="glass-panel rounded-[30px] p-8 md:p-12 text-left space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs text-gray-500 uppercase tracking-widest ml-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-void/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-holoCyan/50 focus:shadow-neon transition-all"
                placeholder="Enter name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-500 uppercase tracking-widest ml-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-void/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-holoCyan/50 focus:shadow-neon transition-all"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-gray-500 uppercase tracking-widest ml-2">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full bg-void/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-holoCyan/50 focus:shadow-neon transition-all"
              placeholder="How can I help you?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-holoCyan to-electricBlue text-white font-bold text-lg hover:shadow-neon transition-all transform hover:-translate-y-1"
          >
            Send Transmission
          </button>
        </form>

        <div className="mt-12 flex justify-center gap-6 text-gray-400">
          <a
            href="https://www.linkedin.com/in/saquib-sarfaraz-1691b9292/"
            className="hover:text-holoCyan transition-colors"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://github.com/saquib-sarfaraz?tab=repositories"
            className="hover:text-white transition-colors"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://www.instagram.com/saquib.sarfaraz?igsh=MTB0ZWdlbWZnMTQ1dA=="
            className="hover:text-blue-400 transition-colors"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

