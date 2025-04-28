import Button from "./ui/Button"

export default function CareerSection() {
  return (
    <div className="pl-12 bg-white pb-8">
      <div className="flex w-full">
        <div className=" mt-6">
          <div className="text-2xl font-generalSansLight">
            <p className=" font-generalSansRegular"><strong className=" text-companyBlue">befikr</strong> is a strategic & execution partner for environment, safety & social IMPACT services.</p>
            <p className="pb-4">We work with businesses to exhibit Business Responsibility & Sustainability through direct impact ESG services.</p>
            <div className="items-center h-[0.5px] rounded-full bg-companyBlue"></div>
            <p className="pt-4 pb-4">Our Environment (E) IMPACT services are Energy audit, Electrical safety audit, Circular economy (Defective inspection, e-waste collection & Reverse logistics management).</p>
            <p className="pt-4 pb-4">Our Social (S) IMPACT services include CSR (Corporate Social Responsibility) touching lives & employability through training & development services for the under privileged & deserving to contribute towards a Developed India.</p>
            </div>
            <Button
              link="/who-we-are"
              className="w-42 transition-all delay-100"
            >About befikr </Button>
          </div>
        </div>
      </div>
      )
}