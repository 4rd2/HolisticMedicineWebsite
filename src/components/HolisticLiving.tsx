import { useParams, useNavigate, Link } from 'react-router-dom'
import { catalog, resolveNode, type GroupNode, type LeafNode } from '../data/productsData'

// Build the breadcrumb trail from URL segments
function buildBreadcrumb(segments: string[]) {
  const crumbs = [{ label: 'Holistic Living', path: '/holistic-living' }]
  let node = resolveNode([])  // root
  for (let i = 0; i < segments.length; i++) {
    if (!node || node.type !== 'group') break
    const child = node.children.find((c) => c.id === segments[i])
    if (!child) break
    crumbs.push({
      label: child.label,
      path: '/holistic-living/' + segments.slice(0, i + 1).join('/'),
    })
    node = child
  }
  return crumbs
}

function GroupView({ node, basePath }: { node: GroupNode; basePath: string }) {
  const navigate = useNavigate()

  if (node.children.length === 0) {
    return (
      <div className="text-center py-20 text-stone-400">
        <p className="text-4xl mb-3">🌿</p>
        <p className="text-sm">Sub-categories coming soon.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {node.children.map((child) => (
        <button
          key={child.id}
          onClick={() => navigate(`${basePath}/${child.id}`)}
          className="group flex flex-col items-center rounded-2xl overflow-hidden border border-stone-100 hover:border-emerald-200 hover:shadow-md transition-all bg-stone-50 hover:bg-white text-left"
        >
          <div className={`w-full h-24 bg-gradient-to-br ${child.bg ?? 'from-stone-100 to-stone-50'} flex items-center justify-center text-4xl`}>
            {child.emoji ?? '🌿'}
          </div>
          <div className="px-3 py-3 w-full">
            <p className="text-sm font-medium text-stone-700 group-hover:text-emerald-700 transition-colors leading-tight">
              {child.label}
            </p>
            <p className="text-xs text-stone-400 mt-0.5">
              {child.type === 'group'
                ? `${child.children.length} sub-categories`
                : `${child.products.length} products`}
            </p>
          </div>
        </button>
      ))}
    </div>
  )
}

function LeafView({ node }: { node: LeafNode }) {
  if (node.products.length === 0) {
    return (
      <div className="text-center py-20 text-stone-400">
        <p className="text-4xl mb-3">🌿</p>
        <p className="text-sm">Products coming soon.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {node.products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col rounded-2xl border border-stone-100 bg-stone-50 overflow-hidden hover:shadow-md hover:border-emerald-200 transition-all"
        >
          {product.image ? (
            <img src={product.image} alt={product.name} className="w-full h-44 object-cover" />
          ) : (
            <div className="w-full h-44 bg-gradient-to-br from-emerald-100 to-stone-100 flex items-center justify-center text-5xl">
              🌿
            </div>
          )}
          <div className="flex flex-col flex-1 p-5">
            <h3 className="text-base font-semibold text-stone-800 mb-2">{product.name}</h3>
            {product.description && (
              <p className="text-sm text-stone-500 leading-relaxed flex-1 mb-4">{product.description}</p>
            )}
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="mt-auto inline-block text-center bg-emerald-700 hover:bg-emerald-800 text-white text-sm px-5 py-2.5 rounded-full transition-colors"
            >
              Shop Now →
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function HolisticLiving() {
  const { '*': splat } = useParams()
  const segments = splat ? splat.split('/').filter(Boolean) : []
  const breadcrumb = buildBreadcrumb(segments)

  const currentNode = segments.length === 0
    ? { type: 'group' as const, id: 'root', label: 'Holistic Living', children: catalog }
    : resolveNode(segments)

  const basePath = '/holistic-living' + (segments.length ? '/' + segments.join('/') : '')

  return (
    <section className="min-h-screen pt-24 pb-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-stone-400 mb-8 flex-wrap">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.path} className="flex items-center gap-1.5">
              {i < breadcrumb.length - 1 ? (
                <>
                  <Link to={crumb.path} className="hover:text-emerald-600 transition-colors">
                    {crumb.label}
                  </Link>
                  <span className="text-stone-300">/</span>
                </>
              ) : (
                <span className="text-stone-700 font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Page title */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-stone-800">
            {currentNode?.label ?? 'Not found'}
          </h1>
          {segments.length > 0 && (
            <button
              onClick={() => window.history.back()}
              className="mt-2 text-sm text-emerald-600 hover:text-emerald-800 transition-colors flex items-center gap-1"
            >
              ← Back
            </button>
          )}
        </div>

        {/* Content */}
        {!currentNode ? (
          <div className="text-center py-20 text-stone-400">
            <p className="text-sm">Page not found.</p>
            <Link to="/holistic-living" className="mt-4 inline-block text-emerald-600 text-sm hover:underline">
              ← Back to Holistic Living
            </Link>
          </div>
        ) : currentNode.type === 'group' ? (
          <GroupView node={currentNode} basePath={basePath} />
        ) : (
          <LeafView node={currentNode} />
        )}

      </div>
    </section>
  )
}
