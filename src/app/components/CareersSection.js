import Button from "./ui/Button"

export default function CareerSection() {
  return (
    <div className="pl-12 pb-8">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 mt-6">
          <p className="text-lg mt-2 font-generalSansMedium">
          Looking for a place where your expertise drives real impact? At befiikr, we empower businesses with cutting-edge consulting solutions—and we need sharp minds like yours to make it happen.

          Be part of a team that transforms challenges into opportunities. Explore career opportunities today!
          </p>
          <Button
            link="/work-with-us"
            className="w-42 transition-all delay-100"
          >Join Us & See For Yourself</Button>
        </div>
        <div className="flex-1 ml-8">
        </div>
      </div>
    </div>
  )
}