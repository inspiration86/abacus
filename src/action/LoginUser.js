import {
    MOBILE_CHANGED,
    PASSWORD_CHANGED,
    USER_LOGIN_ATTEMP,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS
} from './TypeLoginUser';
import {NavigationActions} from 'react-navigation';

export const mobileChanged = (text) => {
    return {
        type: MOBILE_CHANGED,
        payload: text
    }
}
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}
export const loginUser = ({mobile, password, navigation}) => {
    return (dispatch) => {

        dispatch({type: USER_LOGIN_ATTEMP})
        fetch('http://194.5.175.25:2000/api/v1/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mobile: mobile,
                password: password,
            }),
        }).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson)
            if (responseJson.success === true) {
                loginSellerSuccess(dispatch, navigation);
            } else {
                loginSellerFail(dispatch);
            }
        }).catch((error) => {
            console.error('yyy');
        });
    }

}
const loginSellerSuccess = (dispatch, navigation) => {

    dispatch({type: USER_LOGIN_SUCCESS});
    const NavigationAction = NavigationActions.navigate({routeName: 'DashboardUser', params: {},})
    navigation.dispatch(NavigationAction);

}
const loginSellerFail = (dispatch) => {
    dispatch({type: USER_LOGIN_FAIL})
}
