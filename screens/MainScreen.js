import { Button } from "react-native"

import { useNavigation } from "@react-navigation/native"
export function MainScreen(){
    const navigation=useNavigation()
    return (
        <>
            <Button
                onPress={navigation.navigate("UserRegistration")}
                title="SignUp"
                color="#841584"
                accessibilityLabel="Sign Up"
            />
            <Button
                onPress={UserLogInScreen}
                title="Login"
                color="#841584"
                accessibilityLabel="LogIn"
            />
        </>
        
    )
    
}

