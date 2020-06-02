
import React, {Component} from 'react';
import {Divider, Dialog, Portal} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import CodeInput from 'react-native-confirmation-code-input';
import { faSms} from "@fortawesome/free-solid-svg-icons";
import {Button} from 'react-native-elements';

import {StyleSheet, View, Text, Platform, Alert, TouchableOpacity, ScrollView} from 'react-native';
import CountDown from 'react-native-countdown-component';
class SendMessage extends Component {
    constructor(props){
        super(props);
        console.log(this.props.navigation.state.params)
        this.state={
            mobile:this.props.navigation.state.params.mobile,
            password:this.props.navigation.state.params.password,
            codeOTD:''
        }
    }
    onDoneCountdown = () => {
        Alert.alert("ارسال مجدد کد ...");
    }
    onPressCountdown = () => {
        Alert.alert("Countdown Component Press.");
    }

    _onFinishCheckingCode1(a) {
        if (a) {
            // this.onRegister()
        } else
            Alert.alert(
                '',
                'کاربر محترم کد وارد شده اشتباه می باشد. مجدد تلاش کنید');
    }
    componentDidMount() {
      this.onSendSMS();
    }
    onSendSMS(){
        fetch('http://194.5.175.25:2000/api/v1/sendsms', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mobile: this.state.mobile,

            }),
        }).then((response) => response.json()).then((responseJson) => {
            console.log(responseJson)
            if (responseJson.success === true) {
                this.setState({codeOTD:responseJson.data})
                console.log(responseJson.data);
            } else {

                console.log(responseJson.data);
            }
        }).catch((error) => {
            console.error(error);
        });
    }
onRegister(){
        console.log('jjj')
    fetch('http://194.5.175.25:2000/api/v1/register', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            mobile: this.state.mobile,
            password: this.state.password,
        }),
    }).then((response) => response.json()).then((responseJson) => {
        console.log(responseJson)
        if (responseJson.success === true) {
            this.props.navigation.push('Login');

        } else {
            console.log(responseJson.data);

        }
    }).catch((error) => {
        console.error('yyy');
    });
}
    render() {

        return (

            <View style={{justifyContent: 'center', marginTop: '10%',}}>
       <ScrollView>
                <View style={{justifyContent: 'center',alignItems:'center',marginBottom:20,marginTop:30}}>
                    <FontAwesomeIcon icon={faSms} size={70} style={{color:'#47b03e',marginBottom:10}}/>

                </View>
                <View style={
                    {
                        borderColor: '#47b03e',
                        borderWidth: 1,
                        borderRadius: 10,
                        marginHorizontal: 10,
                        marginVertical: 20
                    }}>
                    <View style={{flex: 1}}>
                        <Text style={{
                            fontSize: 15,
                            paddingVertical: 10,
                            fontFamily: 'IRANSansMobile',
                            backgroundColor: '#47b03e',
                            color: '#fff',
                            textAlign: 'center',
                            borderRadius: 5
                        }}>
                            کد ارسال شده را وارد نمائید:
                        </Text>
                    </View>

                    <Divider style={{backgroundColor: '#33b5e5'}}/>
                    <View style={{height: 170, marginTop: 20, flexDirection: 'row',}}>
                        <View style={{
                            flex: 1,
                            borderRadius: 10,
                            borderColor: '#dddddd',
                            marginTop: 30,
                            width: 160,
                            height: 120,
                        }}
                        >
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)', color: '#777', textAlign: 'center',fontSize:16}}>کد
                                پنج رقمی به شماره همراه شما ارسال شد.</Text>
                            <CodeInput
                                ref="codeInputRef2"
                                secureTextEntry
                                compareWithCode={this.state.codeOTD}
                                activeColor='#47b03e'
                                inactiveColor='#777'
                                autoFocus={false}
                                ignoreCase={true}
                                inputPosition='center'
                                size={60}
                                onFulfill={(compareWithCode, code) => this._onFinishCheckingCode1(compareWithCode)}
                                containerStyle={{marginTop: 25}}
                                codeInputStyle={{borderWidth: 1.5, fontSize: 30,borderRadius:10}}
                            />

                        </View>


                    </View>
                    <Button buttonStyle={{
                        marginTop: 10,
                        marginLeft:25,
                        backgroundColor: '#47b03e',
                        borderRadius: 30,
                        width: '80%',
                        height: 45,
                        shadowColor: '#43c164',
                        shadowOffset: {
                            width: 0,
                            height: 6,
                        },
                        shadowOpacity: 0.37,
                        shadowRadius: 7.49,
                        elevation: 5,
                        marginBottom:20
                    }}
                            onPress={() => this.onRegister()}
                            titleStyle={{color: '#fff',fontFamily:'IRANSansMobile(FaNum)',fontSize:18}}

                            title="ثبت نهایی"
                    />

                        {/*{setTimeout(()=>{*/}
                            <Text style={{marginHorizontal:10,color:'#777', fontFamily:'IRANSansMobile(FaNum)',fontSize:15}} onPress={()=> this.onSendSMS()}>ارسال مجدد کد</Text>
                        {/*},6000)}*/}

                </View>
                <View style={{flex:1,justifyContent: 'center',alignItems:'center',marginTop:5}}>

                    <View style={styles.MainContainer}>

                        <CountDown
                            until={180}
                            onFinish={this.onDoneCountdown}
                            onPress={this.onPressCountdown}
                            size={23}
                            timeToShow={['M','S']}
                            digitTxtStyle={{color: '#fff',marginTop:-10}}
                            digitStyle={{backgroundColor: '#47b03e'}}
                            timeLabelStyle={{color:'#fff',marginTop:10}}
                            timeLabels={{m: 'دقیقه', s: 'ثانیه'}}
                        />

                    </View>
                </View>
       </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
    }

});
export default SendMessage;
