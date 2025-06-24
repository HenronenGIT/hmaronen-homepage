
import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants";

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
            className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
            style={{ backgroundColor: link.color }}
          >
            <link.icon size={20} />
          </a>
        ))}
      </div>

      {/* Mobile version - compact horizontal at bottom */}
      <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex space-x-3 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: link.color }}
          >
            <link.icon size={16} />
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;
