import React from 'react';
import './card-list.styles.css';

export const CardList = (props) => {
    return (<div className="Card-list">
        {props.children}
    </div>)
}