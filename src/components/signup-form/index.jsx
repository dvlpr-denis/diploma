import React, { Component } from 'react';
import './signup-form.css';

class SignupForm extends Component {
    render() {
        return (
            <form className="signup-form" onSubmit = {this.props.onSubmit}>
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
                    <input type="password" name="repeat-password" placeholder="Пароль"/>
                </div>

                <div className="signup-form_submit">
                    <input type="submit" name="submit" value="ОТПРАВИТЬ"/>
                </div>
            </form>
        );
    };

}
export default SignupForm;
