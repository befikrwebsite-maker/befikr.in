import { useState, useEffect, useRef } from "react";

const data = [
  {
    id: 1,
    name: "Manininder Singh",
    text: "first item",
    position: "Deputy Manager - HR",
    desc: "I have been working as an HR at Opera Gratia (Befikr) since December 2024, and my experience so far has been both enriching and rewarding. The company fosters a collaborative and growth-oriented work environment, allowing me to enhance my skills in recruitment, employee engagement, and HR operations.",
    image: "../Testimonial/Img1.jpg"
  },
  {
    id: 2,
    name: "Monika Singh",
    text: "Consultant-CES",
    position: "Consultant-CES",
    desc: "This is my first job at corporate office and I'm very glad that I become a part of Befikr family. Seniors are very helpful here also work environment is very good for females.",
    image: "../Testimonial/Img2.jpg"
  },
  {
    id: 3,
    name: "Kapil Chawla",
    text: "third item",
    position: "Sr. Manager/Quality - ESA",
    desc: "It's a really good place to work. Befikr provided me with an excellent experience and opportunities that helped me quickly transition into my role and gain valuable expertise in the Audit field.",
    image: "../Testimonial/Img3.jpg"
  },
  {
    id: 4,
    name: "Animesh Verma",
    text: "fourth item",
    position: "Asst Manager - MSP",
    desc: "I got supportive work environment here. I have learnt so many things while working also I have found multiple growth opportunity.",
    image: "../Testimonial/Img4.jpg"
  },
  {
    id: 6,
    name: "Ajeena Khan",
    text: "fourth item",
    position: "Asst Manager - MSP",
    desc: "This is one of my best jobs. The environment and staff are very good and supportive. I have learned so many things here, and I enjoy my work.",
    image: "../Testimonial/Img5.jpg"
  },
  {
    id: 7,
    name: "Harish Yadav",
    text: "fourth item",
    position: "Deputy Manager - CES",
    desc: "The most rewarding part of my journey here has been the way the company fosters a culture of continuous learning and open communication, making me feel valued and empowered every step of the way.",
    image: "../Testimonial/Img7.png"
  },
  {
    id: 8,
    name: "Amit Chauhan",
    text: "fourth item",
    position: "Manager - Admin & Operations",
    desc: "Working with Opera Gratia (Befikr) has been a great experience. Their efficient operations, strong administrative support, and commitment to excellence make them a reliable and professional organization. Wishing them continued success in their endeavours",
    image: "../Testimonial/Img8.png"
  },
  {
    id: 9,
    name: "Sanjay Singh",
    text: "fourth item",
    position: "Deputy General Manager - CES",
    desc: "I joined befikr as entry level manager and now hold a position of DGM- Services, where I managing a team of 550 in the capacity of manager. During my 8 years with befikr, I have seen that befikr always had a excellent team with wide range of skill sets which can help any client to achieve their objectives and goals. Working with befikr team is an Outstanding Experience. Opportunities are higher to learn and grow in befikr.",
    image: "../Testimonial/Img9.png"
  },
  {
    id: 10,
    name: "Sumit Kumar Mishra",
    text: "fourth item",
    position: "Deputy General Manager - CES",
    desc: "As an employee, I appreciate the transparent and approachable nature of our management team. They consistently seek feedback, listen to concerns, and genuinely value our input, creating an open environment where communication flows freely. Management is always willing to offer guidance and support, but they also trust us to take ownership of our responsibilities.",
    image: "../Testimonial/Img10.png"
  },
  {
    id: 11,
    name: "Hemant Kumar",
    text: "fourth item",
    position: "Deputy General Manager - CES",
    desc: " I'm proud to be part of the Befikr company that puts service at its heart. Every day, I get to work with a dedicated team that values excellence, genuine care, and constant innovation. It's inspiring to see how our commitment to quality service not only meets but exceeds our customers' expectations.",
    image: "../Testimonial/Img11.png"
  },
  // { 
  //   id: 12, 
  //   name: "Muskaan Suhag",
  //   text: "fourth item",
  //   position: "Deputy General Manager - CES",
  //   desc: "I've been working with befikr Opera Gratia since 8th April, and my experience so far has been amazing. The company culture is supportive and innovative, and I appreciate the opportunities provided for growth and development. Specifically, I've enjoyed working as electrical safety Coordinator. Overall, I'm happy to be a part of this team at befikr.",
  //   image: "../Testimonial/Img12.png" 
  // },
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
    <div className="flex w-full p-4 justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center items-center gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-wrap justify-center rounded-md  ">
            <img src={item.image} className="block w-40 h-40 m-4 rounded-full" alt="image"></img>
            <h2 className="text-gray-700 m-2">{item.position}</h2>
          </div>
        ))}
      </div>


      {/* <div ref={containerRef} className="flex overflow-hidden whitespace-nowrap w-full">
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
      </div> */}
    </div>
  );
}
