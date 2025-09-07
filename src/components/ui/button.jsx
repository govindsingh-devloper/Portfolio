export default function Button({ className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 font-bold ${className}`}
      {...props}
    />
  );
}
