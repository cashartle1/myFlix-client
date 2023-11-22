
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";


export const UpdateUser = ({ handleUpdate, user }) => {

    const [username, setUsername] = useState(user.Username)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [birthday, setBirthday] = useState("")

    const onUpdateClick = () => {
        if (!password || !username) return
        const formattedUser = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        }
        handleUpdate(formattedUser)
    }

    return (
        <>
            <h3>Want to change your info?</h3>
            <Form className="profile-form" onSubmit={(e) => handleUpdate(e)}>
                <Form.Group controlId="formUsernameUpdate">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        name="Username"
                        defaultValue={user.Username}
                        onChange={e => setUsername(e.target.value)}
                        required
                        minLength="4"
                        placeholder="Enter new username"

                    />
                </Form.Group>
                <Form.Group controlId="formPasswordUpdate">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        defaultValue={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        minLength="8"
                        placeholder="Enter new password"
                    />
                    <p>*Your password must be 8 or more characters</p>
                </Form.Group>
                <Form.Group controlId="formEmailUpdate">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        defaultValue={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        placeholder="Enter new email address"
                    />
                </Form.Group>
                <Form.Group controlId="formBirthdaylUpdate">
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control
                        type="date"
                        defaultValue={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant='primary' onClick={onUpdateClick}>
                    Update
                </Button>
            </Form>
        </>
    );
};

