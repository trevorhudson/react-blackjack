import { drawCards } from './helpers.js';
import Card from './Card.js';

function Blackjack() {
  const [cardOne, cardTwo, score] = drawCards();

  return (
    <div className="Blackjack">
      <div style={{ display: "flex", }}>
        <Card card={cardOne} />
        <Card card={cardTwo} />
      </div>

      <h1>Score: {score} </h1>
      <h2> {score === 21 && `BLACKJACK!!!`} </h2>
    </div>
  );

};

export default Blackjack;