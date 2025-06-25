import { SOCIAL_LINKS } from "@/constants";
import { Github, Instagram, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

// Constants
const SOCIAL_LINKS_DATA = [
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

const DESKTOP_STYLES = {
  default: {
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
};

const MOBILE_CONTAINER_STYLES = {
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(24px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
};

// Custom hook for scroll visibility
const useScrollVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
};

const SocialLinks = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isVisible = useScrollVisibility();

  // Event handlers
  const handleTouchStart = (index: number) => {
    setActiveIndex(index);
  };

  const handleTouchEnd = () => {
    setActiveIndex(null);
  };

  const getHoverStyles = (color: string) => ({
    background: `linear-gradient(135deg, ${color}40 0%, ${color}20 100%)`,
    borderColor: `${color}60`,
  });

  const getMobileItemStyles = (index: number, color: string) => ({
    background:
      activeIndex === index ? `${color}40` : "rgba(255, 255, 255, 0.15)",
    borderColor:
      activeIndex === index ? `${color}60` : "rgba(255, 255, 255, 0.2)",
  });

  const handleDesktopHover = (
    e: React.MouseEvent<HTMLAnchorElement>,
    color: string,
    isEntering: boolean
  ) => {
    if (isEntering) {
      const hoverStyles = getHoverStyles(color);
      e.currentTarget.style.background = hoverStyles.background;
      e.currentTarget.style.borderColor = hoverStyles.borderColor;
    } else {
      e.currentTarget.style.background = DESKTOP_STYLES.default.background;
      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
    }
  };

  // Component parts
  const renderDesktopSocialLinks = () => (
    <div className="hidden md:flex fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex-col space-y-4">
      {SOCIAL_LINKS_DATA.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg overflow-hidden group"
          style={DESKTOP_STYLES.default}
          onMouseEnter={(e) => handleDesktopHover(e, link.color, true)}
          onMouseLeave={(e) => handleDesktopHover(e, link.color, false)}
        >
          <link.icon size={20} />
        </a>
      ))}
    </div>
  );

  const renderMobileSocialLinks = () => (
    <div
      className={`md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex space-x-4 px-6 py-3 rounded-2xl shadow-2xl transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={MOBILE_CONTAINER_STYLES}
    >
      {SOCIAL_LINKS_DATA.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative w-12 h-12 rounded-xl flex items-center justify-center text-white transition-all duration-300 active:scale-95 overflow-hidden group ${
            activeIndex === index
              ? "bg-opacity-40 border-opacity-60 text-current"
              : "bg-opacity-15 border-opacity-20 text-white"
          }`}
          style={getMobileItemStyles(index, link.color)}
          onTouchStart={() => handleTouchStart(index)}
          onTouchEnd={handleTouchEnd}
        >
          <link.icon size={20} />
        </a>
      ))}
    </div>
  );

  return (
    <>
      {renderDesktopSocialLinks()}
      {renderMobileSocialLinks()}
    </>
  );
};

export default SocialLinks;
