import imageList from "./imageList";
import { useState } from "react";

export default function PartnerCarousel() {
    const [activeTags, setActiveTags] = useState([]);

    const toggleTag = (tag) => {
        setActiveTags((prevTags) =>
            prevTags.includes(tag)
                ? prevTags.filter((t) => t !== tag)
                : [tag]
        );
    };

    const filteredImages =
        activeTags.length === 0
            ? imageList
            : imageList.filter((image) =>
                Array.isArray(image.tag) && image.tag.some((tag) => activeTags.includes(tag))
            );

    const allTags = [...new Set(imageList.flatMap((image) => image.tag))];



    return (
        <div className="w-full p-6 overflow-hidden">

            <div className="p-6 rounded-xl shadow-xl bg-[#f5f5f5]">
                <div className="md:flex pb-10">
                    {allTags.map((tag) => (
                        <label
                            key={tag}
                            className={`flex items-center mb-4 md:mb-0 justify-center px-4 py-2 text-sm font-medium rounded-2xl md:rounded-full ml-4 cursor-pointer transition-all border-2
                            ${activeTags.includes(tag)
                                    ? "bg-companyBlue text-white shadow-lg"
                                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-indigo-50 dark:hover:bg-gray-700"
                                }`}
                        >
                            <input
                                type="checkbox"
                                value={tag}
                                checked={activeTags.includes(tag)}
                                onChange={() => toggleTag(tag)}
                                className="hidden"
                            />
                            {tag}
                        </label>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
                    {filteredImages.map((logo, index) => (
                        <div
                            key={index}
                            className="h-[150px] w-[200px] bg-white  border flex items-center justify-center rounded-xl"
                        >
                            <img
                                src={logo.url}
                                alt={`logo-${index}`}
                                className="w-full h-full object-contain p-4"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
