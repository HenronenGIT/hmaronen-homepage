import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface GlassButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

const GlassButton = ({
  children,
  onClick,
  href,
  target,
  rel,
  icon: Icon,
  iconPosition = "left",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}: GlassButtonProps) => {
  // Base styles
  const baseStyles =
    "group relative transition-all duration-300 border backdrop-blur-sm overflow-hidden font-semibold inline-flex items-center justify-center no-underline";

  // Size variants
  const sizeStyles = {
    sm: "px-6 py-3 text-sm rounded-lg",
    md: "px-8 py-4 text-base rounded-xl",
    lg: "px-10 py-5 text-lg rounded-xl",
  };

  // Variant styles
  const variantStyles = {
    primary: {
      background:
        "linear-gradient(135deg, rgba(79, 209, 199, 0.3) 0%, rgba(175, 235, 231, 0.3) 100%)",
      borderColor: "rgba(79, 209, 199, 0.4)",
      hoverBorderColor: "#4FD1C7",
      hoverShadow: "0 10px 40px rgba(79, 209, 199, 0.25)",
      glowBackground:
        "radial-gradient(circle, rgba(79, 209, 199, 0.4) 0%, transparent 70%)",
    },
    secondary: {
      background: "rgba(255, 255, 255, 0.05)",
      borderColor: "rgba(255, 255, 255, 0.1)",
      hoverBorderColor: "rgba(255, 255, 255, 0.3)",
      hoverShadow: "0 10px 40px rgba(255, 255, 255, 0.1)",
      glowBackground:
        "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)",
    },
    accent: {
      background:
        "linear-gradient(135deg, rgba(79, 209, 199, 0.2) 0%, rgba(175, 235, 231, 0.2) 100%)",
      borderColor: "rgba(79, 209, 199, 0.3)",
      hoverBorderColor: "#4FD1C7",
      hoverShadow: "0 12px 48px rgba(79, 209, 199, 0.2)",
      glowBackground:
        "radial-gradient(circle, rgba(79, 209, 199, 0.3) 0%, transparent 70%)",
    },
  };

  const currentVariant = variantStyles[variant];
  const currentSize = sizeStyles[size];

  // Scale effects
  const scaleEffect = disabled ? "" : "hover:scale-110";

  // Combine classes
  const combinedClasses =
    `${baseStyles} ${currentSize} ${scaleEffect} ${className}`.trim();

  // Event handlers
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    const target = e.currentTarget as HTMLElement;
    target.style.borderColor = currentVariant.hoverBorderColor;
    target.style.boxShadow = currentVariant.hoverShadow;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    const target = e.currentTarget as HTMLElement;
    target.style.borderColor = currentVariant.borderColor;
    target.style.boxShadow = "none";
  };

  // Content with icon
  const buttonContent = (
    <>
      {/* Button glow effect on hover */}
      <span
        className={`absolute inset-0 ${
          size === "sm" ? "rounded-lg" : "rounded-xl"
        } opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
        style={{
          background: currentVariant.glowBackground,
        }}
      />

      {/* Content container */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
        <span>{children}</span>
        {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
      </span>
    </>
  );

  // Common props
  const commonProps = {
    className: combinedClasses,
    style: {
      background: currentVariant.background,
      borderColor: currentVariant.borderColor,
      color: disabled ? "rgba(255, 255, 255, 0.5)" : "#ffffff",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
    },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  // Render as link or button
  if (href && !disabled) {
    return (
      <a {...commonProps} href={href} target={target} rel={rel}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      {...commonProps}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
};

export default GlassButton;
