const suite = ["H", "S", "C", "D"];
const value = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 0, "J", "Q", "K"];
//write as function instead of arrow. pick random item instead of idx.
const randomIdx = (value) => Math.floor(Math.random() * value.length);

/** Draw two random, unique cards.
 * Returns array of two cards, and the sum of those cards values.
 */
function drawCards() {
  let cardOne = value[randomIdx(value)] + suite[randomIdx(suite)];
  let cardTwo = value[randomIdx(value)] + suite[randomIdx(suite)];

  while (cardOne === cardTwo) {
    cardTwo = value[randomIdx(value)] + suite[randomIdx(suite)];
  }

  const score = calcScore(cardOne) + calcScore(cardTwo);
  // return an object
  return [cardOne, cardTwo, score];

}

/** Calculates the score value of a card.
 * - Takes in a card ID like: (7H)
 * - Returns a score:
 * 7H => 7
 * KS => 10
 *
 * */
function calcScore(card) {
  const val = card[0];
  let values = {
    "A": 11,
    "K": 10,
    "J": 10,
    "Q": 10,
    "0": 10
  };
  if (val in values) return values[val];
  else return +val;

}
export { drawCards };