import React from 'react';

interface JournalTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

const JournalTabs: React.FC<JournalTabsProps> = ({
  activeTab,
  onTabChange,
  className = ''
}) => {
  const tabs = [
    { id: 'all', label: 'All Articles' },
    { id: 'press-releases', label: 'Press Releases' },
    { id: 'collections', label: 'Collections' },
    { id: 'lifestyle', label: 'Lifestyle' }
  ];

  return (
    <section className={`w-full ${className}`}>
      <div className="flex flex-col">
        {/* Top border */}
        <div className="h-px bg-black" />
        
        {/* Tabs Container */}
        <div className="flex items-center justify-center gap-6 p-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`text-2xl font-medium transition-colors ${
                activeTab === tab.id 
                  ? 'text-black' 
                  : 'text-black hover:text-[#623CEA]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Bottom border */}
        <div className="h-px bg-black" />
      </div>
    </section>
  );
};

export default JournalTabs;

