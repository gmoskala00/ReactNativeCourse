import { useState } from "react";
import { View, StyleSheet, Button, FlatList, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "@/components/GoalItem";
import GoalInput from "@/components/GoalInput";

export default function Index() {
  const [goals, setGoals] = useState<{ text: string; id: string }[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoal = (enteredGoalText: string) => {
    setGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoal = (index: string) => {
    const filteredItems = goals.filter((goal) => goal.id != index);
    setGoals(filteredItems);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            onPress={addGoal}
            showModal={modalIsVisible}
            hideModal={endAddGoalHandler}
          />
        )}
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  goalsContainer: {
    flex: 7,
  },
});
