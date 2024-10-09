import { ThemedText } from "@/components/ThemedText"
import { router } from "expo-router"
import { Image, Pressable, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "expo-router";
import Row from "@/components/Row";
import useThemeColors from "@/hooks/UseThemeColors";
import NutritionStatCard from "@/components/Screens/Search/NutritionStatCard";



export default function DetailsFood() {
    const colors = useThemeColors()

    const navigation = useNavigation();

    return (
    <>
        <View  style={styles.banner}>
            <Image source={require('@/assets/images/banana.jpg')} style={styles.image} />
            <Pressable onPress={()=> navigation.goBack()} style={styles.back}>
                
                    <Image source={require('@/assets/images/back.png')} style={styles.icon} />
                
            </Pressable>
        </View>
        <View style={styles.header}>
            <Row>
                <View style={styles.wrapperBlock}>
                    <ThemedText style={styles.block}>Fruit</ThemedText>
                    <ThemedText style={styles.block}>250g</ThemedText>
                </View>
            </Row>
            <Row style={styles.wrapperTitle}>
                <ThemedText variant="title1">Mandarin orange</ThemedText>
                <ThemedText variant="title1">Good for diet - 187kcal</ThemedText>
            </Row>
            <View style={styles.container}>
                <Row gap={10}>
                    <NutritionStatCard
                        nutri={'protein'}
                        quantity={51}
                        unit={'g'}
                        backgroundcolor={'#000000'}
                    />
                    <NutritionStatCard
                        nutri={'carbs'}
                        quantity={51}
                        unit={'g'}
                        backgroundcolor={'#FF8400'}
                    />
                    <NutritionStatCard
                        nutri={'fat'}
                        quantity={88}
                        unit={'g'}
                        backgroundcolor={'#4A83D4'}
                    />
                </Row>
            </View> 
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 12,
        paddingBottom: 8,
        flex: 1/3,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
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
    },
    wrapperBlock: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        width: '100%',
        marginTop: 20

    },
    block: {
        borderWidth: 1,
        borderBlockColor: 'black',
        backgroundColor: 'gray',
        padding: 6
    },
    wrapperTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'column'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    }
})