import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useProduct = () => {
    const [products, setProduct] = useState([]);
    // const uri = 'http://localhost:5000/product';
    const uri = 'https://secret-reaches-38095.herokuapp.com/product';

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
    }, [])

    return products;
}

export default useProduct;