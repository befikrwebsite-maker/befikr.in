import SimpleForm from "@/components/SimpleForm";

export default function ServiceTemplate({
  placeholder = "Our Service",
  audit = "",
  sections = []
}) {
  const renderSection = (section) => {
    let content;
    try {
      content = JSON.parse(section.section_content);
    } catch (e) {
      console.error("Error parsing section_content", section, e);
      return null;
    }

    switch (section.design_format) {
      case "paragraph":
        return (
          <div key={section.section_id} className="max-w-5xl py-16 px-4 mx-auto">
            <h1 className="text-4xl text-black mb-6">{section.section_name}</h1>
            <div className="space-y-4">
              {content.map((para, index) => (
                <p key={index} className="text-gray-700 text-xl leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        );

      case "list":
        if (Array.isArray(content[0])) {
          // Title + description style (Array of arrays)
          return (
            <div key={section.section_id} className="max-w-5xl py-16 px-4 mx-auto">
              <h1 className="text-4xl text-black mb-10">{section.section_name}</h1>
              <div className="flex flex-wrap justify-center gap-10">
                {content.map(([title, desc], index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start p-6 bg-gray-100 rounded-lg shadow-md w-full md:w-1/3"
                  >
                    {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
                    {desc && <p className="text-gray-600">{desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          );
        } else {
          // Simple bullet list
          return (
            <div key={section.section_id} className="max-w-5xl py-16 px-4 mx-auto">
              <h1 className="text-4xl text-black mb-6">{section.section_name}</h1>
              <ul className="list-disc list-inside space-y-2 text-xl text-gray-700">
                {content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }

      default:
        return null;
    }
  };

  const sortedSections = [...sections].sort((a, b) => a.display_order - b.display_order);

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

      {/* Dynamic Sections */}
      {sortedSections.map(renderSection)}

      {/* Contact Form */}
      <div className="flex max-w-5xl py-16 px-4 justify-center mx-auto">
        <SimpleForm serviceTitle={placeholder} />
      </div>
    </div>
  );
}
