let options: Array<object> = [
  { name: "rock" },
  { name: "paper" },
  { name: "scissors" },
];

export const createOutcome = (
  option1: string | null,
  option2: string | null
) => {
  let outcome = `${option1} vs ${option2}`;
  return outcome;
};

export const outcomeFunc = (outcome: string) => {
  switch (outcome) {
    /* ROCK STARTS HERE */
    case "rock vs paper":
      console.log("You lose");
      break;

    case "rock vs scissor":
      console.log("You win");
      break;

    case "rock vs rock":
      console.log("Tie");
      break;
    /* ROCK ENDS HERE */
    /* PAPER STARTS HERE */
    case "paper vs rock":
      console.log("You win");
      break;

    case "paper vs scissor":
      console.log("You lose");
      break;

    case "paper vs paper":
      console.log("Tie");
      break;
    /* PAPER ENDS HERE */
    /* SCISSOR STARTS HERE */
    case "scissor vs rock":
      console.log("You lose");
      break;

    case "scissor vs paper":
      console.log("You win");
      break;

    case "scissor vs scissor":
      console.log("Tie");
      break;
    /* SCISSOR ENDS HERE */
    default:
      break;
  }
};
