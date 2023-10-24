import PropTypes from "prop-types";

export const MovieCard = ({ movies, onMovieClick }) => {
    return (
        <div
            onClick={() => {
                onMovieClick(movies);
            }}
        >
            {movies.Title}
        </div>
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