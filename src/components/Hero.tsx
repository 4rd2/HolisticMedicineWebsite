export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6 pt-16 bg-gradient-to-b from-emerald-50 to-stone-50"
    >
      <div className="max-w-3xl">
        <span className="inline-block text-emerald-700 text-sm tracking-widest uppercase mb-4">
          Natural • Holistic • Traditional
        </span>
        <h1 className="text-5xl md:text-6xl font-semibold text-stone-800 leading-tight mb-6">
          Restore Balance,<br />Heal Naturally
        </h1>
        <p className="text-lg text-stone-500 max-w-xl mx-auto mb-10 leading-relaxed">
          Drawing on centuries of traditional medicine, we offer personalized holistic care to
          nurture your body, mind, and spirit back to harmony.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors"
          >
            Book a Consultation
          </a>
          <a
            href="#services"
            className="border border-stone-300 hover:border-emerald-600 text-stone-600 hover:text-emerald-700 px-8 py-3 rounded-full text-sm font-medium transition-colors"
          >
            Explore Services
          </a>
        </div>

        {/* Decorative leaf divider */}
        <div className="mt-20 text-emerald-300 text-4xl select-none">✦ ✦ ✦</div>
      </div>
    </section>
  )
}
