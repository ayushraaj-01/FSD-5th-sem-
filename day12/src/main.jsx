import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

const image = 'https://picsum.photos/seed/golden-hour/800/500';

function App() {
  const [rotation, setRotation] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1>Image Rotator</h1>
      <img
        src={image}
        alt="A sunset over a flower field"
        width="300"
        height="300"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
      <div>
        <button type="button" onClick={() => setRotation((value) => value - 90)}>
          Left
        </button>
        <button type="button" onClick={() => setRotation((value) => value + 90)}>
          Right
        </button>
      </div>
      <h2>Counter</h2>
      <div aria-live="polite">{count}</div>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        Increment
      </button>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
