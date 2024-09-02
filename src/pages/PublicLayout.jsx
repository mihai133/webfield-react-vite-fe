import { Outlet } from "react-router-dom";
import NavigationBar from "../components/Navigation/Navbar";
// import Header from "./Header"
// import Footer from "./Footer"

export default function PublicLayout() {
  return (
    <>
      <main className="container-fluid row m-0 p-0">
        {/* <Col md={2} className="d-none d-md-block p-0">
              <Sidebar />
            </Col>
            <Col  className="container-fluid m-0 p-0"> */}
        <NavigationBar />
        <div className="col-12 col-md-9 mx-auto mt-5 px-3">
          <Outlet />
        </div>

        {/* </Col> */}
      </main>
    </>
  );
}
