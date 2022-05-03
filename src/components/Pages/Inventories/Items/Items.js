import React from 'react';
import './Items.css';

const Items = ({ products }) => {
    const { _id, name, price, img, quantity, sold, supplier } = products;

    return (
        <div className='items-card'>
            <div style={{ width: '25%', textAlign: "left", marginLeft: '20px' }}>
                <h4>{name?.toUpperCase()}</h4>
            </div>
            <div style={{ width: '50px' }}>
                <img style={{ width: '100%' }} src={img} alt="" />
            </div>
            <div style={{ width: '25%' }}>
                <p>Sold: <b>{sold}</b> pcs</p>
                <p>In stock: <b>{quantity}</b> pcs</p>
            </div>
            <div style={{ width: '20%' }}><button className='button'>Delete</button></div>
        </div >
    );
};

export default Items;