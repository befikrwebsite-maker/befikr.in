import Button from "./ui/Button"

export default function CareerSection() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">About Us</h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <p className="text-lg mt-2 font-generalSansRegular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button
            link="/career"
            className="w-42 transition-all delay-100"
          >Join Us & See For Yourself</Button>
        </div>
        <div className="flex-1 ml-8">
          <div className="p-4 bg-[#f5f5f5] shadow-xl rounded-2xl">
          <img
            className="rounded-xl"
            src="/images/IMG-20250220-WA0008.jpg"
            alt="Text that describes us"
          />
          </div>
        </div>
      </div>
    </div>
  )
}