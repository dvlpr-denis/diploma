import React, {Component} from 'react';
import './App.css';
import img from './image/camera.png';
import fb from './image/fb_icon.png';
import tw from './image/tw_icon.png';
import createHistory from 'history/createBrowserHistory';
import SigninForm from "../../components/signin/sigin";

const history = createHistory();

class App extends Component {

    submitData = event => {
        event.preventDefault();
        history.push('/choicepage');
    };

    render() {

        return (
            <div className="App">
                <div className="App-image">
                    <img src={img} alt=""/>
                </div>

                <SigninForm  onSubmit={this.submitData} />

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
