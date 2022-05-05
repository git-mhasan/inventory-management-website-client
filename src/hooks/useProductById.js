import axios from "axios";
import { useEffect, useState } from "react"

const useProductById = (id) => {
    const uri = `https://secret-reaches-38095.herokuapp.com/product/${id}`;
    // const uri = `http://localhost:5000/product/${id}`;
    const [product, setProduct] = useState({});
    useEffect(() => {

        axios.get(uri)
            .then(resp => setProduct(resp.data))
            .catch(error => {
                console.log(error);
            })

    }, [uri, product])

    return [product, setProduct];
}

export default useProductById;