export default function Impact() {

    const impacts = [
        { title: "Positively Impacting Environment & Sustainability", desc: "Enabling Businesses to conserve energy & reduce the negative impact over environment along with creating a social sustainable impact."},
        { title: "Organising the Unorganised Business Services", desc: "Oﬀering organised & dependable services to businesses thus helping them scale & sustain respective business environment."},
        { title: "Pan-India One-Stop Services Company", desc: "Setting up a national foot-print of business services bringing uniformity & single-point-of-contact for businesses."},
        { title: "In-House Team of Auditors, Engineers & Skilled Professionals", desc: "Creating a pool of qualified, skilled & professional Engineers-Handymen along with eﬃcient Project Managers to Key Account Managers"}
    ];
    
    return(
        <div className="p-12">
            <div className="grid grid-cols-2 gap-6 mx-auto">
                {impacts.map((impact, index) => (
                    <div key={index} className="h-64 w-fit bg-gray-200 p-6 rounded-2xl border">
                        <h1 className="text-xl font-generalSansSemibold">{impact.title}</h1>
                        <p className="text-slate-500">{impact.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}