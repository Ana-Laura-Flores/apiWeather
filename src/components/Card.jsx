
export default function Card({max, min, name, img, id, onClose}) {
  // acá va tu código
  return <div style={{border: "1px solid black", padding: "5px", margin: "10px", width:"280px", display:"flex",flexDirection:"column"}}>
    <button onClick={() => onClose(id)}>X</button>
    <h3 style={{textAlign:"center"}}>{name}</h3>
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <div style={{padding:"10px", marginRight:"5px"}}>
        <p>Min</p>
        {min}
      </div>
      <div style={{padding:"10px", marginRight:"5px"}}>
        <p>Max</p>
        {max}
      </div>
      <div style={{padding:"10px"}}>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="image" />
      </div>
    </div>
  </div>;
}
