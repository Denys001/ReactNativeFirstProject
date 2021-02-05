import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import CommonsStyles from './../../style.common';
export default ClickCounter = (props) => {
    return (
        <>
            <Text style={CommonsStyles['mb-2']}>Clicks: {props.clicks}</Text>
            <TouchableOpacity onPress={props.increment} style={[styles.Button, CommonsStyles['mb-2']]}>
                <Text>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.reset} style={styles.Button}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#DDDDDD',
        alignItems: 'center',
        padding: 10,
    }
})