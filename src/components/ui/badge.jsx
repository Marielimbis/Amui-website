export function Badge({ className = "", variant = "default", ...props }) {
  const variants = {
    default: "bg-neutral-900 text-white",
    secondary: "bg-neutral-100 text-neutral-800",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
