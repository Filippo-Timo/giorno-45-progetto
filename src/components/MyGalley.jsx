import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { Component } from 'react';

class MyGallery extends Component {
    state = {
        films: [],
        loading: true,
        error: false,
    };
    arrayFilmSearch = () => {
        const URL = "http://www.omdbapi.com/?apikey=eac09742&s=" + this.props.movieTitle;
        fetch(URL)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Errore nella richiesta!" + res.status);
                }
            })
            .then((arrayOfMovies) => {
                console.log(arrayOfMovies);
                this.setState({ films: arrayOfMovies.Search.slice(0, 6), loading: false });
            })
            .catch((err) => {
                this.setState({ loading: false, error: true });
                console.log("Errore:" + err);
            });
    };
    componentDidMount() {
        this.arrayFilmSearch();
    }

    render() {
        return (
            <>
                <Container fluid className="text-white p-2 my-3">
                    <h2 className="mb-2">{this.props.sectionTitle}</h2>

                    {this.state.loading && (
                        <div className="d-flex justify-content-center">
                            <Spinner
                                animation="border"
                                variant="danger"
                                className="my-4"
                            />
                        </div>
                    )}
                    {this.state.error && (
                        <Alert variant="danger">C'è stato un errore nel caricamento della pagina! Ci scusiamo per l'inconveniente</Alert>
                    )}

                    <Row>
                        {this.state.films.map((singleMovie) => (
                            <Col xs={6} md={4} lg={2} className="mb-4" key={singleMovie.imdbID}>
                                <div className="film-slide-item p-1 rounded">
                                    <img
                                        src={singleMovie.Poster}
                                        alt={singleMovie.Title}
                                        className="img-fluid rounded mb-2 img-hover"
                                        style={{
                                            height: "300px",
                                            width: "100%",
                                            objectFit: "cover"
                                        }}
                                    />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        );
    }
}


export default MyGallery