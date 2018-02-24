import React, { Component } from 'react';
import './signin.css';

class SigninForm extends Component {

    render() {
        return (
            <form className="signin-form">
                <div className="signin-form_email">
                    <input type="email" name="email" placeholder="E-mail"/>
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
