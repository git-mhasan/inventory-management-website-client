import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';
import Loading from '../../Shared/Loading/Loading';
import './Home.css';
import ProductCard from './ProductCard/ProductCard';

const Home = () => {
    const allProducts = useProduct();
    const navigate = useNavigate();
    const products = allProducts?.length > 6 ? [...allProducts].slice(0, 6) : [...allProducts];
    const navigateToManageInventories = () => {
        navigate('/inventories');
    }

    return (
        <div className='home-container'>
            {products?.length === 0 ? <Loading></Loading> : <div>
                <div className='product-card-container'>
                    {
                        products.map(product =>
                            <ProductCard
                                key={product._id}
                                product={product}
                            ></ProductCard>
                        )
                    }
                </div>
                <button className='button' onClick={navigateToManageInventories}>Manage Inventories</button>
            </div>}

        </div>
    );
};

export default Home;