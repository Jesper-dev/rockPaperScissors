import { useState, useEffect } from "react";
import { outcomeFunc, createOutcome } from "../types/modules/rockpaperscissors";

export const Game = () => {
  const [state, setState] = useState<{
    outcomeText: string;
    botOption: string | null;
  }>({ outcomeText: "", botOption: "paper" });

  useEffect(() => {
    outcomeFunc(state.outcomeText);
  }, [state.outcomeText]);

  const clickFunc = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let text: string | null = e.currentTarget.textContent;
    // setState((prevState) => ({
    //   ...prevState,
    //   option: text,
    // }));
    let outcome = createOutcome(text, state.botOption);
    console.log(outcome);
    setState((prevState) => ({ ...prevState, outcomeText: outcome }));
  };

  return (
    <div>
      <button onClick={(e) => clickFunc(e)}>rock</button>
      <button onClick={(e) => clickFunc(e)}>paper</button>
      <button onClick={(e) => clickFunc(e)}>scissor</button>
    </div>
  );
};
