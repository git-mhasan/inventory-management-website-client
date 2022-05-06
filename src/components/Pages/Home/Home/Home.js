import React from 'react';
import { useNavigate } from 'react-router-dom';
import useBanner from '../../../../hooks/useBanner';
import useProduct from '../../../../hooks/useProduct';
import BarChart from '../../../Shared/BarChart/BarChart';
import Loading from '../../../Shared/Loading/Loading';
import './Home.css';
import ProductCard from './../ProductCard/ProductCard';

const Home = () => {
    const allProducts = useProduct();
    const navigate = useNavigate();
    const bannerItems = useBanner();

    const products = allProducts?.length > 6 ? [...allProducts].slice(0, 6) : [...allProducts];
    const navigateToManageInventories = () => {
        navigate('/inventories');
    }

    return (
        <div className='home-container' style={{ minHeight: "70vh" }}>

            {/* -----------------banner section ---------------------*/}
            <div className='homepage-banner-container'>
                <div className="homepage-banner-left">
                    <div>
                        <h2 className='banner-title'>{bannerItems[0]?.title}</h2>
                        <h3 className='banner-slog'>{bannerItems[0]?.slog}</h3>
                        <p className='banner-desc'>{bannerItems[0]?.desc.length > 202 ? bannerItems[0]?.desc.slice(0, 202) + "..." : bannerItems[0]?.desc}</p>
                    </div>
                    <button className="button" onClick={navigateToManageInventories}>See All Items</button>
                </div>
                <div className="homepage-banner-right">
                    <img src={bannerItems[0]?.imageUrl} alt="" />
                </div>
            </div>

            {/* ----------------Product Inventory Section---------------- */}
            <div style={{ margin: "70px 0 30px 0" }}><h2>Inventories</h2></div>
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


            {/* -----------------------Chart Section-------------------- */}

            <div className='homepage-chart'>
                <div> <h2>Inventory Item Overview</h2></div>
                <BarChart products={products.slice(0, 6)}></BarChart>
            </div>


            {/* -----------------------Google Map Section-------------------- */}

            <div className='homepage-map'>
                <div> <h2>Our Location</h2></div>
                <div className='map-image'>
                    <img src="/public/images/gmap-1.png" alt="" />
                </div>
            </div>

        </div>


    );
};

export default Home;