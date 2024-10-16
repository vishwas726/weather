import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
const Form = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [err, setErr] = useState(false);
  const API = "https://wttr.in";

  const handleInput = (evt) => {
    setCity(() => {
      return evt.target.value;
    });
  };

  const getInfo = async () => {
    try {
      const response = await fetch(`${API}/${city}?format=j1`);
      if (!response.ok) throw new Error("Network response was not ok");
      const responseJson = await response.json();
      const info = responseJson.current_condition[0];
      return info;
    } catch (error) {
      throw error;
    }
  };

  // const getInfo = async () => {
  //   try {
  //     const response = await axios.get(`${API}/${city}?format=j1`);
  //     // Axios will throw an error for non-2xx responses, no need for manual check like `response.ok`
  //     const info = response.data.current_condition[0]; // Access data directly
  //     return info;
  //   } catch (error) {
  //     // Handle error
  //     console.error("Error fetching the data:", error.response?.status, error.message);
  //     throw error; // Re-throw the error to be caught by the caller
  //   }
  // };
  

  const handleSubmit = async (e) => {
    setErr(false); // Reset error state before attempting a new fetch
    e.preventDefault();
    try {
      console.log(city);
      setCity("");
      let newInfo = await getInfo();
      updateInfo({ ...newInfo, city: city });
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem"  ,  marginTop: "2rem"  ,display:"flex", justifyContent:"center" , alignItems:"center" , alignContent:"center" , }}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          required
          value={city}
          onChange={handleInput}
          style={{ margin: "2r em"  ,  marginRight: "2rem"  , }}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {err && (
          <Alert variant="filled" severity="error">
            Error fetching weather data. Please try again.
          </Alert>
        )}
      </form>
    </div>
  );
};

export default Form;
