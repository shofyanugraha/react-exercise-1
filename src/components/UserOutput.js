import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    
    return (
        <div className="output">
            <p>Hi, { props.username } !!</p>
            <p>Second paragraph</p>
        </div>
    );

}

export default UserOutput;