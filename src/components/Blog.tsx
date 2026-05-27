interface Post {
  date: string
  title: string
  excerpt: string
  tag: string
}

const posts: Post[] = [
  {
    date: 'May 2025',
    tag: 'Traditional Chinese Medicine',
    title: 'Understanding Qi: The Life Force Behind TCM',
    excerpt:
      'Qi (pronounced "chee") is the vital energy that flows through all living things. In TCM, disease arises when this flow becomes blocked or imbalanced...',
  },
  {
    date: 'April 2025',
    tag: 'Nutrition',
    title: 'What Your Hair Can Tell You About Your Health',
    excerpt:
      'Mineral Hair Analysis is a powerful diagnostic tool that reveals nutritional deficiencies and toxic burdens that standard blood tests often miss...',
  },
  {
    date: 'March 2025',
    tag: 'Iridology',
    title: 'Reading the Iris: A Window Into Whole-Body Health',
    excerpt:
      'Every organ and body system has a corresponding zone mapped within the iris. An iridology reading can reveal inherent strengths and areas needing support...',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-emerald-600 text-sm tracking-widest uppercase">Holistic Insights</span>
          <h2 className="text-4xl font-semibold text-stone-800 mt-2">From the Blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article
              key={p.title}
              className="bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Placeholder image area */}
              <div className="h-40 bg-gradient-to-br from-emerald-100 to-stone-100 flex items-center justify-center text-4xl">
                🌿
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                    {p.tag}
                  </span>
                  <span className="text-xs text-stone-400">{p.date}</span>
                </div>
                <h3 className="text-base font-semibold text-stone-800 mb-2 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed mb-4">{p.excerpt}</p>
                <a
                  href="#blog"
                  className="text-sm text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
