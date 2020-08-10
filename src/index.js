import React, { useState } from "react";
import ReactDOM from "react-dom";

// Our Components
import { Camera } from "./camera";

function App() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cardImage, setCardImage] = useState();

  return (
    <div className="flex overflow-x-hidden overflow-y-scroll p-20">
      {isCameraOpen && (
        <Camera
          onCapture={blob => setCardImage(blob)}
          onClear={() => setCardImage(undefined)}
        />
      )}

      {cardImage && (
        <div>
          <h2>Preview</h2>
          <img src={cardImage && URL.createObjectURL(cardImage)} alt="Webcam preview" />
        </div>
      )}

      <footer className="fixed inset-x-0 bottom-0 p-6 flex justify-center align-center bg-gray-200">
        <button
          className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsCameraOpen(true)}
        >
          Open Camera
        </button>
        <button
          className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setIsCameraOpen(false);
            setCardImage(undefined);
          }}
        >
          Close Camera
        </button>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
