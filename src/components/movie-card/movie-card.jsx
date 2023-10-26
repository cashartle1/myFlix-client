import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movies, onMovieClick }) => {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={movies.ImagePath} />
            <Card.Body>
                <Card.Title>{movies.Title}</Card.Title>
                <Button onClick={() => onMovieClick(movies)} variant="link">
                    Open
                </Button>
            </Card.Body>
        </Card>
    );
};


//define all props constraints for MovieCard
MovieCard.propTypes = {
    movies: PropTypes.shape({
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
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};