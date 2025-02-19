import Image from "next/image";

export default function Card({ title, desc, link }) {
  return (
    <div className="w-[1200px] h-[500px] p-4 bg-white border 2xl:h-[900px] 2xl:w-[2000px] rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex shadow-xl ">
      <div className="flex-1 p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        <a
          href={link}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-companyBlue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-companyBlue dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
      <img
          className=" flex-1 rounded-t-lg"
          src={link}
          alt={title || "Blog image"}
        />
    </div>
  );
}
