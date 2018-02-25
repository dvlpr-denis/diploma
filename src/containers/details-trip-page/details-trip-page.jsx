import React, { Component } from 'react';
import './details-trip-page.css';

class DetailsTrip extends Component {
    render() {
        return (
            <div>
                <div className="details-trip_title">
                    Среда 28 февраля - 12:40
                </div>

                <div className="datails-trip_route">
                    Маршрут
                </div>

                <div className="details-trip_way">
                    12:40  - Одесса <br/>
                    21:40 - Киев
                </div>

                <div className="details-trip_info">
                    3 свободных места

                    <div className="details-trip_info-price">
                        310 грн / место
                    </div>
                </div>

                <div className="details-trip_driver">
                    Связаться с водителем
                </div>

                <div className="details-trip_distance">
                    530 km - 10 часов 30 минут в пути
                </div>

                <div className="details-trip_carinfo">
                    BMW X5M <br/>
                    черный цвет
                </div>

                <div className="details-trip_drivername">
                    Алексей
                </div>

                <div className="details-trip_buy">
                    Забронировать
                </div>
            </div>
        );
    };
}

export default DetailsTrip;