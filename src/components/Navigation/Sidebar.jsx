import { Nav, Navbar } from 'react-bootstrap'
import LogoBlack from '../../assets/TheWebFieldn_new_logo_black.png'
export default function Sidebar() {
  return (
    <Nav className='sidebar d-none d-md-flex flex-column '>
       <Navbar.Brand href="/"><img src={LogoBlack} alt="TheWebFieldn logo" className="logo-img" width={150}/></Navbar.Brand>
      <Nav.Item>
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item> 
    </Nav>
  )
}
