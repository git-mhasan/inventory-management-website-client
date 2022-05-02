import axios from "axios";
import { useEffect, useState } from "react";

const useProduct = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://secret-reaches-38095.herokuapp.com/product')
            .then(response => {
                setProduct(response.data);
                // handle success
                // console.log(response);
            })
    }, [])

    return products;
}

export default useProduct;