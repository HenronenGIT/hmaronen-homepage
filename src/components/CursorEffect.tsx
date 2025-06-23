import { useEffect, useState } from "react";
import { COLORS, withAlpha } from "../constants/colors";

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${
          mousePosition.y
        }px,
          ${withAlpha(COLORS.primary, 0.15)},
          ${withAlpha(COLORS.primary, 0.15)},
          transparent 50%)`,
        transition: "background 0.2s ease-out",
      }}
    />
  );
};

export default CursorEffect;
