import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./Form";
import InfoBox from "./InfoBox";

function App() {

  const [info, setInfo] = useState({
    city: "Jalna",
    FeelsLikeC: "32",
    FeelsLikeF: "90",
    cloudcover: "0",
    humidity: "17",
    localObsDateTime: "2024-10-11 12:20 PM",
    observation_time: "06:50 AM",
    precipInches: "0.0",
    precipMM: "0.0",
    pressure: "1009",
    pressureInches: "30",
    temp_C: "34",
    temp_F: "94",
    uvIndex: "7",
    visibility: "10",
    visibilityMiles: "6",
    weatherCode: "113",
  });

  const updateInfo = (result) => {
    setInfo(result)
  }
  return (
    <>
      <div className="wetherWrapper">
        <Form updateInfo={updateInfo} />
        <InfoBox info={info} />
      </div>
    </>
  );
}

export default App;
