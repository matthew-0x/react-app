import React from 'react';

function Login(){
    return <p> Welcome! </p>;
}

function Signup(){
    return <p> Singup! </p>;
}

export function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <Login />;
    }
    return <Signup />;
}

