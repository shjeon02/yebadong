'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems = [
    { label: 'About Us', href: '/intro' },
    { label: 'Interview', href: '/interview' },
    { label: 'Poll', href: '/poll' },
    { label: 'Link', href: '/link' },
    { label: 'Review', href: '/review' },
    { label: 'Gigs', href: '/gigs' },
    { label: 'Misc', href: '/misc' },
    { label: 'Fun', href: '/fun' },
    { label: 'Gathering', href: '/gathering' },
    { label: 'Guestbook', href: '/guestbook' }
  ]

  return (
    <nav className="w-full">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center items-center gap-x-6 lg:gap-x-8 py-3 text-sm font-medium">
        {navItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="text-gray-600 hover:text-black transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
      
      {/* Mobile Navigation - Hamburger Menu */}
      <div className="md:hidden relative">
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Mobile Menu Dropdown - Screen-Safe Positioning */}
        {isMenuOpen && (
          <div className="fixed top-20 right-4 w-56 min-w-48 max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="p-4">
              <div className="flex flex-col gap-2">
                {navItems.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="text-gray-600 hover:text-black transition-colors text-left py-3 px-4 rounded-md hover:bg-gray-50 border border-gray-100 whitespace-nowrap"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Backdrop for mobile menu */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-20 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  )
} 