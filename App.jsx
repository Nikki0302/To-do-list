import { useState } from 'react';
import reactLogo from './assets/style.css';

function App() {
  const [count, setCount] = useState(0);

  return (
      <div> className="button">
        <Button color="red" text="Button 1"/>
        <Button color="blue" text="Button 2"/>
        </div>
  );
   //{color, text}
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
