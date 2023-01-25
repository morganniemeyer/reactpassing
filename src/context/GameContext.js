import { createContext, useContext, useState } from 'react';
import initialCards from '../cards-data.js';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  const [selectedCard, setSelectedCard] = useState();
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  return (
    <GameContext.Provider
      value={{ to, setTo, deck, setDeck, selectedCard, setSelectedCard, from, setFrom }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext needs GameProvider to function');
  }
  return context;
};

export { useGameContext, GameProvider };
