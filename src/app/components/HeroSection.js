import { ChevronRight} from "lucide-react"

export default function Hero() {
    return (
        <section
            className="relative h-screen flex items-end bg-cover bg-center bg-no-repeat rounded-b-[4rem]"
        >
            <video
                className="absolute top-0 left-0 w-full h-full object-cover rounded-b-[4rem]"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/1536350-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black opacity-60 rounded-b-[4rem]"></div>
            <div className="relative z-10 text-white px-6 md:w-full rounded-b-[4rem]">
                <h1 className="inline-block text-5xl md:text-7xl font-generalSansSemibold leading-tight transition-all delay-175 text-white hover:inline-block  hover:text-companyBlue hover:bg-white p-2">
                    Excellence is The Only <div className="inline-block font-generalSansSemiboldItalic">Standard</div>.
                </h1>
                <p className="inlin-block p-3 text-xl md:text-2xl mb-8 max-w-3xl">
                    Enabling global leaders in sustainability to drive impactful and lasting change.
                </p>
                <a
                    href="#contact"
                    className="inline-flex items-center px-8 py-4 mb-24 text-lg font-semibold text-black bg-white rounded-full delay-175 hover:bg-companyBlue hover:text-white transition-colors"
                >
                    Get Started
                    <ChevronRight className="ml-2 h-6 w-6" />
                </a>
            </div>
        </section>
    );
}

