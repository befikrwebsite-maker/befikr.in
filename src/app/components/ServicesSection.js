"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Card from "./ui/Card";

const services = [
  { title: "Financial Analysis", desc: "Lorem ipsum dolor sit amet. Aut ullam corporis a dolorem quia aut autem omnis eos fugiat minima. Aut iste esse sed natus iure id voluptas voluptatem non voluptas quia aut modi nihil vel dolor illum At aliquam fugit? Ut voluptatem voluptas nam maxime maxime eum internos suscipit qui ratione possimus qui illo perspiciatis! </p><p>Et nihil autem est delectus autem id incidunt impedit et dolorem culpa sed facere eius ad quam excepturi. Ut mollitia fuga aut pariatur maiores eum quod voluptatum aut tenetur repellendus. In unde atque ut eveniet omnis aut dolor molestias et consectetur accusantium non aperiam quod ut omnis aliquid. ", link: "https://compote.slate.com/images/22ce4663-4205-4345-8489-bc914da1f272.jpeg?crop=1560%2C1040%2Cx0%2Cy0" },
  { title: "Market Research", desc: "LoremIpsum", link: "https://compote.slate.com/images/22ce4663-4205-4345-8489-bc914da1f272.jpeg?crop=1560%2C1040%2Cx0%2Cy0" },
  { title: "Growth Strategy", desc: "LoremIpsum", link: "https://compote.slate.com/images/22ce4663-4205-4345-8489-bc914da1f272.jpeg?crop=1560%2C1040%2Cx0%2Cy0" },
  { title: "Organizational Development", desc: "LoremIpsum", link: "https://compote.slate.com/images/22ce4663-4205-4345-8489-bc914da1f272.jpeg?crop=1560%2C1040%2Cx0%2Cy0" },
];

export default function ServicesCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

  return (
    <div ref={targetRef} className="bg-[#f5f5f5] h-[500vh]">
      <div className="h-screen bg-[#f5f5f5] sticky top-0  flex items-center overflow-hidden ">
        <motion.div
          className="flex gap-8 pl-10"
          style={{ x }}
        >
          {services.map((service, index) => (
            <div
              key={index}
            >
              <Card
                title={service.title}
                desc={service.desc}
                link={service.link}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
