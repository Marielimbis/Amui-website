export function Button({ className = "", variant = "default", size = "md", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50";

  const variants = {
    default: "bg-neutral-900 text-white hover:bg-neutral-800",
    outline: "border border-neutral-300 bg-white hover:bg-neutral-100",
  };

  const sizes = {
    md: "h-10 px-4",
    lg: "h-12 px-6",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
