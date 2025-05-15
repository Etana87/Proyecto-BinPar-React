import { useState } from "react";
import { ChatWindow } from "./components/ChatWindow";
import { ChatInput } from "./components/ChatInput";

const respuestas = {
  "¿Qué es la hipertensión?": "La hipertensión es una condición en la que la presión arterial está constantemente por encima de lo normal.",
  "¿Qué hace un neurólogo?": "Un neurólogo es un médico especializado en el diagnóstico y tratamiento de enfermedades del sistema nervioso.",
  "Hola": "¡Hola! ¿En qué puedo ayudarte hoy con tus estudios de medicina?",
  "hola": "¡Hola! ¿En qué puedo ayudarte hoy con tus estudios de medicina?",
};

export default function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = (input) => {
    const userMsg = { text: input, type: 'user' };
    const botMsg = {
      text: respuestas[input.toLowerCase()] || "Lo siento, aún no sé responder eso. Pero estoy aprendiendo.",
      type: 'bot'
    };

    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-[#1E40AF] text-white p-4 text-center shadow-md">
        <h1 className="text-2xl font-bold">CureIQ</h1>
        <p className="text-sm">Tu compañero de estudio en medicina</p>
      </header>
      <ChatWindow messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}
