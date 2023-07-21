import { StatusBar } from "expo-status-bar";
import { Text,SafeAreaView,View,StyleSheet } from "react-native";
import {UserLogin} from "../components/UserLogin";

function UserLogInScreen() {
    return (
        <SafeAreaView style={styles.login_container}>
          <View style={styles.login_header}>
            <Text>{' User login'}</Text>
          </View>
          <UserLogin />
        </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    login_container:{},
    login_header:{}
    //...
  })

  export default UserLogInScreen