import React, {Component} from 'react';
import '../App/App.css';
import img from './image/camera.png';
import fb from './image/fb_icon.png';
import tw from './image/tw_icon.png';
import SignupForm from "../../components/signup/Singup_form";

class SignUp extends Component {

    submitData = event => {
        event.preventDefault();
        this.props.history.push('/choicepage');
    };

    render() {

        return (
            <div className="App">
                <div className="App-image">
                    <img src={img} alt=""/>
                </div>

                <SignupForm  onSubmit={this.submitData} />

                <div className="signin-facebook">
                    <img src={fb} alt="" className="signin-image"/>
                    Зарегистрироваться с помощью Facebook
                </div>

                <div className="signin-tw">
                    <img src={tw} alt="" className="signin-image"/>
                    Зарегистрироваться с помощью Twitter
                </div>
            </div>
        );
    }
}

export default SignUp;
