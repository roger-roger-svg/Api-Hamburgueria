import React, { useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

const Button = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <TouchableHighlight
      style={[
        styles.button,
        { backgroundColor: isPressed ? "black" : "orange" },
      ]}
      onPress={handlePress}
      underlayColor="black"
    >
      <Text
        style={{ color: isPressed ? "white" : "black", fontStyle: "italic" }}
      >
        {isPressed ? "Comprar" : "Comprar"}
      </Text>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  button: {
    marginLeft: 180,
    width: 150,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
});
export default Button;
