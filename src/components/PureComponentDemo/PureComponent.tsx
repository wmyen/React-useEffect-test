import React from "react";

const PureComponent = React.memo(
  (props: any) => {
    console.log("***Pure component is rendered***");
    return <p>Pure Component = {props.name.firstName}</p>;
  },
  (prevProps, nextProps) => {
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
    if (prevProps.name.firstName === nextProps.name.firstName) return true;
    return false;
  }
);

export { PureComponent };
