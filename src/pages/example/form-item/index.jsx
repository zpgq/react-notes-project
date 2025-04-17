import React from "react";

const ChildTest = (props) => {
  console.log("props--", props);
  return <div>1</div>;
};

const WrapDiv = ({ children, ...rest }) => {
  return React.createElement(
    "div",
    { name: 22 },
    React.cloneElement(children, { ...rest, value: 2 })
  );
};

export default function Test() {
  return (
    <WrapDiv>
      <ChildTest />
    </WrapDiv>
  );
}
