import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const ExpandableItem = ({ title, subtitle, content }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useLayoutEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const content = contentRef.current;

    if (isExpanded) {
      gsap.to(content, {
        height: 'auto',
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.75)',
      });
    } else {
      gsap.to(content, {
        height: 0,
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power3.inOut',
      });
    }
  }, [isExpanded]);

  return (
    <div
      ref={containerRef}
      onClick={() => setIsExpanded(!isExpanded)}
      className="mb-4 w-full max-w-md cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:shadow-xl"
    >
      <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-5">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-blue-100">{subtitle}</p>
      </div>
      <div ref={contentRef} className="w-full overflow-hidden">
        <div className="p-5 w-full">
          <p className="text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  );
};

const ExpandableList = () => {
  const items = [
    {
      title: 'First Item',
      subtitle: 'Click to expand',
      content: 'This is the content for the first expandable item.',
    },
    {
      title: 'Second Item',
      subtitle: 'With organic animation',
      content: 'This content expands with a smooth, elastic motion using GSAP.',
    },
    {
      title: 'Third Item',
      subtitle: 'Try clicking me',
      content: 'Each item maintains its own expanded state independently.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-row items-center bg-gray-50 p-4 pt-20">
      {items.map((item, index) => (
        <ExpandableItem key={index} {...item} />
      ))}
    </div>
  );
};

export default ExpandableList;