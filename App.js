import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserRegistrationScreen from './screens/UserRegistrationScreen'
import UserLogInScreen from './screens/UserLoginScreen';
import HomeScreen from './screens/HomeScreen'
import MyTabs from './screens/bottomNavigator'

import { MainScreen } from './screens/MainScreen';
const Stack = createNativeStackNavigator()
export default function App() {
  
  // const navigation=useNavigation()
  const [isAuth, setIsAuth] = React.useState(false)
  
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgoundColor: 'blue' },
          contentStyle: { backgroundColor: 'white' },
          headerTintColor: "black"
        }}>
          <Stack.Screen name={"UserLogIn"} component={UserLogInScreen} />
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='MyTabs' component={MyTabs} /> 
           {/* {!isAuth ?
                <>
                   <Stack.Screen name={"UserRegistration"} component={UserRegistrationScreen} />
                </> :
                <>
                    <Stack.Screen name={"UserLogIn"} component={UserLogInScreen} />
                     
                </>} */}
        {/* <Stack.Screen 
          name="MainScreen"
          component={MainScreen}
        />
        <Stack.Screen
          name="UserLogIn"
          component={UserLogInScreen}
        />
        <Stack.Screen
          name="UserRegistration"
          component={UserRegistrationScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        /> */}
      </Stack.Navigator>
      <SafeAreaView>
      <StatusBar style="auto" />
      <Text>Welcome To Bus Ticket Booking App</Text>  
    </SafeAreaView>
    </NavigationContainer>
    </>
    


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  }
});
