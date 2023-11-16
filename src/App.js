import "./styles.css";
import NavBar from "./components/NavBar";
import PokeCard from "./components/PokeCard";
import SearchInput from "./components/SearchInput";
import { useEffect, useState } from "react";

export default function App() {
  const [idxVal, setIdxVal] = useState(1);
  const [pokeinfo, setPokeInfo] = useState({
    name: "",
    height: 0,
    weight: 0,
    order: 0,
    abilities: [],
    moves: [],
    image: ""
  });

  async function getData() {
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${idxVal}`);
    const resource = await api.json();

    let ab_array = resource.abilities;
    let mv_array = resource.moves;

    const abilities_array = ab_array.map((ab, idx) => {
      return ab.ability.name;
    });
    const moves_array = mv_array.map((mv, idx) => {
      return mv.move.name;
    });

    setPokeInfo(() => {
      return {
        name: resource.name,
        height: resource.height,
        weight: resource.weight,
        order: resource.order,
        abilities: abilities_array,
        moves: moves_array
      };
    });
  }

  useEffect(() => {
    getData();
  });

  const handleSubmitVal = (val) => {
    setIdxVal(val);
    console.log(idxVal);
    console.log(pokeinfo.name, pokeinfo.height, pokeinfo.abilities);
  };

  return (
    <>
      <NavBar />
      <div className="watermark">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/32d22e60-912e-4f7f-a3b6-abe256d986bd/d494mpr-533f4d93-3412-49c1-a07b-501d02963a9b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMyZDIyZTYwLTkxMmUtNGY3Zi1hM2I2LWFiZTI1NmQ5ODZiZFwvZDQ5NG1wci01MzNmNGQ5My0zNDEyLTQ5YzEtYTA3Yi01MDFkMDI5NjNhOWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-JeeV4UIyKEFnbYBUAjO0Ks7e_98ASzdaiMm0Wnlyrc" />
      </div>

      <div className="centered-content">
        <SearchInput submitFunc={(val) => handleSubmitVal(val)} />
      </div>

      <div className="poke-card-container">
        <PokeCard
          name={pokeinfo.name}
          weight={pokeinfo.weight}
          height={pokeinfo.height}
          order={pokeinfo.order}
          abilities={pokeinfo.abilities}
          moves={pokeinfo.moves}
          index={idxVal}
        />
      </div>
    </>
  );
}
