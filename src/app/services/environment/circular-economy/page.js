"use client";

import Navbar from "@/components/NavBar";
import NavbarSub from "@/components/Navbar-Sub";
import Footer from "@/components/Footer";

export default function CircularEconomy() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-generalSansMedium">
      <Navbar />

      <main className="w-full flex flex-col items-center no-scrollbar bg-[#f5f5f5]">
        <div className="h-fit text-center flex flex-col justify-center items-center pb-10 pt-14">
          <div className="p-10 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-generalSansMedium">
              Circular Economy Services
              <span className="pt-2 inline-block font-generalSansItalic text-companyBlue">.</span>
            </h1>
            <p className="pt-6 text-lg md:text-xl max-w-3xl">
              
            </p>

            <div className="pt-16 text-left">
              <p className="text-lg md:text-xl font-generalSansLight">
                Circularity is embraced within sustainable materials management. Today, less than 10% of materials used for new product creation are cycled back into our economies for reuse after one-time use. Economic activities that are restorative or regenerative by design enable resources used in such processes and activities to maintain their highest value for as long as possible.
              </p>
              <p className="pt-4 pb-8">
                A circular economy aims to reuse valuable materials and products by promoting the sustainable use of natural resources, extending the material life cycle, and preventing them from being prematurely discarded as waste.
              </p>
              <p className="pt-4 pb-8">
                All kinds of waste generated, especially e-waste, significantly burden the environment and contribute to the climate, biodiversity, and pollution crises. Besides helping tackle the problem of pollution, the circular economy can play a critical role in solving other complex challenges such as climate change and biodiversity loss, improving economics, and elevating social justice.
              </p>
              <p className="pt-4 pb-8">
                Every year millions of electrical and electronic devices are discarded as products break or become obsolete and are thrown away. These discarded devices are considered e-waste and are a threat to health and the environment if they are not disposed of and recycled appropriately. Common items in e-waste streams include computers, mobile phones, large household appliances, and medical equipment. Millions of tonnes of e-waste are recycled using unsound activities, stored improperly, dumped, or illegally exported. When e-waste is recycled using unsound methods, it can release up to 1,000 different chemical substances into the environment, leading to a significant environmental and social crisis.
              </p>
              <p className="pt-4 pb-8">
                At befikr, as an ESG services company, we provide defective inspection & audit services, e-waste management & reverse logistics solutions that assist businesses in achieving their environmental goals while protecting both people and the planet through comprehensive circular economy services.
              </p>
            </div>

            <div className="mt-10 items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>

            <h2 className="text-3xl font-generalSansMedium text-companyBlue">Key Principles of a Circular Economy</h2>
            <div className="pt-6 text-lg text-left">
              <ul className="list-disc pl-6">
                <li><strong>Eliminating Waste and Pollution:</strong> Design products and processes to minimize waste and pollution at every stage of the product lifecycle.</li>
                <li><strong>Keeping Products and Materials in Use:</strong> Focus on extending the lifespan of products and materials through reuse, repair, refurbishment, and recycling.</li>
                <li><strong>Regenerating Natural Systems:</strong> Aim to restore and regenerate natural ecosystems, ensuring that resources are used sustainably.</li>
              </ul>
            </div>

            <div className="mt-10 items-center h-[0.5px] rounded-full mb-10 bg-companyBlue"></div>

            <h2 className="text-3xl font-generalSansMedium text-companyBlue">How it Differs from the Linear Economy</h2>
            <div className="pt-6 text-lg text-left">
              <ul className="list-disc pl-6">
                <li><strong>Linear Economy:</strong> The traditional "take-make-dispose" model where resources are extracted, transformed into products, used, and then discarded as waste.</li>
                <li><strong>Circular Economy:</strong> Aims to move away from the linear model by designing products and systems that are restorative and regenerative by design.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
