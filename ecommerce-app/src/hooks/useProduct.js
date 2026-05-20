import { useEffect, useState } from "react"

export function useProduct(){
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000?products")
        .then(resp => resp.json())
        .then(setProducts)
    },[])

    return { products, setProducts}
}