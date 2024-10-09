import { StyleSheet } from "react-native";
import { View, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { capitalizeFirstLetter } from "@/functions/function";

export default function CardFood() {
    return (
        <View style={styles.cardFood}>
            <View style={styles.text}>
                <ThemedText variant="title1">{capitalizeFirstLetter(`banane cru`)}</ThemedText>
                <ThemedText variant="title2" color={'grayDark'}>110 cal, fruit, Banana- (One), 118 gram </ThemedText>
            </View>
            <View>
                <Image source={require('@/assets/images/add.png')} style={styles.add}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardFood: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        height: 80,
        borderRadius: 15,
        width: '100%'
    },
    add : {
        width: 35,
        height: 35
    },
    text: {
        gap: 5
    }
})