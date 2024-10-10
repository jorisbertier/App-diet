import Row from "@/components/Row";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, View, Image } from "react-native";

export default function Dashboard() {

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    let currentDate = `${day}-${month}-${year}`;
    console.log(currentDate)

    return (
        <View style={styles.header}>
            <ThemedText>Voici ma page dashboard</ThemedText>
            <Row style={styles.calendar}>
                <View>
                    <Image source={require('@/assets/images/navbar/home.png')} style={styles.next} />
                </View>
                <View>
                    <ThemedText>{currentDate === currentDate ? "Ajourd'hui" : currentDate}</ThemedText>
                </View>
                <View>
                    <Image source={require('@/assets/images/navbar/home.png')} style={styles.next} />
                </View>
            </Row>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'relative',
        paddingHorizontal: 12,
        paddingBottom: 8,
        backgroundColor: 'gray',
        flex:  1
    },
    calendar: {
        marginTop: 200,
        justifyContent: 'space-between'
    },
    next : {
        width: 25,
        height:25
    },
})