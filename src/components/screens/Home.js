import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image, FlatList, TouchableOpacity, Alert, StatusBar,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import AwesomeAlert from 'react-native-awesome-alerts';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';

export default class Home extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.navigation);
        this.state = {
            open: false,
            showAlert: false,
            titles: '',
            data: [
                {
                    id: 1,
                    title: 'بودجه بندی',
                    image: require('../../../assets/images/icons/budget.png'),

                }
                ,
                {
                    id: 2,
                    title: 'ثبت مخارج',
                    image: require('../../../assets/images/icons/2506838.png'),
                }
                ,
                {
                    id: 3,
                    title: 'ثبت درآمد',
                    image: require('../../../assets/images/icons/2503483.png'),
                }
                ,
                {
                    id: 4,
                    title: 'دخل و خرج',
                    image: require('../../../assets/images/icons/2760970.png'),

                }
                ,
                {
                    id: 5,
                    title: 'ثبت بدهی',
                    image: require('../../../assets/images/icons/debt.png'),
                }
                ,
                {
                    id: 6,
                    title: 'یادآوری',
                    image: require('../../../assets/images/icons/1792931.png'),

                }
                ,
                {
                    id: 7,
                    title: 'تراکنش ها',
                    image: require('../../../assets/images/icons/taransaction.png'),

                }
                ,
                {
                    id: 8,
                    title: 'پرداخت آنلاین',
                    image: require('../../../assets/images/icons/pardakhtonline.png'),
                }
                ,
                {
                    id: 9,
                    title: 'موجودی',
                    image: require('../../../assets/images/icons/639365.png'),
                },
                {
                    id: 10,
                    title: 'پرداخت قبض',
                    image: require('../../../assets/images/icons/1896987.png'),
                },
                {
                    id: 11,
                    title: 'خدمات دولتی',
                    image: require('../../../assets/images/icons/1017318.png'),
                },
                {
                    id: 12,
                    title: 'وام بانکی',
                    image: require('../../../assets/images/icons/loan.png'),

                },
            ],

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
                <StatusBar
                    hidden={true}
                    backgroundColor='#3e843d'
                />

                <LinearGradient start={{x: 0.40, y: 0.0}} end={{x: 0.5, y: 1.0}}
                                locations={[0, 0.5, 0.6]}
                                colors={['#3e843d', '#3ede30', '#47b03e']} style={{
                    height: 200, alignItems: 'center', justifyContent: 'center',
                }}>
                    <FontAwesomeIcon icon={faBars} size={25} style={{color: '#fff', marginLeft: '88%',}}
                                     onPress={() => this.props.screenProps.openDrawer()}/>
                    {/*<View style={{flex:5,backgroundColor:'#3d933c',borderRadius:30,marginTop:-30,justifyContent:'center',*/}
                    {/*    alignItems:'center'}}>*/}
                    <Image
                        source={require('../../../assets/images/icons/857385.png')}
                        style={{width: 65, height: 65}}
                    />
                    <Text style={{
                        textAlign: 'center',
                        color: '#fff',
                        fontSize: 40,
                        fontFamily: 'Far_Aref',
                        marginTop: -10,
                        marginBottom: 8,
                    }}>چرتکه</Text>
                    {/*</View>*/}
                </LinearGradient>
                <View style={styles.Detail}>
                    <View style={styles.detailContent}>
                        <Image style={styles.icon1} source={require('../../../assets/images/icons/2760970.png')}/>
                        <Text style={styles.textHeader}>مبلغ بدهی</Text>
                        <Text style={styles.textHeader}>500000 تومان</Text>

                    </View>
                    <View
                        style={[styles.detailContent,{borderLeftWidth: 1,
                            borderColor: '#e2e2e2',}]}>
                        <Image style={styles.icon1} source={require('../../../assets/images/icons/1312175.png')}/>
                        <Text style={styles.textHeader}>مخارج</Text>
                        <Text style={styles.textHeader}>500000 تومان</Text>

                    </View>
                    <View  style={[styles.detailContent,{borderLeftWidth: 1,
                        borderColor: '#e2e2e2'}]}>
                        <Image style={styles.icon1} source={require('../../../assets/images/icons/2553139.png')}/>
                        <Text style={styles.textHeader}>مانده</Text>
                        <Text style={styles.textHeader}>500000 تومان</Text>
                    </View>
                </View>
                    <FlatGrid
                        itemDimension={100}
                        items={this.state.data}
                      style={{marginTop:50}}
                              contentContainerStyle={{justifyContent:'center', alignItems:'center'}}
                        renderItem={({ item, index }) => (
                    <View>
                            {/* onPress={() => this.showAlert(item)}>*/}
                    <Card style={{width:'100%',height: 120,
                        shadowColor: '#3d933c',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                            marginRight: 16,
                            marginBottom: 12
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 12,
                        borderColor:'#3d933c',borderRadius:15,
                        borderWidth:1.5,alignItems: 'center', justifyContent:'center',
                      }}
                          onPress={() => this.props.navigation.navigate('Report')}>
                        <Card.Cover style={{width:80,height: 75,backgroundColor:'#fff',marginTop:5}} source={item.image} />
                        <Card.Title title={item.title}     titleStyle={{
                                                        fontSize: 14,
                                                        color: '#111',
                                                        fontFamily: 'IRANSansMobile(FaNum)',
                                                        marginHorizontal: -10,
                                                        marginTop: -10
                                                    }}/>

                    </Card>
                </View>
                            )} />

                {/*<Button icon="plus-circle"*/}
                {/*        style={styles.buttonstyle}*/}
                {/*        mode="contained"*/}
                {/*>*/}
                {/*    <Text style={{fontSize: 16,fontFamily: 'IRANSansMobile'}}>گزارشگیری</Text>*/}
                {/*</Button>*/}


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


                {/*
    {/*<View style={{flex:3,marginTop:10}}>*/}
                {/*<IconButton*/}
                {/*    icon="camera"*/}
                {/*    color='#3d933c'*/}
                {/*    size={20}*/}
                {/*    onPress={() => console.log('Pressed')}*/}
                {/*/>*/}


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    icon: {
        flex: 1,
        borderColor: '#3d933c',
        borderWidth: 1.5,
        margin: 7,
        height: '100%',
        borderRadius: 15,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Detail: {
        width: 280,
        alignSelf: 'center',
        marginTop: 165,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        shadowColor: '#808080',
        shadowOffset: {
            width: 0,
            height: 2,
            marginVertical: 5,
            marginRight: 16,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 12,
    },
    detailContent: {
        marginHorizontal: 5,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',

        padding:5,
        height:70
    },
    icon1: {
        width: 35,
        height: 35,
    },
    buttonstyle: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 195,
        height: 40,
        borderRadius: 5,
        shadowColor: '#00000021',
        backgroundColor: '#3d933c',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    textHeader:{
        fontSize: 11,
        fontFamily: 'IRANSansMobile(FaNum)',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
