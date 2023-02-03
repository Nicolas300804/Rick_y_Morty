import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { add_Favorite, delete_Favorite } from "../redux/actions";

function Card({ name, gender, onClose, species, image, id }) {
  const dispatch = useDispatch();
  const { myFavorites } = useSelector(state => state);
  const [ isFav, setIsFav ] = useState(false);

  const handleFavorite = () => {
     if(isFav){
        setIsFav(false);
        dispatch(delete_Favorite(id));
     }
     else{
        setIsFav(true);
        dispatch(add_Favorite({ name, gender, onClose, species, image, id }));
     }
  }

  useEffect(() => {
     myFavorites.forEach((fav) => {
        if (fav.id === id) {
           setIsFav(true);
        }
     });
  }, [myFavorites]);

  return (
     <div >
        {
           isFav ? (
              <button onClick={handleFavorite}>❤️</button>
           ) : (
              <button onClick={handleFavorite}>🤍</button>
           )
        }
        <div  >
           <img src={image} alt={name} />
        </div>

        <div >
           <div>
              <Link to={`/detail/${id}`}  >
                 <h2 >{name}</h2>
              </Link>
           </div>

           <div >
              <h2>Specie: {species}</h2>
              <h2>Gender: {gender}</h2>
           </div>

           <div >
              <button onClick={onClose}>X</button>
           </div>
        </div>
     </div>
  );
}


export default Card;
