


import React, {Component} from 'react';
import {View} from "react-native";
import {Switch, Appbar} from 'react-native-paper';
import LinearGradient from "react-native-linear-gradient";

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Appbar.Header  style={{marginHorizontal:-5, justifyContent: 'center',
                    alignItems: 'center',}}>
                    <LinearGradient
                        start={{x: 0.48, y: 0.0}} end={{x: 0.5, y: 1.0}}
                        locations={[0.1,0.6,0.9]}
                        colors={['#47b03e','#47b03e','#47b03e']}
                        style={{
                            padding:10,
                            height: 56,
                            width: '100%',
                        }}>
                    <Appbar.Content
                        titleStyle={{
                            color: '#fff',
                            fontFamily: 'Iranian Sans',
                            fontSize: 20,
                            textAlign:'center',

                        }}
                        title={this.props.title}
                    />

                        <Appbar.Action  style={{marginLeft:340,
                            justifyContent: 'center',
                            alignItems: 'center',marginTop:-10}} color={'#fff'}
                                       size={40} icon={'chevron-right'} onPress={this.props.onBackPress} />
                    </LinearGradient>
                </Appbar.Header>
            </View>

        );
    }
}
