// import { Stack } from "expo-router";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Index from './index';
import Search from '@/screens/search';
import DetailsFood from '@/screens/[id]';
import Dashboard from '@/screens/dashboard';

const Stack = createNativeStackNavigator();

export default function RootLayout() {
  // return (
  //   <Stack
  //   screenOptions={{
  //     headerShown: false
  //   }}>
  //     <Stack.Screen name="index" />
  //   </Stack>
  // );
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
      screenOptions={{ headerShown: false}}
      // initialRouteName="Login" Initail route name pour arriver en premier 
      >
        <Stack.Screen
          name="Home"
          component={Index}
        />
        <Stack.Screen
          name="Search"
          component={Search}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
        />
        {/* <Stack.Screen name="screens/[id]" component={DetailsFood} /> */}
        <Stack.Screen name="FoodDetails" component={DetailsFood} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
