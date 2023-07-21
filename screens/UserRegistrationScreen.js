import React from 'react';
import { SafeAreaView, StatusBar, Text, View,StyleSheet} from 'react-native';
import { UserRegistration } from '../components/UserRegistration';

function UserRegistrationScreen (){
    return (
            <SafeAreaView style={{ paddingHorizontal: 12}}>
                <View>
                    <Text>{'User Registration'}</Text>
                    <UserRegistration />
                </View>
            </SafeAreaView>
    )
}

export default UserRegistrationScreen
