'use client';

import React, { useState, useEffect } from 'react';
import { GripVertical, Plus, Trash2, Eye, Save, Edit3, SquarePen } from 'lucide-react';

const ServiceTemplateEditor = () => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);
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

  const [sectionTitle, setSectionTitle] = useState("");
  const [type, setType] = useState("");
  const [serviceID, setServiceID] = useState("");
  const [serviceNames, setServiceNames] = useState([]);
  const [parentCat, setParentCat] = useState("");
  const [parentService, setParentService] = useState("");

  // Helper function to map API section types to component types
  const mapApiTypeToComponentType = (apiType, sectionTitle) => {
    const typeMap = {
      'paragraph': 'description',
      'list': getListTypeFromTitle(sectionTitle),
      'grid': getGridTypeFromTitle(sectionTitle),
      'hero': 'hero',
      'scope': 'scope'
    };
    return typeMap[apiType] || 'description';
  };

  // Helper to determine specific list type from title
  const getListTypeFromTitle = (title) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('approach')) return 'approach';
    if (titleLower.includes('aspect')) return 'keyaspects';
    if (titleLower.includes('example')) return 'examples';
    if (titleLower.includes('benefit')) return 'benefits';
    if (titleLower.includes('important') || titleLower.includes('why')) return 'importance';
    return 'importance';
  };

  // Helper to determine specific grid type from title
  const getGridTypeFromTitle = (title) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('approach')) return 'approach';
    if (titleLower.includes('aspect')) return 'keyaspects';
    if (titleLower.includes('example')) return 'examples';
    if (titleLower.includes('benefit')) return 'benefits';
    return 'approach';
  };

  // Helper to get array key for section type
  const getArrayKeyForSection = (sectionType) => {
    const keyMap = {
      'approach': 'ArrayAppr',
      'keyaspects': 'ArrayKeyAspects',
      'examples': 'ArrayExamples',
      'benefits': 'ArrayBenifits',
      'importance': 'ArraySupp'
    };
    return keyMap[sectionType] || 'ArrayAppr';
  };

  // Transform API data to component format
  const transformSectionData = (apiData, sectionType) => {
    if (Array.isArray(apiData)) {
      // Handle array of strings (description paragraphs)
      if (apiData.every(item => typeof item === 'string')) {
        return { auditdesc: apiData };
      }
      
      // Handle array of arrays [["title", "desc"], ...]
      if (apiData.every(item => Array.isArray(item) && item.length === 2)) {
        const transformedArray = apiData.map(([title, desc]) => ({ title, desc }));
        const arrayKey = getArrayKeyForSection(sectionType);
        return { [arrayKey]: transformedArray };
      }
      
      // Handle array of objects
      if (apiData.every(item => typeof item === 'object' && item.title !== undefined)) {
        const arrayKey = getArrayKeyForSection(sectionType);
        return { [arrayKey]: apiData };
      }
    }
    
    // Handle single string
    if (typeof apiData === 'string') {
      if (sectionType === 'description') {
        return { auditdesc: [apiData] };
      }
      return { scope: apiData };
    }
    
    // Handle object data
    if (typeof apiData === 'object' && !Array.isArray(apiData)) {
      return apiData;
    }
    
    return apiData;
  };

  // Load service by ID
  const loadServiceById = async (id) => {
    try {
      const response = await fetch(`http://befikr.in/get_service_by_id.php?service_id=${id}`);
      const data = await response.json();

      if (data.error) {
        alert("Error: " + data.error);
        return;
      }

      setParentCat(data.category);
      setParentService(serviceNames.find(name => name.id === data.parent_id)?.name || "");

      // Process sections
      const processedSections = data.sections.map((section, index) => {
        let processedData;
        
        try {
          let parsedData = JSON.parse(section.data);
          
          // Handle double-encoded JSON
          if (typeof parsedData === 'string') {
            parsedData = JSON.parse(parsedData);
          }
          
          const componentType = mapApiTypeToComponentType(section.design_format, section.title);
          processedData = transformSectionData(parsedData, componentType);
          
        } catch (e) {
          console.error(`Failed to parse section data for ${section.title}:`, e);
          processedData = getDefaultDataForType(mapApiTypeToComponentType(section.design_format, section.title));
        }

        return {
          id: `section_${index}`,
          type: mapApiTypeToComponentType(section.design_format, section.title),
          title: section.title,
          data: processedData,
          isVisible: true
        };
      });

      setServiceData({
        title: data.title,
        sections: processedSections
      });

    } catch (err) {
      console.error("Failed to load service", err);
      alert("Something went wrong while loading the service.");
    }
  };

  // Fetch all service names
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

  // Get default data for section type
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

  // Add new section
  const addSection = (type, title) => {
    if (!type || !title) {
      alert("Please select a section type and enter a title");
      return;
    }

    const newSection = {
      id: `section_${Date.now()}`,
      type,
      title,
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

  // Update section data
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

  // Toggle section visibility
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

  // Array operations
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

  // Get view format for section type
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

  // Save to database
  const saveToDatabase = async () => {
    const payload = {
      category: parentCat,
      parent_service: parentService,
      title: serviceData.title,
      key: serviceData.title.toLowerCase().replace(/\s+/g, '-'),
      section_name: serviceData.sections.filter(s => s.isVisible).map((section, index) => ({
        section_title: section.title,
        design_format: section.type,
        section_data: JSON.stringify(section.data),
        display_order: index + 1,
        view_format: getViewFormat(section.type)
      }))
    };

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
      }
    } catch (error) {
      alert('Network error while saving service.');
      console.error('Fetch error:', error);
    }
  };

  // Move section (drag and drop)
  const moveSection = (fromIndex, toIndex) => {
    const updated = [...serviceData.sections];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setServiceData({ ...serviceData, sections: updated });
  };

  // Render section editor
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
        const arrayKey = getArrayKeyForSection(section.type);
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

  // Render section preview
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
          <div className="max-w-5xl px-4 mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
            <div className="space-y-4">
              {(section.data.auditdesc || []).map((desc, index) => (
                desc && (
                  <p key={index} className="text-gray-700 text-lg leading-relaxed">
                    {desc}
                  </p>
                )
              ))}
            </div>
          </div>
        );

      case 'scope':
        return (
          <div className="max-w-5xl px-4 mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6">Scope of {serviceData.title}</h2>
            <p className="text-gray-700 text-lg">{section.data.scope}</p>
          </div>
        );

      case 'importance':
        const suppItems = section.data.ArraySupp || [];
        return (
          <div className="max-w-5xl px-4 mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6">Why is {serviceData.title} Important?</h2>
            <div className="space-y-6">
              {suppItems.map((item, index) => (
                item.title && (
                  <div key={index} className="flex items-start gap-4 p-6 bg-gray-100 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 bg-white rounded-full w-10 h-10 flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        );

      default:
        const arrayKey = getArrayKeyForSection(section.type);
        const items = section.data[arrayKey] || [];

        return (
          <div className="max-w-5xl px-4 mx-auto py-8">
            <h2 className="text-3xl font-bold mb-6">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item, index) => (
                item.title && (
                  <div key={index} className="p-6 bg-white rounded-lg shadow-md border">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
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
      <div className="min-h-screen bg-gray-50">
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

        <div className="bg-white">
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
      {/* Header */}
      <div className="sticky top-0 bg-white border-b shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold">Service Template Editor</h1>
              <p className="text-gray-600">Create and edit service templates</p>
            </div>
            <div className="flex gap-2">
              <input
                className="border border-gray-300 rounded-md px-3 py-2"
                type="number"
                placeholder="Service ID"
                value={serviceID}
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

          {/* Controls */}
          <div className="flex gap-4 items-center">
            <select
              className="border border-gray-300 rounded-md px-3 py-2"
              value={parentCat}
              onChange={(e) => setParentCat(e.target.value)}
            >
              <option value="">Choose Category</option>
              <option value="Environment">Environment</option>
              <option value="Social">Social</option>
              <option value="Governance">Governance</option>
            </select>

            <select
              className="border border-gray-300 rounded-md px-3 py-2"
              value={parentService}
              onChange={(e) => setParentService(e.target.value)}
            >
              <option value="">Choose Parent Service</option>
              <option value="Null">None</option>
              {serviceNames.map((service, idx) => (
                <option key={idx} value={service.name || service}>
                  {service.name || service}
                </option>
              ))}
            </select>

            <input
              className="border border-gray-300 rounded-md px-3 py-2"
              placeholder="Section Title"
              value={sectionTitle}
              onChange={(e) => setSectionTitle(e.target.value)}
            />

            <select
              className="border border-gray-300 rounded-md px-3 py-2"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="description">Description</option>
              <option value="approach">Approach</option>
              <option value="keyaspects">Key Aspects</option>
              <option value="examples">Examples</option>
              <option value="benefits">Benefits</option>
              <option value="importance">Importance</option>
              <option value="scope">Scope</option>
            </select>

            <button
              onClick={() => addSection(type, sectionTitle)}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
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

        {/* Sections */}
        <div className="space-y-4">
          {serviceData.sections.map((section, index) => (
            <div key={section.id} className="bg-white rounded-lg shadow-sm border">
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
                  <button
                    onClick={() => {
                      if (confirm("Are you sure you want to delete this section?")) {
                        setServiceData({
                          ...serviceData,
                          sections: serviceData.sections.filter(s => s.id !== section.id)
                        });
                      }
                    }}
                    className="p-2 text-red-500 hover:bg-red-50 rounded"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              {section.isVisible && (
                <div className="p-4">{renderSectionEditor(section)}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTemplateEditor;