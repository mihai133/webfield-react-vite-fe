import { useSpring, animated } from "@react-spring/web";
import React, { useEffect } from "react";

export default function AnimatedContainer({
  children,
  distance = 100,
  direction = "vertical",
  className = "",
  reverse = false,
}) {
  const [inView, setInView] = React.useState(false);
  const containerRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(containerRef.current);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const directions = {
    vertical: "Y",
    horizontal: "X",
  };

  const springProps = useSpring({
    from: {
      transform: `translate${directions[direction]}(${
        reverse ? `-${distance}px` : `${distance}px`
      })`,
    },
    to: inView
      ? { transform: `translate${directions[direction]}(0px)` }
      : `translate${directions[direction]}(${reverse && "-"}${distance}px)`,
    config: { tension: 100, friction: 25 },
  });

  return (
    <animated.div ref={containerRef} style={springProps} className={className}>
      {children}
    </animated.div>
  );
}
