import React, {Component} from 'react';
import './found-trip-page.css';

class FoundTripPage extends Component {

    foundTrip = event => {
        event.preventDefault();
        this.props.history.push('/listtrip');
    };

    render() {
        return (
            <div>
                <h1>
                    Найдите поездку по нужным Вам критериям
                </h1>
                <form action="#" className="foundtrip_form" onSubmit={this.foundTrip}>
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
            </div>
        );
    };
}

export default FoundTripPage;