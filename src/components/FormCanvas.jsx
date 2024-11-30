import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Input from "./components/Input";
import TextArea from "./components/TextArea";
import Button from "./components/Button";

const COMPONENTS_MAP = {
  input: Input,
  textarea: TextArea,
  button: Button,
};

const FormCanvas = ({ elements }) => {
  return (
    <Droppable droppableId="formCanvas">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="flex-1 min-h-[300px] p-4 border-2 border-dashed rounded-md"
        >
          {elements.map((el, index) => {
            const Component = COMPONENTS_MAP[el.id];
            return (
              <div key={index} className="mb-4">
                <Component label={el.label} />
              </div>
            );
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default FormCanvas;
