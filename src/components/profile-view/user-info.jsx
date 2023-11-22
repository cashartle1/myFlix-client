import React from 'react';

export const UserInfo = ({ Email, Username, Birthday }) => {

    return (
        <>
            <h3>My Profile:</h3>
            <p>Username: {Username}</p>
            <p>Email: {Email}</p>
            <p>Birthday: {Birthday}</p>
        </>

    )
}