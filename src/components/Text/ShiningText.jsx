export default function ShiningText({
  as: Component = "h3",
  text,
  disabled = false,
  speed = "6s",
  className = "",
}) {
  const animationDuration = `${speed}`;
  return (
    <Component
      className={`shining-text ${disabled ? "disabled" : ""} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </Component>
  );
}
