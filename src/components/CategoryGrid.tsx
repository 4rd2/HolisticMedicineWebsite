import { useNavigate } from 'react-router-dom'
import { categories } from '../data/holisticData'

export default function CategoryGrid() {
  const navigate = useNavigate()

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-emerald-600 text-sm tracking-widest uppercase">Browse the Collection</span>
          <h2 className="text-3xl font-semibold text-stone-800 mt-2">Shop by Category</h2>
          <p className="text-stone-500 mt-3 max-w-md mx-auto text-sm">
            Every category is a different dimension of your daily environment — each one an
            opportunity to choose something better.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/holistic-living?cat=${cat.id}`)}
              className="group flex flex-col items-center rounded-2xl overflow-hidden border border-stone-100 hover:border-emerald-200 hover:shadow-md transition-all bg-stone-50 hover:bg-white"
            >
              <div className={`w-full h-24 bg-gradient-to-br ${cat.bg} flex items-center justify-center text-4xl`}>
                {cat.emoji}
              </div>
              <span className="text-xs font-medium text-stone-600 group-hover:text-emerald-700 transition-colors py-3 px-2 text-center leading-tight">
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
