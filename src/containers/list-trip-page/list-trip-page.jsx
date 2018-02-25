import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './list-trip-page.css';


class ListTrip extends Component {
    render() {
        return (
            <div>
                <h3 className="list-trip_title">
                    Завтра
                </h3>

                <div className="list-trip_item">
                    <Link to="/details">
                        <div className="trip-from_row">
                            <div className="time">
                                12:40
                            </div>

                            <div className="from">
                                Одесса
                            </div>

                            <div className="price">
                                310 грн.
                            </div>
                        </div>

                        <div className="trip-where_row">
                            <div className="time">
                                21:40
                            </div>

                            <div className="from">
                                Киев
                            </div>
                        </div>
                    </Link>
                </div>

                <h3 className="list-trip_title">
                    Завтра
                </h3>

                <div className="list-trip_item">
                    <Link to="/details">
                        <div className="trip-from_row">
                            <div className="time">
                                12:40
                            </div>

                            <div className="from">
                                Одесса
                            </div>

                            <div className="price">
                                310 грн.
                            </div>
                        </div>

                        <div className="trip-where_row">
                            <div className="time">
                                21:40
                            </div>

                            <div className="from">
                                Киев
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    };
}

export default ListTrip;