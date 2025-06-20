"use client"

import React from 'react'
import Link from 'next/link'
import NavBar from './NavBar'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="py-4">
            <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              YEBADONG
            </Link>
          </div>
          <NavBar />
        </div>
      </div>
    </header>
  )
} 