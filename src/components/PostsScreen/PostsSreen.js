import React from 'react'
import { SafeAreaView } from 'react-native'
import CommonsStyles from '../style.common'
import Posts from './Posts/Posts'
export default PostsScreen = () => {
    return (
        <SafeAreaView style={CommonsStyles.Container}>
            <Posts></Posts>
        </SafeAreaView>
    )
}