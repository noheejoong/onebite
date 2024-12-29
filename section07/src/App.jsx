import { useState, useEffect, useRef } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  useEffect(() => {
    console.log(`mount`);
  }, []);

  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  const onClick = (value) => {
    setCounter(counter + value);
  };
  //의존성 배열 dependency arry (deps)

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer counter={counter} />
        {counter % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClick={onClick} />
      </section>
    </div>
  );
}

export default App;
