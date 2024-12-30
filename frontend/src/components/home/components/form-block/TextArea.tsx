import React from "react";

const TextArea = ({
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      required
      className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      {...props} // espalha as props para o elemento textarea
    />
  );
};

export default TextArea;
