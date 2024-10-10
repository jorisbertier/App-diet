import Row from "@/components/Row";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, View, Image, Button } from "react-native";
import RNDateTimePicker, { DateTimePicker, DateTimePickerEvent} from "@react-native-community/datetimepicker";
import { useState } from "react";

export default function Dashboard() {

    // const date = new Date();

    // let day = date.getDate();
    // let month = date.getMonth() + 1;
    // let year = date.getFullYear();
    
    // let currentDate = `${day}-${month}-${year}`;
    // console.log(currentDate)
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate]= useState<Date>(new Date())
    
    const setDate = (event: DateTimePickerEvent, date: Date) => {
        if(date) {
            setSelectedDate(date);
            setIsOpen(false)
        }
    };

    const handleOpenCalendar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <View style={styles.header}>
            <ThemedText>Voici ma page dashboard</ThemedText>
            <Row style={styles.calendar}>
                <View>
                    <Image source={require('@/assets/images/navbar/home.png')} style={styles.next} />
                </View>
                <View>
                    {/* <ThemedText>{currentDate === currentDate ? "Ajourd'hui" : currentDate}</ThemedText> */}
                    
                    {/* <RNDateTimePicker value={new Date()} timeZoneName={'Europe/Paris'} display="spinner" /> */}
                    <Button
                        onPress={handleOpenCalendar}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                        />
                        {isOpen && (<RNDateTimePicker onChange={setDate} value={new Date()} timeZoneName={'Europe/Paris'}/>)}
                        <ThemedText>{selectedDate.toLocaleDateString('fr-FR')}</ThemedText>
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