import React, { Component } from 'react';
import './Signup_form.css';


class SignupForm extends Component {

    submitData = event => {
        event.preventDefault();
        this.props.history.push('/choicepage');
    };

    render() {
        return (
            <form className="signup-form" onSubmit = {this.submitData}>
                <div className="signup-form_lastname">
                    <input type="text" name="name" placeholder="Ваше имя"/>
                </div>

                <div className="signup-form_lastname">
                    <input type="text" name="lastname" placeholder="Ваша фамилия"/>
                </div>

                <div className="signup-form_email">
                    <input type="email" name="email" placeholder="E-mail"/>
                </div>

                <div className="signup-form_phone">
                    <input type="tel" name="phone" placeholder="Номер телефона"/>
                </div>

                <div className="signup-form_password">
                    <input type="password" name="password" placeholder="Пароль"/>
                </div>

                <div className="signup-form_repassword">
                    <input type="password" name="password" placeholder="Пароль"/>
                </div>

                <div className="signup-form_submit">
                    <input type="submit" name="submit" value="ОТПРАВИТЬ"/>
                </div>
            </form>
        );
    };

}
export default SignupForm;
