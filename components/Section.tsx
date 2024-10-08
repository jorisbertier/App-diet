import useThemeColors from "@/hooks/UseThemeColors";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";

type Props = ViewProps

export default function Section({style, ...rest}: Props) {

    const colors = useThemeColors();
    
    return (
        <View style={styles.body}>
        </View>
    )
}

const styles = StyleSheet.create({
    body : {
        backgroundColor: 'red',
        padding: 24
    }
})