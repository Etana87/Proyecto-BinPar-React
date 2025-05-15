export function ChatWindow({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`p-3 max-w-md rounded-lg whitespace-pre-line ${
  msg.type === 'user'
    ? 'bg-[#3B82F6] text-white self-end ml-auto'
    : 'bg-white border text-gray-800 self-start mr-auto'
}`}

        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}
