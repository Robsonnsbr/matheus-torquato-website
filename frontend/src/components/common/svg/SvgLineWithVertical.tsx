import React from "react";

const SvgLineWithVertical = () => {
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
        stroke="var(--color-blue)"
        strokeWidth="2"
      />
      {/* Linha vertical */}
      <line
        x1="0"
        y1="10"
        x2="0"
        y2="50"
        stroke="var(--color-blue)"
        strokeWidth="2"
        markerEnd="url(#red-marker)" // Define o quadrado na ponta
      />
      {/* Definição do marcador */}
      <defs>
        <marker
          id="red-marker"
          markerWidth="4"
          markerHeight="4"
          refX="2"
          refY="0.5"
          orient="auto"
        >
          <rect x="0" y="0" width="4" height="4" fill="var(--color-red)" />
        </marker>
      </defs>
    </svg>
  );
};

export default SvgLineWithVertical;
