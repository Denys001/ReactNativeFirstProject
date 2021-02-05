import { connect } from "react-redux"
import TextInputMy from './TextInputMy'
import { enterText } from '../../../../src/redux/reducers/dataReducer'
import { addNewElement } from '../../../redux/reducers/dataReducer';
const mapStateToProps = (state) => {
    return {
        currentText: state.data.current
    }
}
export default connect(mapStateToProps, {
    enterText, addNewElement
})(TextInputMy)