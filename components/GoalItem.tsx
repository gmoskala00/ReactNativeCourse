import { Text, StyleSheet, Pressable } from "react-native";

interface GoalItemProps {
  text: string;
  id: string;
  onDeleteItem: (index: string) => void;
}

const GoalItem = ({ text, id, onDeleteItem }: GoalItemProps) => {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={onDeleteItem.bind(this, id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <Text style={styles.goalItem}>{text}</Text>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
