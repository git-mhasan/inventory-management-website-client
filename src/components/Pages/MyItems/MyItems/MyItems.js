import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import MySingleItem from './MySingleItem/MySingleItem';
import "./MyItems.css"
import axios from 'axios';
import { toast } from 'react-toastify';

const MyItems = () => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    // const [products, setUpdateConfirm] = useProduct();
    const [products, setProduct] = useState([]);
    const [updateConfirm, setUpdateConfirm] = useState(false);

    // const uri = `http://localhost:5000/product?email=${user?.email}`;
    const uri = `https://secret-reaches-38095.herokuapp.com/product?email=${user?.email}`;

    console.log(uri);

    useEffect(() => {

        async function getUser() {
            try {
                const response = await axios.get(uri);
                setProduct(response.data);
            } catch (error) {
                toast(error);
            }
        }
        getUser();

    }, [uri, updateConfirm])


    if (loading) {
        return <Loading></Loading>
    }

    const handleNavigateToAddItem = () => {
        navigate('/addnew');
    }

    return (
        <div style={{ minHeight: "70vh" }} className="my-items-container">
            <div className='user-imformation'>
                <div><h4>{user ? user?.displayName : "User"}</h4></div>
                <div><h4>{user ? user?.email : "user@email.com"}</h4></div>
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