import { StackActions, StackNavigationState, useNavigation } from "@react-navigation/native";

import {ticketBooking} from "./ticketbooking"
export function Home(){
    const navigation=useNavigation()
    return(
        <View>
            <Text>Welcome to bus ticket</Text>
           
            {/* <TicketBookingButton 
                onPress={() => {
                            navigation.navigate("TicketBooking")
                        }}
            /> */}
            {/* <DisplayTicketButton 
                onPress={() => {
                    navigation.navigate("TicketDisplay")
                }}
            /> */}
            
                <StackActions.Screen 
                    name="Book Ticket"
                    component={ticketBooking}
                />
            
        </View>
    )
}