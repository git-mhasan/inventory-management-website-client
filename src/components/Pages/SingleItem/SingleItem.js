import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProductById from '../../../hooks/useProductById';
import Loading from '../../Shared/Loading/Loading';
import './SingleItem.css';

const SingleItem = () => {
    const { id } = useParams();
    const [product, setProduct] = useProductById(id);
    const uri = `http://localhost:5000/product/${id}`;

    const { _id, name, price, img, quantity, desc, supplier, sold } = product;

    const updateQuantity = async () => {
        if (quantity > 0 && sold >= 0) {
            product.quantity = (parseInt(quantity) - 1).toString();
            product.sold = (parseInt(sold) + 1).toString();
        } else {
            toast("Product out of Stock. Want to consider Restocking?")
        }
        // setUpdatedProduct(product);

        await axios.put(uri, product)
            .then(async resp => {
                await resp.data.acknowledged
                    ?
                    setProduct(product)
                    :
                    toast("Couldnot Deliver item.")
                console.log(resp.data)
            })
            .catch(error => {
                toast(error);
            })

        console.log(product.quantity);
    }
    return (
        <div>
            {
                Object.keys(product).length === 0 ? <Loading /> : <div
                    className='single-item-card'>
                    <div className='single-item-card-left'>
                        <small>Product id: {_id}</small>
                        <img src={img} alt="" />
                        <p>Unit Price: {price} tk.</p>
                        <p>Sold: {sold} psc</p>
                        <p>In stock: {quantity} pcs</p>
                        <button className="button" onClick={updateQuantity}>Deliver</button>
                    </div>
                    <div className='single-item-card-right'>
                        <h3>{name?.toUpperCase()}</h3>
                        <p>Supplier: {supplier}</p>
                        <p className='product-card-desc'>{desc?.length > 350 ? desc?.slice(0, 350) + "..." : desc}</p>
                        <div className="horizontal-black-line"></div>

                        <form>
                            <label>
                                Want to Restock Product?
                                <input type="number" placeholder="Enter Quantity" required style={{ margin: '8px', padding: '0 8px' }} />
                            </label>
                            <input type="submit" value="Restock" />
                        </form>
                    </div>
                </div>
            }
        </div>
    );
};

export default SingleItem;