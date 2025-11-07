import whatsappLogo from "@/assets/whatsapp.png";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918600330001?text=Hello, I'm interested in your security services", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 animate-glow group"
      aria-label="Contact us on WhatsApp"
    >
      <img src={whatsappLogo} alt="WhatsApp" className="h-7 w-7 group-hover:scale-110 transition-transform" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
        1
      </span>
    </button>
  );
};

export default WhatsAppButton;
