import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css";

const MyNavbar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="#home"><img src="/logo.png" alt="Logo" style={{ height: "60px" }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#Home" active className="fw-bold">Home</Nav.Link>
                            <Nav.Link href="#tvshows" className="fw-bold">TV Shows</Nav.Link>
                            <Nav.Link href="#movies" className="fw-bold">Movies</Nav.Link>
                            <Nav.Link href="#recentlyadded" className="fw-bold">Recently Added</Nav.Link>
                            <Nav.Link href="#mylist" className="fw-bold">My List</Nav.Link>
                        </Nav>
                        <Nav className="d-flex flex-row align-items-center justify-content-start gap-3">
                            <Nav.Link href="#deets" className="fs-5"><i className="bi bi-search"></i></Nav.Link>
                            <Nav.Link href="#deets" className="fw-bold" active>KIDS</Nav.Link>
                            <Nav.Link href="#deets" className="fs-5"><i className="bi bi-bell"></i></Nav.Link>
                            <Nav.Link href="#deets" className="fs-5"><i className="bi bi-person-circle"></i></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MyNavbar

//  