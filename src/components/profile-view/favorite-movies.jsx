import React, { useState } from "react";
import { Row, Col, Figure, Button, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './profile-view.scss'


export const FavoriteMoviesList = ({ favoriteMovies }) => {
    const removeFavoriteMovie = () => {
        fetch(
            `https://movie-flix-f31fbb6efa26.herokuapp.com/users/${user.Username}/movies/${movie.id}`,
            { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert("Failed");
                }
            })
            .then((user) => {
                if (user) {
                    alert("successfully deleted from favorites");
                    localStorage.setItem("user", JSON.stringify(user));
                    setUser(user);
                    setIsFavorite(false);
                }
            })
            .catch((error) => {
                alert(error);
            });
    };


    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col xs={12}>
                        <h3>Favorite Movies</h3>
                    </Col>
                </Row>
                <Row>
                    {favoriteMovies.map((movie) => {
                        return (
                            <Col xs={12} md={6} lg={3} key={movie.id} className="fav-movie">
                                <Figure className="justify-content-md-center">
                                    <Link to={`movies/${movie.id}`}>
                                        <Figure.Image
                                            src={movie.ImagePath}
                                            alt={movie.Title}
                                        />
                                        <Figure.Caption>
                                            {movie.Title}
                                        </Figure.Caption>
                                    </Link>
                                </Figure>
                                <Button className="justify-content-center" variant="secondary" onClick={() => removeFavoriteMovie(movie.id)}>Remove</Button>
                            </Col>

                        )
                    })
                    }

                </Row >
            </Card.Body>
        </Card>

    );

};