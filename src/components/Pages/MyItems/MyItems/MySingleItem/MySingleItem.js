import React from 'react';

const MySingleItem = ({ products }) => {
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
            <div style={{ width: '25%' }}> <button style={{ marginBottom: "5px", width: "75px" }} className='button'>Details</button> <button style={{ marginTop: "5px", width: "75px" }} className='button'>Delete</button></div>
        </div >
    );
};

export default MySingleItem;