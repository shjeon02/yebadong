export function HeroSection() {
  return (
    <section className="relative min-h-[600px] bg-hero-pattern overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-primary-900/20 to-dark-950/90" />
      <div className="absolute inset-0 bg-[url('/images/vinyl-pattern.svg')] opacity-5" />
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-400 text-sm font-medium">
                Since April 7, 1994
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">Progressive Rock</span>
                <br />
                <span className="text-white">Korea Community</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                한국 프로그레시브 록의 중심지, 예바동에 오신 것을 환영합니다. 
                30년간 이어온 음악에 대한 열정과 깊이 있는 리뷰, 인터뷰를 만나보세요.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary btn-lg">
                최신 리뷰 보기
              </button>
              <button className="btn-outline btn-lg">
                커뮤니티 참여
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-dark-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">30+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-400">1000+</div>
                <div className="text-sm text-gray-400">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">500+</div>
                <div className="text-sm text-gray-400">Members</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Featured Album */}
          <div className="relative animate-slide-in-right">
            <div className="relative group">
              {/* Floating Album Cover */}
              <div className="album-art w-80 h-80 mx-auto animate-float">
                <img 
                  src="/images/featured-album.jpg" 
                  alt="Featured Album"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
                
                {/* Album Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">Album of the Month</h3>
                  <p className="text-gray-300 text-sm">King Crimson - In the Court of the Crimson King</p>
                  <div className="flex items-center mt-2">
                    <div className="rating-stars">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="rating-star filled" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-400 ml-2">5.0</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl animate-pulse-slow" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-500/20 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '1s'}} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
} 