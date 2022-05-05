import { async } from '@firebase/util';
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import "./AddNewItem.css"

const AddNewItem = () => {

    const uri = "http://localhost:5000/products";
    // const uri = `https://secret-reaches-38095.herokuapp.com/product`;

    const handleAddNewItem = async (event) => {
        event.preventDefault();
        const newProduct = {
            name: event.target[0].value,
            img: event.target[1].value,
            desc: event.target[2].value,
            supplier: event.target[3].value,
            price: event.target[4].value,
            quantity: event.target[5].value,
            sold: 0
        }

        await axios.post(uri, newProduct)
            .then(function ({ data }) {
                // const { data } = response;
                console.log(data);
            })
            .catch(function (error) {
                console.log(error);
            });
        // .then(async resp => await console.log(resp))
        // .catch(error => toast(error.message));
        // console.log({ newProduct });
    }
    return (
        <div className="addnew-form">
            <form onSubmit={handleAddNewItem}>
                <div><h3 className='signin-title'>Add New Product</h3></div>
                <div className="input-container">
                    <label>Product Name: </label>
                    <input type="text" name="product" placeholder='Product Name' required maxLength="50" />
                </div>
                <div className="input-container">
                    <label>Product Image: </label>
                    <input type="text" name="image" placeholder='Image Link' required />
                </div>
                <div className="input-container">
                    <label>Description: </label>
                    <input type="text" name="description" placeholder='Short Description (Max. 350 char.)' required maxLength="350" />
                </div>
                <div className="input-container">
                    <label>Supplier's Name: </label>
                    <input type="text" name="supplier" placeholder="Supplier's Name" required maxLength="50" />
                </div>
                <div className='input-pair'>
                    <div className="input-container">
                        <label>Unit Price: </label>
                        <input type="number" name="price" placeholder="Unit Price" required />
                    </div>
                    <div className="input-container">
                        <label>Quantity: </label>
                        <input type="number" name="quantity" placeholder="Quantity" required />
                    </div>
                </div>

                <div className="button-container">
                    <input type="Submit" />
                </div>

            </form>
        </div>
    );
};

export default AddNewItem;