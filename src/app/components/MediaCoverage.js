import React from "react";



export default function MediaCoverage() {

    const links = [
        ["https://www.youtube.com/watch?v=XvxmThcbEhg", "Home services brand Befikr.in", "/media_logos/CNBC_Awaaz.png"],
        ["https://www.youtube.com/watch?v=nJBd51pCvj4", "Truly Organizing the Unorganized Indian Home Services Space","/media_logos/ndtv.png"],
        ["https://www.bwdisrupt.com/article/befikrin-plans-to-cater-top-100-cities-over-next-4-years-108591", "befikr.in: Plans to Cater Top 100 Cities Over Next 4 Years","/media_logos/BWDisrupt.png"],
        ["https://amazingworkplaces.co/at-befikr-employees-are-the-most-precious-investment/", "Achieving near zero attrition rate at befikr.in - Amazing Workplaces","/media_logos/amazing_workplace.png"],
        ["https://inc42.com/buzz/hyperlocal-befikr-funding/", "Exclusive: Hyperlocal Services Startup Befikr Raises Series A Funding","/media_logos/inc42.png"],
        ["https://www.dsim.in/blog/13-indian-startups-making-news-week-27-november-03-december/", "13 Indian Startups Making News This Week (27 November- 03 December)","/media_logos/delhi school of internet marketting.png"],
        ["https://tech.hindustantimes.com/tech/news/google-launches-areo-to-rival-zomato-foodpanda-urbanclap-and-befikr-in-story-bz8T40fjH1nUF2XLBGPHSJ.html", "Google launches Areo to rival Zomato, foodpanda, UrbanClap and befikr.in","/media_logos/ht_tech.png"]
    ];

    return (
        <div className="bg-[#f5f5f5] pt-10 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 justify-items-center ">
            {links.map((item, index) =>
                <a
                    className=" flex border justify-center items-center bg-white w-96 h-30 rounded-md hover:shadow-2xl duration-150 ease-in text-gray-700 m-4 font-generalSansMedium hover:border-companyBlue"
                    key={index}
                    href={item[0]}
                    target="_blank"
                >
                    <div className="flex m-4 text-xl flex-row flex-wrap">
                        <img src={item[2]} alt="logo" className="max-w-36 flex-1 max-h-28 self-center my-2"></img>
                        {item[1]}
                        <br></br>
                        <div className="text-gray-400 text-md my-2 hover:text-companyBlue">Learn more..</div>
                    </div>
                </a>
            )}
        </div>

    );
}