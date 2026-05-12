interface Testimonial {
  name: string
  role: string
  quote: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    role: 'Yoga Instructor',
    initials: 'SM',
    quote:
      'After years of chronic fatigue, just three months of herbal treatment and acupuncture completely transformed my energy levels. I feel like myself again.',
  },
  {
    name: 'James T.',
    role: 'Software Engineer',
    initials: 'JT',
    quote:
      'The nutritional counseling combined with mind-body sessions gave me tools I use every single day. My anxiety is manageable for the first time in years.',
  },
  {
    name: 'Elena R.',
    role: 'Mother of two',
    initials: 'ER',
    quote:
      'I was skeptical at first, but the whole-person approach here is unlike anything I have experienced. Compassionate, thorough, and genuinely effective.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-600 text-sm tracking-widest uppercase">Kind Words</span>
          <h2 className="text-4xl font-semibold text-stone-800 mt-2">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-stone-50 rounded-2xl p-8 border border-stone-100">
              <p className="text-stone-600 leading-relaxed italic mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center text-sm font-semibold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-800">{t.name}</p>
                  <p className="text-xs text-stone-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
