import React from "react";

const RegularComponent = (props: any) => {
  console.log("***Regular component is rendered***");

  return <p>Regular Component = {props.name.firstName}</p>;
};

export default RegularComponent;
