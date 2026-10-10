import { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);
  const [showScene, setShowScene] = useState(false);

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(URL.createObjectURL(file));
    setShowScene(false);
  };

  const showSceneFor10Seconds = () => {
    if (!image) return;

    setShowScene(true);

    setTimeout(() => {
      setShowScene(false);
    }, 10000);
  };

  return (
    <div className="app">

      <h1>Image Scene Viewer</h1>

      <label className="upload">
        Upload Image
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          hidden
        />
      </label>

      {image && (
        <button onClick={showSceneFor10Seconds}>
          Show Scene
        </button>
      )}

      <div className="scene-container">

        {showScene && (
          <img
            src={image}
            alt="Scene"
            className="scene"
          />
        )}

      </div>

    </div>
  );
}

export default App;