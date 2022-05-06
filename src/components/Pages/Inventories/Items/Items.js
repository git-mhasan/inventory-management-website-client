import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import './Items.css';

const Items = ({ products, setUpdateConfirm }) => {
    const { _id, name, img, quantity, sold } = products;

    const handleProductDelete = async (id) => {
        // const uri = `http://localhost:5000/product/${id}`;
        const uri = `https://secret-reaches-38095.herokuapp.com/product/${id}`;

        await axios.delete(uri)
            .then(async resp => {
                await resp.data.acknowledged
                    ?
                    setUpdateConfirm(true)
                    :
                    toast("Couldnot Deliver item.")
            })
            .catch(error => {
                toast(error);
            })
    }

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
            <div style={{ width: '20%' }}> <button style={{ width: "75px" }} className='button' onClick={() => { handleProductDelete(_id) }}>Delete</button></div>
        </div >
    );
};

export default Items;