import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import "swiper/css";
import "swiper/css/navigation";

export default function MediaCoverage() {
    const links = [
        ["https://www.youtube.com/watch?v=XvxmThcbEhg", "Home services brand Befikr.in", "/media_logos/CNBC_Awaaz.png"],
        ["https://www.youtube.com/watch?v=nJBd51pCvj4", "Truly Organizing the Unorganized Indian Home Services Space", "/media_logos/ndtv.png"],
        ["https://www.bwdisrupt.com/article/befikrin-plans-to-cater-top-100-cities-over-next-4-years-108591", "befikr.in: Plans to Cater Top 100 Cities Over Next 4 Years", "/media_logos/BWDisrupt.png"],
        ["https://amazingworkplaces.co/at-befikr-employees-are-the-most-precious-investment/", "Achieving near zero attrition rate at befikr.in", "/media_logos/amazing_workplace.png"],
        ["https://inc42.com/buzz/hyperlocal-befikr-funding/", "Exclusive: Hyperlocal Services Startup Befikr Raises Series A Funding", "/media_logos/inc42.png"],
        ["https://www.dsim.in/blog/13-indian-startups-making-news-week-27-november-03-december/", "13 Indian Startups Making News This Week", "/media_logos/delhi school of internet marketting.png"],
        ["https://tech.hindustantimes.com/tech/news/google-launches-areo-to-rival-zomato-foodpanda-urbanclap-and-befikr-in-story-bz8T40fjH1nUF2XLBGPHSJ.html", "Google launches Areo to rival Zomato, foodpanda, UrbanClap and befikr.in", "/media_logos/ht_tech.png"]
    ];

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="bg-white w-full pt-10 px-4 pb-10 relative">
            {/* Mobile Swiper Carousel */}
            <div className="block md:hidden relative">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    {links.map(([url, title, logo]) => (
                        <SwiperSlide key={url}>
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center text-center border bg-white w-full rounded-xl p-4 hover:shadow-lg transition-all"
                            >
                                <figure className="flex flex-col items-center">
                                    <img
                                        src={logo}
                                        alt={`${title} - Media Logo`}
                                        className="w-24 h-20 object-contain mb-3"
                                    />
                                    <figcaption className="text-base font-medium text-gray-700">{title}</figcaption>
                                    <div className="text-sm text-gray-400 mt-2 hover:text-companyBlue">
                                        Learn more...
                                    </div>
                                </figure>
                            </a>
                        </SwiperSlide>
                    ))}

                    {/* Custom Arrows */}
                    <button
                        ref={prevRef}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-companyBlue group"
                    >
                        <ChevronLeftIcon className="h-6 w-6 text-gray-700 group-hover:text-white transition" />
                    </button>
                    <button
                        ref={nextRef}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-companyBlue group"
                    >
                        <ChevronRightIcon className="h-6 w-6 text-gray-700 group-hover:text-white transition" />
                    </button>
                </Swiper>
            </div>

            {/* Desktop Grid View */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-4 md:px-6">
                {links.map(([url, title, logo]) => (
                    <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-center border bg-white w-full rounded-xl p-4 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:border-companyBlue"
                    >
                        <figure className="flex flex-col items-center">
                            <img
                                src={logo}
                                alt={`${title} - Media Logo`}
                                className="w-28 h-24 object-contain mb-3"
                            />
                            <figcaption className="text-lg font-medium text-gray-700">{title}</figcaption>
                        </figure>
                        <div className="text-gray-400 text-sm mt-2 hover:text-companyBlue">Learn more...</div>
                    </a>
                ))}
            </div>
        </div>
    );
}
