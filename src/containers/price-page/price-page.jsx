import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './price-page.css';

class PricePage extends Component {
    render() {
        return (
            <div className="pricepage">
                <h1 className="pricepage_title">
                    Ориентировочная стоимость за одного пассажира
                </h1>

                <div className="pricepage_price">
                    480 грн.
                </div>

                <Link to="/infotrip" className="pricepage_confirm">
                    Подтвердить
                </Link>

                <div className="pricepage_change">
                    Корректировать цену
                </div>
            </div>
        );
    };
}

export default PricePage;