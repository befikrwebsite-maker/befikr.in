
  export default function ServiceTemplate({
    placeholder = "Our Service",
    auditdesc = [],
    audit,
    image,
    imageScope,
    ArrayAppr = [],
    ArraySupp = [],
    ArrayKeyAspects = [],
    ArrayExamples = [],
    ArrayBenifits = [],
    scope = ""
  }) {
    const fallbackImage = "/default-image.jpg"; // optional placeholder
  
    return (
      <div className="relative overflow-hidden bg-gray-50">
  
        {/* Hero Section */}
        {(image || placeholder) && (
          <div className="flex w-full h-full bg-companyBlue">
            <div className="relative h-96 w-full bg-cover">
              <img
                src={image || fallbackImage}
                alt={placeholder}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <h1 className="text-5xl absolute top-[200px] left-0 right-0 px-4 text-black font-bold ">
                {placeholder}
              </h1>
            </div>
          </div>
        )}
  
        {/* What is this Audit */}
        {Array.isArray(auditdesc) && auditdesc.length > 0 && (
          <div className="max-w-5xl py-16 px-4 mx-auto">
            <h1 className="text-4xl text-black mb-6">
              What is an {audit || placeholder}?
            </h1>
            <div className="space-y-4">
              {auditdesc.map((item, index) => (
                item && (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {typeof item === "string" ? item : JSON.stringify(item)}
                  </p>
                )
              ))}
            </div>
          </div>
        )}
  
        {/* Audit Approach */}
        {Array.isArray(ArrayAppr) && ArrayAppr.length > 0 && (
          <div className="max-w-5xl py-16 px-4 mx-auto">
            <h1 className="text-4xl text-black mb-10">
              Audit Approach of an {placeholder} at Befikr
            </h1>
            <div className="flex flex-wrap justify-start gap-10">
              {ArrayAppr.map((item, index) => (
                item && (
                  <div
                    key={index}
                    className="flex flex-col items-center p-6 bg-gray-100 rounded-lg h-96 shadow-md w-full md:w-1/3"
                  >
                    {item?.image && (
                      <img
                        src={item.image}
                        alt={item.title || "Approach Image"}
                        className="w-16 h-16 mb-4"
                      />
                    )}
                    {item?.title && (
                      <h2 className="text-xl font-bold">{item.title}</h2>
                    )}
                    {item?.description && (
                      <p className="text-gray-600 text-center">{item.description}</p>
                    )}
                  </div>
                )
              ))}
            </div>
          </div>
        )}
  
        {/* Key Aspects Section */}
        {Array.isArray(ArrayKeyAspects) && ArrayKeyAspects.length > 0 && (
          <div className="max-w-5xl py-16 px-4 mx-auto">
            <h1 className="text-4xl text-black mb-10">Key Aspects of {audit || placeholder}</h1>
            <div className="flex flex-wrap justify-center gap-10">
              {ArrayKeyAspects.map((item, index) => (
                item && (
                  <div
                    key={index}
                    className="flex flex-col items-start p-6 bg-gray-100 rounded-lg shadow-md w-full md:w-1/3"
                  >
                    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        )}
  
        {/* Examples Section */}
        {Array.isArray(ArrayExamples) && ArrayExamples.length > 0 && (
          <div className="max-w-5xl py-16 px-4 mx-auto">
            <h1 className="text-4xl text-black mb-10">Examples of {audit || placeholder}</h1>
            <div className="flex flex-wrap justify-center gap-10">
              {ArrayExamples.map((item, index) => (
                item && (
                  <div
                    key={index}
                    className="flex flex-col items-start p-6 bg-gray-100 rounded-lg shadow-md w-full md:w-1/3"
                  >
                    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        )}
  
        {/* Benefits Section */}
        {Array.isArray(ArrayBenifits) && ArrayBenifits.length > 0 && (
          <div className="max-w-5xl py-16 px-4 mx-auto">
            <h1 className="text-4xl text-black mb-10">Benefits of {audit || placeholder}</h1>
            <div className="flex flex-wrap justify-center gap-10">
              {ArrayBenifits.map((item, index) => (
                item && (
                  <div
                    key={index}
                    className="flex flex-col items-start p-6 bg-gray-100 rounded-lg shadow-md w-full md:w-1/3"
                  >
                    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        )}
  
        {/* Why is it Important */}
        {ArraySupp && ArraySupp.length > 0 && (
          <div className="max-w-5xl items-center justify-center py-16 px-4 mx-auto">
            <h1 className="text-4xl text-black mb-10">Why is an {audit} Important?</h1>
            <div className="flex flex-col md:flex-row flex-wrap text-left gap-10">
              {ArraySupp.map((item, index) => (
                <div key={index} className="flex flex-col p-6 border border-l-blue-600 border-t-blue-600 border-b-companyBlue border-r-companyBlue text-left bg-gray-100 rounded-lg shadow-md w-full">
                  <h2 className="text-4xl -translate-y-10 p-[-10] -translate-x-8 font-bold">{index + 1}</h2>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
  
        {/* Scope Section */}
        {(scope || imageScope) && (
          <div className="max-w-7xl flex flex-col md:flex-row items-center justify-center py-16 px-4 mx-auto gap-10">
            {scope && (
              <div className="flex-1">
                <h1 className="text-4xl text-black mb-6">
                  Scope of an {audit || placeholder}
                </h1>
                <p className="text-gray-700">{scope}</p>
              </div>
            )}
            {imageScope && (
              <div className="flex-1">
                <img
                  src={imageScope}
                  alt="Scope Image"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
  