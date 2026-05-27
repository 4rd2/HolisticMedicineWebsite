import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 pt-16 bg-gradient-to-b from-emerald-50 via-stone-50 to-white">
      <div className="max-w-3xl">
        <span className="inline-block bg-emerald-100 text-emerald-700 text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
          A Curated Wellness Platform
        </span>

        <h1 className="text-5xl md:text-6xl font-semibold text-stone-800 leading-tight mb-6">
          Live Well,<br />On Purpose.
        </h1>

        <p className="text-lg text-stone-500 max-w-2xl mx-auto mb-4 leading-relaxed">
          Holistic living isn't a trend — it's a return to the way our bodies were designed to
          thrive. We curate the tools, foods, and wisdom that support a life of genuine,
          lasting wellness.
        </p>
        <p className="text-base text-stone-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Every recommendation is filtered through the lens of Traditional Chinese Medicine,
          whole-food nutrition, and deep study of integrative wellness.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/holistic-living"
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors"
          >
            Explore the Shop
          </Link>
          <Link
            to="/blog"
            className="border border-stone-300 hover:border-emerald-600 text-stone-600 hover:text-emerald-700 px-8 py-3 rounded-full text-sm font-medium transition-colors"
          >
            Read the Blog
          </Link>
        </div>

        <div className="mt-20 flex justify-center gap-6 text-stone-300 text-sm tracking-widest uppercase select-none">
          <span>Mind</span>
          <span>✦</span>
          <span>Body</span>
          <span>✦</span>
          <span>Spirit</span>
        </div>
      </div>
    </section>
  )
}
