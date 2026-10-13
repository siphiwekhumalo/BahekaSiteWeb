import { useSyncExternalStore } from 'react'

// Minimal client-side router (no extra dependency).
// Supports paths like "/products" and "/#services" or "/products#novia".

const EVENT = 'baheka:navigate'

function subscribe(callback) {
  window.addEventListener('popstate', callback)
  window.addEventListener(EVENT, callback)
  return () => {
    window.removeEventListener('popstate', callback)
    window.removeEventListener(EVENT, callback)
  }
}

export function usePath() {
  return useSyncExternalStore(subscribe, () => window.location.pathname)
}

export function scrollToHash(hash, behavior = 'smooth') {
  if (!hash) return false
  const el = document.getElementById(decodeURIComponent(hash.slice(1)))
  if (!el) return false
  el.scrollIntoView({ behavior, block: 'start' })
  return true
}

export function navigate(href) {
  const url = new URL(href, window.location.href)
  const samePage = url.pathname === window.location.pathname

  if (samePage) {
    if (url.hash) {
      window.history.replaceState(null, '', url.pathname + url.hash)
      scrollToHash(url.hash)
    } else {
      window.history.replaceState(null, '', url.pathname)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return
  }

  window.history.pushState(null, '', url.pathname + url.hash)
  window.dispatchEvent(new Event(EVENT))
}

export function Link({ href, onClick, children, ...props }) {
  const handleClick = (e) => {
    onClick?.(e)
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      props.target === '_blank'
    ) {
      return
    }
    e.preventDefault()
    navigate(href)
  }
  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
