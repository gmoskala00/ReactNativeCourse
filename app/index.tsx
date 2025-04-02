import { useState } from "react";
import { View, StyleSheet, Button, TextInput, FlatList } from "react-native";

import GoalItem from "@/components/GoalItem";
import GoalInput from "@/components/GoalInput";

export default function Index() {
  const [goals, setGoals] = useState<{ text: string; id: string }[]>([]);

  const addGoal = (enteredGoalText: string) => {
    setGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const deleteGoal = (index: string) => {
    const filteredItems = goals.filter((goal) => goal.id != index);
    setGoals(filteredItems);
  };

  return (
    <View style={styles.appCotnainer}>
      <GoalInput onPress={addGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoal}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appCotnainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 7,
  },
});
