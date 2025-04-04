"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScreenSizeComponent() {
  const [activeTab, setActiveTab] = useState(null);

  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: 'This is the content for Tab 1' },
    { id: 'tab2', label: 'Tab 2', content: 'This is the content for Tab 2' },
    { id: 'tab3', label: 'Tab 3', content: 'This is the content for Tab 3' }
  ];

  const handleClick = (tabId) => {
    const isSame = activeTab === tabId;
    setActiveTab(isSame ? null : tabId);
    window.history.pushState(null, '', isSame ? '/' : `?tab=${tabId}`);
  };

  return (
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100 gap-6 p-4">
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-6xl justify-center items-center">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const isHidden = activeTab !== null && !isActive;

            return (
              <AnimatePresence key={tab.id}>
                {!isHidden && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => handleClick(tab.id)}
                    className="flex-1 h-64 bg-blue-500 hover:bg-blue-600 text-white font-bold flex items-center justify-center rounded-2xl shadow-xl cursor-pointer"
                    style={{
                      flex: isActive ? 3 : 1,
                    }}
                  >
                    {tab.label}
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
        </div>

        <AnimatePresence>
          {activeTab && (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="mt-8 p-6 bg-white rounded-xl shadow-md max-w-xl text-center"
            >
              {
                tabs.find((tab) => tab.id === activeTab)?.content
              }
            </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
}
