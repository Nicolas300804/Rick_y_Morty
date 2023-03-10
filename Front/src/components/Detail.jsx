/* Importación de useState, useEffect, useParams y Link de react y react-router-dom. */
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const Detail = () => {

    /* Desestructuración del gancho useParams y el gancho useState. */
    const{detailId} = useParams()
    const [character, setCharacter] = useState()

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
        <div>
            <button>
                <Link to='/home'>Home</Link>
            </button>
            <h1>{character?.name}</h1>
            <p>{character?.status}</p>
            <p>{character?.species}</p>
            <p>{character?.gender}</p>
            <p>{character?.origin?.name}</p>
            <img src={character?.image} alt={character?.name}/>

        </div>
    )
}

export default Detail