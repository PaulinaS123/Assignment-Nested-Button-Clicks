import React from "react";

function NestedButtons() {
  const handleOuterClick = () => {
    alert("Outer clicked");
    console.log("Outer clicked");
  };

  const handleInnerClick = (e) => {
    e.stopPropagation();
    alert("Inner clicked");
    console.log("Inner clicked");
  };

  return (
    <div
      onClick={handleOuterClick}
      style={{
        padding: "20px",
        backgroundColor: "#ddd",
        textAlign: "center",
      }}
    >
      <h2>Outer Container</h2>

      <button onClick={handleInnerClick}>Inner Button</button>
    </div>
  );
}

export default NestedButtons;
