import { Colors } from "@/constants/Color";
import useThemeColors from "@/hooks/UseThemeColors";
import { TextProps, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        fontSize: 10,
        lineHeight: 16
    },
    headline: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 8,
        lineHeight: 12,
    },
    title1: {
        fontSize: 16,
        lineHeight: 16,
        fontWeight: "bold",
    },
    title2: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "bold",
    },
    title3: {
        fontSize: 10,
        lineHeight: 16,
        fontWeight: "bold",
    },
})

type Props = TextProps & {
    variant?: keyof typeof styles,
    color?: keyof typeof Colors["light"] | string
}

export function ThemedText({variant, color, style,  ...rest}: Props) {
    const colors = useThemeColors()
    
    return (
        <Text style={[styles[variant ?? 'body'], {color: colors[color ?? 'black']}, style]} {...rest}/>
    )
}
