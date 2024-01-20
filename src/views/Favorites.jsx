import { useContext, useEffect, useState } from 'react';
import FavoritesContext from '../context/FavoritesContext';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  const [favoritePhotos, setFavoritePhotos] = useState([]);

// En Favorites.jsx

useEffect(() => {
  fetch('/photos.json')
    .then(response => response.json())
    .then(data => {
      const filteredFavorites = data.photos.filter(photo => favorites.includes(photo.id));
      setFavoritePhotos(filteredFavorites);
    })
    .catch(error => {
      console.error("Error fetching photos:", error);
    });
}, [favorites]);


  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {favoritePhotos.map(photo => (
          <div key={photo.id} className="photo-item">
            <img src={photo.src.large} alt={photo.alt} />
            {/* Incluir IconHeart si es necesario */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
