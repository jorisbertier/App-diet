import useThemeColors from "@/hooks/UseThemeColors";
import { Image, StyleSheet, Text, View, ViewProps } from "react-native";
import { ThemedText } from "./ThemedText";

type Props = ViewProps

export default function Navbar({style, ...rest}: Props) {

    const colors = useThemeColors();
    
    return (
        <View style={styles.navbar}>
            <View style={styles.text}>
                <Image style={styles.image} source={require('@/assets/images/navbar/home.png')}/>
            </View>
            <View style={styles.text}>
                <Image style={styles.image} source={require('@/assets/images/navbar/home.png')}/>
            </View>
            <View style={styles.text}>
                <Image style={styles.image} source={require('@/assets/images/navbar/banana.png')}/>
            </View>
            <View style={styles.text}>
                <Image style={styles.image} source={require('@/assets/images/navbar/account.png')}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    navbar : {
        position: 'absolute',
        width: 276,
        padding: 4,
        height: 70,
        gap: 5,
        borderRadius: 40,
        bottom: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        flexDirection: 'row'
    },
    text : {
        backgroundColor: '#333333',
        borderRadius: 30,
        height: 60,
        width: 60,
        // textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image : {
        height: 30,
        width: 30
    }
})