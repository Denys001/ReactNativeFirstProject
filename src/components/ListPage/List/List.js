import Item from './Item/Item'
import React from 'react'
import {
    StyleSheet,
    FlatList, Text
} from 'react-native'
const List = (props) => {
    const renderItem = ({ item }) => <Item title={item.el}></Item>
    return (props.data.length === 0 ) ?
    (
        <Text style={styles.Text}>There're anyting</Text>
    )
    :  
    (
        <FlatList
            data={props.data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        ></FlatList>
    )
}
const styles = StyleSheet.create({
    Text: {
        textAlign: "center"
    } 
})
export default List;