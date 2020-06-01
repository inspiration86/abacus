
import React, {Component} from 'react';
import {Divider, Dialog, Portal} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import CodeInput from 'react-native-confirmation-code-input';
import { faSms} from "@fortawesome/free-solid-svg-icons";
import { StyleSheet, View, Text, Platform, Alert, TouchableOpacity } from 'react-native';
import CountDown from 'react-native-countdown-component';
class SendMessage extends Component {
    onDoneCountdown = () => {
        Alert.alert("ارسال مجدد کد ...");
    }
    onPressCountdown = () => {
        Alert.alert("Countdown Component Press.");
    }

    _onFinishCheckingCode1(a) {
        if (a) {

            Alert.alert(
                'تائیده کد ارسالی',
                'فروشنده محترم خوش آمدید');

            this.props.navigation.push('DashboardSeller');
            console.log( this.props.navigation);
        } else
            Alert.alert(
                'تائیده کد ارسالی',
                'فروشنده محترم کد وارد شده اشتباه می باشد. مجدد تلاش کنید');
    }
    componentDidMount() {
    }

    render() {

        return (

            <View style={{justifyContent: 'center', marginTop: '10%',}}>

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
                                compareWithCode='12345'
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
                </View>
                <View style={{flex:1,justifyContent: 'center',alignItems:'center',marginTop:60}}>

                    <View style={styles.MainContainer}>

                        <CountDown
                            until={5}
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
