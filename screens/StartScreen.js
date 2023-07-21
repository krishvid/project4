import {View, Text, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';

export function StartScreen() {
    const navigation = useNavigation()
  /**
   * Button https://reactnative.dev/docs/button
   * Touchable https://reactnative.dev/docs/touchableopacity
   * Pressable https://reactnative.dev/docs/pressable
   */
  function onPressTicketBooking(){
    navigation.navigate("TicketBooking")
  }
  function onPressTicketDetails(){
    navigation.navigate("Ticket Details")
  }
    return (
     <View style={{flex: 1}}>
            <Text>Start Screen</Text>
                <Button
                     onPress={onPressTicketBooking}
                     title="TicketBooking"
                     color="#841584"
                />
                <Button
                     onPress={onPressTicketDetails}
                     title="TicketDetails"
                     color="#841584"
                />
     </View>

    );
  }