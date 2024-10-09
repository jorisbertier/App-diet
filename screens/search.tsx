import { ThemedText } from "@/components/ThemedText";
import useThemeColors from "@/hooks/UseThemeColors";
import { StyleSheet, TextInput, Image, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Row from "@/components/Row";
import CardFood from "@/components/Screens/Search/CardFood";

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
                <CardFood/>
                <CardFood/>
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
})