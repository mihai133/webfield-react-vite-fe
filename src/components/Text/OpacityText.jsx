import { useSprings, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

export default function OpacityText({ text, delay = 100, className = " " }) {
  const words = text.split(" ");
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const springs = useSprings(
    words.length,
    words.map((_, i) => ({
      from: {
        opacity: 0.2,
        // transform: "translate3d(0,-50px,0)",
      },
      to: inView
        ? async (next) => {
            await next({
              opacity: 1,
              // transform: "translate3d(0,0,0)",
            });
          }
        : { opacity: 0 },
      delay: i * delay,
    }))
  );

  return (
    <div ref={ref} className={`${className}`}>
      {springs.map((props, index) => (
        <animated.div
          key={index}
          style={props}
          className={` word ${className}`}
        >
          {words[index]}&nbsp;
        </animated.div>
      ))}
    </div>
  );
}
