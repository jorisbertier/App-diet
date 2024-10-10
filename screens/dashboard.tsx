import Row from "@/components/Row";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, View, Image, Button, TouchableOpacity, FlatList } from "react-native";
import RNDateTimePicker, { DateTimePicker, DateTimePickerEvent} from "@react-native-community/datetimepicker";
import { useState, useEffect } from "react";
import { foodData } from "@/data/food";
import { FoodItem } from '@/interface/FoodItem';
import { Users } from "@/data/users";
import { UsersFoodData } from "@/data/usersFoodData";

export default function Dashboard() {

    const [allFoodData, setAllFoodData] = useState<FoodItem[]>([]);  // all foods
    const [allUserData, setAllUserData] = useState([]);  // all users
    const [allUsersFoodData, setAllUsersFoodData] = useState([]);  // all UsersFoodData
    const [resultAllDataFood, setResultAllDataFood] = useState<FoodItem[]>([]); //State for stock search filtered

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    let currentDate = `${day}/${month}/${year}`;
    
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate]= useState<Date>(new Date())
    
    const setDate = (event: DateTimePickerEvent, date: Date) => {
        if(date) {
            setSelectedDate(date);
            setIsOpen(false)
            console.log(event)
        }
    };

    useEffect(() => {
        try {
            setAllFoodData(foodData);
            setAllUserData(Users);
            setAllUsersFoodData(UsersFoodData)
        } catch (e) {
            console.log('Error processing data', e);
        }
    }, []);

    useEffect(() => {
        // filter data foods user with Id = 1
        const result = allUsersFoodData.filter((allFoodByOneUser) => allFoodByOneUser.userId === 1);
        if (result.length > 0) {
            const foodIds = result.map(item => item.foodId);
            const filteredFoodData = foodIds.flatMap(foodId => {
                return allFoodData.filter(food => food.id === foodId);
            });
            setResultAllDataFood(filteredFoodData); // Update state with filtered data search
        } else {
            setResultAllDataFood([])
        }
    }, [allUsersFoodData, allFoodData]);

    const handleOpenCalendar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <View style={styles.header}>
            <ThemedText>Voici ma page dashboard</ThemedText>
            <Row style={styles.wrapperCalendar}>
                <View>
                    <Image source={require('@/assets/images/navbar/home.png')} style={styles.next} />
                </View>
                <TouchableOpacity onPress={handleOpenCalendar}>
                    <View style={styles.calendar}>
                        {/* <ThemedText>{currentDate === currentDate ? "Ajourd'hui" : currentDate}</ThemedText> */}
                        
                        {/* <RNDateTimePicker value={new Date()} timeZoneName={'Europe/Paris'} display="spinner" /> */}
                        {/* <Button
                            onPress={handleOpenCalendar}
                            title="Learn More"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        /> */}
                            {isOpen && (<RNDateTimePicker onChange={setDate} value={new Date()} timeZoneName={'Europe/Paris'}/>)}
                            <ThemedText>{selectedDate.toLocaleDateString('fr-FR') === currentDate ? 'Aujourd"hui': selectedDate.toLocaleDateString('fr-FR')}</ThemedText>
                    </View>
                </TouchableOpacity>
                <View>
                    <Image source={require('@/assets/images/navbar/home.png')} style={styles.next} />
                </View>
            </Row>
            <Row>
            { resultAllDataFood.length !== 0 ? (
                <FlatList<FoodItem>
                    data={resultAllDataFood}
                    renderItem={({ item }) => (
                        <ThemedText>{item.name}</ThemedText>
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString() + Math.random()}
                    // contentContainerStyle={styles.foodData}
                />
            ) : (
                <ThemedText>Vous n'avez aucun aliment aujourd'hui</ThemedText>
            )}
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
    wrapperCalendar: {
        marginTop: 200,
        justifyContent: 'space-between'
    },
    next : {
        width: 25,
        height:25
    },
    calendar : {
        padding: 40,
        backgroundColor: 'yellow'
    },
})