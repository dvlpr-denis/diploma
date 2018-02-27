import React, {Component} from 'react';
import SignupForm from "../../components/signup-form/index";
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userSignin} from '../../store/actions/user.actions';
import img from './image/camera.png';
import fb from './image/fb_icon.png';
import tw from './image/tw_icon.png';

class SignUp extends Component {
    constructor(props) {
        super();
    }

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

function mapDispatchToProps(dispatch) {
    return {
        userSignin: bindActionCreators(userSignin, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(withRouter(SignUp));
