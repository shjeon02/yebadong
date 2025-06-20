// Design System & Component Structure for Yebadong

// 1. Design Tokens
export const designTokens = {
  colors: {
    // Primary Palette - Progressive Rock inspired
    primary: {
      50: '#f0f4ff',
      100: '#e0e7ff',
      500: '#6366f1', // Indigo - main brand
      600: '#4f46e5',
      900: '#312e81'
    },
    // Secondary - Warm accent
    secondary: {
      50: '#fef7ee',
      100: '#fdedd3',
      500: '#f97316', // Orange
      600: '#ea580c',
      900: '#9a3412'
    },
    // Dark theme
    dark: {
      50: '#f8fafc',
      100: '#f1f5f9',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617'
    },
    // Semantic colors
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6'
  },
  
  typography: {
    fonts: {
      heading: '"Pretendard Variable", "Inter", sans-serif',
      body: '"Pretendard Variable", "Inter", sans-serif',
      mono: '"JetBrains Mono", "Fira Code", monospace'
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem'
    }
  },
  
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem'
  },
  
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem'
  }
};

// 2. Core Components

// Layout Components
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-dark-950 text-white">
    <Header />
    <main className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

export const Header: React.FC = () => (
  <header className="sticky top-0 z-50 bg-dark-900/95 backdrop-blur-sm border-b border-dark-800">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <Logo />
        <Navigation />
        <UserActions />
      </div>
    </div>
  </header>
);

export const Navigation: React.FC = () => (
  <nav className="hidden md:flex space-x-8">
    <NavLink href="/discover">Discover</NavLink>
    <NavLink href="/community">Community</NavLink>
    <NavLink href="/archive">Archive</NavLink>
    <NavLink href="/about">About</NavLink>
  </nav>
);

// Content Components
export const MusicCard: React.FC<{
  album: Album;
  variant?: 'default' | 'featured' | 'compact';
}> = ({ album, variant = 'default' }) => (
  <div className={`
    group relative overflow-hidden rounded-lg bg-dark-800 
    transition-all duration-300 hover:bg-dark-700 hover:scale-105
    ${variant === 'featured' ? 'col-span-2 row-span-2' : ''}
    ${variant === 'compact' ? 'flex items-center space-x-4 p-4' : 'p-6'}
  `}>
    <div className="relative">
      <img 
        src={album.coverUrl} 
        alt={album.title}
        className={`
          rounded-md object-cover
          ${variant === 'compact' ? 'w-16 h-16' : 'w-full aspect-square mb-4'}
        `}
      />
      <PlayButton className="absolute inset-0 opacity-0 group-hover:opacity-100" />
    </div>
    
    <div className={variant === 'compact' ? 'flex-1' : ''}>
      <h3 className="font-semibold text-lg mb-1 line-clamp-1">{album.title}</h3>
      <p className="text-gray-400 mb-2 line-clamp-1">{album.artist}</p>
      <div className="flex items-center space-x-2">
        <Rating value={album.rating} />
        <span className="text-sm text-gray-500">{album.year}</span>
      </div>
    </div>
  </div>
);

export const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <article className="bg-dark-800 rounded-lg p-6 hover:bg-dark-700 transition-colors">
    <header className="flex items-start justify-between mb-4">
      <div className="flex items-center space-x-3">
        <Avatar src={review.author.avatar} name={review.author.name} />
        <div>
          <h4 className="font-medium">{review.author.name}</h4>
          <time className="text-sm text-gray-400">{review.publishedAt}</time>
        </div>
      </div>
      <Rating value={review.rating} />
    </header>
    
    <h3 className="text-xl font-semibold mb-2 line-clamp-2">{review.title}</h3>
    <p className="text-gray-300 mb-4 line-clamp-3">{review.excerpt}</p>
    
    <footer className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm">
          <HeartIcon className="w-4 h-4 mr-1" />
          {review.likes}
        </Button>
        <Button variant="ghost" size="sm">
          <CommentIcon className="w-4 h-4 mr-1" />
          {review.comments}
        </Button>
      </div>
      <Button variant="outline" size="sm">Read More</Button>
    </footer>
  </article>
);

// Interactive Components
export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  return (
    <div className="relative">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search albums, artists, reviews..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-dark-800 border border-dark-700 rounded-lg 
                     focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
      
      {results.length > 0 && (
        <SearchResults results={results} onClose={() => setResults([])} />
      )}
    </div>
  );
};

export const GenreFilter: React.FC<{
  genres: string[];
  selected: string[];
  onChange: (genres: string[]) => void;
}> = ({ genres, selected, onChange }) => (
  <div className="flex flex-wrap gap-2">
    {genres.map(genre => (
      <button
        key={genre}
        onClick={() => {
          const newSelected = selected.includes(genre)
            ? selected.filter(g => g !== genre)
            : [...selected, genre];
          onChange(newSelected);
        }}
        className={`
          px-3 py-1 rounded-full text-sm font-medium transition-colors
          ${selected.includes(genre)
            ? 'bg-primary-500 text-white'
            : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
          }
        `}
      >
        {genre}
      </button>
    ))}
  </div>
);

// 3. Page Components

export const HomePage: React.FC = () => (
  <Layout>
    <HeroSection />
    <QuickAccessGrid />
    <FeaturedContent />
    <CommunityHighlights />
    <RecentActivity />
  </Layout>
);

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredContent = useFeaturedContent();
  
  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent z-10" />
      
      <Carousel
        items={featuredContent}
        currentSlide={currentSlide}
        onChange={setCurrentSlide}
        renderItem={(item) => (
          <div className="relative h-full">
            <img 
              src={item.backgroundImage} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 z-20">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{item.title}</h1>
                  <p className="text-xl text-gray-300 mb-6">{item.description}</p>
                  <div className="flex space-x-4">
                    <Button size="lg">Explore Now</Button>
                    <Button variant="outline" size="lg">Learn More</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </section>
  );
};

export const QuickAccessGrid: React.FC = () => (
  <section className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <QuickAccessCard
        icon={<MusicIcon />}
        title="Latest Reviews"
        description="Discover new progressive rock gems"
        href="/reviews"
      />
      <QuickAccessCard
        icon={<UsersIcon />}
        title="Hot Discussions"
        description="Join the community conversation"
        href="/community"
      />
      <QuickAccessCard
        icon={<ArchiveIcon />}
        title="Archive Dive"
        description="Explore 20+ years of content"
        href="/archive"
      />
    </div>
  </section>
);

// 4. Utility Components

export const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '' 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200';
  
  const variantClasses = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
    ghost: 'text-gray-300 hover:text-white hover:bg-dark-700'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}> = ({ children, className = '', hover = true }) => (
  <div className={`
    bg-dark-800 rounded-lg border border-dark-700 
    ${hover ? 'hover:bg-dark-700 hover:border-dark-600 transition-all duration-200' : ''}
    ${className}
  `}>
    {children}
  </div>
);

// 5. Hooks for Data Management

export const useFeaturedContent = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch featured content
    fetchFeaturedContent().then(data => {
      setContent(data);
      setLoading(false);
    });
  }, []);
  
  return { content, loading };
};

export const useSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const debouncedQuery = useDebounce(query, 300);
  
  useEffect(() => {
    if (debouncedQuery) {
      setLoading(true);
      searchContent(debouncedQuery).then(data => {
        setResults(data);
        setLoading(false);
      });
    } else {
      setResults([]);
    }
  }, [debouncedQuery]);
  
  return { query, setQuery, results, loading };
};

// 6. Theme Provider

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('yebadong-theme') as 'dark' | 'light';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('yebadong-theme', newTheme);
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'dark' ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}; 