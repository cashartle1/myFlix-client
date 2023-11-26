import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


export const MovieCard = ({ movie, user, token, setUser }) => {

    const [favorites, setFavorites] = useState(user.FavoriteMovies)

    const [isFavorite, setIsFavorite] = useState(
        user.FavoriteMovies.includes(movie.id)
    );

    useEffect(() => {
        if (favorites.includes(movie.id)) {
            setIsFavorite(true);
        }
    }, [favorites]);

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
        <Card className="h-100">
            <Card.Img variant="top" src={movie.ImagePath} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
                    <Button variant="link">Open</Button>
                </Link>
            </Card.Body>
            <Card.Body>
                {!isFavorite ? (
                    <Button className="primary" onClick={addFavoriteMovie}>+Add to Favorites</Button>
                ) : (
                    <Button className="secondary" onClick={removeFavoriteMovie}>Remove from Favorites</Button>
                )}
            </Card.Body>
        </Card>
    );
};


//define all props constraints for MovieCard
MovieCard.propTypes = {
    movie: PropTypes.shape({
        ImagePath: PropTypes.string,
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired
        }),
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired
        }),
        ReleaseYear: PropTypes.string
    })

};