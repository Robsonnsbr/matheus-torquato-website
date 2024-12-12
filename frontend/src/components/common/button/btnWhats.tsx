import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Importa o ícone do WhatsApp

const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300">
        <FaWhatsapp size={28} /> {/* Ícone do WhatsApp */}
      </button>
    </div>
  );
};

export default WhatsAppButton;
