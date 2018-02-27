import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, Switch} from 'react-router';
import PrivateRoute from 'components/private-route';

import './index.css';
import 'react-notifications/lib/notifications.css';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory';
import configureStore from 'store/configureStore';
import {NotificationContainer} from 'react-notifications';

import App from 'containers/App/App';
import ChoicePage from 'containers/choice-page/choice';
import OfferTripPage from "./containers/offer-trip-page/offer-trip-page";
import FoundTripPage from "./containers/found-trip-page/found-trip-page";
import PricePage from "./containers/price-page/price-page";
import InfoTrip from "./containers/info-trip-page/info-trip-page";
import ListTrip from "./containers/list-trip-page/list-trip-page";
import DetailsTrip from "./containers/details-trip-page/details-trip-page";
import SignUp from "./containers/signup-page/signup";
import SignIn from "./containers/signin-page/signin";

const history = createHistory();
const store = configureStore(history);

ReactDOM.render([
    <Provider key='Provider' store={store}>
        <Router history={history}>
            <Switch>
                <PrivateRoute exact path='/' component={App}/>
                <PrivateRoute path='/choicepage' component={ChoicePage}/>
                <PrivateRoute path='/offertrip' component={OfferTripPage}/>
                <PrivateRoute path='/foundtrip' component={FoundTripPage}/>
                <PrivateRoute path='/price' component={PricePage}/>
                <PrivateRoute path='/infotrip' component={InfoTrip}/>
                <PrivateRoute path='/listtrip' component={ListTrip}/>
                <PrivateRoute path='/details' component={DetailsTrip}/>
                <Route path='/signup' component={SignUp}/>
                <Route path='/signin' component={SignIn}/>
            </Switch>
        </Router>
    </Provider>,
    <NotificationContainer key='NotificationContainer'/>
    ], document.getElementById('root'));
registerServiceWorker();
