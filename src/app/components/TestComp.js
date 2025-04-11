'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ServicesBreakdown from './Services';

const tabs = [
  { id: 'Environment', label: 'Environment', content: ['This is the content for Tab 1', '5'] },
  { id: 'Social', label: 'Social', content: ['This is the content for Tab 2', '5'] },
  { id: 'Governance', label: 'Governance', content: ['This is the content for Tab 3', '5'] }
];


export default function TabComponent() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('Environment');

  const filteredCards = ServicesBreakdown.filter((Service) => Service.Cateogery === activeTab);

  useEffect(() => {
    // Extract tab ID from URL
    const currentTab = new URLSearchParams(window.location.search).get('service') || tabs[0].id;
    setActiveTab(currentTab);
  }, [pathname]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    window.history.pushState(null, '', `?service=${tabId}`);
  };

  return (
    <div>
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-4 py-2 rounded-md transition-colors ${activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4 p-4 border rounded-md">
        {filteredCards.map((card) => (
          <div key={card.Cateogery} className="mb-4 p-4 border rounded-md">
            {/* <h3 className="text-lg font-semibold">{card.Cateogery}</h3> */}

            {card.Services.map((service, index) => (
              <div key={index}>
                <p className="text-4xl text-gray-600">{service.Service}</p>

                {service.SubServices.map((sub, subIndex) => (
                  <div key={subIndex} className="ml-4 mt-2">
                    <h4 className="text-md font-medium">{sub.title}</h4>
                    <p className="text-sm text-gray-500">{sub.desc}</p>
                    <p className="text-xs text-gray-400">Tags: {sub.tags.join(', ')}</p>
                    <img src={sub.image} alt={sub.title} className="w-32 h-20 mt-1 rounded-md object-cover" />
                  </div>
                ))}
              </div>
            ))}

            <p className="mt-2 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
