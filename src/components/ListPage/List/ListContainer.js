import { connect } from "react-redux"
import List from './List';


const mapStateToProps = (state) => {
    return {
        data: state.data.data
    }
}
export default connect(mapStateToProps, {})(List)