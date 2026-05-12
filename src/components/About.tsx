export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-emerald-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image placeholder */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-emerald-200 to-stone-200 flex items-center justify-center text-8xl shadow-inner">
            🌱
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg px-6 py-4 text-center">
            <p className="text-3xl font-semibold text-emerald-700">15+</p>
            <p className="text-xs text-stone-500 mt-1">Years of Practice</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="text-emerald-600 text-sm tracking-widest uppercase">Our Story</span>
          <h2 className="text-4xl font-semibold text-stone-800 mt-2 mb-6 leading-snug">
            Rooted in Tradition,<br />Guided by Science
          </h2>
          <p className="text-stone-500 leading-relaxed mb-4">
            Founded on the belief that true healing addresses the whole person, our practice blends
            ancient wisdom with modern understanding. We work with each client to uncover the root
            causes of imbalance rather than simply managing symptoms.
          </p>
          <p className="text-stone-500 leading-relaxed mb-8">
            Our practitioners hold deep training in traditional Chinese medicine, Ayurveda, Western
            herbalism, and integrative nutrition — providing you with a truly comprehensive path to
            wellness.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { num: '500+', label: 'Clients Served' },
              { num: '100%', label: 'Natural Remedies' },
              { num: '6', label: 'Healing Modalities' },
              { num: '1:1', label: 'Personalized Care' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm text-center">
                <p className="text-2xl font-semibold text-emerald-700">{stat.num}</p>
                <p className="text-xs text-stone-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
