import React, { useState } from 'react';
import './App.css';

function App() {
  const [caps, setCaps] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [draggingIndex, setDraggingIndex] = useState(-1);

  const addCap = (e) => {
    const newCap = { x: e.clientX, y: e.clientY, size: 30, color: 'blue' }; // Example cap
    setCaps([...caps, newCap]);
  };

  const startDrag = (index) => {
    setDragging(true);
    setDraggingIndex(index);
  };

  const onDrag = (e) => {
    if (!dragging) return;
    const updatedCaps = [...caps];
    updatedCaps[draggingIndex] = {
      ...updatedCaps[draggingIndex],
      x: e.clientX,
      y: e.clientY,
    };
    setCaps(updatedCaps);
  };

  const endDrag = () => {
    setDragging(false);
    setDraggingIndex(-1);
  };

  return (
    <div className="App" onClick={addCap} onMouseMove={onDrag} onMouseUp={endDrag}>
      {caps.map((cap, index) => (
        <div
          key={index}
          onMouseDown={() => startDrag(index)}
          style={{
            position: 'absolute',
            left: cap.x - cap.size / 2 + 'px',
            top: cap.y - cap.size / 2 + 'px',
            width: cap.size + 'px',
            height: cap.size + 'px',
            backgroundColor: cap.color,
            borderRadius: '50%',
            cursor: 'move',
          }}
        ></div>
      ))}
    </div>
  );
}

export default App;