import useFetch from '../../api/fetch';
import LogoBlack from '../../assets/TheWebFieldn_new_logo_black.png'
import { Link } from 'react-router-dom'

export default function Login() {
  const {data, error, loading, fetchData} = useFetch();
  console.log(data, error, loading)
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target["formEmail"].value
    const password = e.target["formPassword"].value
    console.log(email, password)
    await fetchData("/login", "POST", {
        user:{
          email,
          password
        }
      })
  }

  return (
    <>
      <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">

                      <div className="text-center">

                        <h4 className="mt-1 mb-3 pb-1"> <img src={LogoBlack} style={{ width: "185px" }} alt="logo" /></h4>
                        <h3 className='fs-3 fw-bold mb-5'>Login to your account</h3>
                      </div>

                      <form onSubmit={e => handleSubmit(e)}>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="formEmail">Email</label>
                          <input type="email" id="formEmail" className="form-control"
                            placeholder="Enter your email address" />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="formPassword">Password</label>
                          <input type="password" id="formPassword" className="form-control" />
                        </div>
                        <a className="text-muted" href="/forgot-password">Forgot password?</a>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log
                            in</button>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don`t have an account?</p>
                          <Link to="/signup">
                            <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link text-dark">Create new</button>
                          </Link>
                        </div>

                      </form>

                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
