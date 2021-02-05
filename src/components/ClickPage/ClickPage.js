import React from 'react';
import ClickCounterContainer from './ClickCounter/ClickCounterContainer';
import { View, Button, Alert, SafeAreaView } from 'react-native';
import CommonsStyles from '../style.common'
export default ClickPage = ({ navigation }) => {
    const onPress = () => {
        Alert.alert(
            'Update available',
            'Keep your app up to date to enjoy the latest features',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'Install',
                    onPress: () => console.log('Install Pressed')
                }
            ]
        )
    }
    return (
        <SafeAreaView style={CommonsStyles.Container}>
            {/* <Header navigation={navigation} ></Header> */}
            <View style={CommonsStyles['mx-2']}>
                <ClickCounterContainer ></ClickCounterContainer>
                <Button
                    title="Press me"
                    onPress={onPress}
                    style={CommonsStyles['mx-2']}
                />
            </View>

        </SafeAreaView>
    )
}
