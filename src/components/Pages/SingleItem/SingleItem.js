import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProductById from '../../../hooks/useProductById';
import Loading from '../../Shared/Loading/Loading';
import './SingleItem.css';

const SingleItem = () => {
    const { id } = useParams();
    const [product, setProduct] = useProductById(id);
    const navigate = useNavigate();

    // const uri = `http://localhost:5000/product/${id}`;
    const uri = `https://secret-reaches-38095.herokuapp.com/product/${id}`;

    const { _id, name, price, img, quantity, desc, supplier, sold } = product;

    const updateApiCall = async (product, event) => {
        await axios.put(uri, product)
            .then(resp => {
                resp.data.acknowledged
                    ?
                    setProduct(product)
                    :
                    toast("Couldnot Deliver item.");
                resp.data.acknowledged && event.target.reset();
                resp.data.acknowledged && toast("Stock Updated Successfully!")
            })
            .catch(error => {
                toast(error);
            })
    }

    const updateQuantity = (event) => {
        event.preventDefault();
        const inputQuantity = parseInt(event.target[0].value);
        if (inputQuantity > 0) {
            product.quantity = (parseInt(quantity) + inputQuantity).toString();
            updateApiCall(product, event);
            // event.target[0].value = '';
        } else {
            toast("Please enter non-negative number to update stock.")
        }
        // console.log(quantity);
    }

    const navigateManageStock = (id) => {
        navigate(`/inventories`);
    }

    const updateStock = async () => {
        if (quantity > 0 && sold >= 0) {
            product.quantity = (parseInt(quantity) - 1).toString();
            product.sold = (parseInt(sold) + 1).toString();
            updateApiCall(product);
        } else {
            toast("Product out of Stock. Want to consider Restocking?")
        }

    }
    return (
        <div>
            {
                Object.keys(product).length === 0 ? <Loading /> : <div
                    className='single-item-card'>
                    <div className='single-item-card-left'>
                        <small>Product id: {_id}</small>
                        <img style={{ width: "100%" }} src={img} alt="" />
                        <p>Unit Price: {price} tk.</p>
                        <p>Sold: {sold} psc</p>
                        <p>In stock: {quantity} pcs</p>
                        <button className="button" onClick={updateStock}>Deliver</button>
                    </div>
                    <div className='single-item-card-right'>
                        <h3>{name?.toUpperCase()}</h3>
                        <p>Supplier: {supplier}</p>
                        <p className='product-card-desc'>{desc?.length > 350 ? desc?.slice(0, 350) + "..." : desc}</p>
                        <div className="horizontal-black-line"></div>

                        <form onSubmit={updateQuantity}>
                            <label>
                                Want to Restock Product?
                                <input type="number" placeholder="Enter Quantity" required style={{ margin: '8px', padding: '0 8px' }} />
                            </label>
                            <input type="submit" value="Restock" />
                        </form>
                        <button className='button' onClick={navigateManageStock}>Manage Inventories</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default SingleItem;