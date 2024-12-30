import React from "react";

interface SubmittingOverlayProps {
  isSubmitting: boolean;
}

const SubmittingOverlay: React.FC<SubmittingOverlayProps> = ({
  isSubmitting,
}) => {
  if (!isSubmitting) return null; // Não renderiza nada se não estiver enviando

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.7)", // Fundo branco com transparência
        zIndex: 1000, // Garante que o overlay fique acima de outros elementos
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          padding: "20px 30px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h2>Enviando...</h2>
        <p>Por favor, aguarde enquanto processamos sua solicitação.</p>
      </div>
    </div>
  );
};

export default SubmittingOverlay;
