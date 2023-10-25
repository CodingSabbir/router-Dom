import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserInfo = () => {
    const {userID}=useParams();
     const [user ,setUser]=useState({})
     useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${userID}`
        fetch(url)
        .then(response => response.json())
        .then(data => setUser(data))
     },[])
    return (
        <>
            <h1>User ID : {userID}</h1>
            <p>Name : {user.name}</p>
            <p>Email : {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website : {user.website}</p>
        </>
    );
};

export default UserInfo;