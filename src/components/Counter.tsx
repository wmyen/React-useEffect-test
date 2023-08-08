import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  // Merge of componentDidMount and componentDidUpdate but only for given dependency
  // useEffect(() => {
  //   console.log("This is mounted or count state updated.");
  // }, [count]);

  // Equivalent of componentDidMount
  // useEffect(() => {
  //   console.log("This is mounted only not updated.");
  // }, []);

  // Merge of componentDidMount and componentDidUpdate
  // useEffect(() => {
  //   console.log("This is mounted or updated.");
  // });

  // Equivalent of componentWillUnmount
  useEffect(() => {
    console.log("This is mounted only not updated.");
    return () => {
      console.log("This is unmounted.");
    };
  }, []);

  const handleClick = (e: any) => {
    const action = e.target.name;
    switch (action) {
      case "incr":
        setCount(count + 1);
        break;
      case "dec":
        setCount(count - 1);
        break;
      case "reset":
        setCount(0);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button name="incr" onClick={handleClick}>
        Increase Count
      </button>
      <button name="dec" onClick={handleClick}>
        Decrease Count
      </button>
      <div>
        <button name="reset" onClick={handleClick}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
