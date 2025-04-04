'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const tabs = [
  { id: 'tab1', label: 'Tab 1', content: 'This is the content for Tab 1' },
  { id: 'tab2', label: 'Tab 2', content: 'This is the content for Tab 2' },
  { id: 'tab3', label: 'Tab 3', content: 'This is the content for Tab 3' }
];

export default function TabComponent() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    // Extract tab ID from URL
    const currentTab = new URLSearchParams(window.location.search).get('tab') || tabs[0].id;
    setActiveTab(currentTab);
  }, [pathname]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    window.history.pushState(null, '', `?tab=${tabId}`);
  };

  return (
    <div>
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4 p-4 border rounded-md">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
