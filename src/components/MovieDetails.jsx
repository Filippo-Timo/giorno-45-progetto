import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Spinner, Alert, Card, Button } from 'react-bootstrap';

const MovieDetails = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [movieInfo, setMovieInfo] = useState(null)
    const [loading, setLoading] = useState(true)

    const URL = "http://www.omdbapi.com/?apikey=eac09742"

    const getMovieDetails = () => {
        fetch(URL + "&i=" + params.MovieId)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error("Errore nella risposta!");
                }
            }
            )
            .then((movie) => {
                console.log("SINGOLO FILM", movie)
                setMovieInfo(movie)
                setLoading(false)
            })
            .catch((error) => {
                console.log("ERRORE!", error)
                setLoading(false)
            })
    }

    useEffect(() => {
        getMovieDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <h2>DETTAGLI FILM</h2>
                    {loading ? (
                        <div className="text-center">
                            <Spinner animation="border" variant="success" />
                        </div>
                    ) : (
                        <Card>
                            <Card.Img variant="top" src={movieInfo.Poster} />
                            <Card.Body>
                                <Card.Title>{movieInfo.Title}</Card.Title>
                                <Card.Text>{movieInfo.Plot}</Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        navigate('/')
                                    }}
                                >
                                    VAI IN HOME
                                </Button>
                            </Card.Body>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    )


}

export default MovieDetails