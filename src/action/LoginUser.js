import {
    MOBILE_CHANGED,
    PASSWORD_CHANGED,
    USER_LOGIN_ATTEMP,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,USER_GET_DATA
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
export const userGetData = (text) => {
    return {
        type: USER_GET_DATA,
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

            if (responseJson.success === true) {
               userGetData('sddsd')
                loginSellerSuccess(dispatch, navigation,responseJson.data);
            } else {

                loginSellerFail(dispatch,responseJson.data);
            }
        }).catch((error) => {
            console.error(error);
        });
    }

}
const loginSellerSuccess = (dispatch, navigation,data) => {

    dispatch({type: USER_LOGIN_SUCCESS,payload:data});
    const NavigationAction = NavigationActions.navigate({routeName: 'DashboardUser', params: {},})
    navigation.dispatch(NavigationAction);

}
const loginSellerFail = (dispatch,error) => {
    dispatch({type: USER_LOGIN_FAIL,payload:error});

}
