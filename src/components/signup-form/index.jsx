import React, { Component } from 'react';
import './signup-form.css';
import {NotificationManager} from 'react-notifications';

class SignupForm extends Component {
    onSubmit = (event) => {
        event.preventDefault();

        const password = event.target.password.value;
        const repeatPassword = event.target.repeatPassword.value;

        if (password === repeatPassword) {
            const login = event.target.login.value;
            const email = event.target.email.value;

            this.props.signup({username: login, password, email});
        } else {
            NotificationManager.error('Пароли не совпадают')
        }
    };

    render() {
        return (
            <form className="signup-form" onSubmit = {this.onSubmit}>
                <div className="signup-form_login">
                    <input type="text" name="login" placeholder="Логин"/>
                </div>

                <div className="signup-form_email">
                    <input type="email" name="email" placeholder="E-mail"/>
                </div>

                <div className="signup-form_password">
                    <input type="password" name="password" placeholder="Пароль"/>
                </div>

                <div className="signup-form_repassword">
                    <input type="password" name="repeatPassword" placeholder="Пароль"/>
                </div>

                <div className="signup-form_submit">
                    <input type="submit" name="submit" value="ОТПРАВИТЬ"/>
                </div>
            </form>
        );
    };

}
export default SignupForm;
