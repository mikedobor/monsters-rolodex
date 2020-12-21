import React from 'react';

const Person = (props) => {
    return (
        <div>
            <h1>{props.personName}</h1>
            {/* <img src={props.person.imgUrl}></img> */}
        </div>
    )
}

export default Person;