import { useSprings, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

export default function BlurText({ text, delay = 50, classname = " " }) {
  console.log(text);
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
        filter: "blur(1px)",
        opacity: 0,
        transform: "translate3d(0,-50px,0)",
      },
      to: inView
        ? async (next) => {
            await next({
              filter: "blur(2px)",
              opacity: 0.5,
              transform: "translate3d(0,2px,0)",
            });
            await next({
              filter: "blur(0px)",
              opacity: 1,
              transform: "translate3d(0,0,0)",
            });
          }
        : { filter: "blur(10px)", opacity: 0 },
      delay: i * delay,
    }))
  );

  return (
    <span ref={ref} className={classname}>
      {springs.map((props, index) => (
        <animated.div key={index} style={props} className={`word ${classname}`}>
          {words[index]}&nbsp;
        </animated.div>
      ))}
    </span>
  );
}
