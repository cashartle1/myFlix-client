import React from 'react';
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Button, Card, Image } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const MovieView = ({ movies, user, token, setUser }) => {
    const { movieId } = useParams();
    const movie = movies.find((item) => item.id === movieId);

    const [isFavorite, setIsFavorite] = useState(
        user.FavoriteMovies.includes(movie.id)
    );

    const addFavoriteMovie = () => {

        fetch(
            `https://movie-flix-f31fbb6efa26.herokuapp.com/users/${user.Username}/movies/${movie.id}`,
            { method: "POST", headers: { Authorization: `Bearer ${token}` } }
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert("Failed to add favorite movie");
                    console.log("Failed to add favorite movie");
                }
            })
            .then((data) => {
                if (data) {
                    alert("successfully added to favorites");
                    localStorage.setItem("user", JSON.stringify(data));
                    setFavorites(data.FavoriteMovies)
                    setUser(data);
                    setIsFavorite(true);
                    console.log("successfully added to favs");
                }
            })
            .catch((err) => {
                alert(err);
                console.error(err);
            });
    };

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
                <Image className="w-100" src={movie.ImagePath} rounded />
            </Card.Body>
            <Card.Body>
                <Card.Title>Title: </Card.Title>
                <Card.Text>{movie.Title}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Title>Description: </Card.Title>
                <Card.Text>{movie.Description}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Title>Genre: </Card.Title>
                <Card.Text>{movie.Genre.Name}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Title>Director: </Card.Title>
                <Card.Text>{movie.Director.Name}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Title>Release Year: </Card.Title>
                <Card.Text>{movie.ReleaseYear}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Link to={`/`}>
                    <Button className="back-button" variant='primary' style={{ cursor: "pointer" }} >Back</Button>
                </Link>
            </Card.Body>
            <Card.Body>
                {!isFavorite ? (
                    <Button className="primary" style={{ cursor: "pointer" }} onClick={addFavoriteMovie}>+Add to Favorites</Button>
                ) : (
                    <Button className="secondary" style={{ cursor: "pointer" }} onClick={removeFavoriteMovie}>Remove from Favorites</Button>
                )}
            </Card.Body>

        </Card>


    );
};

//define all props constraints for MovieCard
MovieView.propTypes = {
    movies: PropTypes.shape({
        ImagePath: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired
        }),
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired
        }),
        ReleaseYear: PropTypes.string
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
};