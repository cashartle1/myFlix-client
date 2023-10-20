import PropTypes from 'prop-types';

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
            <div>
                <img src={movie.imageURL} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.title}</span>
            </div>
            <div>
                <span>Description: </span>
                <span>{movie.description}</span>
            </div>
            <div>
                <span>Genre: </span>
                <span>{movie.genre.name}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{movie.director.name}</span>
            </div>
            <div>
                <span>Release Year: </span>
                <span>{movie.releaseYear}</span>
            </div>
            <button onClick={onBackClick}>Back</button>
        </div>
    );
};

//define all props constraints for MovieCard
MovieView.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired
        }),
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired
        }),
        ImagePath: PropTypes.string.isRequired,
        ReleaseYear: PropTypes.string.isRequired
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
};