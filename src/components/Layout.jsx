
import { Outlet } from "react-router-dom"
import NavigationBar from "./Navigation/Navbar"
// import Header from "./Header"
// import Footer from "./Footer"

export default function Layout() {
    return (
        <>
          <main className="container-fluid row m-0 p-0">                 
            {/* <Col md={2} className="d-none d-md-block p-0">
              <Sidebar />
            </Col>
            <Col  className="container-fluid m-0 p-0"> */}
            <NavigationBar />
                <Outlet />

            {/* </Col> */}
            
          </main>
        </>
    )
}