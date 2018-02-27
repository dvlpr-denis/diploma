import React, { Component } from 'react';
import './signin.css';

class SigninForm extends Component {
    onSubmit = (event) => {
        event.preventDefault();

        const login = event.target.login.value;
        const password = event.target.password.value;
        
        this.props.onSubmit(login, password)
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="signin-form">
                <div className="signin-form_email">
                    <input type="text" name="login" placeholder="Логин"/>
                </div>

                <div className="signin-form_password">
                    <input type="password" name="password" placeholder="Пароль"/>
                </div>

                <div className="signin-form_submit">
                    <input type="submit" name="submit" value="Войти"/>
                </div>
            </form>
        );
    };

}
export default SigninForm;
