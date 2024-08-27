import { useEffect, useState } from "react";
import { login } from "../../api/fetch";
import { isLoggedIn, setSession } from "../../api/session";
import LogoBlack from "../../assets/TheWebFieldn_new_logo_black.png";
import { Link, useNavigate } from "react-router-dom";
import SetHeaders from "../../api/SetHeaders";

export default function Login(props) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    login({ email: formdata.email, password: formdata.password }).then(
      (result) => {
        if (result) {
          let login_user = result?.status?.data?.user;
          setSession({
            token: result?.status.token,
          });
          setUserData(login_user);
        }
      }
    );
  };

  useEffect(() => {
    if (isLoggedIn()) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (userData) return <SetHeaders user={userData} {...props} />;

  return (
    <>
      <section
        className="h-100 gradient-form"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <h4 className="mt-1 mb-3 pb-1">
                          {" "}
                          <img
                            src={LogoBlack}
                            style={{ width: "185px" }}
                            alt="logo"
                          />
                        </h4>
                        <h3 className="fs-3 fw-bold mb-5">
                          Login to your account
                        </h3>
                      </div>

                      {/* <form onSubmit={(e) => handleSubmit(e)}> */}
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="formEmail">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="formEmail"
                          className="form-control"
                          value={formdata.email}
                          onChange={(e) => handleChange(e)}
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="formPassword">
                          Password
                        </label>
                        <input
                          type="password"
                          id="formPassword"
                          name="password"
                          value={formdata.password}
                          onChange={(e) => handleChange(e)}
                          className="form-control"
                        />
                      </div>
                      <a className="text-muted" href="/forgot-password">
                        Forgot password?
                      </a>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          onClick={() => handleSubmit(formdata)}
                        >
                          Log in
                        </button>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don`t have an account?</p>
                        <Link to="/signup">
                          <button
                            type="button"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-link text-dark"
                          >
                            Create new
                          </button>
                        </Link>
                      </div>
                      {/* </form> */}
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
