import React from "react";



export default function MediaCoverage() {

    const links = [
        ["https://www.youtube.com/watch?v=XvxmThcbEhg", "Home services brand Befikr.in", "/media_logos/CNBC_Awaaz.png"],
        ["https://www.youtube.com/watch?v=nJBd51pCvj4", "Truly Organizing the Unorganized Indian Home Services Space","/media_logos/ndtv.png"],
        ["https://www.bwdisrupt.com/article/befikrin-plans-to-cater-top-100-cities-over-next-4-years-108591", "befikr.in: Plans to Cater Top 100 Cities Over Next 4 Years","/media_logos/BWDisrupt.png"],
        ["https://amazingworkplaces.co/at-befikr-employees-are-the-most-precious-investment/", "Achieving near zero attrition rate at befikr.in","/media_logos/amazing_workplace.png"],
        ["https://inc42.com/buzz/hyperlocal-befikr-funding/", "Exclusive: Hyperlocal Services Startup Befikr Raises Series A Funding","/media_logos/inc42.png"],
        ["https://www.dsim.in/blog/13-indian-startups-making-news-week-27-november-03-december/", "13 Indian Startups Making News This Week (27 November- 03 December)","/media_logos/delhi school of internet marketting.png"],
        ["https://tech.hindustantimes.com/tech/news/google-launches-areo-to-rival-zomato-foodpanda-urbanclap-and-befikr-in-story-bz8T40fjH1nUF2XLBGPHSJ.html", "Google launches Areo to rival Zomato, foodpanda, UrbanClap and befikr.in","/media_logos/ht_tech.png"]
    ];

    return (
        <div className="bg-[#f5f5f5] pt-10 p-10 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 justify-items-center gap-6">
            {links.map(([url, title, logo], index) => (
                <a 
                    key={index} 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center border bg-white w-96 rounded-lg p-4 hover:shadow-xl duration-200 ease-in-out transform hover:-translate-y-1 hover:border-companyBlue"
                >
                    <figure className="flex flex-col items-center">
                        <img 
                            src={logo} 
                            alt={`${title} - Media Logo`} 
                            className="w-32 h-24 object-contain mb-4"
                        />
                        <figcaption className="text-lg font-medium text-gray-700">{title}</figcaption>
                    </figure>
                    <div className="text-gray-400 text-sm mt-2 hover:text-companyBlue">Learn more...</div>
                </a>
            ))}
        </div>
    );
}