export default function ProductCard ({product, handleDelete}){
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>${product.price}</p>

            <button onClick={()=>handleDelete(product.id)}> Delete</button>
        </div>
    )
}