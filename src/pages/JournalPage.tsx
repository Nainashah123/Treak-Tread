import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroArticleSection from '../sections/HeroArticleSection';
import ArticleGridSection, { Article } from '../sections/ArticleGridSection';
import JournalTabs from '../components/ui/JournalTabs';
import Pagination from '../components/ui/Pagination';
import InstagramSection from '../sections/InstagramSection';

// Import journal images from Figma
import journalHeroImage from '../assets/images/journal-hero-image.jpg';
import journalArticle1 from '../assets/images/journal-article-1.jpg';
import journalArticle2 from '../assets/images/journal-article-2.jpg';
import journalArticle3 from '../assets/images/journal-article-3.jpg';
import journalArticle4 from '../assets/images/journal-article-4.jpg';
import journalArticle5 from '../assets/images/journal-article-5.jpg';
import journalArticle6 from '../assets/images/journal-article-6.jpg';
import journalArticle7 from '../assets/images/journal-article-7.jpg';
import journalArticle8 from '../assets/images/journal-article-8.jpg';
import journalArticle9 from '../assets/images/journal-article-9.jpg';

const JournalPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(2);

  // Hero article data based on Figma design
  const heroArticle = {
    category: "Press Releases",
    title: "Sustainable Innovation at the Core of Our Brand",
    description: "Our latest launch introduces eco-driven design choices without compromising performance.",
    image: journalHeroImage
  };

  const allArticles: Article[] = [
    {
      id: 1,
      image: journalArticle1,
      category: "Collections",
      title: "A Sneaker Designed for the Long Run",
      description: "We break down the technology behind our newest long-distance trainer."
    },
    {
      id: 2,
      image: journalArticle2,
      category: "Lifestyle",
      title: "Why Rest Days Boost Performance",
      description: "Discover why doing nothing is sometimes the most productive thing for your body."
    },
    {
      id: 3,
      image: journalArticle3,
      category: "Lifestyle",
      title: "Fueling Up: What to Eat Before You Train",
      description: "The right foods to boost energy, enhance focus, and sustain stamina."
    },
    {
      id: 4,
      image: journalArticle4,
      category: "Collections",
      title: "Summer 2025 Sneaker Drop: Redefining Performance",
      description: "Discover bold colorways and advanced features built for athletes and dreamers alike."
    },
    {
      id: 5,
      image: journalArticle5,
      category: "Lifestyle",
      title: "The Art of Movement: How Sneakers Influence Culture",
      description: "From city streets to global runways, sneakers have become a language of self-expression."
    },
    {
      id: 6,
      image: journalArticle6,
      category: "Collections",
      title: "Limited Edition Release: Where Style Meets Utility",
      description: "A rare collection blending sleek aesthetics with technical precision."
    },
    {
      id: 7,
      image: journalArticle7,
      category: "Lifestyle",
      title: "Everyday Performance: Why Comfort Is the New Luxury",
      description: "Why today's lifestyle demands gear that adapts to every part of your day."
    },
    {
      id: 8,
      image: journalArticle8,
      category: "Lifestyle",
      title: "Balancing Workouts and Wellness: A Modern Guide",
      description: "Practical tips on building healthy routines without losing style or comfort."
    },
    {
      id: 9,
      image: journalArticle9,
      category: "Press Releases",
      title: "Partnerships That Shape the Future of Sportswear",
      description: "A look inside our collaborations with top athletes and innovations worldwide."
    }
  ];

  // Filter articles based on active tab
  const filteredArticles = activeTab === 'all' 
    ? allArticles 
    : allArticles.filter(article => {
        switch (activeTab) {
          case 'press-releases':
            return article.category === 'Press Releases';
          case 'collections':
            return article.category === 'Collections';
          case 'lifestyle':
            return article.category === 'Lifestyle';
          default:
            return true;
        }
      });

  // Pagination - show 6 articles per page
  const articlesPerPage = 6;
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to first page when changing tabs
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <Header />
      
      <main className="w-full">
        {/* Hero Article Section */}
        <HeroArticleSection
          category={heroArticle.category}
          title={heroArticle.title}
          description={heroArticle.description}
          image={heroArticle.image}
          articleId={8}
          className="mb-6"
        />

        {/* Tabs Section */}
        <JournalTabs
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />

        {/* Articles Grid */}
        <ArticleGridSection
          articles={paginatedArticles}
        />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        {/* Instagram Section */}
        <InstagramSection />
      </main>

      <Footer />
    </div>
  );
};

export default JournalPage;
