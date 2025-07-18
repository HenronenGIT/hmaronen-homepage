import { COLORS } from "@/constants/colors";
import React from "react";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
}

const Tag: React.FC<TagProps> = ({ children, variant = "default" }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: COLORS.primaryAlpha[10],
          borderColor: COLORS.primaryAlpha[30],
          color: COLORS.primary,
          className: "border",
        };
      case "secondary":
        return {
          backgroundColor: COLORS.secondary,
          borderColor: "rgba(255, 255, 255, 0.1)",
          color: "#e5e7eb",
          className: "border",
        };
      default:
        return {
          backgroundColor: "#374151",
          color: "#d1d5db",
          className: "",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <span
      className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full transition-all duration-300 hover:scale-105 ${styles.className}`}
      style={{
        backgroundColor: styles.backgroundColor,
        borderColor: styles.borderColor,
        color: styles.color,
      }}
    >
      {children}
    </span>
  );
};

export default Tag;
