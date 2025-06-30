'use client';

import React, { useState, useRef, useEffect } from 'react';
import { GripVertical, Plus, Trash2, Eye, Save, Edit3, SquarePen } from 'lucide-react';
import DraggableSection from './DraggableSection';

const ServiceTemplateEditor = () => {

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

  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const moveSection = (fromIndex, toIndex) => {
    const updated = [...serviceData.sections];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setServiceData({ ...serviceData, sections: updated });
  };
  const [serviceData, setServiceData] = useState({});

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newSections = Array.from(serviceData.sections);
    const [reorderedItem] = newSections.splice(result.source.index, 1);
    newSections.splice(result.destination.index, 0, reorderedItem);

    setServiceData({
      ...serviceData,
      sections: newSections
    });
  };

  const [sectionTitle, setSectionTitle] = useState("");
  const [type, setType] = useState("");

  const addSection = (type, name) => {
    const newSection = {
      section_id: serviceData.sections.length,  // unique ID
      type,
      title: sectionTitle,
      data: getDefaultDataForType(type),
      isVisible: true
    };

    setServiceData(prev => ({
      ...prev,
      sections: [...prev.sections, newSection]
    }));
  };

  const getDefaultDataForType = (type) => {
    switch (type) {
      case 'hero':
        return { placeholder: "Our Service" };
      case 'description':
        return { auditdesc: [""] };
      case 'approach':
        return { ArrayAppr: [{ title: "", desc: "" }] };
      case 'keyaspects':
        return { ArrayKeyAspects: [{ title: "", desc: "" }] };
      case 'examples':
        return { ArrayExamples: [{ title: "", desc: "" }] };
      case 'benefits':
        return { ArrayBenifits: [{ title: "", desc: "" }] };
      case 'importance':
        return { ArraySupp: [{ title: "", desc: "" }] };
      case 'scope':
        return { scope: "" };
      default:
        return {};
    }
  };

  const updateSectionData = (sectionId, newData) => {
    setServiceData({
      ...serviceData,
      sections: serviceData.sections.map(section =>
        section.id === sectionId
          ? { ...section, data: { ...section.data, ...newData } }
          : section
      )
    });
  };

  const toggleSectionVisibility = (sectionId) => {
    setServiceData({
      ...serviceData,
      sections: serviceData.sections.map(section =>
        section.id === sectionId
          ? { ...section, isVisible: !section.isVisible }
          : section
      )
    });
  };

  const addArrayItem = (sectionId, arrayKey) => {
    const section = serviceData.sections.find(s => s.id === sectionId);
    const currentArray = section.data[arrayKey] || [];
    updateSectionData(sectionId, {
      [arrayKey]: [...currentArray, { title: "", desc: "" }]
    });
  };

  const removeArrayItem = (sectionId, arrayKey, index) => {
    const section = serviceData.sections.find(s => s.id === sectionId);
    const currentArray = section.data[arrayKey] || [];
    const newArray = currentArray.filter((_, i) => i !== index);
    updateSectionData(sectionId, { [arrayKey]: newArray });
  };

  const updateArrayItem = (sectionId, arrayKey, index, field, value) => {
    const section = serviceData.sections.find(s => s.id === sectionId);
    const currentArray = [...(section.data[arrayKey] || [])];
    currentArray[index] = { ...currentArray[index], [field]: value };
    updateSectionData(sectionId, { [arrayKey]: currentArray });
  };

  const saveToDatabase = async () => {
    const payload = {
      category: parentCat,
      parent_service: parentService,
      title: serviceData.title,
      key: serviceData.title.toLowerCase().replace(/\s+/g, '-'),
      section_name: serviceData.sections.filter(s => s.isVisible).map((section, index) => {
        return {
          section_title: section.title,
          design_format: section.type,
          section_data: JSON.stringify(section.data),  // <-- Full section data
          display_order: index + 1,
          view_format: getViewFormat(section.type)
        };
      })
    };

    console.log('Saving to database:', payload);

    try {
      const response = await fetch('http://befikr.in/services_api.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Service template saved!');
      } else {
        alert(`Failed to save: ${result.error || 'Unknown error'}`);
        console.error('Server error:', result);
      }
    } catch (error) {
      alert('Network error while saving service.');
      console.error('Fetch error:', error);
    }
  };
  const [serviceID, setServiceID] = useState();
  
  const loadServiceById = async (id) => {
    try {
      const response = await fetch(`http://befikr.in/get_service_by_id.php?service_id=${id}`);
      const data = await response.json();

      if (data.error) {
        alert("Error: " + data.error);
        return;
      }

      setParentCat(data.category);
      setParentService(data.parent_id);

      // Fix section_content in all sections
      const fixedSections = fixNestedSectionContent(data.sections);

      setServiceData({
        title: data.title,
        sections: fixedSections.map((s, idx) => ({
          id: s.type + "-" + idx,
          type: s.type,
          title: s.title,
          data: s.section_content,
          isVisible: s.isVisible ?? true
        }))
      });
    } catch (err) {
      console.error("Failed to load service", err);
      alert("Something went wrong.");
    }
  };



  const [serviceNames, setServiceNames] = useState([]);

  const fetchAllServiceNames = async () => {
    try {
      const response = await fetch('http://befikr.in/get_services.php');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();

      const uniqueServiceNames = data;

      setServiceNames(uniqueServiceNames);
      console.log('Fetched unique service names:', uniqueServiceNames);
      return uniqueServiceNames;
    } catch (error) {
      console.error('Error fetching service names:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchAllServiceNames();
  }, []);

  const [parentCat, setParentCat] = useState("")
  const [parentService, setParentService] = useState("")

  const getViewFormat = (type) => {
    const formats = {
      hero: 'hero',
      description: 'paragraph',
      approach: 'grid',
      keyaspects: 'grid',
      examples: 'grid',
      benefits: 'grid',
      importance: 'list',
      scope: 'paragraph'
    };
    return formats[type] || 'default';
  };

  const renderSectionEditor = (section) => {
    switch (section.type) {
      case 'hero':
        return (
          <input
            type="text"
            value={section.data.placeholder || ''}
            onChange={(e) => updateSectionData(section.id, { placeholder: e.target.value })}
            className="w-full p-3 border rounded-lg text-lg font-semibold"
            placeholder="Enter service title"
          />
        );

      case 'description':
        return (
          <div className="space-y-3">
            {(section.data.auditdesc || ['']).map((desc, index) => (
              <div key={index} className="flex gap-2">
                <textarea
                  value={desc}
                  onChange={(e) => {
                    const newDesc = [...(section.data.auditdesc || [''])];
                    newDesc[index] = e.target.value;
                    updateSectionData(section.id, { auditdesc: newDesc });
                  }}
                  className="flex-1 p-3 border rounded-lg"
                  rows={3}
                  placeholder="Enter description paragraph"
                />
                {section.data.auditdesc?.length > 1 && (
                  <button
                    onClick={() => {
                      const newDesc = section.data.auditdesc.filter((_, i) => i !== index);
                      updateSectionData(section.id, { auditdesc: newDesc });
                    }}
                    className="p-2 text-red-500 hover:bg-red-50 rounded"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                const newDesc = [...(section.data.auditdesc || ['']), ''];
                updateSectionData(section.id, { auditdesc: newDesc });
              }}
              className="flex items-center gap-2 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded"
            >
              <Plus size={16} /> Add Paragraph
            </button>
          </div>
        );

      case 'scope':
        return (
          <textarea
            value={section.data.scope || ''}
            onChange={(e) => updateSectionData(section.id, { scope: e.target.value })}
            className="w-full p-3 border rounded-lg"
            rows={4}
            placeholder="Enter scope description"
          />
        );

      default:
        // Handle array-based sections (approach, keyaspects, examples, benefits, importance)
        const arrayKey = {
          approach: 'ArrayAppr',
          keyaspects: 'ArrayKeyAspects',
          examples: 'ArrayExamples',
          benefits: 'ArrayBenifits',
          importance: 'ArraySupp'
        }[section.type];

        if (!arrayKey) return null;

        const items = section.data[arrayKey] || [{ title: "", desc: "" }];

        return (
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm font-medium text-gray-600">Item {index + 1}</span>
                  {items.length > 1 && (
                    <button
                      onClick={() => removeArrayItem(section.id, arrayKey, index)}
                      className="p-1 text-red-500 hover:bg-red-100 rounded"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={item.title || ''}
                    onChange={(e) => updateArrayItem(section.id, arrayKey, index, 'title', e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Enter title"
                  />
                  <textarea
                    value={item.desc || ''}
                    onChange={(e) => updateArrayItem(section.id, arrayKey, index, 'desc', e.target.value)}
                    className="w-full p-2 border rounded"
                    rows={3}
                    placeholder="Enter description"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={() => addArrayItem(section.id, arrayKey)}
              className="flex items-center gap-2 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded"
            >
              <Plus size={16} /> Add Item
            </button>
          </div>
        );
    }
  };

  const renderSectionPreview = (section) => {
    if (!section.isVisible) return null;

    switch (section.type) {
      case 'hero':
        return (
          <div className="flex w-full h-48 bg-companyBlue items-center justify-center">
            <h1 className="text-5xl text-white font-bold text-center px-4">
              {section.data.placeholder || 'Our Service'}
            </h1>
          </div>
        );

      case 'description':
        return (
          <div className="max-w-5xl px-4 mx-auto">
            <div className="space-y-4">
              {(section.data.auditdesc || []).map((desc, index) => (
                desc && (
                  <p key={index} className="text-gray-700 text-xl leading-relaxed">
                    {desc}
                  </p>
                )
              ))}
            </div>
          </div>
        );

      case 'scope':
        return (
          <div className="max-w-5xl flex flex-col items-start justify-center py-16 px-4 mx-auto gap-10">
            <h1 className="text-4xl text-black mb-6">
              Scope of {serviceData.title}
            </h1>
            <p className="text-gray-700">{section.data.scope}</p>
          </div>
        );

      case 'importance':
        const suppItems = section.data.ArraySupp || [];
        return (
          <div className="max-w-5xl items-center justify-center py-16 px-4 mx-auto">
            <h1 className="text-4xl text-black mb-10">Why is {serviceData.title} Important?</h1>
            <div className="flex flex-col md:flex-row flex-wrap text-left gap-10">
              {suppItems.map((item, index) => (
                item.title && (
                  <div key={index} className="flex flex-col p-6 border border-l-blue-600 border-t-blue-600 border-b-blue-600 border-r-blue-600 text-left bg-gray-100 rounded-lg shadow-md w-full">
                    <h2 className="text-4xl -translate-y-10 p-[-10] -translate-x-8 font-bold">{index + 1}</h2>
                    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        );

      default:
        // Handle other array-based sections with card grid layout
        const arrayKey = {
          approach: 'ArrayAppr',
          keyaspects: 'ArrayKeyAspects',
          examples: 'ArrayExamples',
          benefits: 'ArrayBenifits'
        }[section.type];

        if (!arrayKey) return null;

        const items = section.data[arrayKey] || [];
        const sectionTitles = {
          approach: `Audit Approach of ${serviceData.title} at Befikr`,
          keyaspects: `Key Aspects of ${serviceData.title}`,
          examples: `Examples of ${serviceData.title}`,
          benefits: `Benefits of ${serviceData.title}`
        };

        return (
          <div className="max-w-5xl py-16 px-4 mx-auto">
            <h1 className="text-4xl text-black mb-10">{sectionTitles[section.type]}</h1>
            <div className="flex flex-wrap justify-center gap-10">
              {items.map((item, index) => (
                item.title && (
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
        );
    }
  };

  if (isPreviewMode) {
    return (
      <div className="min-h-screen bg-white">
        {/* Preview Header */}
        <div className="sticky top-0 bg-white border-b shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Preview Mode</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setIsPreviewMode(false)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Edit3 size={16} /> Edit
              </button>
              <button
                onClick={saveToDatabase}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Save size={16} /> Save
              </button>
            </div>
          </div>
        </div>

        {/* Preview Content */}
        <div className="relative overflow-hidden bg-gray-50">
          {serviceData.sections.map((section) => (
            <div key={section.id}>
              {renderSectionPreview(section)}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Editor Header */}
      <div className="sticky top-0 bg-white border-b shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Add A New Service</h1>
            <p className="text-gray-600">Drag sections to reorder, toggle visibility, and edit content</p>
          </div>
          <div className="flex gap-2">
            <input className='border border-black rounded-md' required placeholder=' Section Title ?' value={sectionTitle} onChange={(e) => setServiceID(e.target.value)} />
            <button
              onClick={() => LoadServiceById(serviceID)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Eye size={16} /> Load
            </button>
            <button
              onClick={saveToDatabase}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Save size={16} /> Save
            </button>
            <input className='border border-black rounded-md' required placeholder=' Section Title ?' value={sectionTitle} onChange={(e) => setSectionTitle(e.target.value)} />
            <select className='border border-black rounded-md' onChange={(e) => setType(e.target.value)}>
              <option value="">Select Section Type</option>
              <option value="description">Paragraph</option>
              <option value="benefits">Grid</option>
              <option value="importance">List</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" onClick={() => addSection(type, sectionTitle)}><SquarePen size={16} /> Add Section</button>
          </div>
        </div>
      </div>

      {/* Editor Header */}
      <div className="sticky top-0 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="w-full flex h-10 gap-2">
            <select className='border border-black rounded-md w-full' onChange={(e) => setParentCat(e.target.value)}>
              <option value="">Choose Parent Cateogory</option>
              <option value="Environment">Environment</option>
              <option value="Social">Social</option>
              <option value="Governance">Governance</option>
            </select>
            <select
              className="border border-black rounded-md w-full p-2"
              onChange={(e) => setParentService(e.target.value)}
              value={parentService} // Optional: controlled component
            >
              <option value="">Choose Parent Service</option>
              <option value="Null">None</option>
              {serviceNames.map((name, idx) => (
                <option key={idx} value={name}>{name}</option>
              ))}
            </select>

          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* Service Title */}
        <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Title
          </label>
          <input
            type="text"
            value={serviceData.title}
            onChange={(e) => setServiceData({ ...serviceData, title: e.target.value })}
            className="w-full p-3 border rounded-lg text-xl font-semibold"
            placeholder="Enter service title"
          />
        </div>

        {/* Draggable Sections */}
        <div className="space-y-4">
          {serviceData.sections.map((section, index) => (
            <DraggableSection
              key={section.id}
              index={index}
              section={section}
              moveSection={moveSection}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-3">
                  <span className="cursor-move text-gray-400">
                    <GripVertical size={20} />
                  </span>
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">{section.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={section.isVisible}
                      onChange={() => toggleSectionVisibility(section.id)}
                      className="rounded"
                    />
                    <span className="text-sm">Visible</span>
                  </label>
                </div>
              </div>
              {section.isVisible && (
                <div className="p-4">{renderSectionEditor(section)}</div>
              )}
              <button
                onClick={() => {
                  if (confirm("Are you sure you want to delete this section?")) {
                    setServiceData({
                      ...serviceData,
                      sections: serviceData.sections.filter(s => s.id !== section.id)
                    });
                  }
                }}
                className="flex mb-4 ml-4 items-center gap-1 rounded-lg border border-red-500 px-3 py-1.5 text-sm font-medium text-red-500 transition-all duration-200 hover:bg-red-500 hover:text-white active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Delete
              </button>

            </DraggableSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplateEditor;