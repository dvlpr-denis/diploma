import React, { Component } from 'react';
import './choice.css';
import {Link} from 'react-router-dom';
import Editheader from 'components/editheader/Editheader';

class ChoicePage extends Component {
    render() {
        return (
            <div className="ChoisePage">
                <Editheader />

                <h1 className="choise_title">
                    Едете куда-то?<br/>
                    Найдите попутчика
                </h1>

                <Link to="/offertrip">
                    Предложить поездку
                </Link> <br/>

                <Link to={"/foundtrip"}>
                    Найти поездку
                </Link>
            </div>
        );
    };
}

export default ChoicePage;