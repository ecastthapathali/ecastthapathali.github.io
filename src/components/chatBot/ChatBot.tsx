import { useEffect } from "react";

const Chatbot = () =>{

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://studio.pickaxe.co/api/embed/bundle.js";
        script.defer = true;
    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    };
}, []);

    return (
        <>
        <div className="fixed bottom-4 right-4 z-[9999] p-5 backdrop-blur-0" id="deployment-6635a80d-ea58-4f07-8db1-c40ed0f9c934"></div>
        </>
    )
}

export default Chatbot