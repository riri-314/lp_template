import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DataProvider } from "./providers/DataProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DataProvider>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </DataProvider>
    </>
  );
}

export default App;

// setup firebase
// add secrets in .env
// build and deploy. Voila!

// load data with text pictures description. If not loaded data allready display loading screen

// providers:
// data provider
// login provider
