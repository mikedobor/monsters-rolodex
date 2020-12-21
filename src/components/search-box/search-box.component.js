import React from 'react';

export const SearchBox = (props) => {
    return (
        <input
            className="search"
            type="search"
            placeholder="Search monsters"
            onChange={PaymentResponse.onSeachChange}
        />
    )
}