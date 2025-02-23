import Link from "next/link";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

const Errorpage = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
        <div className="relative p-10">
          <div className="absolute inset-0 top-[-30%]  flex items-center justify-center text-blue-200 text-[25vw] sm:text-[28vw] md:text-[28vw] lg:text-[28vw] font-extrabold opacity-60">
            404
          </div>
          <h2 className="relative text-3xl font-bold text-black">WE ARE SORRY, PAGE NOT FOUND !</h2>
          <p className="relative mt-2 text-gray-600">
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED, HAD ITS NAME CHANGED, OR IS TEMPORARILY UNAVAILABLE
          </p>
          <Link href="/">
            <button className="relative mt-6 px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-800 transition duration-300 text-lg font-semibold">
              BACK TO HOMEPAGE
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Errorpage;
