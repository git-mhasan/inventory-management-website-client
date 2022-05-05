import axios from "axios";
import { useEffect, useState } from "react";

const useProductUpdate = (id, data) => {
    // const uri = `https://secret-reaches-38095.herokuapp.com/product/${id}`;
    const uri = `http://localhost:5000/product/${id}`;
    const [updatedProduct, setUpdatedProduct] = useState({});
    useEffect(() => {

        axios.put(uri, data)
            .then(resp => setUpdatedProduct(resp.data))
            .catch(error => {
                console.log(error);
            })

    }, [])

    return updatedProduct;
}

export default useProductUpdate;