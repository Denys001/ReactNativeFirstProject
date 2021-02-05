import React from 'react'
import { useEffect } from 'react';
import { FlatList, TouchableOpacity, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { getPosts } from '../../../redux/reducers/postsReducer';
import Loader from '../../Loader/Loader';
import Item from './Item/Item';
import CommonsStyles from '../../style.common';

const Posts = (props) => {
    const renderItem = ({ item }) => (< Item {...item} ></Item>)
    useEffect(() => {
        props.getPosts()
    }, [])
    if (props.loading)
        return (
            <Loader></Loader>
        )
    return (
        <FlatList
            renderItem={renderItem}
            data={props.data}
            keyExtractor={el => el.id.toString()}
        ></FlatList>
    )
}

const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    data: state.posts.posts
})
export default connect(mapStateToProps, {
    getPosts
})(Posts)