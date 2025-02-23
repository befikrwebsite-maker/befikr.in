export default function StackCards({title, desc, link}) {
    return(
        <div className="border-2 max-w-full rounded-xl mt-8 h-96">
            <div className="p-5">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
    )
};