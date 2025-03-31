import { Text, View } from "react-native";

export default function Index() {
  const name: string = "Grzegorz";
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello {name} 123 Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
