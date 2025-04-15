const imageList = [
    // Environment/ESG Services & Circular Economy (sorted by placement first)
    { "name": "HDFC Bank", "url": "/logos/hdfc-bank-logo.svg", "tag": ["Brands that trust us", "Environment/ESG Services", "Social/CSR Services"], "alt": "HDFC Bank Logo" },
    { "name": "Kotak", "url": "/logos/kotak.png", "tag": ["Brands that trust us", "Environment/ESG Services"], "alt": "Kotak Logo" },
    { "name": "Axis", "url": "/logos/axis-bank-logo-1.svg", "tag": ["Brands that trust us", "Environment/ESG Services"], "alt": "Axis Bank Logo" },
    { "name": "Bank of India", "url": "/logos/bankofindia.jpg", "tag": ["Brands that trust us", "Environment/ESG Services"], "alt": "Bank of India Logo" },
    { "name": "PNB", "url": "/logos/punjab-national-bank.svg", "tag": ["Brands that trust us", "Environment/ESG Services"], "alt": "Punjab National Bank Logo" },

    { "name": "Indian Oil", "url": "/logos/Indian_Oil.png", "tag": ["Brands that trust us", "Environment/ESG Services"], "alt": "Indian Oil Logo" },
    { "name": "HPCL", "url": "/logos/Hindustan_Petroleum-Logo.svg", "tag": ["Brands that trust us", "Environment/ESG Services"], "alt": "Hindustan Petroleum Logo" },
    { "name": "BOSCH Siemens", "url": "/logos/Bsh.png", "tag": ["Brands that trust us", "Environment/ESG Services"], "alt": "BOSCH Siemens Logo" },
    { "name": "Kent", "url": "/logos/kent-.png", "tag": ["Brands that trust us", "Environment/ESG Services"], "alt": "Kent Logo" },
    { "name": "Flipkart", "url": "/logos/flipkart.svg", "tag": ["Brands that trust us", "Environment/ESG Services"], "alt": "Flipkart Logo" },
    { "name": "True North", "url": "/logos/truenorth_led_logo.jpeg", "tag": ["Brands that trust us", "Environment/ESG Services"], "alt": "True North Logo" },

    { "name": "American Embassy", "url": "/logos/embassy.png", "tag": ["Brands that trust us", "Environment/ESG Services"], "alt": "American Embassy Logo" },

    { "name": "Crompton", "url": "/logos/crompton-logo.svg", "tag": ["Brands that trust us", "Environment/Circular Economy Services"], "alt": "Crompton Logo" },
    { "name": "Attero", "url": "/logos/atteroN.jpg", "tag": ["Brands that trust us", "Environment/Circular Economy Services"], "alt": "Attero Logo" },
    { "name": "Dominos", "url": "/logos/domino-s-pizza-4.svg", "tag": ["Brands that trust us", "Environment/Circular Economy Services"], "alt": "Dominos Pizza Logo" },

    // Social/CSR Services
    { "name": "Vidya School", "url": "/logos/vidyaschool.jpeg", "tag": ["Brands that trust us", "Social/CSR Services"], "alt": "Vidya School Logo" },
    { "name": "Jubilant Bhartia Foundation", "url": "/logos/jbf.png", "tag": ["Brands that trust us", "Social/CSR Services"], "alt": "Jubilant Bhartia Foundation Logo" },
    { "name": "Eveready", "url": "/logos/eveready-removebg-preview.png", "tag": ["Brands that trust us", "Social/CSR Services"], "alt": "Eveready Logo" },

    // Projects
    { "name": "Baxy Limited", "url": "/logos/baxy2-removebg-preview.png", "tag": ["Brands that trust us", "Projects"], "alt": "Baxy Limited Logo" },
    { "name": "Elcon", "url": "/logos/elcon.png", "tag": ["Brands that trust us", "Projects"], "alt": "Elcon Logo" }
];
export { imageList };



const ServicesBreakdown = [
    {
        Cateogery: "Environment", Services: [{
            Service: "Safety Audit Services",
            SubServices: [
                {
                    title: "Electrical Safety Audit Services",
                    desc: "An electrical audit is a comprehensive assessment of electrical systems & infrastructure within a building, facility, or industrial setting to evaluate electrical safety, power efficiency, electrical safety compliance with regulations, and overall performance. Regular electrical safety audits are recommended, typically every year depending on the nature of business operations and respective regulatory requirements. An efficient electrical safety audit helps prevent electrical accidents, to identify potential hazards, energy inefficiencies, opportunities for improvement, fires, and compliance issues while ensuring the safety of employees and assets.",
                    tags: ["electrical", "safety", "audit", "environment"],
                    image: "../service_img/logo-svgELECTRICAL.svg",
                    depth: "electrical-safety-audit",
                },
                {
                    title: "Energy Audit Services",
                    desc: "An energy audit is a comprehensive assessment of energy consuming mechanical & electrical infrastructure within a building, facility, or industrial setting to evaluate energy consumption patterns over a period of time. Periodical energy audits promote use of energy efficient process¬es, equipment, devices and systems, brings an effort to reduce energy intensity, ensure efficient use of energy and its conservation as per the guidelines & norms set by Bureau of energy efficiency in India. An efficient energy audit helps promote businesses take steps for energy savings & energy conservation techniques Including spreading awareness of energy savings within businesses & organisations.",
                    tags: ["energy", "environment"],
                    image: "../service_img/logo-svgEnergy.svg",
                    depth: "electrical-safety-audit",
                },
            ],
        },
        {
            Service: "Circular Economy Services",
            SubServices: [
                {
                    title: "E-Waste Management",
                    desc: "E-Waste Management is a process to recycle & manage the e-waste generated from various sources including businesses, households, and industries. E-waste management is a process to recycle & manage the e-waste generated from various sources including businesses, households, and industries. E-waste management is a process to recycle & manage the e-waste generated from various sources including businesses, households, and industries.",
                    tags: ["e", "waste", "e-waste", "management", "environment"],
                    image: "../service_img/logo-svg.svg",
                    depth: "electrical-safety-audit",
                },
                {
                    title: "Reverse Logistics Services",
                    desc: "Reverse logistics is a process to develop a reverse supply chain mechanism to collect & deliver defective products or e-waste materials back to the manufacturer base of product origin or e-waste warehouses efficiently & within the stipulated timeframe. Businesses need reverse logistics services through partners & strengthen their supply chain infrastructure for smooth end to end business operations. An efficient reverse logistics team ensures organising the fragmented unorganised services helping businesses, dealers, retailers & consumers for the products to complete their end of life processing & help strengthen the Indian circular economy.",
                    tags: ["reverse", "logistics", "environment"],
                    image: "../service_img/logo-svg.svg",
                    depth: "electrical-safety-audit",
                }
            ]
        }
        ]
    },
    {
        Cateogery: "Social", Services: [{
            Service: "Corporate Social Responsibility Services",
            SubServices: [
                {
                    title: "Corporate Social Responsibility Services",
                    desc: "Corporate social responsibility services are taken up by businesses in profit as a self-regulatory mechanism to socially contribute to specific sectors of priority & interest to the business group. Through their CSR efforts companies try and create certain social impacts contributing to a country’s infrastructure & people through business profits. Through various projects & initiatives the CSR efforts ensure businesses & brands contribute not only in the society but also for their own learning & development in the sectors they operate in. A well thought of CSR initiative eventually benefits the society & the country at large magnifying various efforts from the government, NGOs as well as the private sector thus creating a visible impact in the social frame of a country.",
                    tags: ["corporate", "response", "social"],
                    image: "../service_img/logo-svg1.svg",
                    depth: "electrical-safety-audit",
                }
            ]
        }
        ]
    },
    {
        Cateogery: "Governance", Services: [{
            Service: "Testing & Inspection Services",
            SubServices: [
                {
                    title: "Defective Audit Services",
                    desc: "Defective audit is a process to evaluate the within warranty product function & usage as designed & manufactured to work seamless for a certain set period of time in years. A defective audit gets triggered after a malfunction appearance in a new product within years of warranty as specified in the product brochure & commitment from the manufacturer or the brand. Such defective product audits ensure the customers get a due replacement as either a new product or parts amended as replacement as a service commitment within warranty. An efficient defective audit helps businesses, dealers, retailers & consumers get due justice as well as control the supply chain leakages as well as risks for businesses.",
                    tags: ["defective", "audit", "environment"],
                    image: "../service_img/logo-svgDefective.svg",
                    depth: "electrical-safety-audit",
                },
                {
                    title: "Testing, Inspection & Installation Services",
                    desc: "Testing, Inspection & Installation services are a set of services that ensure the quality, safety, and compliance of products, systems, and processes with relevant standards and regulations. These services play a crucial role in various industries, including manufacturing, construction, food and beverage, pharmaceuticals, and consumer goods. TIC services help businesses demonstrate their commitment to quality and safety while ensuring compliance with industry standards and regulations.",
                    tags: ["testing", "inspection", "installation", "environment"],
                    image: "../service_img/logo-svgDefective.svg",
                    depth: "electrical-safety-audit",
                }
            ]
        }
        ]
    },
]

export { ServicesBreakdown };

const companies = [
    {
        Category: "Oil & Gas",
        Services: [{
            Company: [
                { name: "Indian Oil", url: "/logos/Indian_Oil.png", tag: ["Brands that trust us", "Environment/ESG Services"], alt: "Indian Oil Logo" },
                { name: "HPCL", url: "/logos/Hindustan_Petroleum-Logo.svg", tag: ["Brands that trust us", "Environment/ESG Services"], alt: "Hindustan Petroleum Logo" }
            ]
        }]
    },
    {
        Category: "Banking",
        Services: [{
            Company:[
                {name: "HDFC Bank", url: "/logos/hdfc-bank-logo.svg", tag: ["Brands that trust us", "Environment/ESG Services", "Social/CSR Services"], alt: "HDFC Bank Logo" },
                {name: "Kotak", url: "/logos/kotak.png", tag: ["Brands that trust us", "Environment/ESG Services"], alt: "Kotak Logo" },
                {name: "Axis", url: "/logos/axis-bank-logo-1.svg", tag: ["Brands that trust us", "Environment/ESG Services"], alt: "Axis Bank Logo" },
                {name: "Bank of India", url: "/logos/bankofindia.jpg", tag: ["Brands that trust us", "Environment/ESG Services"], alt: "Bank of India Logo" },
                {name: "PNB", url: "/logos/punjab-national-bank.svg", tag: ["Brands that trust us", "Environment/ESG Services"], alt: "Punjab National Bank Logo" }
            ]
        }]
    },
    {
        Category: "Consumer Electronics",
        Services: [{
            Company:[
                {name: "BOSCH Siemens", url: "/logos/Bsh.png", tag: ["Brands that trust us", "Environment/ESG Services"], alt: "BOSCH Siemens Logo" },
                {name: "Kent", url: "/logos/kent-.png", tag: ["Brands that trust us", "Environment/ESG Services"], alt: "Kent Logo" },
                {name: "Crompton", url: "/logos/crompton-logo.svg", tag: ["Brands that trust us", "Environment/Circular Economy Services"], alt: "Crompton Logo" },
                {name: "Eveready", url: "/logos/eveready-removebg-preview.png", tag: ["Brands that trust us", "Social/CSR Services"], alt: "Eveready Logo" },
                {name: "Flipkart", url: "/logos/flipkart.svg", tag: ["Brands that trust us", "Environment/ESG Services"], alt: "Flipkart Logo" },
                {name: "Ozone", url: "/logos/ozone.png", tag: ["Brands that trust us", "Environment/ESG Services"], alt: "Ozone Logo" },

            ]
        }]
    },
    {
        Category: "Food & QSR",
        Services: [{
            Company:[
                {name: "Dominos", url: "/logos/domino-s-pizza-4.svg", tag: ["Brands that trust us", "Environment/Circular Economy Services"], alt: "Dominos Pizza Logo" },
            ]
        }]
    },
    {
        Cateogery:"Infotech & Others",
        Services: [{
            Company:[
                {name: "Baxy Limited", url: "/logos/baxy2-removebg-preview.png", tag: ["Brands that trust us", "Projects"], alt: "Baxy Limited Logo" },
                {name : "Zoho", url: "/logos/zohos.png", tag: ["Brands that trust us", "Environment/ESG Services"], alt: "Zoho Logo" },
            ]
        }]
    }
];


export { companies };
