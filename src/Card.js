/** render a single card, takes in card id(?) (9H) */
function Card({ card }) {
  const img_url = `https://deckofcardsapi.com/static/img/${card}.png`;
  return (<div className="Card">
    <img src={img_url} />
  </div>);
}


export default Card;