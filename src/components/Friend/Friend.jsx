import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const{name, username,id }= props.friend

    let navigate = useNavigate();
    
    const friendDetails = () =>{
        let path = `/friend/${id}`
        navigate(path)
    }


    return (
        <div>
            <h1>Name: {name}</h1>
           <button onClick={friendDetails}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;