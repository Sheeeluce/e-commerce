import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("updates search input", () => {
    const setSearch = vi.fn()

    render(<SearchBar search="" setSearch={setSearch}/>)

    const input = screen.getByPlaceholderText("Search available cakes")

    fireEvent.change(input, {
        target: {value: "vanilla"}
    })

    expect(setSearch).toHaveBeenCalled()
})