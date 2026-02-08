export function Card({ className = "", ...props }) {
  return (
    <div
      className={`rounded-xl border border-neutral-200 bg-white ${className}`}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }) {
  return <div className={`p-4 ${className}`} {...props} />;
}
