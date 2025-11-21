import { Dropdown } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

const UnderNavbar = () => {
    return (
        <div className="bg-dark text-white py-3 px-2">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3">
                    <h2 className="mb-0 fs-3">TV Shows</h2>
                    <Dropdown>
                        <Dropdown.Toggle
                            variant="outline-light"
                            id="dropdown-genres"
                            className="bg-dark text-white border-secondary">Genres</Dropdown.Toggle>
                        <Dropdown.Menu className="bg-white">
                            <Dropdown.Item href="#comedy">Comedy</Dropdown.Item>
                            <Dropdown.Item href="#drama">Drama</Dropdown.Item>
                            <Dropdown.Item href="#thriller">Thriller</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="d-flex gap-3">
                    <i className="bi bi-grid fs-4" style={{ cursor: "pointer" }}></i>
                    <i className="bi bi-grid-3x3 fs-4" style={{ cursor: "pointer" }}></i>
                </div>
            </div>
        </div>
    )
}

export default UnderNavbar