import React from "react";
import "../styles/MyButton.css";

const MyButton = ({ children, ...props }) => {
  return (
    <div {...props} className="MyBtn">
      {children}
    </div>
  );
};

export default MyButton;
