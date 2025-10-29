//File :- app/constants/text.tsx
// This file can be used to store constant text values used throughout the application.
//like h1 size , p size, etc.
// app/components/Text.tsx
import React, { ReactNode } from "react";

type Variant = "h1" | "h2" | "h3" | "p" | "span";
type Color = "primary" | "secondary" | "danger" | "muted" | "custom";

interface TextProps {
  children: ReactNode;
  variant?: Variant;
  color?: Color;
  style?: React.CSSProperties;
  customColor?: string; // for when color is 'custom'
  className?: string;   // for Tailwind or custom CSS
}

const sizes: Record<Variant, React.CSSProperties> = {
  h1: { fontSize: "2.5rem", fontWeight: 700 },
  h2: { fontSize: "2rem", fontWeight: 600 },
  h3: { fontSize: "1.5rem", fontWeight: 500 },
  p:  { fontSize: "1rem", fontWeight: 400 },
  span: { fontSize: "1rem" }
};

const colors: Record<Color, string> = {
  primary: "#4338ca",
  secondary: "#64748b",
  danger: "#db2777",
  muted: "#6b7280",
  custom: "", // handle with customColor prop
};

export const Text = ({
  children,
  variant = "p",
  color = "muted",
  style,
  customColor,
  className
}: TextProps) => {
  const Comp = variant;
  const colorValue = color === "custom" && customColor ? customColor : colors[color];

  return (
    <Comp
      style={{
        ...sizes[variant],
        color: colorValue,
        ...style
      }}
      className={className}
    >
      {children}
    </Comp>
  );
};
