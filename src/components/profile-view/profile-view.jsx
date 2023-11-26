import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { UserInfo } from "./user-info";
import { FavoriteMoviesList } from "./favorite-movies";
import { UpdateUser } from "./update-user"



export const ProfileView = ({ movies, user, token, setUser }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [birthday, setBirthday] = useState("")

    const favoriteMovies = movies.filter((movie) => {
        return user.FavoriteMovies.includes(movie.id);
    });

    //Update User Profile information
    const handleUpdate = (userObject) => {
        const data = {
            Username: userObject.Username,
            Password: userObject.Password,
            Email: userObject.Email,
            Birthday: userObject.Birthday,
        };
        fetch(
            `https://movie-flix-f31fbb6efa26.herokuapp.com/users/${user.Username}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            }).then(async (response) => {
                if (response.ok) {
                    alert("update successful!");
                    return response.json()
                } else {
                    const errorText = await response.text();
                    alert("update failed");
                }
            }).then((updatedUser) => {
                if (updatedUser) {
                    localStorage.setItem('user', JSON.stringify(updatedUser))
                    setUser(updatedUser)
                }
            })
            .catch((err) => console.log("error", err));
    };


    //DELETE ACCOUNT
    const handleDelete = () => {
        fetch(
            `https://movie-flix-f31fbb6efa26.herokuapp.com/users/${users.Username}`,
            {
                method: "DELETE",
                headers: {
                    // "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                // body: JSON.stringify(data),
            }
        ).then((response) => {
            if (response.ok) {
                setUser(null);
                localStorage.clear();
                alert("your account has been deleted");
                window.location.replace("/login");
            } else {
                alert("could not delete account");
            }
        });
    };

    return (
        <Container>
            <Row>
                <Col xs={12} sm={4}>
                    <Card>
                        <Card.Body>
                            <UserInfo Username={user.Username} Email={user.Email} Birthday={user.Birthday} />
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>Want to delete your account?</Card.Title>
                            <Button
                                variant="danger"
                                type=""
                                onClick={handleDelete}
                                className="text-white mt-3"
                            >
                                delete my account
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={8}>
                    <Card>
                        <Card.Body>
                            <UpdateUser handleUpdate={handleUpdate} user={user} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <FavoriteMoviesList favoriteMovies={favoriteMovies} />
        </Container>
    );

}