import { createContext, useContext, useState } from 'react';
import initialCards from '../cards-data.js';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  return <GameContext.Provider value={{ deck, setDeck }}>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext needs GameProvider to function');
  }
  return context;
};

export { useGameContext, GameProvider };
