import useThemeColors from "@/hooks/UseThemeColors";
import { Image, StyleSheet, Text, View, ViewProps, ViewStyle } from "react-native";
import { ThemedText } from "./ThemedText";

type Props = ViewProps

export default function Banner({style, ...rest}: Props) {
    const colors = useThemeColors()
    console.log(colors)

    return (
        <View style={styles.banner}>
            {/* <Image source={require('@/assets/images/profil/profil.webp')} style={styles.image} /> */}
            {/* <ThemedText style={styles.circle}></ThemedText> */}
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        flex: 0,
        color: 'white',
        backgroundColor: 'blue'
    },
    circle: {

    },
    image : {
        
    }
})