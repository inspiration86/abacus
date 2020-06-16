import React, {Component} from 'react';
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
import Modal from 'react-native-modalbox';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import ImagePicker from 'react-native-image-picker';
import moment from 'moment';
import Select2 from 'react-native-select-two';
// import DateTimePicker from 'react-native-modal-datetime-picker';
import DatePicker, {getFormatedDate} from 'react-native-modern-datepicker';
import {Switch} from 'react-native-paper';

//import Header from '../layouts/Header';
import LinearGradient from 'react-native-linear-gradient';
// import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import Modaldate from 'react-native-modal';
import {
    CardItem,
    Tabs,
    Tab,
    ListItem,
    TabHeading,
    Button,
    Left,
    Body,
    Title,
    Right,
    Icon,
    Form,
    Input,
    Item,
    Label,
} from 'native-base';

//.........const............
const typeIncome = [
    {id: 1, name: 'خانه'},
    {id: 2, name: 'قبوض'},
    {id: 3, name: 'شرکت'},
    {id: 4, name: 'ماشین'},
    {id: 5, name: 'تفریح و ورزش'},
    {id: 6, name: 'سفر'},
    {id: 7, name: 'شرکت'},
];
const acount = [
    {id: 1, name: 'از بانک ملی تا بانک صادرات'},
    {id: 2, name: 'بانک صادرات'},
    {id: 3, name: 'بانک تجارت'},
    {id: 4, name: 'بانک پارسیان'},
    {id: 5, name: 'حساب آرکا'},
    {id: 6, name: 'حساب دانشگاه لرستان'},
    {id: 7, name: 'حساب جهاد دانشگاهی'},
];


export default class advanced extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DateStartTextCost: '',
            DateEndTextCost: '',
            DateStartTextIncome: '',
            DateEndTextIncome: '',
            TimeText: '',
            DateHolder: null,
            PickerValueHolder: '',
            selected2: undefined,
            isSwitchOn: false,
            isSwitchtow: false,
        };
    }

    onValueChange2(value: string) {
        this.setState({
            selected2: value,
        });
    }

    render() {

        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor='#3e843d'
                />
                <LinearGradient
                    style={styles.header}
                    start={{x: 0.3, y: 0.0}} end={{x: 0.5, y: 1.0}}
                    locations={[0.1, 0.6, 0.9]}
                    colors={['#3e843d', '#3ede30', '#47b03e']}>
                    <View style={styles.headerContent}>
                        <Image
                            source={require('../../../assets/images/icons/1312175.png')}
                            style={{width: 50, height: 50}}
                        />
                        <Text style={{fontSize: 30, color: '#fff', marginBottom: 5, fontFamily: 'Far_Aref'}}>
                            جستجوی پیشرفته
                        </Text>
                    </View>
                </LinearGradient>
                <Tabs initialPage={1} tabBarUnderlineStyle={{backgroundColor: '#3ede30', height: 3}}>
                    <Tab heading={<TabHeading style={{backgroundColor: '#fff'}}>
                        <Text style={{color: 'green', fontWeight: 'bold', fontFamily: 'IRANSansMobile(FaNum)'}}>هزینه ها</Text>
                    </TabHeading>}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View>
                                <Item fixedLabel onPress={() => this.refs.modal1.open()}>
                                    <Left>
                                        <Button transparent >
                                            <Icon active name="calendar" style={{color: '#00C851', fontSize: 35}}/>
                                        </Button>
                                    </Left>
                                    <Text style={{color: '#777', fontFamily: 'IRANSansMobile(FaNum)'}}>{this.state.DateStartTextCost}</Text>

                                    <Label style={{
                                        paddingRight: 20,
                                    }}><Text style={{
                                        color: '#777', fontFamily: 'IRANSansMobile(FaNum)', paddingRight: 20,
                                    }}>از تاریخ:</Text></Label>

                                </Item>
                                <Modal
                                    style={[styles.modal4]}
                                    position={'bottom'}
                                    ref={'modal1'}
                                    coverScreen={true}
                                    useNativeDriver={true}
                                >

                                    <DatePicker isGregorian={false}
                                                mode='datepicker'
                                                options={{
                                                    defaultFont: 'Shabnam-Light',
                                                    headerFont: 'Shabnam-Medium',
                                                }}
                                                onDateChange={date => {
                                                    this.setState({DateStartTextCost: date});
                                                    this.refs.modal1.close();
                                                }

                                                }

                                                placeholder="Select date"
                                    />
                                    <Button full success>
                                        <Text style={{color: '#fff'}}>تایید</Text>
                                    </Button>
                                </Modal>


                                <Item fixedLabel Icon  onPress={() => this.refs.modal2.open()}>
                                    <Left>
                                        <Button transparent >
                                            <Icon active name="calendar" style={{color: '#00C851', fontSize: 35}}/>
                                        </Button>
                                    </Left>
                                    <Text style={{color: '#777', fontFamily: 'IRANSansMobile(FaNum)'}}> {this.state.DateEndTextCost} </Text>

                                    <Label style={{
                                        paddingRight: 20,
                                    }}> <Text style={{
                                        color: '#777', fontFamily: 'IRANSansMobile(FaNum)', marginLeft: 15,
                                    }}>تا تاریخ:</Text></Label>

                                </Item>
                                <Modal
                                    style={[styles.modal4]}
                                    position={'bottom'}
                                    ref={'modal2'}
                                    coverScreen={true}
                                    useNativeDriver={true}
                                >

                                    <DatePicker isGregorian={false}
                                                mode='datepicker'
                                                options={{
                                                    defaultFont: 'Shabnam-Light',
                                                    headerFont: 'Shabnam-Medium',
                                                }}
                                                onDateChange={date => {
                                                    this.setState({DateEndTextCost: date});
                                                    this.refs.modal2.close();
                                                }

                                                }

                                                placeholder="Select date"
                                    />
                                    <Button full success>
                                        <Text style={{color: '#fff'}}>تایید</Text>
                                    </Button>
                                </Modal>
                                <Item fixedLabel Icon>

                                    <Left>
                                        <Text style={{
                                            color: '#777', fontFamily: 'IRANSansMobile(FaNum)', marginLeft: 15,
                                        }}>ریال</Text>

                                    </Left>
                                    <Input keyboardType='number-pad'
                                           style={{color: '#777', fontFamily: 'IRANSansMobile(FaNum)'}}/>
                                    <Label style={{
                                        paddingRight: 20,
                                    }}><Text style={{
                                        color: '#777', fontFamily: 'IRANSansMobile(FaNum)', marginRight: 10,
                                    }}>از مبلغ:</Text></Label>

                                </Item>
                                <Item fixedLabel>
                                    <Left>
                                        <Text style={{
                                            color: '#777', fontFamily: 'IRANSansMobile(FaNum)', marginLeft: 15,
                                        }}>ریال</Text>
                                    </Left>
                                    <Input keyboardType='number-pad'
                                           style={{color: '#777', fontFamily: 'IRANSansMobile(FaNum)'}}/>
                                    <Label style={{
                                        paddingRight: 20,
                                    }}><Text style={{
                                        color: '#777', fontFamily: 'IRANSansMobile(FaNum)', marginRight: 10,
                                    }}>تا مبلغ:</Text></Label>

                                </Item>
                                <ListItem Icon>
                                    <Left>
                                        <Button transparent style={{marginLeft: -10}}>
                                            <Icon active name="list" style={{color: '#00C851', fontSize: 35}}/>
                                        </Button>

                                    </Left>
                                    <Body>
                                        <Select2
                                            isSelectSingle={true}
                                            // colorTheme='#3d933c'
                                            popupTitle="انتخاب نوع  دسته ها"
                                            cancelButtonText="انصراف"
                                            // newButtonText="جدید"
                                            selectButtonText="تایید"
                                            // title="نوع دسته ها"
                                            style={{color: '#777', fontFamily: 'IRANSansMobile(FaNum)'}}
                                            searchPlaceHolderText="جستجو نوع دسته"
                                            data={typeIncome}
                                            onSelect={data => {
                                                this.setState({data});
                                            }}
                                            onRemoveItem={data => {
                                                this.setState({data});
                                            }}
                                        />
                                    </Body>
                                    <Right>
                                        <Text style={{
                                            color: '#777',
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            marginHorizontal: -10,
                                        }}>دسته ها:</Text>

                                    </Right>
                                </ListItem>
                                <ListItem Icon>
                                    <Left>
                                        <Button transparent style={{marginLeft: -10}}>
                                            <Icon active name="card" style={{color: '#00C851', fontSize: 35}}/>
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Select2

                                            isSelectSingle={true}
                                            colorTheme='#3d933c'
                                            popupTitle="انتخاب حساب"
                                            cancelButtonText="انصراف"
                                            selectButtonText="تایید"
                                            // title="انتخاب حساب"
                                            searchPlaceHolderText="جستجو حساب"
                                            data={acount}
                                            onSelect={data => {
                                                this.setState({data});
                                            }}
                                            onRemoveItem={data => {
                                                this.setState({data});
                                            }}
                                        />
                                    </Body>

                                    <Right>
                                        <Text style={{
                                            color: '#777',
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            marginHorizontal: -10,
                                        }}>حساب ها:</Text>

                                    </Right>
                                </ListItem>

                            </View>


                        </ScrollView>
                        <Button full style={{backgroundColor: '#47b03e'}}>
                            <Text
                                style={{color: '#fff', fontSize: 16, fontFamily: 'IRANSansMobile(FaNum)'}}>جستجو</Text>
                        </Button>
                    </Tab>
                    <Tab heading={<TabHeading style={{backgroundColor: '#fff'}}>
                        <Text style={{color: '#3e843d', fontFamily: 'IRANSansMobile(FaNum)'}}> درآمدها</Text>
                    </TabHeading>}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View>
                                <TouchableOpacity>
                                    <Item fixedLabel Icon  onPress={() => this.refs.modal3.open()}>
                                        <Left>
                                            <Button transparent onPress={() => this.refs.modal3.open()}>
                                                <Icon active name="calendar" style={{color: '#00C851', fontSize: 35}}/>
                                            </Button>
                                        </Left>
                                        <Text style={{color: '#777', fontFamily: 'IRANSansMobile(FaNum)'}}>{this.state.DateStartTextIncome}</Text>
                                        <Label style={{
                                            paddingRight: 20,
                                        }}><Text style={{
                                            color: '#777', fontFamily: 'IRANSansMobile(FaNum)', paddingRight: 20,
                                        }}>از تاریخ:</Text></Label>

                                    </Item>
                                </TouchableOpacity>
                                {/*............ ........modal4................................. */}

                                <Modal
                                    style={[styles.modal4]}
                                    position={'bottom'}
                                    ref={'modal3'}
                                    coverScreen={true}
                                >

                                    <DatePicker isGregorian={false}
                                                mode="date"
                                                options={{
                                                    defaultFont: 'Shabnam-Light',
                                                    headerFont: 'Shabnam-Medium',
                                                }}
                                                onDateChange={date => {
                                                    this.setState({DateStartTextIncome: date});
                                                    this.refs.modal3.close();
                                                }

                                                }

                                                placeholder="Select date"
                                    />
                                    <Button full success>
                                        <Text style={{color: '#fff'}}>تایید</Text>
                                    </Button>
                                </Modal>


                                <Item fixedLabel Icon  onPress={() => this.refs.modal4.open()}>

                                <Left>
                                        <Button transparent onPress={() => this.refs.modal4.open()}>
                                            <Icon active name="calendar" style={{color: '#00C851', fontSize: 35}}/>
                                        </Button>
                                    </Left>
                                    <Text style={{color: '#777', fontFamily: 'IRANSansMobile(FaNum)'}}>{this.state.DateEndTextIncome}</Text>
                                    <Label style={{
                                        paddingRight: 20,
                                    }}> <Text style={{
                                        color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light', marginLeft: 10,
                                    }}>تا تاریخ:</Text></Label>

                                </Item>
                                <Modal
                                    style={[styles.modal4]}
                                    position={'bottom'}
                                    ref={'modal4'}
                                    coverScreen={true}
                                >

                                    <DatePicker isGregorian={false}
                                                mode="date"
                                                options={{
                                                    defaultFont: 'Shabnam-Light',
                                                    headerFont: 'Shabnam-Medium',
                                                }}
                                                onDateChange={date => {
                                                    this.setState({DateEndTextIncome: date});
                                                    this.refs.modal4.close();
                                                }

                                                }

                                                placeholder="Select date"
                                    />
                                    <Button full success>
                                        <Text style={{color: '#fff'}}
                                              onPress={() => this.refs.modal4.close()}>تایید</Text>
                                    </Button>
                                </Modal>
                                <Item fixedLabel Icon>

                                    <Left>
                                        <Text style={{
                                            color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light', marginLeft: 10,
                                        }}>ریال</Text>

                                    </Left>
                                    <Input keyboardType='number-pad'
                                           style={{color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light'}}/>
                                    <Label style={{
                                        paddingRight: 20,
                                    }}><Text style={{
                                        color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light', marginRight: 10,
                                    }}>از مبلغ:</Text></Label>

                                </Item>
                                <Item fixedLabel>
                                    <Left>
                                        <Text style={{
                                            color: '#777', fontFamily: 'IRANSansMobile(FaNum)', marginLeft: 10,
                                        }}>ریال</Text>
                                    </Left>
                                    <Input keyboardType='number-pad'
                                           style={{color: '#777', fontFamily: 'IRANSansMobile(FaNum)'}}/>
                                    <Label style={{
                                        paddingRight: 20,
                                    }}><Text style={{
                                        color: '#777', fontFamily: 'IRANSansMobile(FaNum)', marginRight: 10,
                                    }}>تا مبلغ:</Text></Label>

                                </Item>
                                <ListItem Icon>
                                    <Left>
                                        <Button transparent style={{marginLeft: -20}}>
                                            <Icon active name="list" style={{color: '#00C851', fontSize: 35}}/>
                                        </Button>

                                    </Left>
                                    <Body>
                                        <Select2
                                            isSelectSingle={true}
                                            popupTitle="انتخاب نوع  دسته ها"
                                            cancelButtonText="انصراف"
                                            // newButtonText="جدید"
                                            selectButtonText="تایید"
                                            // title="نوع دسته ها"
                                            style={{color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light'}}
                                            searchPlaceHolderText="جستجو نوع دسته"
                                            data={typeIncome}
                                            onSelect={data => {
                                                this.setState({data});
                                            }}
                                            onRemoveItem={data => {
                                                this.setState({data});
                                            }}
                                        />
                                    </Body>
                                    <Right style={{marginHorizontal: 10}}>
                                        <Text style={{
                                            color: '#777',
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            marginHorizontal: -13,
                                        }}>دسته ها:</Text>

                                    </Right>
                                </ListItem>
                                <ListItem Icon>
                                    <Left>
                                        <Button transparent style={{marginLeft: -20}}>
                                            <Icon active name="card" style={{color: '#00C851', fontSize: 35}}/>
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Select2
                                            isSelectSingle={true}
                                            colorTheme='#3d933c'
                                            popupTitle="انتخاب حساب"
                                            cancelButtonText="انصراف"
                                            selectButtonText="تایید"
                                            // title="انتخاب حساب"
                                            searchPlaceHolderText="جستجو حساب"
                                            data={acount}
                                            onSelect={data => {
                                                this.setState({data});
                                            }}
                                            onRemoveItem={data => {
                                                this.setState({data});
                                            }}
                                        />
                                    </Body>

                                    <Right style={{paddingHorizontal: 10}}>
                                        <Text style={{
                                            color: '#777',
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            paddingHorizontal: -13,
                                        }}>حساب ها:</Text>

                                    </Right>
                                </ListItem>

                            </View>


                        </ScrollView>
                        <Button full style={{backgroundColor: '#47b03e'}} onPress={()=>this.props.screenProps.navigate('Reminder')}>
                            <Text
                                style={{color: '#fff', fontSize: 16, fontFamily: 'IRANSansMobile(FaNum)'}}>جستجو</Text>
                        </Button>
                    </Tab>

                </Tabs>

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
        height: 200,
    },
    headerContent: {
        padding: 50,
        alignItems: 'center',
    },
    SectionStyle: {

        borderRadius: 5, width: '60%', marginLeft: 43, borderWidth: 1.5,
        borderColor: '#3d933c', height: 45, marginTop: 15,


    },


    imageIcon: {
        width: 30,
        height: 30,

        marginLeft: -15,
        marginTop: 10,

    },
    inputs: {
        textAlign: 'right',
        marginBottom: 7,
        height: 40,
        width: '95%',
        // borderWidth: 1,
        borderColor: '#DD2C00',
        borderRadius: 5,

    },
    popupButtons: {

        marginBottom: 10,
        flexDirection: 'row',
        flex: 1,
        borderColor: '#eee',
        justifyContent: 'center',
        marginLeft: -30,

    },
    popup: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
        borderColor: '#e2e2e2',
        justifyContent: 'center',
        borderBottomWidth: 2,
        // backgroundColor:'#3d933c'


    },

    icon: {
        width: 22,
        height: 22,
        marginTop: 20,
        marginLeft: -10,
    },
    // modal: {
    //     justifyContent: "center",
    //     alignItems: "center",
    //     borderRadius: 10
    // },
    modal4: {
        height: 426,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    card: {
        // // shadowColor: '#00000021',
        // // shadowOffset: {
        // //   width: 0,
        // //   height: 6,
        // },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        borderRadius: 5, width: '70%', marginLeft: 43,
        height: 100, marginTop: 15,
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardTitle: {
        color: '#00BFFF',
    },

    Detail: {
        alignSelf: 'center',
        marginTop: 105,
        width: '70%',
        height: 70,
        // alignItems: 'center',
        // justifyContent: 'space-evenly',
        position: 'absolute',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        shadowColor: '#808080',
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
    tabs: {
        backgroundColor: '#fff',
    },
});
