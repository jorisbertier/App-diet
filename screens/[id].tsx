import { ThemedText } from "@/components/ThemedText"
import { router } from "expo-router"
import { Image, Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from "expo-router";



export default function DetailsFood() {

    const navigation = useNavigation();

    return (<>
        <View  style={styles.banner}>
            <Image source={require('@/assets/images/banana.jpg')} style={styles.image} />
            <Pressable onPress={()=> navigation.goBack()} style={styles.back}>
                
                    <Image source={require('@/assets/images/back.png')} style={styles.icon} />
                
            </Pressable>
        </View>
        <View style={styles.header}>
            <ThemedText>Voici ma page details food</ThemedText>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 12,
        paddingBottom: 8,
        backgroundColor: 'red',
        flex: 1/3
    },
    banner: {
        position: 'relative',
        width: '100%',
        height: 350
    },
    image: {
        objectFit: 'fill',
        width: '100%',
        height: 350
    },
    back: {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: 13,
        backgroundColor: 'white',
        top: 100,
        left: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 25,
        height: 25
    }
})