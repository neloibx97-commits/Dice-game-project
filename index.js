const button = document.querySelector("#rollbtn");
const result = document.querySelector("#result");

button.addEventListener("click", function () {
  const die1 = Math.floor(Math.random() * 6) + 1;
  const die2 = Math.floor(Math.random() * 6) + 1;

  const sum = die1 + die2;

  let message;

  if (die1 === die2) {
    message = `Wow,You rolled doubles! ${die1} and ${die2}. Total: ${sum}`;
  } else {
    message = `You rolled a ${die1} and ${die2}. Total:${sum}`;
  }
  result.textContent = message;
});
