import React, { useState } from "react";
import InlineEdit from './components/inlineEdit';
import "./styles.css";

export default function App() {
  const [storedHeading, setStoredHeading] = useState(
    "Click here to start editing the text!"
  );
  const [storedText, setStoredText] = useState("Here's some more, edit away!");

  return (
    <div className="App">
      <h1>Inline Text Edit with React Hooks</h1>
      <h2>
        {/* Not editable right here.{" "} */}
        <InlineEdit
          text={storedHeading}
          onSetText={text => setStoredHeading(text)}
        />
      </h2>
      <p>
        <InlineEdit text={storedText} onSetText={text => setStoredText(text)} />
      </p>
    </div>
  );
}