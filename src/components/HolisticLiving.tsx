import { useSearchParams } from 'react-router-dom'
import { categories } from '../data/holisticData'

const ALL_ID = 'all'

export default function HolisticLiving() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeId = searchParams.get('cat') ?? ALL_ID

  function setTab(id: string) {
    setSearchParams(id === ALL_ID ? {} : { cat: id })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const activeCategory = categories.find((c) => c.id === activeId)
  const allProducts = categories.flatMap((c) =>
    c.products.map((p) => ({ ...p, categoryEmoji: c.emoji, categoryBg: c.bg, categoryLabel: c.label }))
  )

  return (
    <section className="min-h-screen pt-24 pb-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-emerald-600 text-sm tracking-widest uppercase">Curated by Holistic Living</span>
          <h1 className="text-4xl font-semibold text-stone-800 mt-2">Holistic Living Shop</h1>
          <p className="text-stone-500 mt-4 max-w-lg mx-auto">
            Every item is hand-selected to support a natural, toxin-free lifestyle aligned with holistic health principles.
          </p>
        </div>

        {/* Category tab bar */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-10">
          {/* All tab */}
          <button
            onClick={() => setTab(ALL_ID)}
            className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all border ${
              activeId === ALL_ID
                ? 'bg-emerald-700 text-white border-emerald-700'
                : 'bg-white text-stone-600 border-stone-200 hover:border-emerald-400 hover:text-emerald-700'
            }`}
          >
            🌿 All
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setTab(cat.id)}
              className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeId === cat.id
                  ? 'bg-emerald-700 text-white border-emerald-700'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-emerald-400 hover:text-emerald-700'
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* All view */}
        {activeId === ALL_ID && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product, i) => (
              <div
                key={`${product.name}-${i}`}
                className="flex flex-col rounded-2xl border border-stone-100 bg-stone-50 overflow-hidden hover:shadow-md hover:border-emerald-200 transition-all"
              >
                <div className={`h-40 bg-gradient-to-br ${product.categoryBg} flex flex-col items-center justify-center gap-1`}>
                  <span className="text-4xl">{product.categoryEmoji}</span>
                  <span className="text-xs text-stone-500 font-medium">{product.categoryLabel}</span>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h4 className="text-base font-semibold text-stone-800 mb-2">{product.name}</h4>
                  <p className="text-sm text-stone-500 leading-relaxed flex-1">{product.description}</p>
                  <a
                    href={product.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-center bg-emerald-700 hover:bg-emerald-800 text-white text-sm px-5 py-2.5 rounded-full transition-colors"
                  >
                    Shop Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Single category view */}
        {activeId !== ALL_ID && activeCategory && (
          <div>
            <div className={`flex items-center gap-3 rounded-2xl bg-gradient-to-r ${activeCategory.bg} px-6 py-4 mb-8`}>
              <span className="text-3xl">{activeCategory.emoji}</span>
              <h2 className="text-xl font-semibold text-stone-800">{activeCategory.label}</h2>
              <span className="ml-auto text-sm text-stone-500">{activeCategory.products.length} items</span>
            </div>

            {activeCategory.products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeCategory.products.map((product) => (
                  <div
                    key={product.name}
                    className="flex flex-col rounded-2xl border border-stone-100 bg-stone-50 overflow-hidden hover:shadow-md hover:border-emerald-200 transition-all"
                  >
                    <div className={`h-40 bg-gradient-to-br ${activeCategory.bg} flex items-center justify-center text-5xl`}>
                      {activeCategory.emoji}
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                      <h4 className="text-base font-semibold text-stone-800 mb-2">{product.name}</h4>
                      <p className="text-sm text-stone-500 leading-relaxed flex-1">{product.description}</p>
                      <a
                        href={product.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-center bg-emerald-700 hover:bg-emerald-800 text-white text-sm px-5 py-2.5 rounded-full transition-colors"
                      >
                        Shop Now →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-stone-400">
                <p className="text-4xl mb-3">🌿</p>
                <p className="text-sm">Items coming soon.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
