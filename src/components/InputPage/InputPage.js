import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import CommonsStyles from '../style.common'
import Header from '../Header/Header';
import TextInputContainer from './TextInputMy/TextInputContainer';
export default InputPage = ({ navigation }) => {
    return (
        <>
            {/* <Header navigation={navigation} ></Header> */}
            <SafeAreaView style={CommonsStyles.Container}>

                <View style={CommonsStyles['mx-2']}>
                    <Text style={CommonsStyles['mb-2']}>Enter text:</Text>
                    <TextInputContainer></TextInputContainer>
                </View>
            </SafeAreaView>
        </>
    )
}
