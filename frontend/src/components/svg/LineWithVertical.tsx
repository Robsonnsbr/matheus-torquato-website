import React from "react";

const LineWithVertical = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 60" // Ajustado para garantir que a linha vertical seja visível
      preserveAspectRatio="none"
      style={{ width: "100%", height: "60px" }} // A altura foi ajustada
    >
      {/* Linha horizontal */}
      <line
        x1="0"
        y1="10"
        x2="100"
        y2="10"
        stroke="var(--color-red)"
        strokeWidth="2"
      />
      {/* Linha vertical */}
      <line
        x1="0"
        y1="10"
        x2="0"
        y2="50"
        stroke="var(--color-red)"
        strokeWidth="2"
      />
    </svg>
  );
};

export default LineWithVertical;
