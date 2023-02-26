// import "./TextInput.css";   Deze wordt niet meer gebruikt want we gebruiken nu de chakra UI
import { Input } from "@chakra-ui/react";

export const TextInput = (props) => {
  return (
    <Input
      width={"50%"}
      variant={"filled"}
      mt={"1rem"}
      mb={"1rem"}
      placeholder="Choose your Drink.."
      className="text-input"
      onChange={props.onChange}
    />
  );
};
