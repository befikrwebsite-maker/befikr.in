import Button from "@/components/ui/Button";

export default function SectionTwo() {
    return (
        <div className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
                <img src="/images/IMG-20250220-WA0006.jpg" alt="Image 1" className="w-full h-auto" />
                <img src="/images/IMG-20250220-WA0006.jpg" alt="Image 2" className="w-full h-auto mt-4" />
                <img src="/images/IMG-20250220-WA0006.jpg" alt="Image 3" className="w-full h-auto " />
                <img src="/images/IMG-20250220-WA0006.jpg" alt="Image 4" className="w-full h-auto mt-4" />
                <img src="/images/IMG-20250220-WA0006.jpg" alt="Image 5" className="w-full h-auto" />
                <img src="/images/IMG-20250220-WA0006.jpg" alt="Image 6" className="w-full h-auto mt-4" />
            </div>

            <div className="hidden md:block">
                <h1 className="text-5xl font-bold mb-4">
                    Perks of Being in <span className="font-generalSansMediumItalic text-companyBlue">befikr</span>
                </h1>
                <p className="text-gray-600 mb-8">Work at one of the most successful agency in India</p>
            </div>
        </div>
    );
}
