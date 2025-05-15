import { useState } from "react";

export function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <footer className="bg-white p-4 flex gap-2 shadow-inner">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Escribe tu pregunta..."
        className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
      />
      <button
        onClick={handleSend}
        className="bg-[#EF4444] text-white border border-[#EF4444] px-4 py-2 rounded hover:bg-[#F3F4F6] hover:text-[#EF4444] transition-colors duration-200"
      >
        Enviar
      </button>
    </footer>
  );
}
