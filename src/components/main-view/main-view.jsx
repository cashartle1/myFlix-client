import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        if (!token) {
            return;
        }

        fetch("https://movie-flix-f31fbb6efa26.herokuapp.com/movies", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => response.json())
            .then((data) => {
                const moviesFromApi = data.map((movies) => {
                    return {
                        id: movies.id,
                        Title: movies.Title,
                        Description: movies.Description,
                        Genre: {
                            Name: movies.Genre.Name
                        },
                        Director: {
                            Name: movies.Director.Name
                        },
                        ImagePath: movies.ImagePath,
                        releaseYear: movies.ReleaseYear
                    };
                });

                setMovies(moviesFromApi);
            });
    }, [token]);

    return (
        <Row className="justify-content-md-center">
            {!user ? (
                <Col md={5}>
                    <LoginView onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                    }} />
                    or register below:
                    < SignupView />
                </Col>
            ) : selectedMovie ? (
                <Col md={8}>
                    <MovieView
                        style={{ border: "1px solid green" }}
                        movies={selectedMovie}
                        onBackClick={() => setSelectedMovie(null)}
                    />
                </Col>
            ) : movies.length === 0 ? (
                <Col>
                    <Button
                        onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}
                        variant="primary"
                        style={{ cursor: "pointer" }}
                    >
                        Logout
                    </Button>
                    <div>The list is empty!</div>;
                </Col>
            ) : (
                <>
                    <Col md={12}>
                        <Button
                            onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}
                            variant="primary"
                            style={{ cursor: "pointer" }}
                        >
                            Logout
                        </Button>
                    </Col>
                    {movies.map((movies) => (
                        <Col className="mb-3" key={movies.Title} md={3}>
                            <MovieCard
                                movies={movies}
                                onMovieClick={(newSelectedMovie) => {
                                    setSelectedMovie(newSelectedMovie);
                                }}
                            />
                        </Col>
                    ))}

                </>
            )}
        </Row>
    );
};
