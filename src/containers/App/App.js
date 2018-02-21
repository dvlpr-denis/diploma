import React, {Component} from 'react';
import './App.css';
import img from './image/camera.png';
import fb from './image/fb_icon.png';
import tw from './image/tw_icon.png';

import SigninForm from "../../components/signin/sigin";

class App extends Component {
    render() {

        return (
            <div className="App">
                <div className="App-image">
                    <img src={img} alt=""/>
                </div>

                <SigninForm />

                <div className="signin-facebook">
                    <img src={fb} alt="" className="signin-image"/>
                    Войти с помощью Facebook
                </div>

                <div className="signin-tw">
                    <img src={tw} alt="" className="signin-image"/>
                    Войти с помощью Twitter
                </div>
            </div>
        );
    }
}

export default App;
