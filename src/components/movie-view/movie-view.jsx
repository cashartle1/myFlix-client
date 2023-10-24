import PropTypes from 'prop-types';

export const MovieView = ({ movies, onBackClick }) => {
    return (
        <div>
            <div>
                <img src={movies.ImagePath} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movies.Title}</span>
            </div>
            <div>
                <span>Description: </span>
                <span>{movies.Description}</span>
            </div>
            <div>
                <span>Genre: </span>
                <span>{movies.Genre.Name}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{movies.Director.Name}</span>
            </div>
            <div>
                <span>Release Year: </span>
                <span>{movies.releaseYear}</span>
            </div>
            <button onClick={onBackClick}>Back</button>
        </div>
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