import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

export const MovieView = ({ movies, onBackClick }) => {
    return (
        <div>
            <div>
                <img className="w-100" src={movies.ImagePath} />
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
            <Button
                onClick={onBackClick}
                variant="primary"
                style={{ cursor: "pointer" }}
            >
                Back
            </Button>
            <Button md={12}
                onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}
                variant="primary"
                style={{ cursor: "pointer" }}
            >
                Logout
            </Button>
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