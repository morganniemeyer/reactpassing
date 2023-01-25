import React from 'react';
import Card from './Card';
import { useGameContext } from '../context/GameContext.js';

export default function ExecutePassButton({ passCard }) {
  const { selectedCard, setSelectedCard, from, to } = useGameContext();
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setSelectedCard={setSelectedCard} /> from {from} to {to}
    </div>
  );
}
