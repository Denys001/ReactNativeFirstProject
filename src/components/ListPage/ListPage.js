import React from 'react';
import { View, SafeAreaView } from 'react-native';
import CommonsStyles from '../style.common';
import ListContainer from './List/ListContainer';
export default ListPage = ({ navigation }) => {
    return (
        <SafeAreaView style={CommonsStyles.Container}>
            {/* <Header navigation={navigation} ></Header> */}
            <ListContainer></ListContainer>
        </SafeAreaView>
    )
}
