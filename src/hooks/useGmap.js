import { useEffect, useState } from "react";

const useGmap = () => {
    const [gmap, setGmap] = useState([])
    useEffect(() => {
        fetch('gmap.json')
            .then(res => res.json())
            .then(data => setGmap(data));
    }, [])
    return gmap;
}

export default useGmap;