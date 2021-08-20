import { useState, useEffect } from "react";
import {
  outcomeFunc,
  createOutcome,
  createBotOption,
} from "../types/modules/rockpaperscissors";

export const Game = () => {
  const [state, setState] = useState<{
    outcomeText: string;
    botOption: string | null;
    formatText: string | null;
    result: string | undefined;
  }>({ outcomeText: "", botOption: "paper", formatText: "", result: "" });

  useEffect(() => {
    let result = outcomeFunc(state.outcomeText);
    setState((prevState) => ({
      ...prevState,
      result: result,
    }));
  }, [state.outcomeText]);

  const clickFunc = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let botOption = createBotOption();
    let option: string | null = e.currentTarget.textContent;
    let outcome = createOutcome(option, botOption);
    let formatText = `You choose ${option} and bot choose ${botOption}`;
    setState((prevState) => ({
      ...prevState,
      outcomeText: outcome,
      formatText: formatText,
    }));
  };

  return (
    <div>
      <button onClick={(e) => clickFunc(e)}>rock</button>
      <button onClick={(e) => clickFunc(e)}>paper</button>
      <button onClick={(e) => clickFunc(e)}>scissor</button>
      <p>{state.formatText}</p>
      <p>{state.result}</p>
    </div>
  );
};
