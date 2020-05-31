import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// global screens
import Slider from './components/screens/Slider';
import Splash from './components/screens/Splash';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import DashboardUser from './components/layouts/DashboardUser';
import Register from './components/screens/Register';
import LoginOrRegister from './components/screens/LoginOrRegister';
const RootStack = createStackNavigator({
        Splash: {screen: Splash,navigationOptions: ({navigation}) => ({
            headerShown: false
            })},
        Home: {
            screen: Home,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        Slider: {
            screen: Slider,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        Login: {
            screen: Login,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        Register: {
            screen: Register,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        LoginOrRegister: {
            screen: LoginOrRegister,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        DashboardUser: {
            screen: DashboardUser,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
    },
    {
        initialRouteName: 'Splash',
    },
    {
        defaultNavigationOptions: {headerShown: false}
    }
);
export default createAppContainer(RootStack);
