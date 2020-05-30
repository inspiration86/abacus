import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Home from '../screens/Home';
import AdvancedSearch from '../screens/AdvancedSearch';
import ReportDay from '../screens/ReportDay';
import ReportYear from '../screens/ReportYear';
import Report from "../screens/Report";
import RegisterIncome from '../screens/RegisterIncome';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell, faCalculator, faChartPie, faHome} from '@fortawesome/free-solid-svg-icons';
import {faUserClock} from '@fortawesome/free-solid-svg-icons/faUserClock';
import {faCalendar} from '@fortawesome/free-solid-svg-icons/faCalendar';
import {faCoins} from '@fortawesome/free-solid-svg-icons/faCoins';
const RootStack = createStackNavigator({
        Home: {
            screen: Home,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        RegisterIncome: {
            screen: RegisterIncome,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        ReportDay: {
            screen: ReportDay,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
        ReportYear: {
            screen: ReportYear,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            })
        },
    },
    {
        initialRouteName:"Home",
        defaultNavigationOptions: {headerShown: false}
    }
);
 class BottomTabNavigator extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return     <AppContainer screenProps={this.props.navigation}/>;
    }
}
const AppMaterialTopTabNavigator = createMaterialBottomTabNavigator(
    {
        'جستجوی پیشرفته':{screen:AdvancedSearch,
            navigationOptions:{
                tabBarLabel: 'جستجوی پیشرفته',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <FontAwesomeIcon icon={faBell} size={20} style={{color: tintColor}}/>

                    </View>),
            }
        },
        'گزارشگیری':{screen:Report,
            navigationOptions:{
                tabBarLabel:'گزارشگیری',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        {/*<Icon style={[{color: tintColor}]} size={25} name={'alert'}/>*/}
                        <FontAwesomeIcon icon={faBell} size={20} style={{color: tintColor}}/>
                    </View>),
            }
        },
        'صفحه اصلی':{screen:Home,
            navigationOptions:{
                tabBarLabel:'صفحه اصلی',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <FontAwesomeIcon icon={faHome} size={20} style={{color: tintColor}}/>

                    </View>),
            }
        },

    },
    {
        initialRouteName: 'صفحه اصلی',
        activeColor: '#3d933c',
        inactiveTintColor: 'grey',
        barStyle: { backgroundColor: '#fff'},
        swipeEnabled: true,
        animationEnabled: true,
        shifting:false,
    },
);

const AppContainer = createAppContainer(AppMaterialTopTabNavigator);
export default BottomTabNavigator;
