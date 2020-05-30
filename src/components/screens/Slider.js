import React from 'react';
import {StyleSheet, View, Text, Image, ImageBackground, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import DashboardUser from '../layouts/DashboardUser';

const slides = [
    {
        key: 1,
        title: 'Title 1',
        text: 'Description.\nSay something cool',
        image: require('../../../assets/images/back.png'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        title: 'Title 2',
        text: 'Other cool stuff',
        image: require('../../../assets/images/back.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        title: 'Rocket guy',
        text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
        image: require('../../../assets/images/back.png'),
        backgroundColor: '#22bcb5',
    }
];

export default class Slider extends React.Component {
    state = {
        showRealApp: false
    }
    _renderItem = ({ item }) => {
        return (
            <View>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           barStyle="light-content"/>
                <ImageBackground source={item.image}
                                 style={{width: '100%', height: '100%'}}>
                <Text style={{fontSize:30,marginTop:50,zIndex:999}} >{item.title}</Text>
                {/*<Image style={{}} source={item.image} />*/}
                <Text style={{fontSize:15}}>{item.text}</Text>
                </ImageBackground>
            </View>
        );
    }
    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
    }
    render() {
        if (this.state.showRealApp) {
            return <DashboardUser />;
        } else {
            return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
        }
    }
}
