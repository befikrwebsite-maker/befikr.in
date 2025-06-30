import SimpleForm from "@/components/SimpleForm";
import Navbar from "@/components/NavBar";

export default function ServiceTemplate({
  placeholder = "Our Service",
  audit = "",
  sections = []
}) {
  function fixNestedSectionContent(sections) {
  return sections.map((section) => {
    if (typeof section.section_content === "string") {
      try {
        let content = section.section_content;

        if (content.startsWith('"') && content.endsWith('"')) {
          content = content.slice(1, -1);
        }

        content = content.replace(/\\"/g, '"');

        let parsed = JSON.parse(content);

        // Normalize for grid: if it's a flat array with even length, group into pairs
        if (
          section.design_format === "grid" &&
          Array.isArray(parsed) &&
          typeof parsed[0] === "string"
        ) {
          const grouped = [];
          for (let i = 0; i < parsed.length; i += 2) {
            grouped.push([parsed[i], parsed[i + 1] || ""]);
          }
          parsed = grouped;
        }

        return {
          ...section,
          section_content: parsed,
        };
      } catch (e) {
        console.error(`Failed to parse section_content in section ${section.section_id}`, e);
        return {
          ...section,
          section_content: [],
        };
      }
    }
    return section;
  });
}

  const fixedSections = fixNestedSectionContent(sections);
  const sortedSections = [...fixedSections].sort((a, b) => a.display_order - b.display_order);

  const renderSection = (section) => {
    const content = section.section_content;

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

        case "grid":
        return (
            <div key={section.section_id} className="max-w-5xl py-16 px-4 mx-auto">
            <h1 className="text-4xl text-black mb-10">{section.section_name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {content.map(([title, desc], index) => (
                <div
                    key={index}
                    className="flex flex-col items-start p-6 bg-gray-100 rounded-lg h-auto shadow-md w-full"
                >
                    {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
                    {desc && <p className="text-gray-600">{desc}</p>}
                </div>
                ))}
            </div>
            </div>
        );

      case "list":
        if (Array.isArray(content[0])) {
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

  return (
    <div className="relative overflow-hidden pt-20 bg-gray-50">
      {placeholder && (
        <div className="flex w-full h-48 bg-companyBlue items-center justify-center">
          <h1 className="text-5xl text-black font-bold text-center px-4">
            {placeholder}
          </h1>
        </div>
      )}

      {sortedSections.map(renderSection)}

      <div className="flex max-w-5xl py-16 px-4 justify-center mx-auto">
        <SimpleForm serviceTitle={placeholder} />
      </div>
    </div>
  );
}
