import React from "react";

const Button = ({ className, value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={className}
    >
      {value}
    </button>
  );
};

Button.defaultProps = {
    className: "",
  };

export default Button;
