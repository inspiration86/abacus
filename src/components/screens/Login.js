import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Image,
    Alert,StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class TestLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email   : '',
            password: '',
        }
    }

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed "+viewId);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           barStyle="light-content" />

                <LinearGradient
                    style={styles.header}
                    start={{ x: -0.3, y: 0.0 }} end={{ x: 0.5, y: 1.0 }}
                    locations={[0.1, 0.6, 0.9]}
                    // start={{x: -0.1, y: 0.9}} end={{x: 0.6, y: 1.0}}
                    // locations={[0,0.5,0.9]}
                    colors={['#3e843d', '#3ede30', '#47b03e']}>

                    <View style={styles.headerContent}>
                        <Image style={{width:90,height:90}} source={require('../../../assets/images/icons/857385.png')} />
                        <Text style={{ fontSize: 20,fontFamily:'IRANSansMobile(FaNum)',color: '#fff', marginBottom: 5 }}>
                              ورود به اپ حسابداری شخصی چرتکه
                        </Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',marginTop:60}}>
                        <View style={styles.inputContainer}>
                            <Icon style={styles.inputIcon} name='user'color='#43c164'size={25} />
                            <TextInput style={styles.inputs}
                                       placeholder="شماره همراه"
                                       keyboardType="name-phone-pad"
                                       maxLength={11}
                                       underlineColorAndroid='transparent'
                                       onChangeText={(email) => this.setState({email})}/>
                        </View>

                        <View style={styles.inputContainer}>
                            <Icon style={styles.inputIcon} name='lock'color='#43c164' size={25} />
                            <TextInput style={styles.inputs}
                                       placeholder="رمز عبور"
                                       secureTextEntry={true}
                                       underlineColorAndroid='transparent'
                                       onChangeText={(password) => this.setState({password})}/>
                        </View>

                        <TouchableOpacity   activeOpacity={0.8} style={styles.btnForgotPassword} onPress={() => this.onClickListener('restore_password')}>
                            <Text style={styles.btnText}>رمز عبور خود را فراموش کرده اید؟</Text>
                        </TouchableOpacity>

                        <TouchableOpacity   activeOpacity={0.8} style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('DashboardUser')}>
                            <Text style={styles.loginText}>ورود</Text>
                        </TouchableOpacity>


                        <TouchableOpacity   activeOpacity={0.8} style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
                            <Text style={styles.btnText}> ثبت نام نکرده اید؟</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3d933c',
        width:'100%',
        height:'100%'

        // borderBottomLeftRadius:900
    },
    headerContent: {
        marginTop:70,
        alignItems: 'center',

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        marginTop:10,
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        width:300,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',

        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    inputs:{
        fontSize:16,
        height:45,
        marginRight:25,
        borderBottomColor: '#FFFFFF',
        fontFamily:'IRANSansMobile(FaNum)',
        flex:1,
    },
    inputIcon:{
        marginLeft: 20
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:300,
        borderRadius:30,
        backgroundColor:'transparent'
    },
    btnForgotPassword: {
        height:15,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginVertical:10,
        marginRight:10,
        width:300,
        backgroundColor:'transparent'
    },
    loginButton: {
        marginTop:20,
        backgroundColor: "#fff",

        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,
    },
    loginText: {
        color: '#777777',
        fontFamily:'IRANSansMobile(FaNum)',
        fontSize:18,


    },
    bgImage:{
        flex: 1,
        resizeMode,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    btnText:{
        color:"white",
        fontFamily:'IRANSansMobile(FaNum)',
        fontSize:17,
        marginRight:20

    }
});
