import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

interface GoalInputProps {
  onPress: (text: string) => void;
}

const GoalInput = ({ onPress }: GoalInputProps) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        placeholderTextColor="gray"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button
        title="Add goal"
        onPress={() => {
          onPress(enteredGoalText);
          setEnteredGoalText("");
        }}
      />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
