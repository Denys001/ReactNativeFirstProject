import { StyleSheet } from 'react-native'
export default styles = StyleSheet.create({
    Container: {
        paddingHorizontal: 10,
    },
    Header: (options = {}) => ({
        fontSize: options.fontSize || 16,
        marginBottom: 5,
        fontWeight: "bold",
        color: options.color
    }),
    Wrapper: (options = {}) => ({
        borderBottomWidth: options.borderWidth || 1,
        borderBottomColor: options.color,
        paddingBottom: 10,
        flexDirection: 'row'
    }),
    Input: (options = {}) => ({
        flex: 1,
        color: options.color,
        fontSize: options.fontSize || 16,
        marginLeft: 5
    }),
    Error: {
        textAlign: "right",
        color: "red",
    }
})
