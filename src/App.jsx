import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";

export const App = () => {
  const [userDrink, setUserDrink] = useState();

  const greeting = "Welcome to our cafe!";

  return (
    <div className="app">
      {userDrink ? (
        <DrinkChoice drink={userDrink} onClick={setUserDrink} />
      ) : (
        <>
          <Heading mb={"2rem"} fontSize="4xl" color={"blue.800"}>
            {greeting}
          </Heading>
          <DrinkSearch onClick={setUserDrink} />
        </>
      )}
    </div>
  );
};
