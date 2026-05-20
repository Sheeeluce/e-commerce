import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

test("renders product information", ()=> {
    const mockProduct = {
        id: 1,
        name: "Chocolate Cake",
        category: "Dessert",
        price: 1200,
        image: "cake.jpg"
    }

    render(<ProductCard product={mockProduct}/>)

    expect(screen.getByText("Chocolate Cake")).toBeInTheDocument()
    expect(screen.getByText("Dessert")).toBeInTheDocument()
})