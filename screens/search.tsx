import { ThemedText } from "@/components/ThemedText";
import useThemeColors from "@/hooks/UseThemeColors";
import { StyleSheet, TextInput, Image, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Row from "@/components/Row";
import { capitalizeFirstLetter } from "@/functions/function";

export default function Search() {
    
    const colors = useThemeColors()
    return (
        <SafeAreaView style={styles.header}>
            <ThemedText>Voici ma page search</ThemedText>
            <TextInput
                style={styles.input}
            >
                <Image source={require('@/assets/images/search.png')} style={styles.iconSearch}/>
            </TextInput>

            <Row style={styles.wrapperFood}>
                <View style={styles.cardFood}>
                    <View style={styles.text}>
                        <ThemedText variant="title1">{capitalizeFirstLetter(`banane cru`)}</ThemedText>
                        <ThemedText variant="title2" color={'grayDark'}>110 cal, fruit, Banana- (One), 118 gram </ThemedText>
                    </View>
                    <View>
                        <Image source={require('@/assets/images/add.png')} style={styles.add}/>
                    </View>
                </View>
                <View style={styles.cardFood}>
                    <View style={styles.text}>
                        <ThemedText variant="title1">{capitalizeFirstLetter(`banane cru`)}</ThemedText>
                        <ThemedText variant="title2" color={'grayDark'}>110 cal, fruit, Banana- (One), 118 gram </ThemedText>
                    </View>
                    <View>
                        <Image source={require('@/assets/images/add.png')} style={styles.add}/>
                    </View>
                </View>
            </Row>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 12,
        paddingBottom: 8,
        backgroundColor: 'white',
        flex: 1
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconSearch : {
        width: 25,
        height: 25
    },
    wrapperFood : {
        flexDirection: 'column',
        gap: 10
    },
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