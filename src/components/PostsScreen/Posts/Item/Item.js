import React from 'react'
import { View, Text } from 'react-native'
import CommonsStyles from '../../../style.common';
import styles from './item.style'
export default Item = (props) => {
    return (
        <View style={CommonsStyles['mb-2'], styles['Block']}>
            <Text style={[CommonsStyles['mb-2'], styles.Bold]}>{props.title} </Text>
            <Text style={[CommonsStyles['mb-2'], styles.Justify]}> {props.body}</Text>
        </View>
    )
}