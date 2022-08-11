import StarRating from "./StarRating";
import "./styles.css";

const App = () => {
  const data = 10;
  return (
    <div className="App">
      <StarRating starCount={data} />
    </div>
  );
};
export default App;
