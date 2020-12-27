import React from 'react';

const SmoothieContext = React.createContext({
    smoothies: [],
    favorites: [],
    addSmoothie: () => {},
    deleteSmoothie: () => {},
    updateSmoothie: () => {},
    favoriteSmoothie: () => {}
});

export default SmoothieContext;