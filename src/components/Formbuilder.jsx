import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Sidebar from "./Sidebar";
import FormCanvas from "./FormCanvas";

const FormBuilder = () => {
  const [elements, setElements] = useState([]);

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination || source.droppableId === destination.droppableId) return;

    setElements((prev) => [
      ...prev,
      { id: draggableId, label: draggableId === "button" ? "Button" : "New Field" },
    ]);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-4 p-8">
        <Sidebar />
        <FormCanvas elements={elements} />
      </div>
    </DragDropContext>
  );
};

export default FormBuilder;
