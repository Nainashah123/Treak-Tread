import { Link } from 'react-router-dom';

export interface Article {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
}

interface ArticleGridSectionProps {
  articles: Article[];
  className?: string;
}

const ArticleGridSection: React.FC<ArticleGridSectionProps> = ({
  articles = [],
  className = ''
}) => {
  // Create rows of 3 articles each
  const articleRows = [];
  for (let i = 0; i < articles.length; i += 3) {
    articleRows.push(articles.slice(i, i + 3));
  }

  return (
    <section className={`w-full ${className}`}>
      {articleRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-col">
          {/* Articles Images Row */}
          <div className="flex">
            {row.map((article, index) => (
              <div key={article.id} style={{ display: 'contents' }}>
                <div className="flex-1">
                  <div className="h-[640px] bg-gray-100 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {index < row.length - 1 && (
                  <div className="w-px bg-black" />
                )}
              </div>
            ))}
          </div>
          
          {/* Middle border */}
          <div className="h-px bg-black" />
          
          {/* Articles Info Row */}
          <div className="flex">
            {row.map((article, index) => (
              <div key={`info-${article.id}`} style={{ display: 'contents' }}>
                <div className="flex-1 p-6 flex flex-col justify-center gap-6">
                  <div className="flex flex-col gap-4">
                    <span className="text-xl font-medium text-[#969696]">
                      {article.category}
                    </span>
                    <h3 className="text-5xl leading-[1.1] font-medium text-black tracking-[-4%]">
                      {article.title}
                    </h3>
                    <p className="text-2xl font-medium text-black">
                      {article.description}
                    </p>
                  </div>
                  
                  <Link 
                    to={`/journal/article/${article.id}`}
                    className="flex items-center gap-2 w-fit px-8 py-6 border border-black text-2xl font-medium hover:bg-gray-50 transition-colors"
                  >
                    Read More
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </Link>
                </div>
                {index < row.length - 1 && (
                  <div className="w-px bg-black" />
                )}
              </div>
            ))}
          </div>
          
          {/* Bottom border */}
          <div className="h-px bg-black" />
        </div>
      ))}
    </section>
  );
};

export default ArticleGridSection;
