import "./styles.css";
import Counter from "./components/Counter";
import ParentComponent from "./components/PureComponentDemo/ParentComponent";
import { useState } from "react";

export default function App() {
  const [mountCounter, setMountCounter] = useState<boolean>(false);
  const [mountPureCompDemo, setMountPureCompDemo] = useState<boolean>(false);

  const handleMountCounter = () => {
    setMountCounter((mountCounter: boolean) => !mountCounter);
  };

  const handleMountPureCompDemo = () => {
    setMountPureCompDemo((mountPureCompDemo: boolean) => !mountPureCompDemo);
  };

  return (
    <div className="App">
      <h1>React Counter</h1>
      <h4>Template for testing React component lifecycle methods</h4>
      <h5>Use console to see the render status</h5>
      <button onClick={handleMountCounter}>
        {mountCounter ? `Unmount` : `Mount`} Counter Component
      </button>
      {mountCounter ? <Counter /> : null}
      <hr />
      <h1>React Pure Component</h1>
      <h4>Template for testing React pure component demo</h4>
      <h5>Use console to see the render status</h5>
      <button onClick={handleMountPureCompDemo}>
        {mountPureCompDemo ? `Unmount` : `Mount`} Pure Component Demo
      </button>
      {mountPureCompDemo ? <ParentComponent /> : null}
    </div>
  );
}
