import * as userActions from '../../constants/actions/user-actions.constants';
import authorization from '../../services/auth.service';

export function authStart() {
    return {type: userActions.AUTH_USER_START}
}

export function loginSuccess(user) {
    return {type: userActions.LOGIN_USER_SUCCESS, payload: user}
}

export function loginFail() {
    return {type: userActions.LOGIN_USER_FAIL}
}

export function userSignin({username, password}) {
    return async (dispatch) => {
        try {
            dispatch(authStart());



            const data = await authorization.login(username, password);

            dispatch(loginSuccess(data));

            return true;
        } catch (e) {
            dispatch(loginFail());

            return false;
        }
    }
}

export function userSignup(userData) {

}
