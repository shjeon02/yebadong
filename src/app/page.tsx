import React from 'react'
import { Header } from '../components/Header'
import { HeroSection } from '../components/HeroSection'
import { QuickAccessGrid } from '../components/QuickAccessGrid'
import { LatestContent } from '../components/LatestContent'
import { CommunitySection } from '../components/CommunitySection'
import { Footer } from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Quick Access Grid */}
        <QuickAccessGrid />
        
        {/* Latest Content */}
        <LatestContent />
        
        {/* Community Section */}
        <CommunitySection />
      </main>
      
      <Footer />
    </div>
  )
} 