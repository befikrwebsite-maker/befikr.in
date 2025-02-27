import Button from "./ui/Button"

export default function CareerSection() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">About Us</h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 mt-6">
          <p className="text-lg mt-2 font-generalSansRegular">
          Looking for a place where your expertise drives real impact? At befiikr, we empower businesses with cutting-edge consulting solutions—and we need sharp minds like yours to make it happen.

          Be part of a team that transforms challenges into opportunities. Explore career opportunities today!
          </p>
          <Button
            link="/career"
            className="w-42 transition-all delay-100"
          >Join Us & See For Yourself</Button>
        </div>
        <div className="flex-1 ml-8">
        </div>
      </div>
    </div>
  )
}