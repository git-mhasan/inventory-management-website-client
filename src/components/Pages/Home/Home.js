import React from 'react';
import { useNavigate } from 'react-router-dom';
import useBanner from '../../../hooks/useBanner';
import useProduct from '../../../hooks/useProduct';
import Loading from '../../Shared/Loading/Loading';
import './Home.css';
import ProductCard from './ProductCard/ProductCard';

const Home = () => {
    const allProducts = useProduct();
    const navigate = useNavigate();
    const bannerItems = useBanner();

    const products = allProducts?.length > 6 ? [...allProducts].slice(0, 6) : [...allProducts];
    const navigateToManageInventories = () => {
        navigate('/inventories');
    }

    return (
        <div className='home-container'>

            {/* -----------------banner section ---------------------*/}
            <div className='homepage-banner-container'>
                <div className="homepage-banner-left">
                    <div>
                        <h2 className='banner-title'>{bannerItems[0]?.title}</h2>
                        <h3 className='banner-slog'>{bannerItems[0]?.slog}</h3>
                        <p className='banner-desc'>{bannerItems[0]?.desc.length > 202 ? bannerItems[0]?.desc.slice(0, 202) + "..." : bannerItems[0]?.desc}</p>
                    </div>
                    <button className="button">Details</button>
                </div>
                <div className="homepage-banner-right">
                    <img src={bannerItems[0]?.imageUrl} alt="" />
                </div>
            </div>

            {/* ----------------Product Inventory Section---------------- */}
            <div style={{ margin: "25px 0" }}><h2>Inventories</h2></div>
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


            {/* -----------------------Map Section-------------------- */}

        </div>


    );
};

export default Home;