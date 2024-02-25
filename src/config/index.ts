export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Editor Picks',
        href: '#',
        imageSrc: '/nav/mixed.jpg',
      },
      {
        name: 'New Arrivals',
        href: '#',
        imageSrc: '/nav/blue.jpg',
      },
      {
        name: 'Best Sellers',
        href: '#',
        imageSrc: '/nav/purple.jpg',
      },
    ],
  },
  {
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      {
        name: 'Favorite Icons Picks',
        href: '#',
        imageSrc: '/icons/picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '#',
        imageSrc: '/icons/new.jpg',
      },
      {
        name: 'Best Selling Icons',
        href: '#',
        imageSrc: '/icons/bestsellers.jpg',
      },
    ],
  },
]
