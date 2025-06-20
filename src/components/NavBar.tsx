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
    <nav className="flex justify-center flex-wrap gap-x-6 gap-y-2 py-3 border-t border-gray-200 text-sm bg-blue-100">
      {navItems.map(({ label, href, external }) => (
        external ? (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 font-medium text-gray-500 hover:text-primary-600 transition-colors duration-200 rounded-md hover:bg-gray-200"
          >
            {label}
          </a>
        ) : (
          <Link
            key={label}
            href={href}
            className="px-3 py-2 font-medium text-gray-500 hover:text-primary-600 transition-colors duration-200 rounded-md hover:bg-gray-200"
          >
            {label}
          </Link>
        )
      ))}
    </nav>
  )
} 