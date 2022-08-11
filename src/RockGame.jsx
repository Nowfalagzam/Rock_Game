import React, { useState, useEffect } from "react";
import "./styles.css";

export default function RockGame(props) {
  const inputOption = props.inputOption;
  const strategy = props.strategy;
  const [userChoice, setUserChoice] = useState(0);
  const [computerChoice, setComputerChoice] = useState(0);
  const [userResult, setUserResult] = useState("");
  const [userWin, setUserWin] = useState(0);
  const [comWin, setComWin] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      //Calculating Winner
      setUserResult(strategy[userChoice][computerChoice]);

      //updatig res
      if (strategy[userChoice][computerChoice] === "w") {
        setUserWin((val) => val + 1);
      } else if (strategy[userChoice][computerChoice] === "l") {
        setComWin((val) => val + 1);
      }
    }, 1000);
  }, [userChoice, computerChoice, strategy]);
  return (
    <>
      {[...Array(inputOption.length)].map((item, index) => {
        return (
          <button
            key={index}
            onClick={(e) => {
              //setting up selected choice
              setUserChoice(inputOption.indexOf(e.target.value));
              setComputerChoice(Math.floor(Math.random() * inputOption.length));
            }}
            value={inputOption[index]}
            style={{ margin: "5px" }}
          >
            {inputOption[index]}
          </button>
        );
      })}

      <div>User's Choice: {inputOption[userChoice]}</div>
      <div>
        Computer's Choice: {userChoice >= 0 ? inputOption[computerChoice] : ""}
      </div>

      {/* Winner Announcement */}
      {userResult === "w" && <div>User Wins...!!!</div>}
      {userResult === "l" && <div>Computer Wins...!!!</div>}

      {userResult === "d" && <div>Draw...!!!</div>}
      {/* Winner Score */}
      <div>User Score: {userWin}</div>
      <div>Computer Score: {comWin}</div>
    </>
  );
}
