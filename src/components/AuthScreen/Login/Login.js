import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import LoginForm from './LoginForm'
import CommonsStyles from '../../style.common'
const Login = ({ navigation }) => {
    const goToRegister = () => { navigation.navigate('Register') }
    return (
        <SafeAreaView style={CommonsStyles.Container}>
            <LoginForm goToRegister={goToRegister}></LoginForm>
        </SafeAreaView>
    )
}

export default Login
