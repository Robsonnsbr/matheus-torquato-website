import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WppButton = () => {
  return (
    <button
      id="whats-app-btn"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300"
    >
      <FaWhatsapp size={28} />
    </button>
  );
};

export default WppButton;
