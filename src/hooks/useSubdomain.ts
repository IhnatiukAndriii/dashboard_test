import { useEffect, useState } from 'react'

export function useSubdomain() {
  const [subdomain, setSubdomain] = useState<string | null>(null)

  useEffect(() => {
    const hostname = window.location.hostname

    // Localhost or Vercel preview URLs
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.includes('vercel.app')) {
      const testSubdomain = localStorage.getItem('test_subdomain')
      if (testSubdomain) {
        setSubdomain(testSubdomain)
      } else {
        setSubdomain('example')
      }
      return
    }

    const parts = hostname.split('.')
    if (parts.length >= 3) {
      setSubdomain(parts[0])
    } else {
      setSubdomain('example')
    }
  }, [])

  return subdomain
}
