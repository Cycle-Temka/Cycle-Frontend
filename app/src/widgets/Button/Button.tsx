import React from "react";
import "./Button.css";

const MyButton = ({ children, ...props }) => {
  return (
    <div {...props} className="MyBtn">
      {children}
    </div>
  );
};

export default MyButton;
