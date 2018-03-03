import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userSignin} from '../../store/actions/user.actions';
import img from './image/camera.png';
import fb from './image/fb_icon.png';
import tw from './image/tw_icon.png';
import SigninForm from "../../components/signin-form";
import {NotificationManager} from 'react-notifications';


class Signin extends Component {
    login = async (login, password) => {
        const isLogin = await this.props.userSignin({username: login, password});
        
        if (isLogin) {
            this.props.history.push('/choicepage');
        } else {
            NotificationManager.error('Не верный логин или пароль');
        }
    };

    render() {
        return (
            <div className="signin App">
                <div className="App-image">
                    <img src={img} alt=""/>
                </div>

                <SigninForm onSubmit={this.login}/>

                <div className="signin-facebook">
                    <img src={fb} alt="" className="signin-image"/>
                    Войти с помощью Facebook
                </div>

                <div className="signin-tw">
                    <img src={tw} alt="" className="signin-image"/>
                    Войти с помощью Twitter
                </div>

                <Link to="/signup">
                    Нету аккаунта? Зарегистрироваться
                </Link>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userSignin: bindActionCreators(userSignin, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Signin));