import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";

export function TicketBooking() {
   const navigation=useNavigation()
    return (
        <View style={{flex: 1}}>
            <Text>Book  Bus Ticket</Text>
            <Formik
                initialValues={{
                    username: '',
                    depatureDate: '',
                    depatureTime: '',
                    returnDate: '',
                    returnTime: '',
                    destinationFrom: '',
                    destinationTo: '',
                    seatNoBooking: '',
                    price: ''
                }}

                onSubmit={values => navigation.navigate("StartScreen")}>
                {({ handleChange,
                    handleBlur,
                    handleSubmit,
                    values
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
                        <TextInput
                            name="depatureDate"
                            placeholder={"depatureDate"}
                            style={styles.input}
                            onChangeText={handleChange('depatureDate')}
                            onBlur={handleBlur('depatureDate')}
                            value={values.depatureDate}
                        />
                        <TextInput
                            name="depaturTime"
                            placeholder={"depatureTime"}
                            style={styles.input}
                            onChangeText={handleChange('depatureTime')}
                            onBlur={handleBlur('depatureTime')}
                            value={values.depatureTime}
                        />
                        <TextInput
                            name="returnDate"
                            placeholder={"returnDate"}
                            style={styles.input}
                            onChangeText={handleChange('returnDate')}
                            onBlur={handleBlur('returnDate')}
                            value={values.returnDate}
                        />
                        <TextInput
                            name="returnTime"
                            placeholder={"returnTime"}
                            style={styles.input}
                            onChangeText={handleChange('returnTime')}
                            onBlur={handleBlur('returnTime')}
                            value={values.returnTime}
                        />
                        <TextInput
                            name="destinationFrom"
                            placeholder={"destinationFrom"}
                            style={styles.input}
                            onChangeText={handleChange('destinationFrom')}
                            onBlur={handleBlur('destinationFrom')}
                            value={values.destinationFrom}
                        />
                        <TextInput
                            name="destinationTo"
                            placeholder={"destinationTo"}
                            style={styles.input}
                            onChangeText={handleChange('destinationTo')}
                            onBlur={handleBlur('destinationTo')}
                            value={values.destinationTo}
                        />
                        <TextInput
                            name="seatNoBooking"
                            placeholder={"seatNoBooking"}
                            style={styles.input}
                            onChangeText={handleChange('seatNoBooking')}
                            onBlur={handleBlur('seatNoBooking')}
                            value={values.seatNoBooking}
                        />
                        <TextInput
                            name="price"
                            placeholder={"price"}
                            style={styles.input}
                            onChangeText={handleChange('price')}
                            onBlur={handleBlur('price')}
                            value={values.price}
                        />
                        <Button
                            onPress={handleSubmit}
                            title="Book Ticket"
                        />

                    </>
                )}

            </Formik>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    input: {
        fontSize:20,

    }
})