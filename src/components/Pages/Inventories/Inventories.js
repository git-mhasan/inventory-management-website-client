import React from 'react';
import useProduct from '../../../hooks/useProduct';
import Loading from '../../Shared/Loading/Loading';
import './Inventories.css';
import Items from './Items/Items';

const Inventories = () => {
    const products = useProduct();
    console.log(products);

    return (
        <div>
            {products?.length === 0 ? <Loading></Loading> : <div>
                {
                    products.map(product =>
                        <Items
                            key={product._id}
                            products={product}
                        ></Items>
                    )
                }
                <button className='button'>Add New Item</button>
            </div>
            }
        </div>
    );
};

export default Inventories;