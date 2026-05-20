import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/product">Products</Link>
            <Link to="/add-product">Add Product</Link>
        </nav>
    )
}