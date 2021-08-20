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

export const createBotOption = () => {
  let optionList: Array<string> = ["rock", "paper", "scissor"];
  let num = Math.floor(Math.random() * 3);
  let botOption = optionList[num];
  return botOption;
};

export const outcomeFunc = (outcome: string) => {
  switch (outcome) {
    case "":
      return "";
    /* ROCK STARTS HERE */
    case "rock vs paper":
      return "You lose";

    case "rock vs scissor":
      return "You win";
    /* ROCK ENDS HERE */
    /* PAPER STARTS HERE */
    case "paper vs rock":
      return "You win";

    case "paper vs scissor":
      return "You lose";
    /* PAPER ENDS HERE */
    /* SCISSOR STARTS HERE */
    case "scissor vs rock":
      return "You lose";

    case "scissor vs paper":
      return "You win";
    /* SCISSOR ENDS HERE */
    default:
      return "Tie";
  }
};
