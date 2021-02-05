import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default Header = ({ navigation }) => {
    return (
        <View style={headerStyles.Container}>
            <TouchableOpacity style={headerStyles.Button} onPress={() => { navigation.navigate('InputPage') }}><MaterialIcons name="input" size={20} style={headerStyles.Text}></MaterialIcons><Text style={headerStyles.Text}>Input</Text></TouchableOpacity>
            <TouchableOpacity style={headerStyles.Button} onPress={() => { navigation.navigate('ListPage') }}><MaterialIcons name="list" size={20} style={headerStyles.Text}></MaterialIcons><Text style={headerStyles.Text}>List</Text></TouchableOpacity>
            <TouchableOpacity style={headerStyles.Button} onPress={() => { navigation.navigate('ClickPage') }}><MaterialIcons name="touch-app" size={20} style={headerStyles.Text}></MaterialIcons><Text style={headerStyles.Text}>Click</Text></TouchableOpacity>
        </View>
    )
}

const headerStyles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 5,
        backgroundColor: '#ffffff'
    },
    Button: {
        backgroundColor: '#D2D2D2',
        paddingVertical: 5,
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: "center"
    },
    Text: {
        color: '#ffffff',
        fontWeight: 'bold',
        marginLeft: 5

    }
})