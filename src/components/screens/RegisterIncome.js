import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Picker,
    StatusBar,
    Text,
    Image,
    ScrollView,
} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {Button} from 'react-native-elements';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import moment from 'moment';
import Select2 from 'react-native-select-two';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import DateTimePicker from 'react-native-modal-datetime-picker';
import DatePicker, {getFormatedDate} from 'react-native-modern-datepicker';
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import Header from '../layouts/Header';
import LinearGradient from 'react-native-linear-gradient';
import {Card, List, Content, ListItem,Left, Body, Right, Title,CardItem,Item,Input,Label} from 'native-base';
import Modaldate from 'react-native-modal';
import {Divider} from 'react-native-paper';
const items = [
    // this is the parent or 'item'
    {
        name: ' شخصي',
        id: 0,
        children: [{
            name: <Text style={{
                color: '#777',
                fontFamily: 'IRANSansMobile(FaNum)',
                marginHorizontal: 70,
            }}>خانه </Text>,
            id: 10,
        }, {
            name: 'موبايل',
            id: 17,
        }, {
            name: 'خودكار',
            id: 13,
        }, {
            name: 'دفتر',
            id: 14,
        }],
    },
    {
        name: 'وسايل برقي',
        id: 1,
        children: [{
            name: 'تلويزيون',
            id: 20,
        }, {
            name: 'لپ تاپ',
            id: 21,
        }, {
            name: 'يخچال',
            id: 22,
        }],
    },
];

//.........const............
const typeIncome = [
    {id: 1, name: 'نقد'},
    {id: 2, name: 'کارت'},
    {id: 3, name: 'چک'},
    {id: 4, name: 'طلا'},
    {id: 5, name: 'بورس'},
    {id: 6, name: 'اجاره'},
    {id: 7, name: 'یارانه'},
];
const acount = [
    {id: 1, name: 'بانک ملی'},
    {id: 2, name: 'بانک صادرات'},
    {id: 3, name: 'بانک تجارت'},
    {id: 4, name: 'بانک پارسیان'},
    {id: 5, name: 'حساب آرکا'},
    {id: 6, name: 'حساب دانشگاه لرستان'},
    {id: 7, name: 'حساب جهاد دانشگاهی'},
];

const renderImage = (image) => {
    console.log(image);
    return [
        <>
            <Card style={{width: '70%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>

                <CardItem bordered>
                    <Left>

                    </Left>
                    <Body style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={{
                            borderRadius: 10,
                            width: '200%',
                            height: 160,

                        }} source={{uri: image}}/>
                    </Body>

                    <Right>

                    </Right>
                </CardItem>
            </Card>

        </>,
    ];
};
export default class RegisterIncome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DateText: '',
            TimeText: '',
            DateHolder: null,
            PickerValueHolder: '',
            image: '',
            isModalVisible: false,
            show: true,
            isVisableBoxImage: 'none',
        };
    }

    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };

    renderAsset(image) {
        return renderImage(image);
    }

    ShowHideComponent = () => {
        if (this.state.show == true) {
            this.setState({show: false});
        } else {
            this.setState({show: true});
        }
    };
    // ......................modaldatepiker.....................
    toggleModal = () => {
        console.log(this.state.isModalVisible);
        this.setState({isModalVisible: !this.state.isModalVisible});
    };
    // ..................datepicker..................

    DatePickerMainFunctionCall = () => {

        let DateHolder = this.state.DateHolder;

        if (!DateHolder || DateHolder == null) {

            DateHolder = new Date();
            this.setState({
                DateHolder: DateHolder,
            });
        }
        //To open the dialog
        this.refs.DatePickerDialog.open({
            date: DateHolder,
        });
    };
    /**
     * Call back for dob date picked event
     *
     */
    onDatePickedFunction = (date) => {
        this.setState({
            dobDate: date,
            DateText: moment(date).format('DD-MMM-YYYY'),
        });

    };


    //.......................metodTimepicker..............................
    _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});

    _hideDateTimePicker = () => this.setState({isDateTimePickerVisible: false});

    _handleDatePicked = (time) => {
        const mdate = time.toString().split(' ');
        this.setState({TimeText: mdate[4]});
        this._hideDateTimePicker();
    };
    onTimePickedFunction = (date) => {
        this.setState({
            dobDate: date,
            TimeText: moment(date).format('DD-MMM-YYYY'),
        });

    };


    // ..............imagepicker............................
    handleClick = () => {
        const options = {
            title: 'انتخاب عکس',
            takePhotoButtonTitle: 'دوربین',
            chooseFromLibraryButtonTitle: 'گالری',
            cancelButtonTitle: 'لغو',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                this.setState({image: response.uri});
                // console.log(this.state.image);
                if (this.state.image != null) {

                    this.setState({isVisableBoxImag: 'flex'});
                } else {
                    console.log('image empty');
                }
            }
        });

    };
    onSelectedItemsChange = (selectedItems) => {
        this.setState({ selectedItems });
    };

    // ..................code............
    render() {
        const image = this.state;
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor='#3e843d'
                />
                <Header title="ثبت درآمدها" onBackPress={() => {
                    this.props.navigation.goBack();
                }}/>


                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text
                        style={{marginTop: 15, textAlign: 'center', fontSize: 15, fontFamily: 'IRANSansMobile'}}> برای
                        ثبت درامد های روزانه خود فرم
                        زیر را پرکنید </Text>

                    {/* .....................datepicker....................................... */}


                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.SectionStyle} onPress={this.toggleModal}>
                            <Icon name="sort-desc" size={20} color="#777777" style={{marginLeft: 8, marginTop: 2}}/>
                            <Text style={[styles.inputs, {
                                marginTop: -8,
                            }]}> {this.state.DateText}</Text>
                        </TouchableOpacity>
                        <View style={{marginRight: 30, marginTop: 12, flex: 1}}>
                            <Text style={{fontSize: 14, flex: 1, fontFamily: 'IRANSansMobile'}}> تاریخ :</Text>
                            {/* <Image style={styles.imageIcon} source={require('../../../assets/images/icons/date.png')} /> */}
                        </View>
                    </View>

                    <View style={{flex: 1}}>
                        <Modaldate isVisible={this.state.isModalVisible}

                        >
                            <View style={{flex: 1}}>
                                <DatePicker isGregorian={false}
                                            mode="date"
                                            options={{
                                                defaultFont: 'Shabnam-Light',
                                                headerFont: 'Shabnam-Medium',
                                            }}
                                            onDateChange={date => {
                                                this.setState({DateText: date});
                                                this.toggleModal();
                                            }

                                            }

                                            placeholder="Select date"
                                />
                                <Button title="انصراف" onPress={this.toggleModal} color='green'/>
                            </View>
                        </Modaldate>
                    </View>

                    {/* .........................timepicker....................................... */}

                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.SectionStyle}
                                          onPress={this._showDateTimePicker}>
                            <Icon name="sort-desc" size={20} color="#777777" style={{marginLeft: 8, marginTop: 2}}/>
                            <Text style={[styles.inputs, {
                                marginTop: -10,
                                textAlign: 'center',
                            }]}>{this.state.TimeText}</Text>
                        </TouchableOpacity>
                        <View style={{marginRight: 30, marginTop: 12, flex: 1}}>
                            <Text style={{fontSize: 14, flex: 1, fontFamily: 'IRANSansMobile'}}> زمان :</Text>
                            {/* <Image style={styles.imageIcon} source={require('../../../assets/images/icons/date.png')} /> */}
                        </View>
                    </View>
                    <DateTimePicker
                        mode={'time'}
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                        cancelTextIOS="یلی"
                    />
                    {/* .........................price....................................... */}

                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputs}
                                placeholder="مبلغ"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{marginRight: 30, marginTop: 12, flex: 1}}>
                            <Text style={{fontSize: 14, flex: 1, fontFamily: 'IRANSansMobile'}}> مبلغ :</Text>
                            {/* <Image style={styles.imageIcon} source={require('../../../assets/images/icons/639365.png')} /> */}
                        </View>
                    </View>
                    {/*...........................category.....................*/}
                    <View style={{flexDirection: 'row'}}>
                    <View style={[styles. SectionStyle,{justifyContent:'center'}]}
                      >

                            <SectionedMultiSelect
                                itemFontFamily={{ fontWeight: 'bold',}}
                                subItemFontFamily={{ fontWeight: 'bold',color:'#555'}}
                                items={items}
                                confirmText={{
                                    fontSize: 50,
                                    fontFamily: 'IRANSansMobile(FaNum)',
                                    backgroundColor: 'green',
                                }}
                                colors={{primary: '#47b03e'}}
                                single={true}
                                showChips={true}
                                uniqueKey='id'
                                subKey='children'
                                selectText='دسته مورد نظر خود را انتخاب نمائيد'
                                showDropDowns={true}
                                readOnlyHeadings={true}
                                confirmText="بستن"
                                text="#2e2e2e"
                                numberOfLines="3"
                                success="green"
                                searchPlaceholderText="جستجو"
                                onSelectedItemsChange={this.onSelectedItemsChange}
                                selectedItems={this.state.selectedItems}
                            />
                            <Divider/>

                    </View>
                    <View style={{marginRight: 30, marginTop: 12, flex: 1}}>
                        <Text style={{fontSize: 14, flex: 1, fontFamily: 'IRANSansMobile'}}>دسته </Text>
                        {/* <Image style={styles.imageIcon} source={require('../../../assets/images/icons/639365.png')} /> */}
                    </View>
                    </View>



                    {/*.........................select2...............................  */}

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', flex: 1, marginTop: 10}}>
                            <TouchableOpacity onPress={() => this.refs.modal3.open()}>
                                <Icon name="plus-circle" size={25} color='#3ede30'
                                      style={{marginLeft: 7, marginTop: 3}}/>
                            </TouchableOpacity>
                            <Select2

                                style={{
                                    borderRadius: 5,
                                    width: '138%',
                                    marginLeft: 16,
                                    borderColor: '#3d933c',
                                    borderWidth: 1.5,
                                }}
                                isSelectSingle={true}
                                colorTheme='#3d933c'
                                popupTitle="انتخاب نوع دریافتی"
                                cancelButtonText="انصراف"
                                newButtonText="جدید"
                                selectButtonText="تایید"
                                title="نوع دریافتی"
                                searchPlaceHolderText="جستجو نوع دریافتی"
                                data={typeIncome}
                                onSelect={data => {
                                    this.setState({data});
                                }}
                                onRemoveItem={data => {
                                    this.setState({data});
                                }}
                            />
                        </View>
                        <View style={{marginTop: 15, fontSize: 16, flex: 1}}>
                            <Text style={{fontSize: 14, marginRight: 5, fontFamily: 'IRANSansMobile'}}> دریافت :</Text>
                            {/* <Image style={[styles.imageIcon,{marginLeft:-40}]} source={require('../../../assets/images/icons/2503483.png')} /> */}
                        </View>

                    </View>
                    {/* .........................select2....................................... */}
                    <View style={{flexDirection: 'row'}}>

                        <View style={{flexDirection: 'row', flex: 1, marginTop: 15}}>
                            <TouchableOpacity onPress={() => this.refs.modal4.open()}>
                                <Icon name="plus-circle" size={25} color='#3ede30'
                                      style={{marginLeft: 7, marginTop: 3}}/>
                            </TouchableOpacity>
                            <Select2
                                style={{
                                    borderRadius: 5,
                                    width: '138%',
                                    marginLeft: 16,
                                    borderColor: '#3d933c',
                                    borderWidth: 1.5,
                                }}
                                isSelectSingle={true}
                                colorTheme='#3d933c'
                                popupTitle="انتخاب حساب"
                                cancelButtonText="انصراف"
                                selectButtonText="تایید"
                                title="انتخاب حساب"
                                searchPlaceHolderText="جستجو حساب"
                                data={acount}
                                onSelect={data => {
                                    this.setState({data});
                                }}
                                onRemoveItem={data => {
                                    this.setState({data});
                                }}
                            />
                        </View>
                        <View style={{marginTop: 15, flex: 1}}>
                            <Text style={{fontSize: 14, marginRight: 30, fontFamily: 'IRANSansMobile'}}> حساب:</Text>
                            {/* <Image style={[styles.imageIcon,{marginLeft:-40}]} source={require('../../../assets/images/icons/wallet.png')} /> */}
                        </View>
                    </View>

                    {/* .........................discraption.............................. */}

                    <View style={{flexDirection: 'row'}}>
                        <View style={[styles.SectionStyle, {height: 100}]}>
                            <TextInput
                                multiline={true}
                                placeholder="توضیحات"
                                numberOfLines={1}
                                style={{
                                    margin: 4,
                                    marginTop: 2,
                                    fontSize: 12, width: '98%', textAlign: 'center',
                                }}
                                underlineColorAndroid="transparent"/>
                        </View>
                        <View style={{marginTop: 15, flex: 2}}>
                            <Text style={{
                                fontSize: 14, marginRight: 30, fontFamily: 'IRANSansMobile(FaNum)',
                            }}>شرح:</Text>
                            {/* <Image style={styles.imageIcon} source={require('../image/des.png')} /> */}
                        </View>
                    </View>
                    {/* .........................imagepicker.................................. */}

                    <View style={{marginTop: 8, marginHorizontal: 30}}>
                        <Card>
                            <CardItem bordered
                                      style={{backgroundColor: '#c5f3c1', borderStyle: 'dashed', borderWidth: 0.5}}>
                                <Left>
                                    <TouchableOpacity activeOpacity={0.9}>

                                    <Icon name='ellipsis-v'
                                          style={{marginTop: 5, fontSize: 25, color: '#47b03e'}}
                                          onPress={this.showMenu}/>
                                    </TouchableOpacity>
                                    <Menu
                                        ref={this.setMenuRef}>
                                        <MenuItem onPress={this.hideMenu}>ویرایش</MenuItem>
                                        <MenuItem onPress={this.hideMenu}>حذف</MenuItem>
                                    </Menu>
                                    <Body onPress>
                                        <Text style={{color: '#777'}} onPress={this.handleClick.bind(this)}>پیوست
                                            فایل</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>

                        <View>
                            {this.state.image ? this.renderAsset(this.state.image) : null}
                        </View>

                        <Button buttonStyle={{
                            marginTop: 20,
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
                            marginBottom:10
                        }}
                                onPress={() => this.props.navigation.navigate('Register')}
                                titleStyle={{color: '#fff',fontFamily:'IRANSansMobile(FaNum)',fontSize:18}}

                                title="ثبت"
                        />
                    </View>


                </ScrollView>
                {/*............ ........modal4................................. */}
                <Modal
                    style={[styles.modal4]}
                    position={'bottom'}
                    ref={'modal4'}
                    coverScreen={true}
                >
                    <View style={styles.popup}>
                        <Text style={{color: '#3d933c', marginBottom: 10, fontSize: 16}}> اضافه کردن نوع حساب</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputs}
                                placeholder="اضافه کردن حساب"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{marginTop: 20, flex: 1}}>
                            <Text style={{fontSize: 16, marginRight: 7}}> حساب:</Text>
                            {/* <Image style={[styles.imageIcon,{marginLeft:-40}]} source={require('../../../assets/images/icons/wallet.png')} /> */}
                        </View>
                    </View>
                    <TouchableOpacity style={{
                        marginTop: 40,
                    }}>
                        <LinearGradient
                            start={{x: 0.48, y: 0.0}} end={{x: 0.5, y: 1.0}}
                            locations={[0.1, 0.6, 0.9]}
                            colors={['#3e843d', '#3ede30', '#47b03e']}
                            style={{
                                borderRadius: 5, width: '70%', marginLeft: 41,
                                height: 45, marginTop: 5,
                            }}>
                            <Text style={{color: '#fff', textAlign: 'center', fontSize: 20, marginTop: 10}}>ثبت</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </Modal>
                {/*............ ........modal3................................. */}

                <Modal
                    style={[styles.modal3]}
                    position={'bottom'}
                    coverScreen={true}
                    ref={'modal3'}
                >
                    <View style={styles.popup}>
                        <Text style={{color: '#3d933c', marginBottom: 10, fontSize: 16}}>اضافه کردن نوع دریافتی</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputs}
                                placeholder="اضافه کردن نوع دریافتی"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{marginTop: 20, fontSize: 16, flex: 1}}>
                            <Text style={{fontSize: 16, marginRight: 5, marginTop: 10}}> دریافت :</Text>
                            {/* <Image style={[styles.imageIcon,{marginLeft:-40}]} source={require('../../../assets/images/icons/2503483.png')} /> */}
                        </View>
                    </View>
                    <View style={{
                        marginTop: 40,
                    }}>
                        <LinearGradient
                            start={{x: 0.48, y: 0.0}} end={{x: 0.5, y: 1.0}}
                            locations={[0.1, 0.6, 0.9]}
                            colors={['#3e843d', '#3ede30', '#47b03e']}
                            style={{
                                borderRadius: 5, width: '70%', marginLeft: 41,
                                height: 45, marginTop: 5,
                            }}>
                            <Text style={{color: '#fff', textAlign: 'center', fontSize: 20, marginTop: 20}}>ثبت</Text>

                        </LinearGradient>

                    </View>

                </Modal>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 22,
        justifyContent: 'center',

    },
    SectionStyle: {

        borderRadius: 5, width: '70%', marginLeft: 43, borderWidth: 2,
        borderColor: '#3d933c', height: 45, marginTop: 15,


        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        //     marginVertical: 5,
        //     marginRight: 16,
        //     marginBottom: 12
        //
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 12,
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
        height: 250,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modal3: {
        height: 250,
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
});