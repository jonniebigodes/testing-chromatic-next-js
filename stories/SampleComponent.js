import React from "react";
import PropTypes from "prop-types";

export default function SampleComponent({ propertyA, propertyB, propertyC }) {
  return (
    <div
      style={{
        border: "3px solid tomato"
      }}
    >
      <h2>I'm a sample Component</h2>
      <h3>This is the content of propertyA</h3>
      {propertyA}
      <h3>This is the content of propertyB</h3>
      {propertyB}
      <h3>This is the content of propertyC</h3>
      {propertyC}
    </div>
  );
}

SampleComponent.propTypes = {
  propertyA: PropTypes.string,
  propertyB: PropTypes.number,
  propertyC: PropTypes.string,
};

SampleComponent.defaultProps = {
  propertyA: "This is the default content of propertyA",
  propertyB: 33,
  propertyC: "This is the default content of propertyC",
};
