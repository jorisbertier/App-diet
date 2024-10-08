import useThemeColors from "@/hooks/UseThemeColors";
import { Image, StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { ThemedText } from "./ThemedText";

type Props = {
    style?: ViewStyle,
    icon: string,
    nutritionalName: string,
    nutrionalData: string,
    backgroundcolor: string,
    indice: string
}

export default function NutritionalCard({icon, nutritionalName, nutrionalData, indice, backgroundcolor, style, ...rest}: Props) {

    const colors = useThemeColors();
    
    return (
        <View>
            <View>
                <ThemedText>{nutritionalName}</ThemedText>
                <Image source={require('@/assets/images/profil/profil.webp')} style={styles.icon}/>
            </View>
            <View>
                <ThemedText>{nutrionalData}{indice}</ThemedText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body : {

    },
    icon : {
        height: 30,
        width: 30,
        borderRadius: 15
    }
})