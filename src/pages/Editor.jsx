import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import { Header } from "../components";
import { EditorData } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const Editor = () => {
  const { currentMode } = useStateContext();
  return (
    <div
      className={`m-2 md:m-10 p-2 md:p-10 rounded-3xl ${
        currentMode === "Dark" ? "bg-black text-white" : "bg-white"
      }`}
    >
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
