import { useState } from "react";

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  const [name, setName] = useState("Bishwas");

  return (
    <div>
      <Greeting name={name} />
      <button onClick={() => setName("Kalvium")}>Say hello to Kalvium</button>
    </div>
  );
}

export default App;
