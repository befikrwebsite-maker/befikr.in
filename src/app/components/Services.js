
const ServicesBreakdown = [
    {
        Cateogery: "Environment",
        link:"/?service=Environment",
        image: "/catImage/image-1.png",
        bgColor: "bg-orange-100",
        Services: [{
            Service: "Electrical Safety Audit Services",
            desc: "An electrical audit is a comprehensive assessment of electrical systems & infrastructure within a building, facility, or industrial setting to evaluate electrical safety, power efficiency, electrical safety compliance with regulations, and overall performance. Regular electrical safety audits are recommended, typically every year depending on the nature of business operations and respective regulatory requirements. An efficient electrical safety audit helps prevent electrical accidents, to identify potential hazards, energy inefficiencies, opportunities for improvement, fires, and compliance issues while ensuring the safety of employees and assets.",
            link: "/services/environment/safety-audit/electrical-safety-audit",
            SubServices: [
                {
                    title: "Electrical Safety Audit Services",
                    desc: "",
                    tags: ["testing", "inspection", "installation", "environment"],
                    image: "../service_img/logo-svgDefective.svg",
                    depth: "electrical-safety-audit",
                    link: "/services/environment/safety-audit/electrical-safety-audit",
                },
                {
                    title: "Safety Mat Installation Service",
                    desc: "",
                    tags: ["testing", "inspection", "installation", "environment"],
                    image: "../service_img/logo-svgDefective.svg",
                    depth: "testing-inspection-service",
                    link: "/services",
                }
            ]
        },
        {
            Service: "Energy Audit Services",
            desc: "An energy audit is a comprehensive assessment of energy consuming mechanical & electrical infrastructure within a building, facility, or industrial setting to evaluate energy consumption patterns over a period of time. Periodical energy audits promote use of energy efficient process¬es, equipment, devices and systems, brings an effort to reduce energy intensity, ensure efficient use of energy and its conservation as per the guidelines & norms set by Bureau of energy efficiency in India. An efficient energy audit helps promote businesses take steps for energy savings & energy conservation techniques Including spreading awareness of energy savings within businesses & organisations.",
            link: "/services/environment/safety-audit/energy-audit",
        },
        // {
        //     Service: "Greenhouse Gas Emission Audit Services",
        //     desc: "",
        //     link: "/services",
        // },
            {
            Service: "Circular Economy Services",
            link: "/services/environment/circular-economy",
            SubServices: [
                
                {
                    title: "E-Waste Management",
                    desc: "E-Waste Management is a process to recycle & manage the e-waste generated from various sources including businesses, households, and industries. E-waste management is a process to recycle & manage the e-waste generated from various sources including businesses, households, and industries. E-waste management is a process to recycle & manage the e-waste generated from various sources including businesses, households, and industries.",
                    tags: ["e", "waste", "e-waste", "management", "environment"],
                    image: "../service_img/logo-svg.svg",
                    depth: "e-waste-management",
                    link: "/services/environment/circular-economy/e-waste-management",
                },
                {
                    title: "Reverse Logistics Services",
                    desc: "Reverse logistics is a process to develop a reverse supply chain mechanism to collect & deliver defective products or e-waste materials back to the manufacturer base of product origin or e-waste warehouses efficiently & within the stipulated timeframe. Businesses need reverse logistics services through partners & strengthen their supply chain infrastructure for smooth end to end business operations. An efficient reverse logistics team ensures organising the fragmented unorganised services helping businesses, dealers, retailers & consumers for the products to complete their end of life processing & help strengthen the Indian circular economy.",
                    tags: ["reverse", "logistics", "environment"],
                    image: "../service_img/logo-svg.svg",
                    depth: "reverse-logistics-service",
                    link: "/services/environment/circular-economy/reverse-logistics",
                }
            ]
        }
        ]
    },
    {
        Cateogery: "Social",
        link:"/services?service=Social",
        image: "/catImage/image-2.png",
        bgColor: "bg-blue-100",
        link: "/services/social/",
         Services: [{
            Service: "Corporate Social Responsibility Services",
            link: "/services/social/csr/csr",
            SubServices: [
                {
                    title: "Corporate Social Responsibility Services",
                    desc: "Corporate social responsibility services are taken up by businesses in profit as a self-regulatory mechanism to socially contribute to specific sectors of priority & interest to the business group. Through their CSR efforts companies try and create certain social impacts contributing to a country’s infrastructure & people through business profits. Through various projects & initiatives the CSR efforts ensure businesses & brands contribute not only in the society but also for their own learning & development in the sectors they operate in. A well thought of CSR initiative eventually benefits the society & the country at large magnifying various efforts from the government, NGOs as well as the private sector thus creating a visible impact in the social frame of a country.",
                    tags: ["corporate", "response", "social"],
                    image: "../service_img/logo-svg1.svg",
                    depth: "csr",
                    link: "/services/social/csr/csr",
                }
            ]
        }
        ]
    },
    {
        Cateogery: "Governance", 
        link:"/services?service=Governance",
        image: "/catImage/image-3.png",
        bgColor: "bg-gray-100",
        Services: [{
            Service: "Testing & Inspection Services",
            link: "/services/governance/testing-inspection-demo",
            SubServices: [
                {
                    title: "Defective Audit Services",
                    desc: "Defective audit is a process to evaluate the within warranty product function & usage as designed & manufactured to work seamless for a certain set period of time in years. A defective audit gets triggered after a malfunction appearance in a new product within years of warranty as specified in the product brochure & commitment from the manufacturer or the brand. Such defective product audits ensure the customers get a due replacement as either a new product or parts amended as replacement as a service commitment within warranty. An efficient defective audit helps businesses, dealers, retailers & consumers get due justice as well as control the supply chain leakages as well as risks for businesses.",
                    tags: ["defective", "audit", "environment"],
                    image: "../service_img/logo-svgDefective.svg",
                    depth: "defective-audit-service",
                    link: "/services/governance/testing-inspection-demo/defective-audit",
                },
                {
                    title: "Testing, Inspection & Installation Services",
                    desc: "Testing, Inspection & Installation services are a set of services that ensure the quality, safety, and compliance of products, systems, and processes with relevant standards and regulations. These services play a crucial role in various industries, including manufacturing, construction, food and beverage, pharmaceuticals, and consumer goods. TIC services help businesses demonstrate their commitment to quality and safety while ensuring compliance with industry standards and regulations.",
                    tags: ["testing", "inspection", "installation", "environment"],
                    image: "../service_img/logo-svgDefective.svg",
                    depth: "testing-inspection-service",
                    link: "/services/governance/testing-inspection-demo/installation-demo",
                },
                
            ]
        }
        ]
    },
]

export default ServicesBreakdown;