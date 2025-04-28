export default function ServiceTemplate({ placeholder, image, audit, desc, Array, imageScope }) {
    return (
        <div className="relative overflow-hidden bg-gray-50">
            
        {/* Hero Section */}
        <div className="flex w-full h-full bg-gray-100">
          <div className="relative h-96 w-full bg-cover">
            <img
              src={image}
              alt={placeholder}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <h1 className="text-5xl absolute top-[200px] left-0 right-0 px-4 text-white font-bold">
              {placeholder}
            </h1>
          </div>
        </div>
  
        {/* Content Section */}
        <div className="max-w-5xl items-center justify-center py-16 px-4 mx-auto">
          <div className="text-left">
            <h1 className="text-4xl text-black mb-6">What is an {audit || placeholder}?</h1>
            <p className="text-gray-700">{desc}</p>
          </div>
        </div>
  
        {/* Audit Approach Section */}
        <div className="max-w-5xl items-center justify-center py-16 px-4 mx-auto">
          <h1 className="text-4xl text-black mb-10 ">Audit Approach of an {audit} at Befikr</h1>
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10">
            {Array.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md w-full md:w-1/3">
                <img src={item.image} alt={item.title} className="w-16 h-16 mb-4" />
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Additional Information Section */}
        <div className="max-w-5xl items-center justify-center py-16 px-4 mx-auto">
          <h1 className="text-4xl text-black mb-10 ">
            Why is an {audit} Important?
          </h1>
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-10">
            {Array.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md w-full md:w-1/3">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Scope Section */}
        <div className="max-w-7xl flex flex-col md:flex-row items-center justify-center py-16 px-4 mx-auto gap-10">
          <div className="flex-1">
            <h1 className="text-4xl text-black mb-6">Scope of an {audit}</h1>
            <p className="text-gray-700">{desc}</p>
          </div>
          <div className="flex-1">
            <img
              src={imageScope}
              alt="Scope Image"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    );
  }
  