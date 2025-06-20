import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { QuickAccessGrid } from '../components/QuickAccessGrid'
import { LatestContent } from '../components/LatestContent'
import { CommunitySection } from '../components/CommunitySection'
import { SocialProof } from '../components/SocialProof'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProof />
      <QuickAccessGrid />
      <LatestContent />
      <CommunitySection />
    </>
  )
} 