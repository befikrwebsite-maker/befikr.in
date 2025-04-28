'use client';

import { usePathname } from 'next/navigation';
import { useRef, useEffect, useState } from 'react';
import ServicesBreakdown from './Services';
import { gsap } from 'gsap';

const tabs = [
  { id: 'Environment', label: 'Environment', img: '/catImage/image-1.png' },
  { id: 'Social', label: 'Social', img: '/catImage/image-2.png' },
  { id: 'Governance', label: 'Governance', img: '/catImage/image-3.png' },
];

export default function TabComponent() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('Environment');

  const imageRef = useRef(null);          // Ref for the image
  const servicesContainerRef = useRef(null); // Ref for the services container

  const filteredCards = ServicesBreakdown.filter((card) => card.Cateogery === activeTab);

  useEffect(() => {
    const currentTab = new URLSearchParams(window.location.search).get('service') || tabs[0].id;
    setActiveTab(currentTab);
  }, [pathname]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    window.history.pushState(null, '', `?service=${tabId}`);
  };

    // Fade out the image
    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setActiveTab(tabId);
      },
    });

  useEffect(() => {
    // Fade in the image when activeTab changes
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );
    }

    // Animate services when activeTab changes
    if (servicesContainerRef.current) {
      gsap.fromTo(
        servicesContainerRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out' }
      );
    }
  }, [activeTab]);

  return (
    <div className="px-6 py-8 mx-auto">
      {/* Tab Buttons */}
      <div className="flex gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-sm
              ${activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Services Display */}
      <div className="relative bg-white rounded-2xl p-6 overflow-hidden">
        {/* Image */}
        <img
          ref={imageRef}
          src={activeTab === 'Environment' ? tabs[0].img : activeTab === 'Social' ? tabs[1].img : tabs[2].img}
          className="w-full object-cover max-h-96 rounded-2xl"
          alt="Image"
        />

        {/* Text on top of the image */}
        <h1 className="absolute bottom-16 ml-8 text-6xl text-white font-bold">
          {activeTab}
        </h1>
      </div>

      <div ref={servicesContainerRef} className="flex w-full gap-6 mt-6">
        {filteredCards.length === 0 ? (
          <p className="text-center text-gray-500 w-full">No services available under this category.</p>
        ) : (
          filteredCards.map((card, cardIndex) => (
            <div
              key={cardIndex}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow w-full "
            >
              {card.Services.map((service, index) => (
                <div key={index} className="relative inline-block mb-4">
                  <h3 className="text-2xl font-semibold text-blue-700">{service.Service}</h3>
                  {service.SubServices.map((sub, subIndex) => (
                    <div
                      key={subIndex}
                      className="mt-4 p-8 ml-2 border-l-4 border-blue-200 pl-4 hover:bg-slate-300 transition-all duration-300"
                    >
                      <h4 className="text-md font-medium text-gray-800">{sub.title}</h4>
                      <p className="text-sm text-gray-600">{sub.desc}</p>
                      <img
                        src={sub.image}
                        alt={sub.title}
                        className="w-full max-w-xs h-fit object-cover rounded-md mt-2 shadow-sm"
                      />
                    </div>
                  ))}
                </div>
              ))}

              {card.desc && (
                <p className="mt-4 text-sm text-gray-500 border-t pt-4">{card.desc}</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}