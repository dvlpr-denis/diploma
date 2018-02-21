import React, {Component} from 'react';
import './found-trip-page.css';

class FoundTripPage extends Component {
    render() {
        return (
            <form action="#" className="foundtrip_form">
                <div className="foundtrip_input">
                    <input type="text" name="from" placeholder="Откуда?" />
                </div>

                <div className="foundtrip_input">
                    <input type="text" name="to" placeholder="Куда?" />
                </div>

                <div className="foundtrip_input">
                    <input type="date" name="oclok" placeholder="Когда?" />
                </div>

                <div className="foundtrip_input">
                    <input type="submit" name="hours" value="Найти поездку" />
                </div>
            </form>
        );
    };
}

export default FoundTripPage;