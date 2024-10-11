import Row from "@/components/Row";
import { ThemedText } from "@/components/ThemedText";
import { StyleSheet, View, Image, TouchableOpacity, FlatList } from "react-native";
import RNDateTimePicker, { DateTimePickerEvent} from "@react-native-community/datetimepicker";
import { useState, useEffect } from "react";
import { foodData } from "@/data/food";
import { FoodItem, Meal } from '@/interface/FoodItem';
import { Users } from "@/data/users";
import { UsersFoodData } from "@/data/usersFoodData";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard() {

    const [allFoodData, setAllFoodData] = useState<FoodItem[]>([]);  // all foods
    const [allUserData, setAllUserData] = useState([]);  // all user
    const [allUsersFoodData, setAllUsersFoodData] = useState([]);  // all UsersFoodData
    const [resultAllDataFood, setResultAllDataFood] = useState<FoodItem[]>([]); //State for stock search filtered
    const [sortByBreakfast, setSortByBreakfast] = useState<FoodItem[]>([]); //State for stock search filtered
    const [sortByLunch, setSortByLunch] = useState<FoodItem[]>([]); //State for stock search filtered
    const [sortByDinner, setSortByDinner] = useState<FoodItem[]>([]); //State for stock search filtered
    const [sortBySnack, setSortBySnack] = useState<FoodItem[]>([]); //State for stock search filtered
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate]= useState<Date>(new Date())

    /* Date */
    const date = new Date();

    const setDate = (event: DateTimePickerEvent, date: Date | undefined) => {
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
        // function qui permet de filter les données recus et de recuperer les details
        const filterAndSetFoodData = (filteredData: Meal[], setData: React.Dispatch<React.SetStateAction<FoodItem[]>>) => {
            if (filteredData.length > 0) {
                const foodIds = filteredData.map(item => item.foodId); //// the result to extract all the food IDs
                const filteredFoodData = foodIds.flatMap(foodId => { // For each foodId get details food data from allFoodData
                    return allFoodData.filter(food => food.id === foodId);
                });
                setData(filteredFoodData); // Update state with filtered data search
            } else {
                setData([])
            }
        }
        // filter data foods user with Id = 1
        const result = allUsersFoodData.filter((allFoodByOneUser) =>
        allFoodByOneUser.userId === 1 && allFoodByOneUser.date === selectedDate.toLocaleDateString());

        const resultByBreakfast = result.filter((food) => food.mealType === 'Breakfast');
        const resultByLunch = result.filter((food) => food.mealType === 'Lunch');
        const resultByDinner = result.filter((food) => food.mealType === 'Dinner');
        const resultBySnack = result.filter((food) => food.mealType === 'Snack');
        // if (result.length > 0) {
        //     const foodIds = result.map(item => item.foodId); //// the result to extract all the food IDs
        //     const filteredFoodData = foodIds.flatMap(foodId => { // For each foodId get details food data from allFoodData
        //         return allFoodData.filter(food => food.id === foodId);
        //     });
        //     setResultAllDataFood(filteredFoodData); // Update state with filtered data search
        // } else {
        //     setResultAllDataFood([])
        // }

        filterAndSetFoodData(result, setResultAllDataFood)
        filterAndSetFoodData(resultByBreakfast, setSortByBreakfast)
        filterAndSetFoodData(resultByLunch, setSortByLunch)
        filterAndSetFoodData(resultByDinner, setSortByDinner)
        filterAndSetFoodData(resultBySnack, setSortBySnack)

    }, [allUsersFoodData, allFoodData, selectedDate]);

    const handleOpenCalendar = () => {
        setIsOpen(!isOpen)
    }

    // console.log(selectedDate.toLocaleDateString("fr-Fr"))
    // console.log('___________')
    // console.log(date.toLocaleDateString())
    // console.log(selectedDate.toLocaleDateString())
    // console.log('______________')
    // console.log(resultAllDataFood)
    console.log('la')

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
            {/* { resultAllDataFood.length !== 0 ? (
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
            )} */}
            </Row>
            <View style={styles.wrapperMeals}>
                    {displayResultFoodByMeal(sortByBreakfast, 'Breakfast')}
                    {displayResultFoodByMeal(sortByLunch, 'Lunch')}
                    {displayResultFoodByMeal(sortByDinner, 'Dinner')}
                    {displayResultFoodByMeal(sortBySnack, 'Snack')}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'relative',
        paddingHorizontal: 12,
        paddingBottom: 8,
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
    wrapperMeals : {
        gap: 16,
        flexDirection: 'column',
        width: '100%',
    },
})


function displayResultFoodByMeal(resultMeal: any, meal: string) {
    return (
        <View style={styles.test}>
            <ThemedText variant="title">{meal}</ThemedText>
            { resultMeal.length !== 0 ? (
                <FlatList<FoodItem>
                    data={resultMeal}
                    renderItem={({ item }) => (
                        <ThemedText>{item.name}</ThemedText>
                    )}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString() + Math.random()}
                />
            ) : (
                <ThemedText>Don't have any food for {meal}</ThemedText>
            )}
        </View>
    )
}