import React from "react";
import { Draggable } from "react-beautiful-dnd";

const components = [
  { id: "input", label: "Input Field" },
  { id: "textarea", label: "Text Area" },
  { id: "button", label: "Button" },
];

const Sidebar = () => {
  return (
    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow w-1/4">
      <h3 className="mb-4 text-lg font-medium text-gray-700">Components</h3>
      <div>
        {components.map((component, index) => (
          <Draggable draggableId={component.id} index={index} key={component.id}>
            {(provided) => (
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                className="mb-2 cursor-move px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm"
              >
                {component.label}
              </div>
            )}
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
