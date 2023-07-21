import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, Button } from "react-native";
import { Formik } from "formik";
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup'
import axios from 'axios'

const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})
export function UserLogin (){
  
  const navigation = useNavigation();

  
  return (
    <View style={styles.loginContainer}>
      <View>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ username: '', password: '' }}
          onSubmit={() => navigation.navigate("Home")}
        >
          {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
          }) => (
            <>
              <TextInput
                name="username"
                placeholder="username"
                style={styles.textInput}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                
              />
              {errors.username &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
              }
              <TextInput
                name="password"
                placeholder="Password"
                style={styles.textInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {errors.password &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
              }
              <Button
                onPress={handleSubmit}
                title="LOGIN"
                disabled={!isValid}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    padding: 12,
  },
  textInput: {
    height: 40,
    margin: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
})
