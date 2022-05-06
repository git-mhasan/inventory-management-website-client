import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useProduct from '../../../../hooks/useProduct';
import Loading from '../../../Shared/Loading/Loading';
import MySingleItem from './MySingleItem/MySingleItem';
import "./MyItems.css"

const MyItems = () => {
    const [products, setUpdateConfirm] = useProduct();
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);



    if (loading) {
        return <Loading></Loading>
    }

    const handleNavigateToAddItem = () => {
        navigate('/addnew');
    }


    return (
        <div style={{ minHeight: "70vh" }} className="my-items-container">
            <div className='user-imformation'>
                <div><h4>{user ? user.displayName : "User"}</h4></div>
                <div><h4>{user ? user.email : "user@email.com"}</h4></div>
            </div>
            {products?.length === 0 ? <Loading></Loading> : <div>
                {
                    products.map(product =>
                        <MySingleItem
                            key={product._id}
                            products={product}
                            setUpdateConfirm={setUpdateConfirm}
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