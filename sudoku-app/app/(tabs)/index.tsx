import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // 👈 add this
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import NavButton from "@/components/NavButton";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText>main menu</ThemedText>
        {/* <Button title="Go to Game" onPress={() => router.push("/game")} /> */}
        <NavButton title="Go to Game" to="/game" />
        <NavButton title="Go to Settings" to="/settings" />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // screen height
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 16, // 👈 some padding so text isn’t glued to edges
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
