import React from 'react';
import useProduct from '../../../hooks/useProduct';
import './Home.css';
import ProductCard from './ProductCard/ProductCard';

const Home = () => {
    const allProducts = useProduct();
    const products = allProducts?.length > 6 ? [...allProducts].slice(0, 6) : [...allProducts];
    return (
        <div className='home-container'>
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
        </div>
    );
};

export default Home;