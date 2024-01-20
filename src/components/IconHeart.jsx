import { useContext } from 'react';
import FavoritesContext from '../context/FavoritesContext';
import PropTypes from 'prop-types'; // Importa PropTypes


const IconHeart = ({ id }) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const isFavorite = favorites.includes(id);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <svg
      onClick={toggleFavorite}
      width="40px"
      viewBox="0 0 24 24"
      style={{ cursor: 'pointer' }}
    >
      <path
        fill={isFavorite ? "red" : "white"}
        id="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
      />
    </svg>
  );
};

IconHeart.propTypes = {
  id: PropTypes.number.isRequired // Asume que 'id' es un número. Ajusta esto según tu estructura de datos.
};

export default IconHeart;
