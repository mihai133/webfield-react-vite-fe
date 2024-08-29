import BlurText from "../../components/Text/BlurText";
import { Link } from "react-router-dom";
import ShiningText from "../../components/Text/ShiningText";
import CalBtn from "../../components/Buttons/Calbtn";
import { isLoggedIn } from "../../api/session";

const Home = () => {
  return (
    <>
      {/* <div className="vh-100"></div> */}
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <BlurText
          text="The only web development company that you will ever need!"
          classname="heading-01"
          delay={10}
        />

        <ShiningText
          text="We develop websites and web applications."
          className="heading-04 mt-5"
        />

        <div className="d-flex justify-content-center mt-5 gap-5 align-items-center">
          <CalBtn />

          {!isLoggedIn ? (
            <Link className="text-decoration-none text-reset" to="/login">
              Login
            </Link>
          ) : (
            <Link className="text-decoration-none text-reset" to="/about">
              About
            </Link>
          )}
        </div>

        {/* image */}
        {/* <div>
          <ClippedImage
            src="src/assets/the-webfield-website-startup.webp"
            alt="Image"
          />
        </div> */}
      </div>
    </>
  );
};

export default Home;
