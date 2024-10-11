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
    const [allUserData, setAllUserData] = useState([]);  // all user
    const [allUsersFoodData, setAllUsersFoodData] = useState([]);  // all UsersFoodData
    const [resultAllDataFood, setResultAllDataFood] = useState<FoodItem[]>([]); //State for stock search filtered
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate]= useState<Date>(new Date())
    

    /* Date */
    const date = new Date();

    const setDate = (event: DateTimePickerEvent, date: Date) => {
        if(date) {
            setSelectedDate(date);
            setIsOpen(false)
            console.log(event)
        }
    };
    
    /* API */
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
        const result = allUsersFoodData.filter((allFoodByOneUser) => allFoodByOneUser.userId === 1 && allFoodByOneUser.date === selectedDate.toLocaleDateString());
        if (result.length > 0) {
            const foodIds = result.map(item => item.foodId);
            const filteredFoodData = foodIds.flatMap(foodId => {
                return allFoodData.filter(food => food.id === foodId);
            });
            setResultAllDataFood(filteredFoodData); // Update state with filtered data search
        } else {
            setResultAllDataFood([])
        }
    }, [allUsersFoodData, allFoodData, selectedDate]);

    const handleOpenCalendar = () => {
        setIsOpen(!isOpen)
    }

    // console.log(selectedDate.toLocaleDateString("fr-Fr"))
    // console.log('___________')
    // console.log(date.toLocaleDateString())
    // console.log(selectedDate.toLocaleDateString())
    // console.log('______________')
    
    return (
        <View style={styles.header}>
            <ThemedText>Voici ma page dashboard</ThemedText>
            <Row style={styles.wrapperCalendar}>
                <View>
                    <Image source={require('@/assets/images/navbar/home.png')} style={styles.next} />
                </View>
                <TouchableOpacity onPress={handleOpenCalendar}>
                    <View style={styles.calendar}>
                            {isOpen && (<RNDateTimePicker
                                onChange={setDate}
                                value={selectedDate}
                                timeZoneOffsetInMinutes={new Date().getTimezoneOffset()} 
                                />)}
                            <ThemedText>{selectedDate.toLocaleDateString() === date.toLocaleDateString() ? 'Aujourd"hui': selectedDate.toLocaleDateString('fr-FR')}</ThemedText>
                            <ThemedText>{selectedDate.toLocaleString()}</ThemedText>
                            <ThemedText>{selectedDate.toLocaleDateString()}</ThemedText>
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