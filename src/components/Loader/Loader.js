import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import styles from './Loader.style'
export default Loader = () => {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="tomato" />
        </View>
    )
}
