import { ThemedText } from "@/components/ThemedText"
import { router } from "expo-router"
import { Image, Pressable, StyleSheet, View, Text, ScrollView } from "react-native";
import { useNavigation } from "expo-router";
import Row from "@/components/Row";
import useThemeColors from "@/hooks/UseThemeColors";
import NutritionStatCard from "@/components/Screens/Details/NutritionStatCard";
import { Dimensions } from "react-native";
import NutritionItem from "@/components/Screens/Details/NutritionItem";

const { height } = Dimensions.get('window');

export default function DetailsFood() {
    const colors = useThemeColors() 
    const navigation = useNavigation();

    return (
    <ScrollView>
        <View style={styles.banner}>
            <Image source={require('@/assets/images/banana.jpg')} style={styles.image} />
            <Pressable onPress={()=> navigation.goBack()} style={styles.back}>
                
                    <Image source={require('@/assets/images/back.png')} style={styles.icon} />
                
            </Pressable>
        </View>
        <View style={[styles.header, {backgroundColor: colors.white}]}>
            <Row>
                <View style={styles.wrapperBlock}>
                    <View style={styles.block}>
                        <ThemedText style={[{borderColor: colors.grayDark}]}>Fruit</ThemedText>
                    </View>
                    <View style={styles.block}>
                        <ThemedText style={[{borderColor: colors.grayDark}]}>250 g</ThemedText>
                    </View>
                </View>
            </Row>
            <Row style={styles.wrapperTitle}>
                <ThemedText variant="title" style={styles.title}>Mandarin orange</ThemedText>
                <ThemedText variant="title1" style={styles.title}>Good for diet - 187kcal</ThemedText>
            </Row>
            <View style={[styles.container]}>
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
            <View>
                <NutritionItem name={'protein'} quantity={'20 g'} />
                <NutritionItem name={'protein'} quantity={'20 g'} />
                <NutritionItem name={'protein'} quantity={'20 g'} />
                <NutritionItem name={'protein'} quantity={'20 g'} />
            </View>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    banner: {
        position: 'relative',
        width: '100%',
        height: 350
    },
    header: {
        paddingHorizontal: 12,
        paddingBottom: 8,
        height: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        top: -35,
        backgroundColor: 'white'
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
        marginTop: 40,
    },
    block: {
        borderWidth: 2,
        borderRadius: 7,
        padding: 6,
        width: height *0.07,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'column',
        overflow: "visible"
    },
    title: {
        height: 50,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        marginTop: -20
    },
})