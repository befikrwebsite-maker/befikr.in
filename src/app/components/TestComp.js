'use client';

import { usePathname } from 'next/navigation';
import { useRef, useEffect, useState, act } from 'react';
import ServicesBreakdown from './Services';
import { Category } from './dataArrays';
import { gsap } from 'gsap';

const tabs = [
  { id: 'Environment', label: 'Environment', img: '/catImage/image-1.png' },
  { id: 'Social', label: 'Social', img: '/catImage/image-2.png' },
  { id: 'Governance', label: 'Governance', img: '/catImage/image-3.png' },
];

export default function TabComponent() {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('Environment');

  const imageRef = useRef(null); // Ref for the image
  const servicesContainerRef = useRef(null); // Ref for the services container

  const filteredCards = ServicesBreakdown.filter((card) => card.Cateogery === activeTab);

  useEffect(() => {
    const currentTab = new URLSearchParams(window.location.search).get('service') || tabs[0].id;
    setActiveTab(currentTab);
  }, [pathname]);

  const handleTabClick = (tabId) => {
    // Fade out the image
    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setActiveTab(tabId); // Change tab after fading out
      },
    });
    // Update the URL
    window.history.pushState(null, '', `?service=${tabId}`);
  };

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
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 shadow-sm
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
          className="w-full md:object-cover object-center max-h-96 rounded-2xl"
          alt="Image"
        />

        {/* Text on top of the image */}
        <h1 className="hidden sm:block sm:absolute bottom-16 ml-8 text-6xl text-white font-bold">
          {activeTab}
        </h1>

      </div>

      <div className="m-8">
        {Category.filter(item => item.Category === activeTab).map(item => (
          <p key={item.Category} className="text-gray-700 text-base leading-relaxed">
            {item.desc}
          </p>
        ))}
      </div>

      <div ref={servicesContainerRef} className="flex w-full gap-6 mt-6">
        {filteredCards.length === 0 ? (
          <p className="text-center text-gray-500 w-full">No services available under this category.</p>
        ) : (
          filteredCards.map((card, cardIndex) => (
            <div
              key={cardIndex}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow w-full"
            >
              {card.Services.map((service, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-2">{service.Service}</h3>
          
                  {/* If subservices exist */}
                  {  service.SubServices && Array.isArray(service.SubServices) && service.SubServices.length > 0 ? (
                    
                    service.SubServices.map((sub, subIndex) => (
                      <div
                        onClick={() => (window.location.href = sub.link)}
                        key={subIndex}
                        className="mt-4 p-6 border-l-4 border-blue-400 pl-6 cursor-pointer hover:bg-gray-100 transition-all duration-300 rounded-lg shadow-md"
                      >
                        <h4 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">{sub.title}</h4>
                        <p className="text-sm text-gray-500 mt-2">{sub.desc || service.desc}</p>
                        {/* Optional image */}
                        {/* <img src={sub.image} alt={sub.title} className="w-full max-w-xs h-auto object-cover rounded-md mt-4 shadow-lg" /> */}
                      </div>
                    ))
                  ) : (
                    // If no subservices, show description
                    service.desc && (
                      <a
                      href={service.link}>
                      <div className="mt-4 p-6 border-l-4 border-blue-400 pl-6 cursor-pointer hover:bg-gray-100 transition-all duration-300 rounded-lg shadow-md">
                      <p className="text-sm text-gray-600 mt-2">{service.desc}</p>
                      </div>
                      </a>
                    )
                  )}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  )
}