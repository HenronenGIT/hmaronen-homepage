import { COLORS } from "@/constants/colors";
import { getTypographyPreset, type TYPOGRAPHY } from "@/constants/typography";
import { cn } from "@/lib/utils";
import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  variant?: keyof typeof TYPOGRAPHY.presets;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  accent?: boolean; // Whether to apply accent color
  style?: React.CSSProperties;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body",
  className = "",
  as = "p",
  accent = false,
  style = {},
  ...props
}) => {
  const Component = as;
  const baseClasses = getTypographyPreset(variant);

  const finalStyle = accent ? { ...style, color: COLORS.primary } : style;

  return (
    <Component
      className={cn(baseClasses, className)}
      style={finalStyle}
      {...props}
    >
      {children}
    </Component>
  );
};

// Semantic heading components
export const H1: React.FC<Omit<TypographyProps, "variant" | "as">> = (
  props
) => <Typography variant="h1" as="h1" {...props} />;

export const H2: React.FC<Omit<TypographyProps, "variant" | "as">> = (
  props
) => <Typography variant="h2" as="h2" {...props} />;

export const H3: React.FC<Omit<TypographyProps, "variant" | "as">> = (
  props
) => <Typography variant="h3" as="h3" {...props} />;

export const H4: React.FC<Omit<TypographyProps, "variant" | "as">> = (
  props
) => <Typography variant="h4" as="h4" {...props} />;

export const H5: React.FC<Omit<TypographyProps, "variant" | "as">> = (
  props
) => <Typography variant="h5" as="h5" {...props} />;

export const H6: React.FC<Omit<TypographyProps, "variant" | "as">> = (
  props
) => <Typography variant="h6" as="h6" {...props} />;

// Section title components
export const SectionTitle: React.FC<Omit<TypographyProps, "variant" | "as">> = (
  props
) => <Typography variant="section-title" as="h2" {...props} />;

export const SectionSubtitle: React.FC<
  Omit<TypographyProps, "variant" | "as">
> = (props) => <Typography variant="section-subtitle" as="h3" {...props} />;

// Body text components
export const BodyLarge: React.FC<Omit<TypographyProps, "variant" | "as">> = (
  props
) => <Typography variant="body-large" as="p" {...props} />;

export const Body: React.FC<Omit<TypographyProps, "variant" | "as">> = (
  props
) => <Typography variant="body" as="p" {...props} />;

export const BodySmall: React.FC<Omit<TypographyProps, "variant" | "as">> = (
  props
) => <Typography variant="body-small" as="p" {...props} />;

export const Caption: React.FC<Omit<TypographyProps, "variant" | "as">> = (
  props
) => <Typography variant="caption" as="p" {...props} />;

export const Micro: React.FC<Omit<TypographyProps, "variant" | "as">> = (
  props
) => <Typography variant="micro" as="span" {...props} />;

// Special components
export const Label: React.FC<Omit<TypographyProps, "variant" | "as">> = (
  props
) => <Typography variant="label" as="label" {...props} />;

export const Metadata: React.FC<Omit<TypographyProps, "variant" | "as">> = (
  props
) => <Typography variant="metadata" as="p" {...props} />;

export const Tag: React.FC<Omit<TypographyProps, "variant" | "as">> = (
  props
) => <Typography variant="tag" as="span" {...props} />;

export const Badge: React.FC<Omit<TypographyProps, "variant" | "as">> = (
  props
) => <Typography variant="badge" as="span" {...props} />;

// Export everything as default for easy imports
export default {
  Typography,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  SectionTitle,
  SectionSubtitle,
  BodyLarge,
  Body,
  BodySmall,
  Caption,
  Micro,
  Label,
  Metadata,
  Tag,
  Badge,
};
