import { useRef } from "react";

export default function OverlayCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.8)",
}) {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    containerRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`overlay-card z-0 ${className}`}
    >
      {children}
    </div>
  );
}
