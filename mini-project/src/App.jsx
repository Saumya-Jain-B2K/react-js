// import './App.css'
import Button from "@mui/material/Button";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import WeatherApp from "./WeatherApp";

function App() {
  let handleClick = () => {
    console.log("Button was clicked!");
  }
  return (
    <>
      <WeatherApp />
    </>
  );
}

export default App;
