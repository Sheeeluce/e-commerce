import { useState } from "react"

export default function AddProduct(){
const [name, setName] =useState("")
const [price, setPrice] = useState("")
const [category, setCategory] = useState("")
const [image, setImage] = useState("")

function handleSubmit(e){
    e.preventDefault()

    const newProduct = {
        name, 
        price : Number(price),
        category,
        image
    }

    fetch("http://localhost:3000/products", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newProduct)
    })
    .then((resp)=> resp.json())
    .then((data)=> {console.log(data)
        setName("")
        setPrice("")
        setCategory("")
        setImage("")
    })
}

    return (
        <div className="form-container">
            <h1>Add Product</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Product Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                    <input type="number" placeholder="Price" value={price} onChange={(e)=> setPrice(e.target.value)}/>
                    <input type="text" placeholder="Category" value={category} onChange={(e)=> setCategory(e.target.value)} />
                    <input type="text" placeholder="Image URL" value={image} onChange={(e)=> setImage(e.target.value)}/>
                    
                    <button type="submit">Add Product</button>
                </form>

        </div>
    )
}