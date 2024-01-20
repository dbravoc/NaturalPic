import React, { useState } from 'react';
import PropTypes from 'prop-types';


const FavoritesContext = React.createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

FavoritesProvider.propTypes = {
    children: PropTypes.node.isRequired
  };
  

export default FavoritesContext;
