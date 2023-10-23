import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

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
                const moviesFromApi = movies.map((data) => {
                    return {
                        id: movies.key,
                        title: movies.Title,
                        description: movies.Description,
                        genre: {
                            name: movies.Genre.Name
                        },
                        director: {
                            name: movies.Director.Name
                        },
                        ImagePath: movies.ImagePath,
                        releaseYear: movies.ReleaseYear
                    };
                });

                setMovies(moviesFromApi);
            });
    }, [token]);

    if (!user) {
        return (
            <>
                <LoginView onLoggedIn={(user, token) => {
                    setUser(user);
                    setToken(token);
                }} />
                or
                < SignupView />
            </>
        );
    }

    if (selectedMovie) {
        return (
            <>
                <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
                <MovieView
                    movies={selectedMovie}
                    onBackClick={() => setSelectedMovie(null)}
                />
            </>

        );
    }

    if (movies.length === 0) {
        return (
            <>
                <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
                <div>The list is empty!</div>;
            </>
        );
    }

    return (
        <div>
            <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
            {movies.map((movies) => (
                <MovieCard
                    key={movies.Title}
                    movies={movies}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}
        </div>
    );
};

