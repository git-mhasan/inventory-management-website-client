import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useProduct = () => {
    const [products, setProduct] = useState([]);
    const [updateConfirm, setUpdateConfirm] = useState(false);
    // const uri = 'http://localhost:5000/product';
    const uri = 'https://secret-reaches-38095.herokuapp.com/product';

    useEffect(() => {

        async function getProduct() {
            try {
                const response = await axios.get(uri, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                });
                setProduct(response.data);
            } catch (error) {
                toast(error);
            }
        }
        getProduct();

    }, [updateConfirm])

    return [products, setUpdateConfirm];
}

export default useProduct;