import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { TicketBooking } from '../components/ticketbooking';
import TicketDetailsScreen from './TicketDetails.js'
import { StartScreen } from './StartScreen';

const Stack = createNativeStackNavigator()

export function HomeScreen() {
  const navigation = useNavigation()

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="StartScreen"
        component={StartScreen}
      />
      <Stack.Screen
        name="TicketBooking"
        component={TicketBooking}
      />
      <Stack.Screen
        name="Ticket Details"
        component={TicketDetailsScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  login_container: {
    // backgroundColor: "black",
    flex: 1
  },
  login_header: {

  }
})
export default HomeScreen