import React from 'react';
import {
    Text,
    View
} from 'react-native'
import styles from './styles';

const Item = (pros) => (
    <View style={styles.item}>
        <Text style={styles.title}>{pros.title}</Text>
    </View>
)


export default Item