import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { name, price, img, quantity, desc, supplier } = product;
    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <h4>{name.toUpperCase()}</h4>
            <p className='product-card-desc'>{desc?.length > 65 ? desc?.slice(0, 65) + "..." : desc}</p>
            <p>Supplier: {supplier}</p>
            <p>Price: Tk. <b>{price}</b></p>
            <p>In stock: {quantity} pcs</p>
            <button className='button'>Manage Stock</button>
        </div>
    );
};

export default ProductCard;