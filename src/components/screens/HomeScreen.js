import React, {Component} from 'react';

import BottomTabNavigator from '../layouts/BottomTabNavigator'
import {View} from 'react-native';
class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <BottomTabNavigator navigation={this.props.navaigation}/>
            </View>
        );
    }
}

export default HomeScreen;
