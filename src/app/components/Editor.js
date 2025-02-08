"use client"

export default function Use(){
    const array = [1,2,3,4,5]
    
    return (
        <div>
            {array.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </div>
    )
}