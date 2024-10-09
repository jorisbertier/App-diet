// import { Stack } from "expo-router";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Index from './index';
import Search from '@/screens/search';
import DetailsFood from '@/screens/[id]';

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
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={Index}
        />
        <Stack.Screen
          name="Search"
          component={Search}
        />
        <Stack.Screen name="DetailsFood" component={DetailsFood} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
