import { useEffect, useRef } from 'react'

export function useReveal(options = {}) {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    once = true,
  } = options

  const elementRef = useRef(null)

  useEffect(() => {
    const node = elementRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('active')
          if (once) observer.unobserve(entry.target)
        })
      },
      { threshold, root, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, root, rootMargin, once])

  return elementRef
}

