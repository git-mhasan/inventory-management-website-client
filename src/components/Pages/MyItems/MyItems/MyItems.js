import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../../../hooks/useProduct';
import Loading from '../../../Shared/Loading/Loading';
import MySingleItem from './MySingleItem/MySingleItem';

const MyItems = () => {
    const products = useProduct();
    const navigate = useNavigate();
    const handleNavigateToAddItem = () => {
        navigate('/addnew');
    }
    return (
        <div style={{ minHeight: "70vh" }}>
            {products?.length === 0 ? <Loading></Loading> : <div>
                {
                    products.map(product =>
                        <MySingleItem
                            key={product._id}
                            products={product}
                        ></MySingleItem>
                    )
                }
                <button className='button' onClick={handleNavigateToAddItem}>Add New Item</button>
            </div>
            }
        </div>
    );
};

export default MyItems;