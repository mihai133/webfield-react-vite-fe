import useFetch from '../../api/fetch';
import LogoBlack from '../../assets/TheWebFieldn_new_logo_black.png'
import { Link } from 'react-router-dom'

export default function Signup() {
  const {data, error, loading, fetchData} = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const name = e.target["formEmail"].value
    const email = e.target["formEmail"].value
    const password = e.target["formPassword"].value
    const confirmPassword = e.target["formConfirmPassword"].value
    console.log(name,email, password, confirmPassword)
    await fetchData("/signup", "POST", {
        user:{
          name: name,
          email: email,
          password: password,
        }
      }
    )
  }

  console.log(data)

  return (
    <>
    <section className="h-100 gradient-form" style={{backgroundColor: "#eee"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center">
                 
                  <h4 className="mt-1 mb-3 pb-1"> <img src={LogoBlack} style={{width: "185px"}} alt="logo"/></h4>
                  <h3 className='fs-3 fw-bold mb-5'>Create your new account</h3>
                </div>

                <form onSubmit={e => handleSubmit(e)}>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="formName">Name</label>
                    <input type="text" id="formName" className="form-control"
                      placeholder="Enter your name" />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="formEmail">Email</label>
                    <input type="email" id="formEmail" className="form-control"
                      placeholder="Enter your email address" required />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="formPassword">Password</label>
                    <input type="password" id="formPassword" className="form-control" required/>
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="formConfirmPassword">Confirm Password</label>
                    <input type="password" id="formConfirmPassword" className="form-control" required/>
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block fa-lg  mb-3" type="submit">Create account</button>
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Already have an account?</p>
                    <Link to="/login">
                    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-danger">Log in</button>
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
