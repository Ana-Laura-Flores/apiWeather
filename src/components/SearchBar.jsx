import { useState } from "react";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [city, setCity] = useState("")
  const modifyCity = (e) => {
    setCity(e.target.value)
  }
  return <form onSubmit={(e) => {
    e.preventDefault()
    onSearch(city)
  }
  }>
    <input type="text" placeholder="Ingrese Ciudad..." onChange={modifyCity}/>
    <button type="submit" className="p-10 bg-red-400 text-amber-700	">Buscar</button>
    {/* <App city={city}/> */}
  </form>;
}
