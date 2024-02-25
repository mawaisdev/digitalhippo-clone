'use client'

import { PRODUCT_CATEGORIES } from '@/config'
import { useState, useRef, useEffect } from 'react'

import { NavItem } from '@/components/nav-item'

import { useOnClickOutside } from '@/hooks/use-on-click-outside'

export const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const navRef = useRef<null | HTMLDivElement>(null)

  useOnClickOutside(navRef, () => setActiveIndex(null))

  const isAnyOpen = activeIndex !== null

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null)
    }

    document.addEventListener('keydown', handler)

    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [])
  return (
    <div className='flex gap-4 h-full' ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveIndex(null)
          } else {
            setActiveIndex(index)
          }
        }

        const isOpen = index === activeIndex

        return (
          <NavItem
            key={category.value}
            category={category}
            isAnyOpen={isAnyOpen}
            handleOpen={handleOpen}
            isOpen={isOpen}
          />
        )
      })}
    </div>
  )
}
