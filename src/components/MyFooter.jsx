import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

const MyFooter = () => {
    return (
        <footer className="bg-dark text-light py-5">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={6}>
                        {/* Social Icons */}
                        <div className="mb-4">
                            <i className="bi bi-facebook footer-icon me-3 fs-4"></i>
                            <i className="bi bi-instagram footer-icon me-3 fs-4"></i>
                            <i className="bi bi-twitter-x footer-icon me-3 fs-4"></i>
                            <i className="bi bi-youtube footer-icon fs-4"></i>
                        </div>

                        <Row className="row-cols-2 row-cols-md-4 g-3 mb-4">
                            <Col>
                                <div className="footer-links">
                                    <p><a href="#" className="text-secondary text-decoration-none">Audio and Subtitles</a></p>
                                    <p><a href="#" className="text-secondary text-decoration-none">Media Center</a></p>
                                    <p><a href="#" className="text-secondary text-decoration-none">Privacy</a></p>
                                    <p><a href="#" className="text-secondary text-decoration-none">Contact us</a></p>
                                </div>
                            </Col>
                            <Col>
                                <div className="footer-links">
                                    <p><a href="#" className="text-secondary text-decoration-none">Audio Description</a></p>
                                    <p><a href="#" className="text-secondary text-decoration-none">Investor Relations</a></p>
                                    <p><a href="#" className="text-secondary text-decoration-none">Legal Notices</a></p>
                                </div>
                            </Col>
                            <Col>
                                <div className="footer-links">
                                    <p><a href="#" className="text-secondary text-decoration-none">Help Center</a></p>
                                    <p><a href="#" className="text-secondary text-decoration-none">Jobs</a></p>
                                    <p><a href="#" className="text-secondary text-decoration-none">Cookie Preferences</a></p>
                                </div>
                            </Col>
                            <Col>
                                <div className="footer-links">
                                    <p><a href="#" className="text-secondary text-decoration-none">Gift Cards</a></p>
                                    <p><a href="#" className="text-secondary text-decoration-none">Terms of Use</a></p>
                                    <p><a href="#" className="text-secondary text-decoration-none">Corporate Information</a></p>
                                </div>
                            </Col>
                        </Row>

                        <div className="mb-4">
                            <button className="btn btn-outline-secondary btn-sm px-3 py-2">
                                Service Code
                            </button>
                        </div>

                        <div className="text-secondary">
                            <small>© 1997-2023 Netflix, Inc.</small>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default MyFooter