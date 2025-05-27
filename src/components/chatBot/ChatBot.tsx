import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (scriptLoaded) return; // don't load script multiple times

    const script = document.createElement("script");
    script.src = "https://studio.pickaxe.co/api/embed/bundle.js";
    script.defer = true;
    script.onload = () => setScriptLoaded(true);

    document.body.appendChild(script);

    return () => {
      // Do NOT remove script on unmount to avoid breaking widget
      // document.body.removeChild(script);
    };
  }, [scriptLoaded]);

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={toggleChatbot}
        aria-label={isOpen ? "Close Chatbot" : "Open Chatbot"}
        className="fixed bottom-6 right-6 z-[10000] bg-theme text-white p-3 rounded-full shadow-lg hover:bg-theme-dark transition"
      >
        <MessageCircle size={24} />
      </button>

      {/* Keep div always rendered, toggle visibility */}
      <div
        id="deployment-6635a80d-ea58-4f07-8db1-c40ed0f9c934"
        aria-label="Chatbot widget"
        className={`fixed bottom-16 right-6 z-[9999] w-80 h-96 p-3 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
    </>
  );
};

export default Chatbot;
