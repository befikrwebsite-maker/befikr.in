export default function ServiceTemplate({
  placeholder = "Our Service",
  auditdesc = [],
  audit,
  ArrayAppr = [],
  ArraySupp = [],
  ArrayKeyAspects = [],
  ArrayExamples = [],
  ArrayBenifits = [],
  scope = ""
}) {
  return (
    <div className="relative overflow-hidden pt-20 bg-gray-50">

      {/* Hero Section */}
      {placeholder && (
        <div className="flex w-full h-48 bg-companyBlue items-center justify-center">
          <h1 className="text-5xl text-black font-bold text-center px-4">
            {placeholder}
          </h1>
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
                  className="flex flex-col items-start p-6 bg-gray-100 rounded-lg h-auto shadow-md w-full md:w-50"
                >
                  {item?.title && (
                    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                  )}
                  {item?.desc && (
                    <p className="text-gray-600">{item.desc}</p>
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
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Scope Section */}
      {scope && (
        <div className="max-w-5xl flex flex-col items-start justify-center py-16 px-4 mx-auto gap-10">
          <h1 className="text-4xl text-black mb-6">
            Scope of an {audit || placeholder}
          </h1>
          <p className="text-gray-700">{scope}</p>
        </div>
      )}
    </div>
  );
}
