import React from 'react'
import { View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AuthStyle from './Auth.style';
const AuthIcon = ({ color, size, name }) => {
    return (
        <View style={AuthStyle['Icon']}>
            <MaterialIcons name={name || "lock-outline"} size={size || 30} color={color || "white"} />
        </View>
    )
}
export default AuthIcon
