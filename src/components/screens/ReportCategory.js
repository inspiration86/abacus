import React, {Component, useState} from 'react';
import {CardItem, Input, Item, Label, View} from 'native-base';
import {StatusBar, StyleSheet, Image, ImageBackground} from 'react-native';
// import DefineBudgeting from './defineBudgeting'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Text, ScrollView} from 'react-native';
import {Card, List, Content, ListItem, Icon, Left, Body, Right, Title, Button} from 'native-base';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {
    faCar,
    faDollarSign, faHome, faMoneyBill,
    faPlane,
    faShuttleVan,
    faUser,
    faUsers,
    faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../layouts/Header';

import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {Divider} from 'react-native-paper';



export default class ReportCategory extends React.Component {

    render() {
    return (
        <View style={{flex: 1}}>
            <StatusBar
                hidden={false}
                backgroundColor='#3e843d'
            />
            <Header title={' گزارش براساس دسته ها'}/>
            <View style={{flex: 1}}>
                <ScrollView>
                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: '#00C851'}}>
                                <Icon active name="home"/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)'}}>خانه</Text>
                        </Body>
                        <Right>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)', color: '#00C851'}}>5000
                                تومان</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: '#33b5e5'}}>
                                <FontAwesomeIcon icon={faUtensils} color='#fff'/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)'}}>غذا و
                                خاروبار</Text>
                        </Body>
                        <Right>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)', color: '#00C851'}}>50000
                                تومان</Text>
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: '#FF8800'}}>
                                <Icon active name="home"/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)'}}>قبوض</Text>
                        </Body>
                        <Right>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)', color: '#00C851'}}>5000
                                تومان</Text>
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: '#aa66cc'}}>
                                <FontAwesomeIcon icon={faCar} color='#fff'/>

                            </Button>
                        </Left>
                        <Body>
                            <Text style={{textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)'}}>ماشین</Text>
                        </Body>
                        <Right>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)', color: '#00C851'}}>5000
                                تومان</Text>
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: '#2BBBAD'}}>
                                <FontAwesomeIcon icon={faShuttleVan} color='#fff'/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)'}}>حمل و
                                نقل</Text>
                        </Body>
                        <Right>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)', color: '#00C851'}}>5000
                                تومان</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: '#039be5'}}>
                                <FontAwesomeIcon icon={faUser} color='#fff'/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)'}}>شخصی</Text>
                        </Body>
                        <Right>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)', color: '#00C851'}}>5000
                                تومان</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: '#ef6c00'}}>
                                <FontAwesomeIcon icon={faPlane} color='#fff'/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)'}}>سفر</Text>
                        </Body>
                        <Right>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)', color: '#00C851'}}>5000
                                تومان</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: '#004d40'}}>
                                <FontAwesomeIcon icon={faMoneyBill} color='#fff'/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)'}}>مالی</Text>
                        </Body>
                        <Right>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)', color: '#00C851'}}>5000
                                تومان</Text>
                        </Right>
                    </ListItem>

                </ScrollView>
            </View>



        </View>
    );
}}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent:'center'
    },
    header: {
        backgroundColor: '#3d933c',
    },

    headerContent: {
        padding: 50,
        alignItems: 'center',
    },
});

