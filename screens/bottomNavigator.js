
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import UserRegistrationScreen from './UserRegistrationScreen'
import HomeScreen from "./HomeScreen"

const Tab = createBottomTabNavigator()

export default function MyTabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Home"} component={HomeScreen}/>
            <Tab.Screen name={"SignUp"} component={UserRegistrationScreen}/>
        </Tab.Navigator>
    )
}