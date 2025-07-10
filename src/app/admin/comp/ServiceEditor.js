'use client';

import React, { useState, useRef, useEffect } from 'react';
import { GripVertical, Plus, Trash2, Eye, Save, Edit3, SquarePen } from 'lucide-react';
import DraggableSection from './DraggableSection';
import { useRouter } from 'next/navigation';

const ServiceTemplateEditor = () => {
  const router = useRouter();
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [serviceID, setServiceID] = useState();
  const [sectionTitle, setSectionTitle] = useState("");
  const [type, setType] = useState("");
  const [parentCat, setParentCat] = useState("");
  const [parentService, setParentService] = useState("");
  const [serviceNames, setServiceNames] = useState([]);
  const [parentIDDigit, setParentIDDigit] = useState(0);

  const [serviceData, setServiceData] = useState({
    title: "Our Service",
    sections: [
      {
        id: 'hero',
        type: 'hero',
        title: 'Hero Section',
        data: { placeholder: "Our Service" },
        isVisible: true
      },
      {
        id: 'description',
        type: 'description',
        title: 'Service Description',
        data: { auditdesc: [""] },
        isVisible: true
      },
      {
        id: 'approach',
        type: 'approach',
        title: 'Audit Approach',
        data: { ArrayAppr: [{ title: "", desc: "" }] },
        isVisible: true
      },
      {
        id: 'keyaspects',
        type: 'keyaspects',
        title: 'Key Aspects',
        data: { ArrayKeyAspects: [{ title: "", desc: "" }] },
        isVisible: true
      },
      {
        id: 'examples',
        type: 'examples',
        title: 'Examples',
        data: { ArrayExamples: [{ title: "", desc: "" }] },
        isVisible: true
      },
      {
        id: 'benefits',
        type: 'benefits',
        title: 'Benefits',
        data: { ArrayBenifits: [{ title: "", desc: "" }] },
        isVisible: true
      },
      {
        id: 'importance',
        type: 'importance',
        title: 'Why Important',
        data: { ArraySupp: [{ title: "", desc: "" }] },
        isVisible: true
      },
      {
        id: 'scope',
        type: 'scope',
        title: 'Scope',
        data: { scope: "" },
        isVisible: true
      }
    ]
  });

  // Fixed function to parse nested JSON strings
  function fixNestedSectionContent(sections) {
    return sections.map((section) => {
      if (typeof section.data === "string") {
        try {
          let content = section.data.trim();
          
          // Remove outer quotes if double-wrapped
          if (content.startsWith('"') && content.endsWith('"')) {
            content = content.slice(1, -1);
          }
          
          // Unescape inner quotes
          content = content.replace(/\\"/g, '"');
          
          let parsed = JSON.parse(content);
          
          // If still a string after first parse, try again
          if (typeof parsed === "string") {
            parsed = JSON.parse(parsed);
          }
          
          return {
            ...section,
            data: parsed,
          };
        } catch (e) {
          console.error(`Failed to parse section data:`, e);
          return {
            ...section,
            data: [],
          };
        }
      }
      return section;
    });
  }

  // Map API data to editor format
  function mapApiDataToEditorFormat(apiData) {
    const fixedSections = fixNestedSectionContent(apiData.sections);
    
    return {
      title: apiData.title,
      sections: fixedSections.map((section, index) => {
        const baseSection = {
          id: section.id || `section-${index}`,
          title: section.title,
          type: mapDesignFormatToType(section.design_format),
          isVisible: true
        };

        // Map the parsed data to the correct structure based on type
        switch (section.design_format) {
          case 'paragraph':
            return {
              ...baseSection,
              type: 'description',
              data: { auditdesc: Array.isArray(section.data) ? section.data : [section.data] }
            };
            
          case 'list':
            // Handle different list types based on title
            if (section.title.toLowerCase().includes('approach')) {
              return {
                ...baseSection,
                type: 'approach',
                data: { 
                  ArrayAppr: Array.isArray(section.data) && Array.isArray(section.data[0]) 
                    ? section.data.map(item => ({ title: item[0], desc: item[1] }))
                    : section.data.map(item => ({ title: item, desc: "" }))
                }
              };
            } else if (section.title.toLowerCase().includes('important')) {
              return {
                ...baseSection,
                type: 'importance',
                data: { 
                  ArraySupp: Array.isArray(section.data) && Array.isArray(section.data[0]) 
                    ? section.data.map(item => ({ title: item[0], desc: item[1] }))
                    : section.data.map(item => ({ title: item, desc: "" }))
                }
              };
            } else if (section.title.toLowerCase().includes('instrument') || section.title.toLowerCase().includes('technology')) {
              return {
                ...baseSection,
                type: 'examples',
                data: { 
                  ArrayExamples: Array.isArray(section.data) && Array.isArray(section.data[0]) 
                    ? section.data.map(item => ({ title: item[0], desc: item[1] }))
                    : section.data.map(item => ({ title: item, desc: "" }))
                }
              };
            } else if (section.title.toLowerCase().includes('benefit')) {
              return {
                ...baseSection,
                type: 'benefits',
                data: { 
                  ArrayBenifits: Array.isArray(section.data) && Array.isArray(section.data[0]) 
                    ? section.data.map(item => ({ title: item[0], desc: item[1] }))
                    : section.data.map(item => ({ title: item, desc: "" }))
                }
              };
            }
            // Default list handling
            return {
              ...baseSection,
              type: 'keyaspects',
              data: { 
                ArrayKeyAspects: Array.isArray(section.data) && Array.isArray(section.data[0]) 
                  ? section.data.map(item => ({ title: item[0], desc: item[1] }))
                  : section.data.map(item => ({ title: item, desc: "" }))
              }
            };
            
          case 'grid':
            return {
              ...baseSection,
              type: 'approach',
              data: { 
                ArrayAppr: Array.isArray(section.data) && Array.isArray(section.data[0]) 
                  ? section.data.map(item => ({ title: item[0], desc: item[1] }))
                  : section.data.map(item => ({ title: item, desc: "" }))
              }
            };
            
          default:
            return {
              ...baseSection,
              data: section.data
            };
        }
      })
    };
  }

  function mapDesignFormatToType(designFormat) {
    const mapping = {
      'paragraph': 'description',
      'list': 'importance',
      'grid': 'approach',
      'hero': 'hero'
    };
    return mapping[designFormat] || 'description';
  }

  const loadServiceById = async (id) => {
    if (!id) {
      alert("Please enter a service ID");
      return;
    }

    try {
      const response = await fetch(`http://befikr.in/get_service_by_id.php?service_id=${id}`);
      const data = await response.json();
      
      if (data.error) {
        alert("Error: " + data.error);
        return;
      }
      
      setParentCat(data.category);
      setParentIDDigit(data.parent_id);
      setParentService(serviceNames.find(name => name.id === data.parent_id)?.name || "");
      
      // Map the API data to editor format
      const mappedData = mapApiDataToEditorFormat(data);
      setServiceData(mappedData);
      
    } catch (err) {
      console.error("Failed to load service", err);
      alert("Something went wrong while loading the service.");
    }
  };

  const fetchAllServiceNames = async () => {
    try {
      const response = await fetch('http://befikr.in/get_services.php');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setServiceNames(data);
    } catch (error) {
      console.error('Error fetching service names:', error);
    }
  };

  useEffect(() => {
    fetchAllServiceNames();
  }, []);

  const moveSection = (fromIndex, toIndex) => {
    const updated = [...serviceData.sections];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setServiceData({ ...serviceData, sections: updated });
  };

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

  const addSection = (type, name) => {
    if (!type || !sectionTitle.trim()) {
      alert("Please enter a section title and select a type");
      return;
    }

    const newSection = {
      id: `section-${Date.now()}`,
      type,
      title: sectionTitle,
      data: getDefaultDataForType(type),
      isVisible: true
    };

    setServiceData(prev => ({
      ...prev,
      sections: [...prev.sections, newSection]
    }));

    setSectionTitle("");
    setType("");
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

  const saveToDatabase = async () => {
    if (!serviceData.title.trim() || !parentCat || !parentService) {
      alert("Please fill in all required fields: title, category, and parent service");
      return;
    }

    const payload = {
      category: parentCat,
      parent_service: parentService,
      title: serviceData.title,
      key: serviceData.title.toLowerCase().replace(/\s+/g, '-'),
      section_name: serviceData.sections.filter(s => s.isVisible).map((section, index) => {
        return {
          section_title: section.title,
          design_format: section.type,
          section_data: JSON.stringify(section.data),
          display_order: index + 1,
          view_format: getViewFormat(section.type)
        };
      })
    };

    try {
      const response = await fetch('http://befikr.in/services_api.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Service template saved successfully!');
      } else {
        alert(`Failed to save: ${result.error || 'Unknown error'}`);
        console.error('Server error:', result);
      }
    } catch (error) {
      alert('Network error while saving service.');
      console.error('Fetch error:', error);
    }
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
        // Handle array-based sections
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
          <div className="flex w-full h-48 bg-blue-600 items-center justify-center">
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
            <h1 className="text-2xl font-bold">Service Template Editor</h1>
            <p className="text-gray-600">Drag sections to reorder, toggle visibility, and edit content</p>
          </div>
          <div className="flex gap-2">
            <input 
              className='border border-gray-300 rounded-md px-3 py-2' 
              type="number" 
              value={serviceID || ''} 
              placeholder='Service ID' 
              onChange={(e) => setServiceID(e.target.value)} 
            />
            <button
              onClick={() => loadServiceById(serviceID)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Eye size={16} /> Load
            </button>
            <button
              onClick={() => setIsPreviewMode(true)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              <Eye size={16} /> Preview
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

      {/* Category and Parent Service Selection */}
      <div className="sticky top-20 bg-white border-b shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="w-full flex gap-4">
            <div className="flex-1">
              <select 
                className='border border-gray-300 rounded-md w-full px-3 py-2' 
                value={parentCat} 
                onChange={(e) => setParentCat(e.target.value)}
              >
                <option value="">Choose Parent Category</option>
                <option value="Environment">Environment</option>
                <option value="Social">Social</option>
                <option value="Governance">Governance</option>
              </select>
            </div>
            <div className="flex-1">
              <select
                className="border border-gray-300 rounded-md w-full px-3 py-2"
                onChange={(e) => setParentService(e.target.value)}
                value={parentService}
              >
                <option value="">Choose Parent Service</option>
                <option value="Null">None</option>
                {serviceNames.map((service, idx) => (
                  <option key={idx} value={service}>{service}</option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <input 
                className='border border-gray-300 rounded-md w-full px-3 py-2' 
                required 
                placeholder='Section Title' 
                value={sectionTitle} 
                onChange={(e) => setSectionTitle(e.target.value)} 
              />
            </div>
            <div className="flex-1">
              <select 
                className='border border-gray-300 rounded-md w-full px-3 py-2' 
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Select Section Type</option>
                <option value="description">Paragraph</option>
                <option value="benefits">Grid</option>
                <option value="importance">List</option>
              </select>
            </div>
            <button 
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700" 
              onClick={() => addSection(type, sectionTitle)}
            >
              <SquarePen size={16} /> Add Section
            </button>
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
                </div>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => removeSection(section.id)}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </DraggableSection>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ServiceTemplateEditor;