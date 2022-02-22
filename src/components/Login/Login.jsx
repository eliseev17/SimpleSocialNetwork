import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       placeholder={"Login"} name={"login"}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field component={Input}
                       placeholder={"Password"} name={"password"}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field component={Input}
                       type={"checkbox"} name={"rememberMe"}
                       validate={[required, maxLength10]}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;