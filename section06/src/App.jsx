import { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  const [counter, setCounter] = useState(0);

  const onClick = (value) => {
    setCounter(counter + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer counter={counter} />
      </section>
      <section>
        <Controller onClick={onClick} />
      </section>
    </div>
  );
}

export default App;
