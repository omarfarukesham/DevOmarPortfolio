import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const{friendId} = useParams();
    console.log(friendId);

    let [friend, setFriend] = useState({})
    
    useEffect(()=>{
            const url= `https://jsonplaceholder.typicode.com/users/${friendId}`
            fetch(url)
            .then(res=> res.json())
            .then(data => setFriend(data))
    },[])

    return (
        <div>
            <h1>Hello Details</h1>
            <h3>Name: {friend.name}</h3>
            <h3>Email: {friend.email}</h3>
            <h3>City: {friend.address?.city}</h3>
            <h3>Lat: {friend.address?.geo.lat}</h3>
        </div>
    );
};

export default Details;