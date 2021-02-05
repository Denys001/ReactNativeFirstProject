import React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import CommonsStyles from '../../style.common'
import AuthStyle from '../Auth.style'
import AuthIcon from '../AuthIcon';
import Input from '../../common/Input/Input'
import Button from '../../common/Button/Button'
import { required, email, minLengthCreator } from '../../../utils/validators/validators'
import { reduxForm, Field } from 'redux-form'
const min6 = minLengthCreator(6)
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
const Register = (props) => {
    const { handleSubmit, pristine, reset, submitting, navigation } = props
    return (
        <SafeAreaView style={CommonsStyles.Container}>
            <AuthIcon />
            <Text style={AuthStyle.Title}> Register</Text>
            <View>
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
                    placeholder="Enter your nickname"
                    iconName="person"
                    mainColor="gray"
                    headerText="Nickname"
                    name='nickName'
                    component={renderInput}
                    validate={[required, min6]}
                />
                <Field
                    placeholder="Enter your password"
                    mainColor="gray"
                    headerText="Password"
                    iconName="lock"
                    secureTextEntry
                    name='password'
                    component={renderInput}
                    validate={[required, min6]}
                />
                <Field
                    placeholder="Enter confirm password"
                    mainColor="gray"
                    headerText="Confirm password"
                    iconName="lock"
                    secureTextEntry
                    name='passwordConfirm'
                    component={renderInput}
                    validate={[required]}
                //error
                />
            </View>

            <Text style={AuthStyle.Link} onPress={() => { navigation.navigate('Login') }}>Already have an account? Sign in</Text>
            <Button color="tomato" onPress={handleSubmit(submit)} disabled={submitting} />
        </SafeAreaView>
    )
}
export default reduxForm({
    form: 'register'
})(Register)
