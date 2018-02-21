import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory';


import App from 'containers/App/App';
import ChoicePage from 'containers/choice-page/choice';
import OfferTripPage from "./containers/offer-trip-page/offer-trip-page";
import FoundTripPage from "./containers/found-trip-page/found-trip-page";
import PricePage from "./containers/price-page/price-page";
import InfoTrip from "./containers/info-trip-page/info-trip-page";

const history = createHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/choicepage' component={ChoicePage}/>
            <Route path='/offertrip' component={OfferTripPage}/>
            <Route path='/foundtrip' component={FoundTripPage}/>
            <Route path='/price' component={PricePage}/>
            <Route path='/infotrip' component={InfoTrip}/>
        </Switch>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
