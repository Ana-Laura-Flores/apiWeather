// IMPORTAR CARD
import Card from "./Card.jsx";

export default function ContainCards({ cities, onClose }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {cities &&
        cities.map((city) => {
          return (
            <Card
              key={city.id}
              id={city.id}
              name={city.name}
              min={city.min}
              max={city.max}
              img={city.img}
              onClose={onClose}
            />
          );
        })}
    </div>
  );
}
