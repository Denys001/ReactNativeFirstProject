import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListPage from '../components/ListPage/ListPage';
import ClickPage from '../components/ClickPage/ClickPage';
import InputPage from '../components/InputPage/InputPage';


export default Stack = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator
            initialRouteName="InputPage"
            screenOptions={{
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
                name="ListPage"
                component={ListPage}
                options={{
                    title: 'List of data',
                }}
            ></Stack.Screen>
            <Stack.Screen
                name="ClickPage"
                component={ClickPage}
                options={{
                    title: 'Click counter',
                }}
            ></Stack.Screen>
            <Stack.Screen
                name="InputPage"
                component={InputPage}
                options={{
                    title: 'Input',
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    )
}