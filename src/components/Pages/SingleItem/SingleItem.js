import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleItem.css';

const SingleItem = () => {
    const id = useParams();
    console.log(id);
    return (
        <div>

            <h3>page for single item. with id: {id.id}</h3>
        </div>
    );
};

export default SingleItem;