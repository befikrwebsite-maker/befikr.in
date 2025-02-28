import { useState, useEffect, useRef } from "react";

const data = [
    { 
      id: 1, 
      name: "Manininder Singh",
      text: "first item",
      position: "Deputy Manager - HR",
      desc: "It has been a great experience working as Deputy Manager - HR at Opera Gratia Pvt.Ltd. The organization has provided me with valuable opportunities to grow professionally while contributing to key HR functions such as recruitment, employee engagement, and process optimization. I am grateful to be part of a team that values innovation and collaboration.",
      image: "../Testimonial/Img1.jpg" 
    },
    { 
      id: 2, 
      name: "Monika Singh",
      text: "Consultant-CES",
      position: "Consultant-CES",
      desc: "This is my first job at Corporate Office, and I'm very glad that I became a part of the Befikr family. Seniors are very helpful here, and the work environment is very good for females.",
      image: "../Testimonial/Img2.jpg" 
    },
    { 
      id: 3, 
      name: "Kapil Chawla",
      text: "third item",
      position: "Sr. Manager/Quality - ESA",
      desc: "It's a really good place to work. Befikr provided me with an excellent experience and opportunities that helped me quickly transition into my role and gain valuable expertise in the audit field.",
      image: "../Testimonial/Img3.jpg" 
    },
    { 
      id: 4, 
      name: "Animesh Verma",
      text: "fourth item",
      position: "Asst Manager - MSP",
      desc: "I got a supportive work environment here. I have learned so many things while working, and I have found multiple growth opportunities.",
      image: "../Testimonial/Img4.jpg" 
    },
    { 
      id: 5, 
      name: "Ajeena Khan",
      text: "fourth item",
      position: "Asst Manager - MSP",
      desc: "This is one of my best jobs. The environment and staff are very good and supportive. I have learned so many things here, and I enjoy my work.",
      image: "../Testimonial/Img5.jpg" 
    },
  ];

export default function InfiniteScroller() {
  const [items, setItems] = useState([...data, ...data]); // Duplicate data for seamless looping
  const containerRef = useRef(null);
  const scrollInterval = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (hoveredIndex === null) {
      scrollInterval.current = setInterval(() => {
        if (containerRef.current) {
          containerRef.current.scrollLeft += 3;
          if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
            containerRef.current.scrollLeft = 0;
          }
        }
      }, 30);
    }
    return () => clearInterval(scrollInterval.current);
  }, [hoveredIndex]);

  return (
    <div className="flex items-center w-full p-4 h-[60vh]">
      <div ref={containerRef} className="flex overflow-hidden whitespace-nowrap w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-row flex-none mx-4 transition-all duration-300 rounded-lg shadow-lg bg-companyBlue p-4 max-w-[40rem] 
                ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-30 grayscale" : "opacity-100"}
              ${hoveredIndex === index ? "scale-118" : "scale-95"}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="w-1/3 h-58 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-center text-lg text-white p-4 text-center overflow-hidden break-words">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-s text-gray-300">{item.position}</p>
              <p className="text-sm mt-2 text-white text-wrap">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
