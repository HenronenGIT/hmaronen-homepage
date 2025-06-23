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
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
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
  );
};

export default SocialLinks;
