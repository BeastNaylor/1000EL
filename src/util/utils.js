const randomNumber = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};

const parseDice = (dice) => {
  const diceCount = parseInt(dice.substring(0, 1));
  const diceSize = parseInt(dice.substring(2));

  let total = 0;
  for (let i = 0; i < diceCount; i++) {
    total += randomNumber(diceSize) + 1;
  }
  return total;
};

const flipCoin = () => {
  var result = randomNumber(2);
  return result == 1;
};

export { randomNumber, parseDice, flipCoin };
