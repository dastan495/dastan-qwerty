import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Header.css";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <Container>
        <Navbar.Brand className="brand" href="#home">
          Energy-Electronic
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link href="#features">electronics</Nav.Link>
            </Link>
            <Link to="/add-electronic">
              <Nav.Link href="#pricing">add electronics</Nav.Link>
            </Link>
            <NavDropdown title="expand" id="collasible-nav-dropdown">
              <Link to="/about-profile">
                <NavDropdown.Item href="#action/3.1">
                  about profile
                </NavDropdown.Item>
              </Link>

              <Link to="/admin-panel">
              <NavDropdown.Item href="#action/3.2">
                admin panel
              </NavDropdown.Item>
              </Link>
            <Link to="/about-us">
              <NavDropdown.Item href="#action/3.3">about us</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to="/complain">
              <NavDropdown.Item href="#action/3.4">complain</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">log in</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
