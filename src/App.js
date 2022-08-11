import "./styles.css";
import RockGame from "./RockGame";

const App = () => {
  const inputOption = ["Rock", "Paper", "Scissors"];
  const inputOption2 = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
  const strategy = [
    //rock,paper,scissor,...[3*3]
    ["d", "l", "w"],
    ["w", "d", "l"],
    ["l", "w", "d"]
  ];
  const strategy2 = [
    //rock,paper,scissor,Lizard,Spock...[3*3]
    ["d", "l", "w", "w", "l"],
    ["w", "d", "l", "l", "w"],
    ["l", "w", "d", "w", "l"],
    ["l", "w", "l", "d", "w"],
    ["w", "l", "w", "l", "w"]
  ];
  return (
    <div className="App">
      <RockGame inputOption={inputOption2} strategy={strategy2} />
    </div>
  );
};

export default App;
