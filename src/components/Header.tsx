"use client"

import React from 'react'
import Link from 'next/link'
import NavBar from './NavBar'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            YEBADONG
          </Link>
          <NavBar />
        </div>
        
        {/* Mobile Layout - Header with Hamburger */}
        <div className="md:hidden">
          <div className="flex items-center h-16 relative">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              YEBADONG
            </Link>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <NavBar />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 