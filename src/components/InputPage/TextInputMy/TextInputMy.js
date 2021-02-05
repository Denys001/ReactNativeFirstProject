import React from 'react'
import { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CommonsStyles from '../../style.common';
export default TextInputMy = (props) => {
    const ChangeHandler = (data) => {
        props.enterText(data)
    };
    return (
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={ChangeHandler}
                value={props.currentText}
            />
            <TouchableOpacity onPress={props.addNewElement} style={[CommonsStyles['mt-2'], styles.Button]}><Text>Add</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#DDDDDD',
        alignItems: 'center',
        padding: 10,
    }
})