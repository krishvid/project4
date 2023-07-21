import React, { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { Formik } from "formik";
import * as yup from 'yup'
import { useNavigation } from "@react-navigation/native";

const signUpValidationSchema = yup.object().shape({
    fName: yup
        .string()
        .required('First name is required'),
    lName: yup
        .string()
        .required('Last name is required'),
    phoneNo: yup
        .string()
        .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
        .required('Phone number is required'),
    username: yup
        .string()
        .required('username is required'),
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords do not match')
        .required('Confirm password is required'),
})

export const UserRegistration = () => {
    const navigation=useNavigation()
    return (
        <>
            <Formik
                initialValues={{
                    fName: '',
                    lName: '',
                    phoneNo: '',
                    username: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={signUpValidationSchema}
                onSubmit={() => navigation.navigate("UserLogIn")}
            >
                {({  handleChange,handleBlur,handleSubmit,values,errors,isValid, }) => (
                    <>
                        <TextInput
                            style={styles.textInput}
                            name="fName"
                            placeholder="FName"
                            onChangeText={handleChange('fName')}
                            onBlur={handleBlur('fName')}
                            value={values.fName}
                        />
                        <TextInput
                            style={styles.textInput}
                            name="lName"
                            placeholder="lName"
                            onChangeText={handleChange('lName')}
                            onBlur={handleBlur('lName')}
                            value={values.lName}
                        />
                        <TextInput
                            style={styles.textInput}
                            name="phoneNo"
                            placeholder="Phone No"
                            onChangeText={handleChange('phoneNo')}
                            onBlur={handleBlur('phoneNo')}
                            value={values.phoneNo}
                            
                        />
                        <TextInput
                           style={styles.textInput}
                            name="username"
                            placeholder="username"
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                        />
                        <TextInput
                            style={styles.textInput}
                            name="password"
                            placeholder="Password"
                            secureTextEntry
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                        <TextInput
                            style={styles.textInput}
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            secureTextEntry
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                        />

                        <Button
                            onPress={handleSubmit}
                            title="SIGN UP"
                            // disabled={!isValid}
                        />
                    </>
                )}
            </Formik>

        </>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginBottom: 10,
        BackgroundColor: "#fff",
    },
    textInput:{
        fontSize:20,
    }
})