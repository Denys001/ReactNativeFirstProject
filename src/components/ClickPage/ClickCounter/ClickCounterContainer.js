import React from 'react'
import { connect } from "react-redux"
import { increment, reset } from "../../../redux/reducers/clickReducer";
import ClickCounter from './ClickCounter';


const mapStateToProps = (state) => {
    return {
        clicks: state.clicks.clicks
    }
}

const ClickCounterContainer = connect(mapStateToProps, {
    increment, reset
})(ClickCounter)

export default ClickCounterContainer