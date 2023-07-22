import SearchBar from "./SearchBar.jsx";
import logoAda from "../assets/logoAda.png"

export default function Nav({ onSearch }) {
    
    return (
        <div>
            <img src={logoAda} alt="" />
            <h1 className="text-amber-700">Ada - Weather App</h1>
            <SearchBar onSearch={onSearch} />
        </div>
    )
       
}