import React, { Component } from 'react';
import './signin.css';

class SigninForm extends Component {

    submitData = event => {
        event.preventDefault();
        console.log(this);
        this.props.history.push('/choicepage');
    };


    render() {
        return (
            <form className="signin-form"  onSubmit={this.submitData} >
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
