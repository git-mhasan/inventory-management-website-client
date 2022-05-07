import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MySingleItem = ({ products, setUpdateConfirm }) => {
    const navigate = useNavigate();
    const { _id, name, img, quantity, sold } = products;



    const handleNavigate = (id) => {
        navigate(`/inventory/${id}`)
    }


    const handleProductDelete = async (id) => {
        // const uri = `http://localhost:5000/product/${id}`;
        const uri = `https://secret-reaches-38095.herokuapp.com/product/${id}`;

        if (window.confirm("Do you really want to delete this record?") === true) {
            await axios.delete(uri)
                .then(async resp => {
                    await resp.data.acknowledged
                        ?
                        setUpdateConfirm(prev => !prev)
                        :
                        toast("Couldnot Delete item.");
                    resp.data.acknowledged && toast("Record Deleted!");

                })
                .catch(error => {
                    toast(error);
                })
        } else {
            toast("You Canceled");
        }
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
            <div style={{ width: '25%' }}> <button style={{ marginBottom: "5px", width: "75px" }} className='button' onClick={() => { handleNavigate(_id) }}>Details</button> <button style={{ marginTop: "5px", width: "75px" }} className='button' onClick={() => { handleProductDelete(_id) }}>Delete</button></div>
        </div >
    );
};

export default MySingleItem;