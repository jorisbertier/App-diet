import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.header}>
      <Text>Edit app/index.tsx to edit this screen.esbbtrdff</Text>
      <ThemedText variant={"subtitle1"} color={"white"}>ddddd</ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 12,
    paddingBottom: 8,
    backgroundColor: 'red',
  },
})