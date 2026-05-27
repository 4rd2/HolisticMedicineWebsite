// ─────────────────────────────────────────────
// Core interfaces
// ─────────────────────────────────────────────

export interface Product {
  id: string
  name: string
  affiliateUrl: string       // unique tracking URL to external retailer
  description?: string
  image?: string
}

interface BaseNode {
  id: string                 // URL-safe slug, e.g. "sleep-essentials"
  label: string              // Display name
  emoji?: string
  bg?: string                // Tailwind gradient classes for the card tile
}

// A GroupNode has children — it renders a card grid when visited
export interface GroupNode extends BaseNode {
  type: 'group'
  children: TreeNode[]
}

// A LeafNode has products — it renders a product list when visited
export interface LeafNode extends BaseNode {
  type: 'leaf'
  products: Product[]
}

export type TreeNode = GroupNode | LeafNode

// ─────────────────────────────────────────────
// Helper: resolve a node by URL path segments
// e.g. ['sleep-essentials', 'bedding', 'sheets']
// ─────────────────────────────────────────────

export function resolveNode(segments: string[]): TreeNode | null {
  const root: GroupNode = {
    type: 'group',
    id: 'root',
    label: 'Holistic Living',
    children: catalog,
  }
  let current: TreeNode = root
  for (const seg of segments) {
    if (current.type !== 'group') return null
    const child: TreeNode | undefined = current.children.find((c) => c.id === seg)
    if (!child) return null
    current = child
  }
  return current
}

// ─────────────────────────────────────────────
// Catalog — 13 top-level categories
// ─────────────────────────────────────────────

export const catalog: TreeNode[] = [

  // ── 1. SLEEP ESSENTIALS (fully detailed as the reference example) ──
  {
    id: 'sleep-essentials',
    label: 'Sleep Essentials',
    emoji: '🌙',
    bg: 'from-indigo-100 to-blue-50',
    type: 'group',
    children: [
      {
        id: 'mattresses',
        label: 'Mattresses',
        emoji: '🛏️',
        type: 'leaf',
        products: [],
      },
      {
        id: 'bedding',
        label: 'Bedding',
        emoji: '🧺',
        type: 'group',
        children: [
          { id: 'sheets',     label: 'Sheets',     emoji: '🛏️', type: 'leaf', products: [] },
          { id: 'blankets',   label: 'Blankets',   emoji: '🫧',  type: 'leaf', products: [] },
          { id: 'toppers',    label: 'Toppers',    emoji: '☁️',  type: 'leaf', products: [] },
          { id: 'comforters', label: 'Comforters', emoji: '🌸',  type: 'leaf', products: [] },
          { id: 'pillows',    label: 'Pillows',    emoji: '💤',  type: 'leaf', products: [] },
        ],
      },
      {
        id: 'bed-frames',
        label: 'Bed Frames',
        emoji: '🪵',
        type: 'leaf',
        products: [],
      },
    ],
  },

  // ── 2–13. Remaining categories (sub-categories TBD) ──
  { id: 'kitchen',    label: 'Kitchen',       emoji: '🍳', bg: 'from-orange-100 to-amber-50',  type: 'group', children: [] },
  { id: 'pantry',     label: 'Pantry',        emoji: '🫙', bg: 'from-yellow-100 to-lime-50',   type: 'group', children: [] },
  { id: 'superfoods', label: 'Superfoods',    emoji: '🥦', bg: 'from-emerald-100 to-green-50', type: 'group', children: [] },
  { id: 'wellness',   label: 'Wellness',      emoji: '🌿', bg: 'from-teal-100 to-emerald-50',  type: 'group', children: [] },
  { id: 'apparel',    label: 'Apparel',       emoji: '👘', bg: 'from-rose-100 to-pink-50',     type: 'group', children: [] },
  { id: 'shoes',      label: 'Shoes',         emoji: '👟', bg: 'from-sky-100 to-cyan-50',      type: 'group', children: [] },
  { id: 'babies',     label: 'Babies & Kids', emoji: '🧸', bg: 'from-pink-100 to-rose-50',     type: 'group', children: [] },
  { id: 'furniture',  label: 'Furniture',     emoji: '🪑', bg: 'from-stone-100 to-amber-50',   type: 'group', children: [] },
  { id: 'travel',     label: 'Travel',        emoji: '✈️', bg: 'from-blue-100 to-sky-50',      type: 'group', children: [] },
  { id: 'books',      label: 'Books',         emoji: '📚', bg: 'from-violet-100 to-purple-50', type: 'group', children: [] },
  { id: 'quotes',     label: 'Quotes',        emoji: '💬', bg: 'from-amber-100 to-yellow-50',  type: 'group', children: [] },
  { id: 'misc',       label: 'Misc',          emoji: '✨', bg: 'from-fuchsia-100 to-pink-50',  type: 'group', children: [] },
]
