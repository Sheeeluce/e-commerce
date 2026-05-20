import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import SearchBar from "../components/SearchBar"

export default function Product() {
const [products, setProducts] = useState([])

useEffect(() => {
    fetch("http://localhost:3000/products")
    .then((resp)=> resp.json())
    .then((data)=> setProducts(data))
},[])

function handleDelete(id) {
        fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
        }).then(() => {setProducts(prev=>prev.filter(product=>product.id!==id))})
    }
const [search, setSearch] = useState("")

const filteredProducts = products.filter((product)=>
product.name.toLowerCase().includes(search.toLowerCase())
)


    return (
        <div>
            <h1>Product Page</h1>
            <SearchBar search={search} setSearch={setSearch}/>
            <div className="products-container">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} handleDelete={handleDelete}/>
                ))}
            </div>
        </div>
    )
}
 