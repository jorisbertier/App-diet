import { ThemedText } from "@/components/ThemedText"
import { StyleSheet, View } from "react-native"



export default function DetailsFood() {
    return (
        <View style={styles.header}>
            <ThemedText>Voici ma page details food</ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'relative',
        paddingHorizontal: 12,
        paddingBottom: 8,
        backgroundColor: 'white',
        flex: 1
    },
})