import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'

export default function Button({ text, color, onPress, textColor, fontSize }) {
    return (
        <TouchableOpacity
            style={styles.Button({ color: color })}
            onPress={onPress}
        >
            {text || <Text style={styles.Text({ color: textColor, size: fontSize })}>Submit</Text>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button: (options = {}) => ({
        backgroundColor: options.color || 'gray',
        paddingHorizontal: 30,
        paddingVertical: 10,
        alignSelf: 'center',
    }),
    Text: (options = {}) => ({
        color: options.color || 'white',
        fontWeight: 'bold',
        fontSize: options.size || 16
    })
})