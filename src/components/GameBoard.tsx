import { useState, useEffect } from "react";
import { LoadingEl } from "./LoadingEl";
import {
  outcomeFunc,
  createOutcome,
  createBotOption,
} from "../types/modules/rockpaperscissors";

export const GameBoard = () => {
  const [state, setState] = useState<{
    outcomeText: string;
    botOption: string | null;
    formatText: string | null;
    result: string | undefined;
    loading: boolean;
  }>({
    outcomeText: "",
    botOption: "paper",
    formatText: "",
    result: "",
    loading: false,
  });

  useEffect(() => {
    let result = outcomeFunc(state.outcomeText);
    setState((prevState) => ({
      ...prevState,
      result: result,
    }));
  }, [state.outcomeText]);

  const clickFunc = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setState((prevState) => ({ ...prevState, loading: true }));
    let botOption = createBotOption(); //This is what the bot/AI chooses
    let option: string | null = e.currentTarget.textContent; //This is what the player chooses
    let outcome = createOutcome(option, botOption); //This is the outcome
    let formatText = `You choose ${option} and bot choose ${botOption}`; //This is the text thats shows the outcome
    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        outcomeText: outcome,
        formatText: formatText,
        loading: false,
      }));
    }, 2000);
  };

  return (
    <div className="gameBoard">
      <div className="optionBox">
        <button onClick={(e) => clickFunc(e)}>rock</button>
        <button onClick={(e) => clickFunc(e)}>paper</button>
        <button onClick={(e) => clickFunc(e)}>scissor</button>
      </div>
      {state.loading ? (
        <LoadingEl />
      ) : (
        <div className="resultBox">
          <p>{state.formatText}</p>
          <p>{state.result}</p>
        </div>
      )}
    </div>
  );
};
