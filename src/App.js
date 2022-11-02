import "./App.css";
import Tweet from "./Tweet";

function App() {
  return (
    <div className="tweetContainer">
      <Tweet tweet="Stop Covid-19! Take-out only!" />
      <Tweet tweet="At home, binge watching breaking Bad for second time" />
      <Tweet tweet="When is the beach opening up? Can't wait.." />
    </div>
  );
}

export default App;
