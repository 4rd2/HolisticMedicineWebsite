interface Service {
  icon: string
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: '🌿',
    title: 'Herbal Medicine',
    description:
      'Custom herbal formulas sourced from time-honored botanical traditions to support healing from within.',
  },
  {
    icon: '🪡',
    title: 'Acupuncture',
    description:
      'Precise needle placement along energy meridians to relieve pain, reduce stress, and restore flow.',
  },
  {
    icon: '🤲',
    title: 'Therapeutic Massage',
    description:
      'Deep-tissue and restorative massage techniques to release tension and promote circulation.',
  },
  {
    icon: '🧘',
    title: 'Mind-Body Therapy',
    description:
      'Guided breathwork, meditation, and movement practices to calm the nervous system and enhance clarity.',
  },
  {
    icon: '🥗',
    title: 'Nutritional Counseling',
    description:
      'Whole-food, seasonal dietary guidance rooted in traditional nutritional wisdom.',
  },
  {
    icon: '🌸',
    title: 'Flower Essence Therapy',
    description:
      'Gentle vibrational remedies that address emotional imbalances at their root.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-600 text-sm tracking-widest uppercase">What We Offer</span>
          <h2 className="text-4xl font-semibold text-stone-800 mt-2">Our Healing Services</h2>
          <p className="text-stone-500 mt-4 max-w-lg mx-auto">
            Every treatment is tailored to your unique constitution, history, and wellness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-2xl border border-stone-100 hover:border-emerald-200 hover:shadow-md transition-all bg-stone-50 hover:bg-emerald-50/40"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-stone-800 mb-2">{s.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
