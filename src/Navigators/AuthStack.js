import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../components/AuthScreen/Login/Login'
import Register from '../components/AuthScreen/Register/Register'


export default Stack = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: '#f4511e'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }
            }
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'Login',
                }}
            ></Stack.Screen>
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    title: 'Register',
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}