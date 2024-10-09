import { ThemedText } from "@/components/ThemedText";
import useThemeColors from "@/hooks/UseThemeColors";
import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Search() {
    
    const colors = useThemeColors()
    return (
        <SafeAreaView >
            <ThemedText>Voici ma page search</ThemedText>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

})