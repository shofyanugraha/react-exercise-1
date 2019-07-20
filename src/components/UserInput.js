import React from 'react';

const UserInput = (props) => {
    const style = {
        border: '1px solid #ccc',
        padding: '.5rem 1rem',
        fontSize: '14px',
        marginBottom: '1rem',
    };

    return (
        <div>
            <input 
                style={style}
                onChange={ props.change } 
                type="text" value={props.current} 
                />
        </div>
    );

}

export default UserInput;