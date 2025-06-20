'use client'
import Link from 'next/link'

export default function NavBar() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Yebadong', href: '/intro' },
    { label: 'Interview', href: '/interview' },
    { label: 'Poll', href: '/poll' },
    { label: 'Link', href: '/link' },
    { label: 'Review', href: '/review' },
    { label: 'Gigs', href: '/concert' },
    { label: 'Misc', href: '/misc' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Jacket', href: '/images' },
    { label: 'Guestbook', href: 'http://freegb1.interpia98.net/list.asp?db=yebadong', external: true }
  ]

  return (
    <nav className="w-full">
      <div className="flex justify-center items-center gap-x-6 sm:gap-x-8 py-3 text-sm font-medium">
        {navItems.map(({ label, href, external }) => (
          external ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-colors"
            >
              {label}
            </a>
          ) : (
            <Link
              key={label}
              href={href}
              className="text-gray-600 hover:text-black transition-colors"
            >
              {label}
            </Link>
          )
        ))}
      </div>
    </nav>
  )
} 