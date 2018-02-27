import React, {Component} from 'react';
import './info-trip-page.css';

class InfoTrip extends Component {
    render() {
        return(
            <div className="infotrip">
                <h1 className="infotrip_title">
                    Ваша поездка почти готова
                </h1>

                <h3 className="infotrip_subtitle">
                    Опубликуйте и попутчики в скором времени Вас найдут
                </h3>

                <div className="infotrip_desc">

                </div>
            </div>
        );
    };
}

export default InfoTrip;