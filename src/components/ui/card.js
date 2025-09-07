export function Card({ className = "", ...props }) {
  return <div className={`rounded-2xl border bg-black/60 ${className}`} {...props} />;
}

export function CardContent({ className = "", ...props }) {
  return <div className={`p-4 ${className}`} {...props} />;
}
