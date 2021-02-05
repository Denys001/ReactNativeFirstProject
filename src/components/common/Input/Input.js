import React from 'react'
import { useState, useEffect } from 'react'
import { View, TextInput, Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import InputStyle from './Input.style'
const Input = (props) => {
    const {
        error, errorText,
        iconName, iconSize, iconColor,
        placeholder, placeholderColor,
        mainColor, textColor, focusedColor,
        headerText, headerTextColor,
        name, secureTextEntry, onChange
    } = props
    useEffect(() => {
        setTheme(error ? "red" : mainColor)
    }, [error, mainColor])
    const [theme, setTheme] = useState(error ? "red" : mainColor)
    const focused = () => { !error && setTheme(colorChoose(focusedColor || '#424242')) }
    const unfocused = () => { !error && setTheme(colorChoose(mainColor)) }
    const colorChoose = (color) => {
        return (color && !error) ? color : theme
    }
    return (
        <View style={InputStyle.Container}>
            <Text style={InputStyle.Header({ color: colorChoose(headerTextColor) })}>{headerText}</Text>
            <View style={InputStyle.Wrapper({ color: theme })}>
                <MaterialIcons
                    name={iconName || "insert-emoticon"}
                    size={iconSize || 25}
                    color={colorChoose(iconColor)}
                />
                <TextInput
                    style={InputStyle.Input({ color: colorChoose(textColor) })}
                    placeholder={placeholder || ''}
                    placeholderTextColor={placeholderColor || 'gray'}
                    secureTextEntry={secureTextEntry ? true : false}
                    onChangeText={onChange}
                    onFocus={focused}
                    onBlur={unfocused}
                    name={name}
                ></TextInput>
                {error ? <MaterialIcons name={"info"} size={18} color={"red"} /> : <Text></Text>}
            </View>
            {error ? <Text style={InputStyle.Error}>{errorText || 'something is wrong'}</Text> : <Text></Text>}
        </View>

    )
}

export default Input
