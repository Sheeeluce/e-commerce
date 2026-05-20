export default function SearchBar({search, setSearch}){
    return(
        <input type="text" placeholder="Search available cakes" value={search} onChange={(e) => setSearch(e.target.value)}/>
    )
}