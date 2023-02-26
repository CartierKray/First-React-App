// import "./DrinkItem.css";
import { Center, Image, Text } from "@chakra-ui/react";

export const DrinkItem = ({ drink, onClick }) => {
  return (
    <Center
      gap={"8"}
      cursor={"pointer"}
      className="drink-item"
      onClick={() => onClick(drink)}
    >
      <Image
        src={drink.imgUrl}
        margin={2}
        width={50}
        height={50}
        alt={drink.alt}
      />
      <Text
        fontWeight={400}
        margin={4}
        width={20}
        height={8}
        color={"blue.800"}
        fontStyle={"italic"}
      >
        {drink.name}
      </Text>
    </Center>
  );
};
