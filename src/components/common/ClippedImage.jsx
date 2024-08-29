import { useScroll, animated } from "@react-spring/web";
import { useRef } from "react";

export default function ClippedImage({ src, alt }) {
  const imgContainerRef = useRef(null);
  const windowHeight = window.innerHeight;
  console.log(windowHeight);

  const { scrollYProgress } = useScroll();

  console.log(scroll);
  if (src)
    return (
      <div
        className="clipped-image-wrapper"
        style={{ height: windowHeight * 2 - 35 }}
      >
        <div className="spacer" style={{ height: windowHeight }}>
          <animated.div
            className="clipped-image-pin"
            style={{
              height: windowHeight,
              transform: scrollYProgress.to(
                (val) => `translate(0px, ${Math.abs(val) * 100}%)`
              ),
            }}
          >
            <animated.div
              ref={imgContainerRef}
              className="clipped-image"
              style={{
                height: windowHeight,
              }}
            >
              <animated.div
                style={{
                  clipPath: scrollYProgress.to(
                    (val) => `inset(0% ${40 - Math.abs(val) * 90}% )`
                  ),
                }}
              >
                <img decoding={"async"} src={src} alt={alt} />
                <div
                  className="clipped-image-gradient"
                  // style={{
                  //   transform: scrollYProgress.to(
                  //     (val) => `translateY(${windowHeight - val * -100}px)`
                  //   ),
                  // }}
                ></div>
              </animated.div>
            </animated.div>
          </animated.div>
        </div>

        <div
          className="clipped-image-content"
          // style={{
          //   paddingTop: `${windowHeight}px`,
          // }}
        >
          <h2 className="text-light heading-01">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>
    );

  return <></>;
}
