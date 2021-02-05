import React from 'react'
import { View, Text } from 'react-native'
import AuthStyle from '../Auth.style'
import AuthIcon from '../AuthIcon'
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import { reduxForm, Field } from 'redux-form'
import { required, email } from '../../../utils/validators/validators'

const submit = values => {
    console.log('submitting form', values)
}
const renderInput = (props) => {
    const hasError = props.meta.touched && props.meta.error
    return <Input
        {...props}
        onChange={props.input.onChange}
        {...props.input}
        error={hasError}
        errorText={props.meta.error}
    />
}
function LoginForm(props) {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <View>
            <AuthIcon></AuthIcon>
            <Text style={AuthStyle.Title}>Login</Text>
            <Field
                placeholder="user@gmail.com"
                iconName="email"
                mainColor="gray"
                headerText="Email"
                name='email'
                component={renderInput}
                validate={[required, email]}
            />
            <Field
                placeholder="Enter your password"
                mainColor="gray"
                headerText="Password"
                iconName="lock"
                secureTextEntry
                name='password'
                component={renderInput}
                validate={[required]}
            />
            <Text style={AuthStyle.Link} onPress={props.goToRegister}>Don't have an account? Sign Up</Text>
            <Button color="tomato" onPress={handleSubmit(submit)} disabled={submitting} />
        </View>
    )
}
export default reduxForm({
    form: 'login'
})(LoginForm)