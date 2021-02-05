import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListPage from '../components/ListPage/ListPage'
import ClickPage from '../components/ClickPage/ClickPage'
import InputPage from '../components/InputPage/InputPage'
import PostsScreen from '../components/PostsScreen/PostsSreen'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Auth from './AuthStack'
export default Tab = () => {

    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'ListPage') {
                        iconName = focused ? 'list' : 'list';
                    } else if (route.name === 'ClickPage') {
                        iconName = focused ? 'touch-app' : 'touch-app';
                    } else if (route.name === 'InputPage') {
                        iconName = focused ? 'input' : 'input';
                    } else if (route.name === 'Posts') {
                        iconName = focused ? 'list-alt' : 'list-alt';
                    } else if (route.name === 'Auth') {
                        iconName = focused ? 'lock' : 'lock-outline';
                    }
                    return <MaterialIcons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen
                name="InputPage"
                component={InputPage}
                options={{
                    title: 'Input',
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="ListPage"
                component={ListPage}
                options={{
                    title: 'List of data',
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="ClickPage"
                component={ClickPage}
                options={{
                    title: 'Click counter',
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Posts"
                component={PostsScreen}
                options={{
                    title: 'Posts',
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Auth"
                component={Auth}
                options={{
                    title: 'Auth',
                }}
            ></Tab.Screen>

        </Tab.Navigator>
    )
}