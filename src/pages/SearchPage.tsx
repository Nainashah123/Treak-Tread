import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import { ChevronLeft } from 'lucide-react';

// Mock data for demonstration
const mockProducts = [
  {
    id: 1,
    name: 'Nimbus Glide Icecore',
    price: '$529.99',
    image: '/images/product-1-nimbus-46798b.jpg',
    colors: ['#C3C6C5', '#E1E4E3'],
    isNew: false,
    isSale: false,
  },
  {
    id: 2,
    name: 'Carbon Pulse Blackout',
    price: '$343.99',
    originalPrice: '$529.99',
    image: '/images/product-2-carbon-38b848.jpg',
    colors: ['#3C3C3C', '#BDC7D1', '#F9EB3D', '#F3EFE9'],
    isNew: false,
    isSale: true,
    discount: '-20%',
  },
  {
    id: 3,
    name: 'Voltstorm Radiance',
    price: '$529.99',
    image: '/images/product-3-voltstorm-5981a9.jpg',
    colors: ['#DBD5D0', '#F92131', '#F9EB3D'],
    isNew: false,
    isSale: false,
  },
  {
    id: 4,
    name: 'Lunar Flow Hyperlime',
    price: '$529.99',
    image: '/images/product-4-lunar-76ce2c.jpg',
    colors: ['#F9EB3D', '#F92131'],
    isNew: false,
    isSale: false,
  },
  {
    id: 5,
    name: 'Ashtrail Coregrey X',
    price: '$529.99',
    image: '/images/product-5-ashtrail-7d74f7.jpg',
    colors: ['#A6A3A4', '#282929', '#DFDBD5'],
    isNew: false,
    isSale: false,
  },
];

const mockArticles = [
  {
    id: 1,
    title: 'A Sneaker Designed for the Long Run',
    description: 'We break down the technology behind our newest long-distance trainer.',
    image: '/images/article-1-sneaker.jpg',
  },
  {
    id: 2,
    title: 'Why Rest Days Boost Performance',
    description: 'Discover why doing nothing is sometimes the most productive thing for your body.',
    image: '/images/article-2-rest-days.jpg',
  },
  {
    id: 3,
    title: 'Fueling Up: What to Eat Before You Train',
    description: 'The right foods to boost energy, enhance focus, and sustain stamina.',
    image: '/images/article-3-fueling-401e31.jpg',
  },
];

const mockTestimonials = [
  {
    id: 1,
    text: "These are hands-down the most comfortable sneakers I've ever trained in. Zero break-in time, perfect fit.",
    author: 'Mark D., Toronto',
  },
  {
    id: 2,
    text: "I'm a personal trainer and I recommend this gear to all my clients. It holds up through every type of workout.",
    author: 'Lauren K., San Diego',
  },
  {
    id: 3,
    text: 'The shipping was lightning fast — and the packaging felt premium. You can tell they care about every detail.',
    author: 'Andre V., Austin',
  },
];

const mockInstagramPosts = [
  { id: 1, image: '/images/instagram-1.jpg' },
  { id: 2, image: '/images/instagram-2-6e2546.jpg' },
  { id: 3, image: '/images/instagram-3.jpg' },
  { id: 4, image: '/images/instagram-4.jpg' },
];

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const query = searchParams.get('q') || '';
    setSearchQuery(query);
  }, [searchParams]);

  const categories = [
    { name: 'Shoes', image: '/images/shoes-category.jpg' },
    { name: 'Apparel', image: '/images/apparel-category.jpg' },
    { name: 'Accessories', image: '/images/accessories-category.jpg' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(mockProducts.length / 5));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(mockProducts.length / 5)) % Math.ceil(mockProducts.length / 5));
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <Header />
      
      {/* Search Results Header */}
      {searchQuery && (
        <div className="px-6 py-4 border-b border-black">
          <h1 className="text-2xl font-medium">Search results for "{searchQuery}"</h1>
        </div>
      )}

      {/* Shop by Category Section - Only show when no search query */}
      {!searchQuery && (
        <section className="py-10">
          <div className="px-6 mb-6">
            <h2 className="text-6xl font-medium mb-6">Shop by Category</h2>
          </div>
          
          <div className="border-t border-black">
            <div className="flex">
              {categories.map((category, index) => (
                <div key={category.name} className="flex-1 relative">
                  <div 
                    className="h-[640px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${category.image})` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="bg-white border border-black px-8 py-6 text-xl font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2">
                        {category.name}
                        <img src="/images/arrow-top-right.svg" alt="Arrow" className="ml-2 h-6 w-6" />
                      </button>
                    </div>
                  </div>
                  {index < categories.length - 1 && (
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-black" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-black" />
        </section>
      )}

      {/* Search Results Section - Only show when there's a search query */}
      {searchQuery && (
        <section className="py-10">
          <div className="px-6 mb-6">
            <h2 className="text-6xl font-medium mb-6">Search Results</h2>
          </div>
          
          <div className="border-t border-black">
            <div className="flex">
              {mockProducts.map((product, index) => (
                <div key={product.id} className="relative">
                  <ProductCard
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    compareAtPrice={product.originalPrice}
                    badges={product.isSale ? [{ label: '-20%', variant: 'red' as const }] : []}
                    variants={product.colors.map((color, colorIndex) => ({
                      color,
                      selected: colorIndex === 0
                    }))}
                    className="flex-1"
                  />
                  {index < mockProducts.length - 1 && (
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-black" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* View All Results Link */}
          <div className="text-center py-6">
            <button className="text-xl font-medium underline hover:no-underline">
              View all results
            </button>
          </div>
          
          <div className="border-t border-black" />
        </section>
      )}

      {/* You May Be Interested In Section - Only show when no search query */}
      {!searchQuery && (
        <section className="py-10">
          <div className="px-6 mb-6">
            <h2 className="text-6xl font-medium mb-6">You May Be Interested In</h2>
          </div>
          
          <div className="border-t border-black">
            <div className="flex">
              {mockProducts.map((product, index) => (
                <div key={product.id} className="relative">
                  <ProductCard
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    compareAtPrice={product.originalPrice}
                    badges={product.isSale ? [{ label: '-20%', variant: 'red' as const }] : []}
                    variants={product.colors.map((color, colorIndex) => ({
                      color,
                      selected: colorIndex === 0
                    }))}
                    className="flex-1"
                  />
                  {index < mockProducts.length - 1 && (
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-black" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Slider Controls */}
          <div className="flex justify-between items-center px-6 py-4">
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(mockProducts.length / 5) }).map((_, index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === currentSlide ? 'bg-black' : 'border border-black'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="small"
                onClick={prevSlide}
                className="w-14 h-14 p-0"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="small"
                onClick={nextSlide}
                className="w-14 h-14 p-0"
              >
                <img src="/images/arrow-top-right.svg" alt="Arrow" className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          <div className="border-t border-black" />
        </section>
      )}

      {/* Stories that Move Section - Only show when no search query */}
      {!searchQuery && (
        <section className="py-10">
          <div className="px-6 mb-6">
            <h2 className="text-6xl font-medium mb-6">Stories that Move</h2>
          </div>
          
          <div className="border-t border-black">
            {/* Article Images Row */}
            <div className="flex">
              {mockArticles.map((article, index) => (
                <div key={article.id} className="flex-1">
                  <div 
                    className="h-[640px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  {index < mockArticles.length - 1 && (
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-black" />
                  )}
                </div>
              ))}
            </div>
            
            {/* Article Info Row */}
            <div className="flex">
              {mockArticles.map((article, index) => (
                <div key={article.id} className="flex-1 p-6">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-5xl font-medium">{article.title}</h3>
                      <p className="text-2xl">{article.description}</p>
                    </div>
                          <Button className="bg-black text-white px-8 py-6 text-xl font-medium hover:bg-gray-800 transition-colors">
                            Read More
                            <img src="/images/arrow-top-right.svg" alt="Arrow" className="ml-2 h-6 w-6" />
                          </Button>
                  </div>
                  {index < mockArticles.length - 1 && (
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-black" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t border-black" />
        </section>
      )}

      {/* From the Fam Section - Only show when no search query */}
      {!searchQuery && (
        <section className="py-10">
          <div className="px-6 mb-6">
            <h2 className="text-6xl font-medium mb-6">From the Fam</h2>
          </div>
          
          <div className="border-t border-black">
            <div className="flex">
              {mockTestimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="flex-1 p-6">
                  <div className="space-y-4">
                    <p className="text-3xl font-medium">{testimonial.text}</p>
                    <p className="text-xl text-gray-500">{testimonial.author}</p>
                  </div>
                  {index < mockTestimonials.length - 1 && (
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-black" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t border-black" />
        </section>
      )}

      {/* Follow Us on Instagram Section - Only show when no search query */}
      {!searchQuery && (
        <section className="py-10">
          <div className="px-6 mb-6">
            <h2 className="text-6xl font-medium mb-2">Follow Us on Instagram</h2>
            <p className="text-3xl text-gray-500">@track&tread</p>
          </div>
          
          <div className="border-t border-black">
            <div className="flex">
              {mockInstagramPosts.map((post, index) => (
                <div key={post.id} className="flex-1">
                  <div 
                    className="h-[480px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  {index < mockInstagramPosts.length - 1 && (
                    <div className="absolute right-0 top-0 bottom-0 w-px bg-black" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Slider Controls */}
          <div className="flex justify-between items-center px-6 py-4">
            <div className="flex gap-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === 0 ? 'bg-black' : 'border border-black'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="small"
                className="w-14 h-14 p-0"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="small"
                className="w-14 h-14 p-0"
              >
                <img src="/images/arrow-top-right.svg" alt="Arrow" className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          <div className="border-t border-black" />
        </section>
      )}
    </div>
  );
};

export default SearchPage;
