import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';

// Import images
import articleHeroBackground from '../assets/images/article-hero-section-bg-7429f0.jpg';
import articleContentImage from '../assets/images/article-content-image.jpg';
import articleRelated1 from '../assets/images/article-related-1.jpg';
import articleRelated2 from '../assets/images/article-related-2.jpg';
import articleProduct1 from '../assets/images/article-product-1.jpg';
import articleProduct2 from '../assets/images/article-product-2.jpg';
import articleProduct3 from '../assets/images/article-product-3.jpg';
import articleProduct4 from '../assets/images/article-product-4.jpg';
import articleProduct5 from '../assets/images/article-product-5.jpg';

const ArticleDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Sample article data - in a real app, this would be fetched based on the ID
  const article = {
    id: id || '8',
    category: 'Lifestyle',
    title: 'Balancing Workouts and Wellness: A Modern Guide',
    content: `In today's fast-paced world, fitness is no longer just about performance — it's about balance. True wellness comes from a holistic approach that connects body, mind, and lifestyle. This modern guide explores how you can train smarter, recover better, and align your fitness routine with overall well-being.`,
    sections: [
      {
        title: 'Redefining Fitness in Modern Life',
        content: `Workouts used to be about pushing limits and chasing numbers. Today, the conversation has shifted: people want routines that energize rather than exhaust, habits that improve health instead of adding stress. Modern fitness is about sustainability — creating a rhythm you can maintain long-term. It's not just what you do in the gym but how you approach it. Mindful training means tuning into your body, adjusting intensity when needed, and finding joy in movement. Whether it's running, yoga, or strength training, the goal is to build awareness and connection with your body.`
      },
      {
        title: 'Recovery as a Priority, Not an Option',
        content: `Wellness is impossible without recovery. Sleep, nutrition, and active rest are essential parts of progress. Think of recovery as training for your nervous system — restoring balance so your body can perform again. Small rituals like stretching, foam rolling, or meditation can make a big difference.`
      },
      {
        title: 'Fueling Your Body for Performance and Health',
        content: `Nutrition goes beyond calories. It's about energy, focus, and longevity. A balanced diet with whole foods, proper hydration, and mindful eating enhances not only physical results but also overall wellness. The modern athlete — whether professional or casual — views food as fuel, not restriction. A modern guide to wellness means personalization. Your training plan should fit your lifestyle, not the other way around. Some days it's a high-intensity workout, other days it's a walk in the park. The key is consistency without burnout — movement as part of your life, not a separate chore.`
      },
      {
        title: 'The Mental Side of Wellness',
        content: `Mental health is as important as physical fitness. Stress management, digital detoxes, and moments of stillness create resilience. Just as muscles grow with recovery, the mind thrives when given space to recharge. Balance comes when you give equal attention to both.`
      },
      {
        title: 'Conclusion: A Lifestyle of Balance',
        content: `Balancing workouts and wellness is not about perfection — it's about alignment. When training, nutrition, recovery, and mental health work together, you create a lifestyle that's sustainable, enjoyable, and deeply rewarding.`
      }
    ]
  };

  const relatedArticles = [
    {
      id: 2,
      image: articleRelated1,
      category: 'Lifestyle',
      title: 'Why Rest Days Boost Performance',
      description: 'Discover why doing nothing is sometimes the most productive thing for your body.'
    },
    {
      id: 3,
      image: articleRelated2,
      category: 'Lifestyle',
      title: 'Fueling Up: What to Eat Before You Train',
      description: 'The right foods to boost energy, enhance focus, and sustain stamina.'
    }
  ];

  const recommendedProducts = [
    {
      id: 1,
      image: articleProduct1,
      name: 'Nimbus Glide Icecore',
      price: '$529.99',
      variants: [
        { color: '#C3C6C5', selected: true },
        { color: '#E1E4E3', selected: false }
      ]
    },
    {
      id: 2,
      image: articleProduct2,
      name: 'Carbon Pulse Blackout',
      price: '$343.99',
      compareAtPrice: '$529.99',
      badges: [{ label: '-20%', variant: 'red' as const }],
      variants: [
        { color: '#3C3C3C', selected: true },
        { color: '#BDC7D1', selected: false },
        { color: '#F9EB3D', selected: false },
        { color: '#F3EFE9', selected: false }
      ]
    },
    {
      id: 3,
      image: articleProduct3,
      name: 'Voltstorm Radiance',
      price: '$529.99',
      variants: [
        { color: '#DBD5D0', selected: true },
        { color: '#F92131', selected: false },
        { color: '#F9EB3D', selected: false }
      ]
    },
    {
      id: 4,
      image: articleProduct4,
      name: 'Lunar Flow Hyperlime',
      price: '$529.99',
      variants: [
        { color: '#F9EB3D', selected: true },
        { color: '#F92131', selected: false }
      ]
    },
    {
      id: 5,
      image: articleProduct5,
      name: 'Ashtrail Coregrey X',
      price: '$529.99',
      variants: [
        { color: '#A6A3A4', selected: true },
        { color: '#282929', selected: false },
        { color: '#DFDBD5', selected: false }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <Header />
      
      <main className="w-full">
        {/* Hero Section with Background Image */}
        <section 
          className="h-[800px] flex items-end border-b border-black"
          style={{
            backgroundImage: `url(${articleHeroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="p-6 max-w-[1400px] w-full">
            <h1 className="text-6xl lg:text-8xl xl:text-[128px] leading-[1.1] font-medium text-[#F2F2F2] tracking-[-4%] max-w-[1400px]">
              {article.title}
            </h1>
          </div>
        </section>

        {/* Article Content Section */}
        <section className="border-b border-black">
          <div className="flex">
            {/* Main Content */}
            <div className="flex-1 border-r border-black p-6 lg:p-14 lg:pr-14 space-y-12">
              {/* Introduction */}
              <p className="text-xl font-medium text-black leading-[1.1]">
                {article.content}
              </p>

              {/* Content Sections */}
              {article.sections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="text-5xl leading-[1.1] font-medium text-black tracking-[-4%]">
                    {section.title}
                  </h2>
                  <p className="text-xl font-medium text-black leading-[1.1]">
                    {section.content}
                  </p>
                  
                  {/* Insert image after second section */}
                  {index === 1 && (
                    <div className="w-full h-[530px] bg-gray-100 overflow-hidden my-12">
                      <img 
                        src={articleContentImage} 
                        alt="Article content"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              ))}

              <p className="text-xl font-medium text-black leading-[1.1] italic">
                The modern athlete isn't just strong. They're balanced, present, and well.
              </p>
            </div>

            {/* Sidebar - Up Next Articles */}
            <div className="w-[500px] space-y-0">
              <div className="p-6 border-b border-black">
                <h3 className="text-5xl leading-[1.1] font-medium text-black tracking-[-4%]">
                  Up Next
                </h3>
              </div>
              
              {relatedArticles.map((relatedArticle) => (
                <div key={relatedArticle.id} className="border-b border-black">
                  <div className="h-[500px] bg-gray-100 overflow-hidden">
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="space-y-4">
                      <span className="text-xl font-medium text-[#969696]">
                        {relatedArticle.category}
                      </span>
                      <h4 className="text-3xl leading-[1.1] font-medium text-black tracking-[-4%]">
                        {relatedArticle.title}
                      </h4>
                      <p className="text-xl font-medium text-black">
                        {relatedArticle.description}
                      </p>
                    </div>
                    
                    <Link to={`/journal/article/${relatedArticle.id}`}>
                      <Button variant="secondary" showArrow={true} className="w-fit">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* You May Be Interested In Section */}
        <section className="py-10">
          <div className="px-6 mb-6">
            <h2 className="text-[96px] leading-[1.1] font-medium text-black tracking-[-4%]">
              You May Be Interested In
            </h2>
          </div>

          <div className="flex flex-col">
            {/* Top border */}
            <div className="h-px bg-black" />
            
            {/* Products Row using ProductCard component */}
            <div className="flex">
              {recommendedProducts.map((product, index) => (
                <React.Fragment key={product.id}>
                  <ProductCard
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    compareAtPrice={product.compareAtPrice}
                    badges={product.badges}
                    variants={product.variants}
                    className="flex-1"
                  />
                  {index < recommendedProducts.length - 1 && (
                    <div className="w-px bg-black" />
                  )}
                </React.Fragment>
              ))}
            </div>
            
            {/* Bottom border */}
            <div className="h-px bg-black" />
          </div>

          {/* Slider Controls */}
          <div className="flex justify-between items-center px-6 mt-6">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 bg-black rounded-full" />
              <div className="w-2.5 h-2.5 border border-black rounded-full" />
              <div className="w-2.5 h-2.5 border border-black rounded-full" />
              <div className="w-2.5 h-2.5 border border-black rounded-full" />
            </div>
            
            <div className="flex gap-0">
              <button className="w-14 h-14 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-14 h-14 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetailPage;
