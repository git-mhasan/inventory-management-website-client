import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { _id, name, price, img, quantity, desc, supplier } = product;

    const navigateManageStock = (id) => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div className='product-card'>
            <img src={img} alt="" />
            <h4>{name.toUpperCase()}</h4>
            <p className='product-card-desc'>{desc?.length > 65 ? desc?.slice(0, 65) + "..." : desc}</p>
            <p>Supplier: {supplier}</p>
            <p>Price: Tk. <b>{price}</b></p>
            <p>In stock: {quantity} pcs</p>
            <button className='button' onClick={() => navigateManageStock(_id)}>Update Stock</button>
        </div>
    );
};

export default ProductCard;