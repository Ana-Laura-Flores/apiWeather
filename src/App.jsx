import ContainCard from "./components/ContainCard.jsx";
import data from "./data.js";
import Nav from "./components/Nav.jsx";
import { useState } from "react"

function App() {
  // const search = (e) => {
  //   alert(`Hice ${e.type} en buscar`);
  // };
  const [cities, setCities] = useState([])
  const apiKey = import.meta.env.VITE_API_KEY_OPENWEATHER
 
  

  function onSearch(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&APPID=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities([...cities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
          
        }
      });

    }



    function onClose(id) {
      setCities(cities.filter(c => c.id != id));
    }

  // const onSearch = () => {
  //   alert("hice Click en Search")
  // }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <ContainCard cities={cities} onClose={onClose}/>
     
    </div>
  );
}

export default App;
