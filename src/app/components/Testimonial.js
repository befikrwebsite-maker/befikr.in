import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, hover } from "framer-motion";

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
    text: "Consultant - CES",
    position: "Consultant - CES",
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
  {
    id: 12,
    name: "Muskaan Suhag",
    text: "fourth item",
    position: "Jr. Consultant - ESA",
    desc: " I've been working with befikr Opera Gratia since 8th April, and my experience so far has been amazing. The company culture is supportive and innovative, and I appreciate the opportunities provided for growth and development. Specifically, I've enjoyed working as electrical safety Coordinator. Overall, I'm happy to be a part of this team at befikr.",
    image: "../Testimonial/Img12.png"
  },
  {
    id: 13,
    name: "Anjali Patel",
    text: "fourth item",
    position: "Jr. Consultant - ESA",
    desc: "First of all, I’d like to appreciate to befikr who gave me this wonderful opportunity for professional growth and development. I’ve been working here for 1.5 years and I feel the same value nd support that was given to me on my first day. The communication from the corporate office is lear and on time, and I feel informed about company updates and initiatives.",
    image: "../Testimonial/Img13.png"
  },
];

export default function InfiniteScroller() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative flex w-full p-4 justify-center ">
      {/* Full-Screen Overlay (Only Active When Hovering) */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-companyBlue bg-opacity-90 flex items-center justify-center z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-black text-center  flex h-3/4 w-3/4"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: 20 }}
            >
              <div className="flex-1 mr-12">
                <img
                  src={data[hoveredIndex].image}
                  alt={data[hoveredIndex].name}
                  className="w-full h-auto rounded-xl mr-12 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Text Content Section */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">{data[hoveredIndex].name}</h2>
                <p className="text-xl text-black">{data[hoveredIndex].position}</p>
                <p className="text-lg text-black leading-relaxed">{data[hoveredIndex].desc}</p>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid Layout for Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 justify-items-center items-center gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={item.image}
              alt="image"
              className={`block w-40 h-40 m-4 rounded-full transition-all duration-300 ${hoveredIndex === index ? " border-white opacity-0 z-50" : ""
                }`}
            />
            <h2 className="text-gray-700 font-generalSansSemibold m-2 mb-0">{item.name}</h2>
            <h2 className="text-gray-700 m-2 mt-0">{item.position}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
