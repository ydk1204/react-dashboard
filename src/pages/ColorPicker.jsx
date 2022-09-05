import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";

import { useStateContext } from "../contexts/ContextProvider";

const change = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};

const ColorPicker = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      className={`m-2 md:m-10 p-2 md:p-10 rounded-3xl ${
        currentMode === "Dark" ? "bg-black text-white" : "bg-white"
      }`}
    >
      <Header category="App" title="ColorPicker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            ></ColorPickerComponent>
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            ></ColorPickerComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
