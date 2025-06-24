import { SOCIAL_LINKS } from "@/constants";
import { Github, Instagram, Linkedin } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: SOCIAL_LINKS.linkedin,
      icon: Linkedin,
      color: "#0077B5",
    },
    {
      name: "GitHub",
      href: SOCIAL_LINKS.github,
      icon: Github,
      color: "#333",
    },
    {
      name: "Instagram",
      href: SOCIAL_LINKS.instagram,
      icon: Instagram,
      color: "#E1306C",
    },
  ];

  return (
    <>
      {/* Desktop version - fixed on the right side */}
      <div className="hidden md:flex fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex-col space-y-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg overflow-hidden group"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${link.color}40 0%, ${link.color}20 100%)`;
              e.currentTarget.style.borderColor = `${link.color}60`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
            }}
          >
            <link.icon size={20} />
          </a>
        ))}
      </div>

      {/* Mobile version - glassmorphism style */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex space-x-4 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20 shadow-2xl">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg overflow-hidden group"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${link.color}40 0%, ${link.color}20 100%)`;
              e.currentTarget.style.borderColor = `${link.color}60`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
            }}
          >
            <link.icon size={20} />
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;
