import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "The Princess Bride",
            description: "While home sick, a young boy's grandfather reads him the story of a farm boy-turned-pirate who encounters numerous obstacles, enemies, & allies in his quest to reunite with his true love.",
            genre: {
                name: "Adventure",
                description: "Adventure film are similar to action films except it is typically set in an unfamiliar, far-away locale. THe protagonist are thrust into a series of events including fights, chases, & feats.",
            },
            director: {
                name: "Rob Reiner",
                bio: "Rob Reiner was born in New York City. His inspiration to become a director came from his mother, with his direcotr-producer father as his role model. He is known for directing the films 'This is Spinal Tap', 'Stand by Me', and 'The Princess Bride.' He is also a political activis t, producer, and actor.",
                birth: "03-06-1947",
            },
            imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2FC9L9MrjBoGHYjYZjdWQdopVYb.jpg",
            releaseYear: "1987",
            actors: ["Cary Elwes", "Mandy Patinkin", "Robin Wright", "Chris Sarandon", "Christopher Guest", "Wallace Shawn", "Andre Rene Roussimoff"],
        },
        {
            id: 2,
            title: "Star Wars: Episode IV - A New Hope",
            description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
            genre: {
                name: "Adventure",
                description: "Adventure film are similar to action films except it is typically set in an unfamiliar, far-away locale. THe protagonist are thrust into a series of events including fights, chases, & feats.",
            },
            director: {
                name: "George Lucas",
                bio: "George Lucas was born in California. He is an American filmmaker, creator of the film sagas of Star Wars and Indiana Jones, and former president of Lucasfilm Limited, LucasArts Entertainment Company, Lucas Digital Ltd, Lucas Licensing, LucasBooks and Lucas Learning Ltd. Lucas wrote & directed the hit Star Wars: Episode IV - A New Hope, becomming the highest grossing film at the time as well as winning six Academy Awards. He went on to produce and co-write the original Star Wars installment trilogy, as well as, the prequel trilogy. Together with Steven Spielberg, Lucas co-created the stories of Indiana Joness films. He sold Lucasfilm to Disney in 2012. Lucas known as one fo the most financially sucessful filmakers in American film industry..",
                birth: "05-14-1944",
            },
            imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eFPSzaRX9K1tfUpmBxBuDGFjULs.jpg",
            releaseYear: "1977",
            actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Alec Guinness", "Peter Cushing", "Anthony Daniels", "Kenny Baker", "Peter Mayhew", "David Prowse"],

        },
        {
            id: 3,
            title: "Star Wars: Episode VI - Return of the Jedi",
            description: "After rescuing Han Solo from Jabba the Hutt, the Rebels attempt to destroy the second Death Star, while Luke struggles to help Darth Vader back from the dark side.",
            genre: {
                name: "Adventure",
                description: "Adventure film is similar to an Action film except that it is typically set in an exotic, far way, or unfamiliar locale. Like the the Action film genre, this is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include fighting, physical feats, rescues, and frantic chases. Action films tend to feature a mostly resourceful hero struggling against incredible odds, which include life-threating situations, a dangerous villian, or a pursuit which usually concludes in victory for the hero."
            },
            director: {
                name: "Richard Marquand",
                bio: "Richard Marquand was born in Llanishen, Cardiff, Glamorgan, Wales, UK. He was a director and producer known for Star Wars: Episode VI - Return of the Jedi 1983, Jagged Edge, and NBC Special Treat. He was previously married to Carol Bell and Josephine Marquand. He died in 1987 in Tunbridge Wells, Kent, England, UK.",
                birth: "09-22-1937",
                death: "09-04-1987"
            },
            imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jQYlydvHm3kUix1f8prMucrplhm.jpg",
            releaseYear: "1983",
            actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Billy Dee Williams", "Anthony Daniels", "Peter Mayhew", "Ian McDiarmid", "Frank Oz", "James Earl Jones", " David Prowse", "alec Guinness", "Kenny Baker"],
        },
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return (
            <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}
        </div>
    );
};

