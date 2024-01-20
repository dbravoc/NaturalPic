import { useContext, useEffect, useState } from 'react';
import FavoritesContext from '../context/FavoritesContext';
import IconHeart from './IconHeart';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const { favorites } = useContext(FavoritesContext);

  useEffect(() => {
    fetch('/photos.json')
      .then(response => response.json())
      .then(data => {
        console.log(data.photos); // Para verificar la estructura de los datos
        if (Array.isArray(data.photos)) {
          setPhotos(data.photos);
        }
      })
      .catch(error => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map(photo => (
  <div key={photo.id} className="photo-item">
    <img src={photo.src.original} alt={photo.alt} />
    <IconHeart id={photo.id} filled={favorites.includes(photo.id)} />
  </div>
))}


    </div>
  );
};

export default Gallery;
