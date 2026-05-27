export interface Product {
  name: string
  description: string
  buyLink: string
  image?: string
}

export interface Category {
  id: string
  label: string
  emoji: string
  bg: string
  products: Product[]
}

export const categories: Category[] = [
  { id: 'holistic-sleep',       label: 'Sleep Essentials', emoji: '🌙', bg: 'from-indigo-100 to-blue-50',   products: [] },
  { id: 'holistic-kitchen',     label: 'Kitchen',          emoji: '🍳', bg: 'from-orange-100 to-amber-50',  products: [] },
  { id: 'holistic-pantry',      label: 'Pantry',           emoji: '🫙', bg: 'from-yellow-100 to-lime-50',   products: [] },
  { id: 'holistic-superfoods',  label: 'Superfoods',       emoji: '🥦', bg: 'from-emerald-100 to-green-50', products: [] },
  { id: 'holistic-wellness',    label: 'Wellness',         emoji: '🌿', bg: 'from-teal-100 to-emerald-50',  products: [] },
  { id: 'holistic-apparel',     label: 'Apparel',          emoji: '👘', bg: 'from-rose-100 to-pink-50',     products: [] },
  { id: 'holistic-shoes',       label: 'Shoes',            emoji: '👟', bg: 'from-sky-100 to-cyan-50',      products: [] },
  { id: 'holistic-babies',      label: 'Babies & Kids',    emoji: '🧸', bg: 'from-pink-100 to-rose-50',     products: [] },
  { id: 'holistic-furniture',   label: 'Furniture',        emoji: '🪑', bg: 'from-stone-100 to-amber-50',   products: [] },
  { id: 'holistic-travel',      label: 'Travel',           emoji: '✈️', bg: 'from-blue-100 to-sky-50',      products: [] },
  { id: 'holistic-books',       label: 'Books',            emoji: '📚', bg: 'from-violet-100 to-purple-50', products: [] },
  { id: 'holistic-quotes',      label: 'Quotes',           emoji: '💬', bg: 'from-amber-100 to-yellow-50',  products: [] },
  { id: 'holistic-misc',        label: 'Misc',             emoji: '✨', bg: 'from-fuchsia-100 to-pink-50',  products: [] },
]
