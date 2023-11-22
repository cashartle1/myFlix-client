import React from 'react';
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { Button, Card, Image } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
export const MovieView = ({ movies, user, token, setUser }) => {
    const { movieId } = useParams();

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