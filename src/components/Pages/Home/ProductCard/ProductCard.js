import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { name, price, img, quantity, desc, supplier } = product;
    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <h4>{name.toUpperCase()}</h4>
        </div>
    );
};

export default ProductCard;