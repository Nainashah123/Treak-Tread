import { Play, ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ui/ProductCard';

// Import images from Figma
import heroBackground from '../assets/images/about-hero-background-7c8cad.jpg';
import missionImage from '../assets/images/about-mission-image.jpg';
import article1Image from '../assets/images/about-article-1.jpg';
import article2Image from '../assets/images/about-article-2-3fa0b7.jpg';
import article3Image from '../assets/images/about-article-3.jpg';
import videoBackground from '../assets/images/about-video-background.jpg';
import product1 from '../assets/images/about-product-1-46798b.png';
import product2 from '../assets/images/about-product-2-5981a9.png';
import product3 from '../assets/images/about-product-3-76ce2c.png';
import instagram1 from '../assets/images/about-instagram-1.jpg';
import instagram2 from '../assets/images/about-instagram-2-6e2546.jpg';
import instagram3 from '../assets/images/about-instagram-3.jpg';
import instagram4 from '../assets/images/about-instagram-4.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-[800px] flex flex-col justify-end bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${heroBackground})`
        }}
      >
        <div className="p-6">
          <h1 className="text-heading-1-mobile md:text-heading-1-desktop text-black mb-4 max-w-[1000px]">
            The Story Behind the Stride
      </h1>
          <p className="text-body-large text-black max-w-[1000px]">
            What started as a love for movement became a brand for movers. Track&Tread is built by athletes, for athletes — with detail, grit, and care in every design.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="border-t border-black py-10 px-6 text-center">
        <h2 className="text-heading-3-mobile md:text-heading-3-desktop text-black mb-4">
          Movement is more than motion — it's momentum.
        </h2>
        <p className="text-body-xl text-gray-600">
          Jordan A., Co-founder of Track&Tread
        </p>
      </section>

      {/* Mission Section */}
      <section className="border border-black">
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="lg:w-1/2">
            <img 
              src={missionImage} 
              alt="Mission" 
              className="w-full h-[960px] object-cover"
            />
          </div>
          
          {/* Vertical Line */}
          <div className="w-px bg-black hidden lg:block"></div>
          
          {/* Content */}
          <div className="lg:w-1/2 flex flex-col justify-center p-6 lg:p-24 lg:pr-32">
            <div className="space-y-4">
              <h3 className="text-heading-3-mobile md:text-heading-3-desktop text-black">
                Our Mission
              </h3>
              <p className="text-body-xl text-black">
                Every design we create is rooted in motion. Whether you're chasing a new PR, walking to clear your head, or commuting with purpose — we're with you. Our mission is to make gear that fuels ambition, adapts to your lifestyle, and inspires forward momentum, every single day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Born to Move Section */}
      <section className="py-10">
        {/* Header */}
        <div className="px-6 mb-6">
          <h2 className="text-heading-2-mobile md:text-heading-2-desktop text-black">
            Born to Move
          </h2>
        </div>
        
        {/* Articles Wrapper */}
        <div className="border border-black">
          {/* Top Border */}
          <div className="h-px bg-black"></div>
          
          {/* Images Row */}
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3">
              <img 
                src={article1Image} 
                alt="How It Started" 
                className="w-full h-[640px] object-cover"
              />
            </div>
            <div className="w-px bg-black hidden lg:block"></div>
            <div className="lg:w-1/3">
              <img 
                src={article2Image} 
                alt="Scaling the Path" 
                className="w-full h-[640px] object-cover"
              />
            </div>
            <div className="w-px bg-black hidden lg:block"></div>
            <div className="lg:w-1/3">
              <img 
                src={article3Image} 
                alt="What Drives Us Today" 
                className="w-full h-[640px] object-cover"
              />
            </div>
          </div>
          
          {/* Bottom Border */}
          <div className="h-px bg-black"></div>
          
          {/* Content Row */}
          <div className="flex flex-col lg:flex-row">
            {/* Article 1 */}
            <div className="lg:w-1/3 p-6">
              <div className="space-y-4">
                <h4 className="text-heading-4-mobile md:text-heading-4-desktop text-black">
                  How It Started
                </h4>
                <p className="text-body-xl text-black">
                  What began as a garage idea fueled by a love for movement turned into a mission: create gear that adapts to life in motion.
                </p>
              </div>
            </div>
            
            <div className="w-px bg-black hidden lg:block"></div>
            
            {/* Article 2 */}
            <div className="lg:w-1/3 p-6">
              <div className="space-y-4">
                <h4 className="text-heading-4-mobile md:text-heading-4-desktop text-black">
                  Scaling the Path
                </h4>
                <p className="text-body-xl text-black">
                  From our first drop to global shipping — every step forward has been powered by our growing community and bold thinking.
                </p>
              </div>
            </div>
            
            <div className="w-px bg-black hidden lg:block"></div>
            
            {/* Article 3 */}
            <div className="lg:w-1/3 p-6">
              <div className="space-y-4">
                <h4 className="text-heading-4-mobile md:text-heading-4-desktop text-black">
                  What Drives Us Today
                </h4>
                <p className="text-body-xl text-black">
                  Still independent, still obsessed with craft. Today, we design performance wear that stands up to every move you make.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section 
        className="relative h-[800px] border-t border-black bg-cover bg-center"
        style={{ backgroundImage: `url(${videoBackground})` }}
      >
        <button className="absolute top-[720px] right-[80px] bg-gray-100 border border-black p-4 hover:bg-white transition-colors">
          <Play className="h-6 w-6 text-black" />
        </button>
      </section>

      {/* Products Section */}
      <section>
        {/* Top Border */}
        <div className="h-px bg-black"></div>
        
        {/* Content Row */}
        <div className="flex flex-col lg:flex-row">
          {/* Text Content */}
          <div className="lg:w-1/4 p-6 flex flex-col justify-center border-r border-black">
            <div className="space-y-4">
              <h2 className="text-heading-2-mobile md:text-heading-2-desktop text-black">
                Research. Innovation. Creativity.
              </h2>
              <p className="text-body-xl text-black">
                We dive deep into research, push the boundaries of innovation, and create solutions that don't just meet expectations — they redefine them.
              </p>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="lg:w-3/4 flex flex-col lg:flex-row">
            <ProductCard
              image={product1}
              name="Nimbus Glide Icecore"
              price="$529.99"
              badges={[{ label: "Best Seller", variant: "purple" }]}
              variants={[
                { color: "#C3C6C5", selected: true },
                { color: "#E1E4E3" }
              ]}
              className="lg:w-1/3 border-r border-black"
            />
            
            <ProductCard
              image={product2}
              name="Voltstorm Radiance"
              price="$529.99"
              badges={[{ label: "Best Seller", variant: "purple" }]}
              variants={[
                { color: "#DBD5D0", selected: true },
                { color: "#F92131" },
                { color: "#F9EB3D" }
              ]}
              className="lg:w-1/3 border-r border-black"
            />
            
            <ProductCard
              image={product3}
              name="Lunar Flow Hyperlime"
              price="$529.99"
              badges={[{ label: "Best Seller", variant: "purple" }]}
              variants={[
                { color: "#F9EB3D", selected: true },
                { color: "#F92131" }
              ]}
              className="lg:w-1/3"
            />
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="h-px bg-black"></div>
      </section>

      {/* Instagram Section */}
      <section className="py-10">
        {/* Header */}
        <div className="px-6 mb-6 text-center space-y-2">
          <h2 className="text-heading-2-mobile md:text-heading-2-desktop text-black">
            Follow Us on Instagram
          </h2>
          <p className="text-heading-5-mobile md:text-heading-5-desktop text-gray-600">
            @track&tread
          </p>
        </div>
        
        {/* Images Grid */}
        <div className="border border-black">
          {/* Top Border */}
          <div className="h-px bg-black"></div>
          
          {/* Images Row */}
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4">
              <img 
                src={instagram1} 
                alt="Instagram post 1" 
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="w-px bg-black hidden md:block"></div>
            <div className="md:w-1/4">
              <img 
                src={instagram2} 
                alt="Instagram post 2" 
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="w-px bg-black hidden md:block"></div>
            <div className="md:w-1/4">
              <img 
                src={instagram3} 
                alt="Instagram post 3" 
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="w-px bg-black hidden md:block"></div>
            <div className="md:w-1/4">
              <img 
                src={instagram4} 
                alt="Instagram post 4" 
                className="w-full h-[480px] object-cover"
              />
            </div>
          </div>
          
          {/* Bottom Border */}
          <div className="h-px bg-black"></div>
        </div>
        
        {/* Slider Controls */}
        <div className="flex justify-between items-center px-6 py-6">
          {/* Dots */}
          <div className="flex gap-2">
            <div className="w-[10px] h-[10px] rounded-full bg-black"></div>
            <div className="w-[10px] h-[10px] rounded-full border border-black"></div>
            <div className="w-[10px] h-[10px] rounded-full border border-black"></div>
            <div className="w-[10px] h-[10px] rounded-full border border-black"></div>
          </div>
          
          {/* Arrow Controls */}
          <div className="flex gap-4">
            <button className="w-14 h-14 border border-black bg-gray-100 flex items-center justify-center hover:bg-white transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button className="w-14 h-14 border border-black bg-gray-100 flex items-center justify-center hover:bg-white transition-colors">
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;