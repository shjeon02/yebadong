"use client"

import React from 'react'
import NavBar from './NavBar'

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-red-100">
        <div className="py-3 text-center">
          <div className="text-3xl font-extrabold text-gray-900 tracking-wider">
            <a href="/" className="hover:text-primary-500 transition-colors duration-300">
              YEBADONG
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Korean Progressive Rock Community
          </p>
        </div>
        <NavBar />
      </div>
    </header>
  )
} 