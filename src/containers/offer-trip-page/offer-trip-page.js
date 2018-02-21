import React, { Component } from 'react';
import './offer-trip-page.css';

class OfferTripPage extends Component {

    submitTrip = event => {
        event.preventDefault();
        this.props.history.push('/price');
    };

    render() {
        return (
            <form action="#" className="offertrip_form" onSubmit={this.submitTrip}>
                <div className="offertrip_input">
                    <input type="text" name="from" placeholder="Откуда?" />
                </div>

                <div className="offertrip_input">
                    <input type="text" name="to" placeholder="Куда?" />
                </div>

                <div className="offertrip_input">
                    <input type="date" name="oclok" placeholder="Когда?" />
                </div>

                <div className="offertrip_input">
                    <input type="text" name="hours" placeholder="Во сколько?" />
                </div>

                <div className="offertrip_input">
                    <input type="submit" name="hours" value="Добавить поездку" />
                </div>
            </form>
        );
    };
}

export default OfferTripPage;