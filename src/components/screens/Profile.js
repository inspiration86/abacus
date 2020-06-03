import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,

    StatusBar,
    Text,
    Image,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Left, Input, Item, Label } from 'native-base';

// .................code................
export default class profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ''
        };
    }
    handleClick = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };

        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                this.setState({ image: response });
            }
        });

        // ImagePicker.launchImageLibrary({}, response => {
        //     console.log('Response = ', response);
        // });
    };

    render() {
        const { image } = this.state;


        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor='#47b03e'
                />
                <LinearGradient
                    style={styles.header}
                    start={{ x: 0.3, y: 0.0 }} end={{ x: 0.5, y: 1.0 }}
                    locations={[0.1, 0.6, 0.9]}
                    colors={['#3e843d', '#3ede30', '#47b03e']}>
                    <View style={styles.headerContent}>

                        <Text style={{ fontSize: 20, color: '#fff', marginBottom: 15, fontFamily: 'Far_Aref' }}>
                            پروفایل
                        </Text>
                    </View>
                </LinearGradient>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: -30 }}>
                    <Image style={styles.avatar} source={require('../../../assets/images/hh.png')} />
                    <View style={{
                        marginLeft: 120,
                    }}>
                        <TouchableOpacity>
                            <Icon style={{ marginTop: 50, fontSize: 25, color: '#5f7c04' }} name='camera' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 40, flex: 1, }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <Item fixedLabel>
                                <Left>
                                    <Button transparent>
                                        <Icon active name="mobile"  style={styles.icon} />
                                    </Button>
                                </Left>
                                <Input placeholder='شماره کاربری شما    09120435841' style={styles.input} />
                            </Item>
                            <Item fixedLabel>
                                <Left>
                                    <Button transparent>
                                        <Icon active name="user" style={styles.icon} />
                                    </Button>
                                </Left>
                                <Input placeholder='لطفا نام و نام خانوادگی خود را وارد نمایید' value={this.state.DateStartText} style={styles.input} />
                            </Item>
                            <Item fixedLabel>
                                <Left>
                                    <Button transparent>
                                        <Icon active name="male" style={styles.icon} />
                                    </Button>
                                </Left>
                                <Input placeholder='لطفا سن خود را وارد نمایید' style={styles.input} />
                            </Item>
                            <Item fixedLabel>
                                <Left>
                                    <Button transparent>
                                        <Icon active name="transgender" style={styles.icon} />
                                    </Button>
                                </Left>
                                <Input placeholder='لطفا جنسیت خود را وارد نمایید' style={styles.input} />


                            </Item>
                            <Item fixedLabel>
                                <Left>
                                    <Button transparent>
                                        <Icon Type='FontAwesome5' name="bank" style={styles.icon} />
                                    </Button>
                                </Left>
                                <Input placeholder='لطفا شهر خود را وارد نمایید' style={styles.input} />

                            </Item>

                            <Item fixedLabel>
                                <Left>
                                    <Button transparent>
                                        <Icon active name="file-text-o" style={styles.icon} />
                                    </Button>
                                </Left>
                                <Input placeholder=' لطفا مدرک  تحصیلی خود را وارد نمایید' style={styles.input} />
                            </Item>
                        </View>
                    </ScrollView>
                </View>
                <Button full success>
                    <Text style={{ color: '#fff', fontFamily: 'IRANSansMobile(FaNum)', fontSize: 16, }}>ویرایش پروفایل</Text>
                </Button>


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
    },
    headerContent: {
        padding: 60,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 1.5,
        borderColor: "#e2e2e2",
        alignSelf: 'center',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: '#00C851', fontSize: 25, marginLeft: 10,
    },
    input: {
        color: '#777777', fontFamily: 'IRANSansMobile(FaNum)', fontSize: 12, marginRight: 10
    },


});
