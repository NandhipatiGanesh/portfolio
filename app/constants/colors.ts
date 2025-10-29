// Color constants used across the app
export const colors = {
  primary: "#4338ca",
  secondary: "#64748b",
  bg: "#F9F9F9",
  text: "#111827",
  link: "#2563eb",
  shadow: "rgba(0, 0, 0, 0.1)",
  whitebg: "#ffffff",
} as const;

export type Colors = typeof colors;

export default colors;