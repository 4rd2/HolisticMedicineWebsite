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
  {
    id: 'holistic-sleep',
    label: 'Sleep Essentials',
    emoji: '🌙',
    bg: 'from-indigo-100 to-blue-50',
    products: [
      {
        name: 'Magnesium Glycinate',
        description: 'A highly bioavailable form of magnesium that promotes deep, restorative sleep and calms the nervous system.',
        buyLink: '#',
      },
      {
        name: 'Silk Sleep Mask',
        description: 'Pure mulberry silk eye mask that blocks light completely without putting pressure on delicate eye tissue.',
        buyLink: '#',
      },
      {
        name: 'Lavender Pillow Spray',
        description: 'Organic lavender and chamomile mist to create a calming bedtime ritual and ease the mind into rest.',
        buyLink: '#',
      },
    ],
  },
  {
    id: 'holistic-kitchen',
    label: 'Kitchen',
    emoji: '🍳',
    bg: 'from-orange-100 to-amber-50',
    products: [
      {
        name: 'Cast Iron Skillet',
        description: 'Pre-seasoned cast iron that adds trace dietary iron to food and lasts a lifetime without toxic coatings.',
        buyLink: '#',
      },
      {
        name: 'Glass Food Storage Set',
        description: 'BPA-free borosilicate glass containers to store leftovers safely without leaching chemicals into food.',
        buyLink: '#',
      },
      {
        name: 'Bamboo Cutting Board',
        description: 'Naturally antimicrobial bamboo board — a sustainable alternative to plastic that won\'t harbor bacteria.',
        buyLink: '#',
      },
    ],
  },
  {
    id: 'holistic-pantry',
    label: 'Pantry',
    emoji: '🫙',
    bg: 'from-yellow-100 to-lime-50',
    products: [
      {
        name: 'Raw Apple Cider Vinegar',
        description: 'Unfiltered ACV with the "mother" — supports digestion, blood sugar balance, and gut microbiome health.',
        buyLink: '#',
      },
      {
        name: 'Organic Coconut Aminos',
        description: 'A soy-free, lower-sodium alternative to soy sauce made from fermented coconut blossom nectar.',
        buyLink: '#',
      },
      {
        name: 'Cold-Pressed Olive Oil',
        description: 'Single-origin, polyphenol-rich olive oil for anti-inflammatory cooking and dressings.',
        buyLink: '#',
      },
    ],
  },
  {
    id: 'holistic-superfoods',
    label: 'Superfoods',
    emoji: '🥦',
    bg: 'from-emerald-100 to-green-50',
    products: [
      {
        name: 'Organic Spirulina Powder',
        description: 'Nutrient-dense blue-green algae packed with protein, B vitamins, iron, and powerful antioxidants.',
        buyLink: '#',
      },
      {
        name: 'Ashwagandha Root Extract',
        description: 'Adaptogenic herb that reduces cortisol, supports thyroid function, and builds stress resilience.',
        buyLink: '#',
      },
      {
        name: 'Cacao Nibs',
        description: 'Raw, minimally processed cacao rich in magnesium, iron, and mood-elevating theobromine.',
        buyLink: '#',
      },
    ],
  },
  {
    id: 'holistic-wellness',
    label: 'Wellness',
    emoji: '🌿',
    bg: 'from-teal-100 to-emerald-50',
    products: [
      {
        name: 'Dry Brush',
        description: 'Natural bristle body brush that stimulates lymphatic drainage, exfoliates skin, and boosts circulation.',
        buyLink: '#',
      },
      {
        name: 'Gua Sha Stone',
        description: 'Rose quartz facial tool used in Traditional Chinese Medicine to release tension and promote healthy skin.',
        buyLink: '#',
      },
      {
        name: 'Infrared Sauna Blanket',
        description: 'Far-infrared heat therapy for deep detoxification, muscle recovery, and improved cellular function.',
        buyLink: '#',
      },
    ],
  },
  {
    id: 'holistic-apparel',
    label: 'Apparel',
    emoji: '👘',
    bg: 'from-rose-100 to-pink-50',
    products: [
      {
        name: 'Organic Cotton Tee',
        description: 'GOTS-certified organic cotton — free from pesticides, dyes, and synthetic finishes that burden the skin.',
        buyLink: '#',
      },
      {
        name: 'Linen Loungewear Set',
        description: 'Breathable European flax linen that regulates body temperature and softens naturally with every wash.',
        buyLink: '#',
      },
      {
        name: 'Wool Base Layer',
        description: 'Merino wool underlayer that wicks moisture, resists odor, and maintains warmth even when damp.',
        buyLink: '#',
      },
    ],
  },
  {
    id: 'holistic-shoes',
    label: 'Shoes',
    emoji: '👟',
    bg: 'from-sky-100 to-cyan-50',
    products: [
      {
        name: 'Barefoot Sneakers',
        description: 'Zero-drop, wide-toe-box shoes that allow natural foot movement and strengthen intrinsic foot muscles.',
        buyLink: '#',
      },
      {
        name: 'Grounding Sandals',
        description: 'Leather sandals with a conductive carbon plug sole that allows electron exchange with the earth.',
        buyLink: '#',
      },
      {
        name: 'Wool Slippers',
        description: 'Felted wool house slippers that keep feet warm without synthetic materials or toxic rubber soles.',
        buyLink: '#',
      },
    ],
  },
  {
    id: 'holistic-babies',
    label: 'Babies & Kids',
    emoji: '🧸',
    bg: 'from-pink-100 to-rose-50',
    products: [
      {
        name: 'Organic Baby Balm',
        description: 'Fragrance-free, certified organic shea and calendula balm gentle enough for newborn skin.',
        buyLink: '#',
      },
      {
        name: 'Natural Rubber Pacifier',
        description: 'One-piece natural rubber pacifier — no BPA, PVC, or synthetic parts that could off-gas chemicals.',
        buyLink: '#',
      },
      {
        name: 'Wooden Stacking Toy',
        description: 'Non-toxic, water-based painted wooden blocks that support tactile development without plastic.',
        buyLink: '#',
      },
    ],
  },
  {
    id: 'holistic-furniture',
    label: 'Furniture',
    emoji: '🪑',
    bg: 'from-stone-100 to-amber-50',
    products: [
      {
        name: 'Solid Wood Standing Desk',
        description: 'FSC-certified solid hardwood desk free of formaldehyde-emitting MDF and toxic varnishes.',
        buyLink: '#',
      },
      {
        name: 'Natural Latex Mattress',
        description: 'GOLS-certified organic latex mattress with no memory foam, flame retardants, or off-gassing synthetics.',
        buyLink: '#',
      },
      {
        name: 'Beeswax Wood Polish',
        description: 'Pure beeswax and linseed oil furniture polish — nourishes wood naturally with zero VOC emissions.',
        buyLink: '#',
      },
    ],
  },
  {
    id: 'holistic-travel',
    label: 'Travel',
    emoji: '✈️',
    bg: 'from-blue-100 to-sky-50',
    products: [
      {
        name: 'EMF Blocking Pouch',
        description: 'Faraday-lined travel pouch that blocks electromagnetic radiation from phones and devices while in transit.',
        buyLink: '#',
      },
      {
        name: 'Stainless Steel Water Bottle',
        description: 'Single-wall 18/8 food-grade steel bottle — no plastic liner, no leaching, safe for hot and cold liquids.',
        buyLink: '#',
      },
      {
        name: 'Digestive Enzyme Travel Pack',
        description: 'Portable enzyme blend to support digestion when eating unfamiliar foods away from home.',
        buyLink: '#',
      },
    ],
  },
  {
    id: 'holistic-books',
    label: 'Books',
    emoji: '📚',
    bg: 'from-violet-100 to-purple-50',
    products: [
      {
        name: 'The Web of Life — Fritjof Capra',
        description: 'A landmark text connecting systems thinking, ecology, and the living patterns behind all natural health.',
        buyLink: '#',
      },
      {
        name: 'Nourishing Traditions — Sally Fallon',
        description: 'The definitive guide to traditional whole-food cooking, fermentation, and nutrient-dense meal preparation.',
        buyLink: '#',
      },
      {
        name: 'The Divided Mind — John Sarno',
        description: 'Groundbreaking exploration of the mind-body connection and how emotional stress manifests as physical pain.',
        buyLink: '#',
      },
    ],
  },
  {
    id: 'holistic-quotes',
    label: 'Quotes',
    emoji: '💬',
    bg: 'from-amber-100 to-yellow-50',
    products: [
      {
        name: '"Let food be thy medicine."',
        description: '— Hippocrates. A foundational principle of holistic health: the body heals when given the right nourishment.',
        buyLink: '#',
      },
      {
        name: '"The natural healing force within each of us is the greatest force in getting well."',
        description: '— Hippocrates. Trust the intelligence of the body — support it rather than override it.',
        buyLink: '#',
      },
      {
        name: '"He who has health has hope; he who has hope has everything."',
        description: '— Arabian Proverb. A reminder that wellness is the foundation of all other abundance in life.',
        buyLink: '#',
      },
    ],
  },
  {
    id: 'holistic-misc',
    label: 'Misc',
    emoji: '✨',
    bg: 'from-fuchsia-100 to-pink-50',
    products: [
      {
        name: 'Himalayan Salt Lamp',
        description: 'Hand-carved salt crystal lamp that emits a warm glow and is believed to improve air quality in small spaces.',
        buyLink: '#',
      },
      {
        name: 'Beeswax Candles',
        description: 'Pure beeswax candles that burn clean without releasing the toxic soot and paraffin fumes of conventional candles.',
        buyLink: '#',
      },
      {
        name: 'Copper Water Pitcher',
        description: 'Ayurvedic practice of storing water in copper overnight — believed to balance the three doshas and alkalize water.',
        buyLink: '#',
      },
    ],
  },
]
