import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, FlatList, TouchableOpacity, Alert, ScrollView, ImageBackground, StatusBar,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import AwesomeAlert from 'react-native-awesome-alerts';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class LoginOrRegister extends Component {
    constructor(props) {

        super(props);
        console.log(this.props.navi)
        this.state = {
            open: false,
            showAlert: false,
            titles: '',

        };
    }

    toggleDrawer = () => {
        this.props.navigation.openDrawer();
    };
    _onStateChange = ({open}) => this.setState({open});

    clickEventListener(item) {
        Alert.alert(item.title);
    }

    showAlert = (item) => {
        this.setState({
            showAlert: true,
            titles: item.title,

        });
    };
    hideAlert = () => {
        this.setState({
            showAlert: false,
        });
    };

    render() {
        const {open} = this.state;
        const {showAlert} = this.state;
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           barStyle="light-content"/>
                <LinearGradient start={{x: -0.1, y: 0.9}} end={{x: 0.6, y: 1.0}}
                                locations={[0,0.5,0.9]}
                                style={styles.header}
                                colors={['#3e843d','#3ede30','#47b03e']} >
                <View style={styles.headerContent}>
                        <Image style={{width: 90, height: 90}}
                               source={require('../../../assets/images/icons/857385.png')}/>

                        <Text style={{
                            fontSize: 40,
                            color: '#fff',
                            fontFamily: 'Far_Aref',
                        }}>
                        چرتکه
                        </Text>

                    </View>
                    {/*d6f5d3*/}
                <Card
                    style={{
                        marginTop:40,
                        backgroundColor:'#c5f3c1',
                        width: '140%',height:'70%', alignSelf: 'center',
                        borderRadius: 60,
                        shadowColor: '#3d933c',
                        marginBottom: 20,
                        shadowOffset: {
                            width: 0,
                            height: 9,
                            marginRight: 16,
                            marginBottom: 12,
                        },
                        shadowOpacity: 0.50,
                        shadowRadius: 7.49,
                        elevation: 19,
                        alignItems: 'center', justifyContent: 'center'
                    }}>
                    <View style={{marginTop: 100}}>
                        <Button buttonStyle={{
                            marginVertical: 20,
                            backgroundColor: '#47b03e',
                            borderRadius: 30,
                            width: '100%',
                            height: 48,
                            shadowColor: '#43c164',
                            shadowOffset: {
                                width: 0,
                                height: 6,
                            },
                            shadowOpacity: 0.37,
                            shadowRadius: 7.49,
                            elevation: 5,
                        }}
                                onPress={() => this.props.navigation.navigate('Login')}
                                titleStyle={{color: '#fff',fontFamily:'IRANSansMobile(FaNum)',fontSize:18}}


                                title="ورود"
                        />
                        <Button buttonStyle={{
                            marginVertical: 15,
                            backgroundColor: '#47b03e',
                            borderRadius: 30,
                            width: '100%',
                            height: 48,
                            shadowColor: '#43c164',
                            shadowOffset: {
                                width: 0,
                                height: 6,
                            },
                            shadowOpacity: 0.37,
                            shadowRadius: 7.49,
                            elevation: 5,
                        }}
                                onPress={() => this.props.navigation.navigate('Register')}
                                titleStyle={{color: '#fff',fontFamily:'IRANSansMobile(FaNum)',fontSize:18}}

                                title="ثبت نام"
                        />
                    </View>
                </Card>
                </LinearGradient>


                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title={this.state.titles}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    titleStyle={{fontSize: 16, fontFamily: 'IRANSansMobile(FaNum)', textAlign: 'justify'}}
                    messageStyle={{fontSize: 15, fontFamily: 'IRANSansMobile(FaNum)'}}
                    confirmText="تایید"
                    confirmButtonColor="#3d933c"
                    confirmButtonStyle={{width: 90}}
                    confirmButtonTextStyle={{
                        fontSize: 17,
                        fontFamily: 'IRANSansMobile(FaNum)',
                        textAlign: 'center',
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },


    header: {
        backgroundColor: '#3d933c',
        padding: 60,
    },
    headerContent: {
        marginTop: 70,
        alignItems: 'center',

    },

    Detail: {
        width: 60,
        height: 60,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginTop: 10,
        flexDirection: 'row',
        marginRight: 10,
        //  position: 'absolute',
        backgroundColor: '#e0e0e0',
        borderRadius: 60,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
            marginVertical: 5,
            marginRight: 16,
            marginBottom: 5,

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 12,


    },
    detailContent: {
        margin: 10,
        alignItems: 'center',
    },


    /******** card **************/
    card: {
        shadowColor: '#474747',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginVertical: 5,
        borderRadius: 10,
        marginHorizontal: 10,
        backgroundColor: '#3d933c',
        //flexBasis: '42%',
        width: 90,
        height: 90,

        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        flex: 1,
    },
    cardHeader: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 16,
        flex: 1,
        alignSelf: 'center',
        color: '#696969',
    },
});

