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
    ScrollView, Alert, ActivityIndicator
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Button} from 'react-native-elements';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import moment from 'moment';
import Select2 from 'react-native-select-two';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import DatePicker, {getFormatedDate} from 'react-native-modern-datepicker';
import Header from '../layouts/Header';
import LinearGradient from 'react-native-linear-gradient';
import {Card, List, Content, ListItem, Left, Body, Right, Title, CardItem, Item, Input, Label} from 'native-base';
import Modaldate from 'react-native-modal';
import {faCoins} from '@fortawesome/free-solid-svg-icons/faCoins';
import RNFetchBlob from 'rn-fetch-blob';
import {connect} from "react-redux";
import AwesomeAlert from "react-native-awesome-alerts";

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

class RegisterCost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DateHolder: null,
            year:'',
            day:'',
            month:'',
            dateText:'',
            PickerValueHolder: '',
            showAlertSuccess: false,
            loading:true,
            image: '',
            user_id: this.props.dataLogin['id'],
            isModalVisible: false,
            show: true,
            isVisableBoxImage: 'none',
            selectedItems: [],
            textMessageBox: '',
//..............RegisterCost...............
            DateText: '',
            amount_Cost: '',
            Of_income_Cost: '',
            Type_Cost: '',
            Account_Cost: '',
            Detail_Cost: '',
            Category_Cost: 'غذا',
            Sub_Category_Cost: '',
            // ............accont..........................
            acount_name_cost: '',
            acount_num_cost: '',
            card_num_cost: '',
//  ...............type.........................
            type_name_cost: '',
// .....categoryandsubcategory..................
            category_name_cost: '',
            sub_category_cost: '',
// ...................uploadimage...............
            imagepath: '',
            //  ..........showRecords.............

            incom: [],
            acount: [],
            type: [],
            categoryCost: [],
        };
        this.ShowincomeRecord();
        this.ShowAcountRecord();
        this.ShowTypeRecord();
        this.getCategoryCost();
    }

    showAlertSuccess = () => {
        this.setState({
            showAlertSuccess: true
        });
    };

    hideAlertSuccess = () => {
        this.setState({
            showAlertSuccess: false
        });
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
    onDatePickedFunction = (date) => {
        this.setState({
            dobDate: date,
            DateText: moment(date).format('DD-MMM-YYYY'),
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
                RNFetchBlob.fetch('POST', 'http://194.5.175.25:2000/Api/v1/image', {
                    Authorization: "Bearer access-token",
                    otherHeader: "image",
                    'Content-Type': 'multipart/form-data',

                }, [
                    // element with property `filename` will be transformed into `file` in form data
                    {name: 'image', filename: response.fileName, data: response.data},
                ]).then((response) => response.json()).then((responseJson) => {
                        if (responseJson.success === true)
                            console.log(responseJson.data['path'])
                        this.setState({imagepath: responseJson.data['path']});
                    }
                ).done();
                if (this.state.image != null) {

                    this.setState({isVisableBoxImag: 'flex'});
                } else {
                    console.log('image empty');
                }
            }
        });

    };
    // .............. RegisterC0st..............
    UserRegistrCost = () => {

        if (this.state.year=== '' || this.state.amount_Cost === '' ||
            this.state.Of_income_Cost==='' || this.state.Type_Cost==='' ||
            this.state.Account_Cost==='' || this.state.Category_Cost ==='' ||
            this.state.Sub_Category_Cost==='' || this.state.Detail_Cost==='') {
            this.showAlertSuccess();
            this.setState({textMessageBox: 'اطلاعات را به طور کامل وارد نمائید'});
        } else {
            fetch('http://194.5.175.25:2000/api/v1/cost', {

                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: this.state.user_id,
                    year: this.state.year,
                    month: this.state.month,
                    day: this.state.day,
                    amount: this.state.amount_Cost,
                    of_income: this.state.Of_income_Cost,
                    type: this.state.Type_Cost,
                    account: this.state.Account_Cost,
                    category: 'غذا',
                    sub_category: this.state.Sub_Category_Cost,
                    detail: this.state.Detail_Cost,
                    // image:this.state.imagepath

                })

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.showAlertSuccess();
                    this.setState({textMessageBox: 'اطلاعات با موفقیت ثبت شد'});
                    this.getCategoryCost();
                    this.clearInputText();
                }).catch((error) => {
                console.error(error);
            });
        }
    }
    //   .............RegistrAccont................
    UserRegistrAccont = () => {
        if (this.state.acount_name_cost === '' || this.state.acount_num_cost === '' ||
            this.state.card_num_cost === '') {
            Alert.alert("اطلاعات را به طور کامل وارد نمائید")
        } else {
            fetch('http://194.5.175.25:2000/api/v1/acount', {

                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: this.state.user_id,
                    acount_name: this.state.acount_name_cost,
                    acount_num: this.state.acount_num_cost,
                    card_num: this.state.card_num_cost,


                })

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.showAlertSuccess();
                    this.setState({textMessageBox: 'حساب با موفقیت ثبت شد'});
                    this.refs.modal4.close()
                }).catch((error) => {
                console.error(error);
            });
        }
    }
    //   .............RegistrType................
    UserRegistrType = () => {
        if (this.state.type_name_cost === '') {
            Alert.alert("اطلاعات را به طور کامل وارد نمائید")
        } else {
            fetch('http://194.5.175.25:2000/api/v1/type', {

                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: this.state.user_id,
                    type_name: this.state.type_name_cost,
                })

            }).then((response) => response.json())
                .then((responseJson) => {

                    this.ShowTypeRecord();
                    this.showAlertSuccess();
                    this.setState({textMessageBox: 'روش پراخت با موفقیت ثبت شد'});
                    this.refs.modal3.close()
                }).catch((error) => {
                console.error(error);
            });
        }

    }

    // ................getCategoryCost.........
    getCategoryCost() {
        const categoryCost= this.state.categoryCost;
        for(var i=0;i< categoryCost.length;i++){
            categoryCost.splice(this.state.categoryCost[i],categoryCost.length);
        }
        let url = "http://194.5.175.25:2000/api/v1/categorycost/" + this.state.user_id;
        fetch(url, {
            method: 'GET',
        }).then((response) => response.json()).then((responseJson) => {
            if (responseJson.success === true) {
                this.setState({loading:false});
                for (var i = 0; i < responseJson.data.length; i++) {
                    if (responseJson.data[i]['SubCategoryCost'].length > 0) {
                        let resultSubcategory = responseJson.data[i]['SubCategoryCost'];
                        let childrenCategory = [];
                        for (var j = 0; j < responseJson.data[i]['SubCategoryCost'].length; j++) {
                            childrenCategory.push({
                                name: resultSubcategory[j]['sub_category'],
                                id: resultSubcategory[j]['_id']
                            })
                        }
                        this.state.categoryCost.push({
                            name: responseJson.data[i]['category_name'],
                            id: responseJson.data[i]['_id'],
                            children: childrenCategory
                        })
                    } else {
                        this.state.categorycost.push({
                            name: responseJson.data[i]['category_name'],
                            id: responseJson.data[i]['_id']
                        })
                    }
                }

            } else {
                console.log(responseJson.data);
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    onSelectedItemsChange = (selectedItems) => {
        this.setState({selectedItems});
    };

    onSelectedItemObjectsChange = (selectedItems) => {
        this.setState({Sub_Category_Cost: selectedItems[0]['name']})


    }
    //   .............RegistrcategoryandSub_category................
    UserRegistrcategory = () => {

        if (this.state.category_name_cost === '' || this.state.sub_category_cost === '') {
            Alert.alert('اطلاعات را به طور کامل وارد نمائید')
        } else {
            fetch('http://194.5.175.25:2000/api/v1/categoryandsub_cost', {

                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: this.state.user_id,
                    category_name: this.state.category_name_cost,
                    sub_category: this.state.sub_category_cost,
                })

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.showAlertSuccess();
                    this.setState({textMessageBox: 'دسته و زیر دسته با موفقیت ثبت شد'});
                    this.getCategoryCost();
                    this.refs.modal5.close();
                }).catch((error) => {
                console.error(error);
            });
        }
    }
    //   ..............Showincome...................

    ShowincomeRecord = () => {
        const incom = this.state.incom;
        for (var i = 0; i < incom.length; i++) {
            incom.splice(this.state.incom[i], incom.length);
        }

        fetch('http://194.5.175.25:2000/api/v1/income/' + this.state.user_id)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.data);
                for (var i = 0; i < responseJson.data.length; i++) {
                    this.state.incom.push({
                        id: responseJson.data[i]['_id'],
                        name: responseJson.data[i]['category']
                    })
                }

            })
            .catch((error) => {
                console.error(error);
            });
    }

    //   .............. ShowTypeRecord...................

    ShowTypeRecord = () => {
        const type = this.state.type;
        for (var i = 0; i < type.length; i++) {
            type.splice(this.state.type[i], type.length);
        }
        // this.state.type.push({
        //     id: '1',
        //     name: 'نقد'
        // })

        fetch('http://194.5.175.25:2000/api/v1/Type/' + this.state.user_id)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.data);
                for (var i = 0; i < responseJson.data.length; i++) {
                    this.state.type.push({
                        id: responseJson.data[i]['_id'],
                        name: responseJson.data[i]['type_name']
                    })
                }

            })
            .catch((error) => {
                console.error(error);
            });
    }
    //   ..............ShowAcont...................
    ShowAcountRecord = () => {
        const acount = this.state.acount;
        for (var i = 0; i < acount.length; i++) {
            acount.splice(this.state.type[i], acount.length);
        }
        fetch('http://194.5.175.25:2000/api/v1/acount/' + this.state.user_id)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                for (var i = 0; i < responseJson.data.length; i++) {
                    this.state.acount.push({
                        id: responseJson.data[i]['_id'],
                        name: responseJson.data[i]['acount_name']
                    })
                }

            })
            .catch((error) => {
                console.error(error);
            });
    }
    clearInputText(){
        setTimeout(() => {
            this._textInputDetail.setNativeProps({ text: '' });
            this._textInputAmount.setNativeProps({ text: '' });
            this.setState({DateText:''});
            this.setState({amount_Cost:''});
        },2);
    }
    // ..................code............
    render() {
        const image = this.state;
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor='#3e843d'
                />
              <Header title="ثبت هزینه ها" onBackPress={() => {
                    this.props.navigation.goBack();
                }}/>


                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text
                        style={{marginTop: 15, textAlign: 'center', fontSize: 15, fontFamily: 'IRANSansMobile'}}> برای
                        ثبت هزینه های روزانه خود فرم
                        زیر را پرکنید </Text>

                    {/* .....................datepicker....................................... */}


                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.SectionStyle} onPress={this.toggleModal}>
                            <Icon name="calendar" size={20} color="#47b03e" style={{marginLeft: 8, marginTop: 10}}/>
                            <Text style={[styles.inputs, {
                                marginTop: -18
                            }]}> {this.state.dateText}</Text>
                        </TouchableOpacity>
                        <View style={{marginRight: 20, marginTop: 12, flex: 2}}>
                            <Text style={{fontSize: 14, flex: 2, fontFamily: 'IRANSansMobile'}}> تاریخ </Text>
                            {/* <Image style={styles.imageIcon} source={require('../../../assets/images/icons/date.png')} /> */}
                        </View>
                    </View>

                    <View style={{flex: 1}}>
                        <Modaldate isVisible={this.state.isModalVisible}

                            // animationInTiming={1700}
                            // animationOutTiming={1000}
                        >
                            <View style={{flex: 1}}>
                                <DatePicker isGregorian={false}
                                            mode="date"
                                            options={{
                                                defaultFont: 'IRANSansMobile(FaNum)',
                                                headerFont: 'IRANSansMobile(FaNum)',
                                            }}
                                            onDateChange={date => {
                                                this.setState({dateText: date});
                                                this.setState({year:date[0]+date[1]+date[2]+date[3]});
                                                this.setState({month:date[5]+date[6]});
                                                this.setState({day:date[8]+date[9]});
                                                this.toggleModal();
                                            }
                                            }
                                            placeholder="Select date"
                                />
                                <Button title="انصراف" onPress={this.toggleModal}
                                        buttonStyle={{backgroundColor: '#47b03e'}}/>
                            </View>
                        </Modaldate>
                    </View>


                    {/* .........................price....................................... */}

                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.SectionStyle}>
                            {/*<Icon name="coins" size={20} color="#47b03e" style={{marginLeft: 8, marginTop: 10}}/>*/}
                            <FontAwesomeIcon color={'#47b03e'} size={20} icon={faCoins}
                                             style={{marginLeft: 8, marginTop: 10}}/>

                            <TextInput
                                style={[styles.inputs, {marginTop: -25}]}
                                placeholder="مبلغ"
                                keyboardType='numeric'
                                underlineColorAndroid="transparent"
                                ref={component => this._textInputAmount = component}

                                onChangeText={amount => this.setState({amount_Cost: amount})}

                            />
                        </View>
                        <View style={{marginRight: 20, marginTop: 12, flex: 2}}>
                            <Text style={{fontSize: 14, flex: 2, fontFamily: 'IRANSansMobile'}}> مبلغ </Text>
                        </View>
                    </View>

                    {/*.........................درآمد...............................  */}

                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View style={{flexDirection: 'row', flex: 2.2, marginTop: 10, marginLeft: 27}}>
                            <Select2

                                style={{
                                    borderRadius: 5,
                                    width: '108%',
                                    marginLeft: 16,
                                    borderColor: '#3d933c',
                                    borderWidth: 1.5,
                                }}
                                isSelectSingle={true}
                                colorTheme='#3d933c'
                                popupTitle="انتخاب روش پرداخت"
                                cancelButtonText="انصراف"
                                newButtonText="جدید"
                                listEmptyTitle="اطلاعاتی موجود نیست."
                                selectButtonText="تایید"
                                title="تعیین کنید هزینه از کدام درآمد پرداخت شده"
                                searchPlaceHolderText="جستجو روش پرداختی"
                                data={this.state.incom}
                                onSelect={of_income => {
                                    for (var i = 0; i < this.state.incom.length; i++) {

                                        if (this.state.incom[i]['id'] == of_income) {
                                            //   Alert.alert(this.state.incom[i]['name'])
                                            this.setState({Of_income_Cost: this.state.incom[i]['name']});

                                        }
                                    }

                                }}

                            />
                        </View>
                        <View style={{marginTop: 15, fontSize: 16, flex: 1}}>
                            <Text style={{fontSize: 14, marginRight: 5, fontFamily: 'IRANSansMobile', flex: 2}}>از
                                درآمد</Text>
                        </View>

                    </View>
                    {/*...........................category.....................*/}

                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View style={{flexDirection: 'row', flex: 2.2, marginTop: 10}}>
                            <TouchableOpacity onPress={() => this.refs.modal5.open()}>
                                <Icon name="plus-circle" size={25} color='#47b03e'
                                      style={{marginLeft: 7, marginTop: 7}}/>
                            </TouchableOpacity>
                            <View style={{
                                justifyContent: 'center',
                                borderRadius: 5,
                                height: 48,
                                width: '100%',
                                marginLeft: 16,
                                borderColor: '#3d933c',
                                borderWidth: 1.5,
                            }}>

                                <SectionedMultiSelect
                                    itemFontFamily={{fontWeight: 'bold',}}
                                    subItemFontFamily={{fontWeight: 'bold', color: '#555'}}
                                    items={this.state.categoryCost}
                                    confirmText={{
                                        fontSize: 50,
                                        fontFamily: 'IRANSansMobile(FaNum)',
                                        backgroundColor: 'green',
                                    }}
                                    colors={{primary: '#47b03e'}}
                                    single={true}
                                    showChips={true}
                                    uniqueKey="id"
                                    subKey="children"

                                    selectText='دسته مورد نظر خود را انتخاب نمائيد'
                                    showDropDowns={true}
                                    readOnlyHeadings={true}
                                    confirmText="بستن"
                                    text="#2e2e2e"
                                    numberOfLines="3"
                                    success="green"

                                    loading={this.state.loading}
                                    searchPlaceholderText="جستجو"
                                    onSelectedItemsChange={this.onSelectedItemsChange}
                                    selectedItems={this.state.selectedItems}
                                    onSelectedItemObjectsChange={this.onSelectedItemObjectsChange}


                                />
                            </View>
                        </View>
                        <View style={{marginTop: 15, fontSize: 16, flex: 1}}>
                            <Text style={{
                                fontSize: 14,
                                marginRight: 15,
                                fontFamily: 'IRANSansMobile',
                                flex: 2
                            }}>هزینه</Text>
                        </View>

                    </View>

                    {/*.........................select2 پرداخت...............................  */}

                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View style={{flexDirection: 'row', flex: 2.2, marginTop: 10}}>
                            <TouchableOpacity onPress={() => this.refs.modal3.open()}>
                                <Icon name="plus-circle" size={25} color='#47b03e'
                                      style={{marginLeft: 7, marginTop: 3}}/>
                            </TouchableOpacity>
                            <Select2

                                style={{
                                    borderRadius: 5,
                                    // width: '138%',
                                    marginLeft: 16,
                                    borderColor: '#3d933c',
                                    borderWidth: 1.5,
                                }}
                                isSelectSingle={true}
                                colorTheme='#3d933c'
                                popupTitle="انتخاب روش پرداخت"
                                cancelButtonText="انصراف"
                                newButtonText="جدید"
                                selectButtonText="تایید"
                                title="روش پرداخت"
                                listEmptyTitle="روش پرداختی موجود نیست."
                                searchPlaceHolderText="جستجو روش پرداختی"
                                data={this.state.type}
                                onSelect={type => {
                                    for (var i = 0; i < this.state.type.length; i++) {
                                        if (this.state.type[i]['id'] == type) {
                                            //    Alert.alert(this.state.type[i]['name'])
                                            this.setState({Type_Cost: this.state.type[i]['name']});

                                        }
                                    }

                                }}

                            />
                        </View>
                        <View style={{marginTop: 15, fontSize: 16, flex: 1}}>
                            <Text style={{fontSize: 14, marginRight: 5, fontFamily: 'IRANSansMobile', flex: 2}}>روش
                                پرداخت </Text>
                        </View>

                    </View>
                    {/* .........................select2 حساب....................................... */}
                    <View style={{flexDirection: 'row'}}>

                        <View style={{flexDirection: 'row', flex: 2.2, marginTop: 15}}>
                            <TouchableOpacity onPress={() => this.refs.modal4.open()}>
                                <Icon name="plus-circle" size={25} color='#47b03e'
                                      style={{marginLeft: 9, marginTop: 3, flex: 2}}/>
                            </TouchableOpacity>
                            <Select2
                                style={{
                                    borderRadius: 5,
                                    // width: '138%',
                                    marginLeft: 16,
                                    borderColor: '#3d933c',
                                    borderWidth: 1.5,
                                }}
                                isSelectSingle={true}
                                colorTheme='#3d933c'
                                popupTitle="انتخاب حساب"
                                cancelButtonText="انصراف"
                                selectButtonText="تایید"
                                listEmptyTitle="حسابی موجود نیست"
                                title="انتخاب حساب"
                                searchPlaceHolderText="جستجو حساب"
                                data={this.state.acount}
                                onSelect={account => {
                                    for (var i = 0; i < this.state.acount.length; i++) {

                                        if (this.state.acount[i]['id'] == account) {
                                            //   Alert.alert(this.state.acount[i]['name'])
                                            this.setState({Account_Cost: this.state.acount[i]['name']});

                                        }
                                    }

                                }}
                            />
                        </View>
                        <View style={{marginTop: 15, flex: 1}}>
                            <Text style={{
                                fontSize: 14,
                                marginRight: 15,
                                fontFamily: 'IRANSansMobile',
                                flex: 2
                            }}> حساب</Text>
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
                                onChangeText={detail => this.setState({Detail_Cost: detail})}
                                ref={component => this._textInputDetail = component}

                                underlineColorAndroid="transparent"/>
                        </View>
                        <View style={{marginTop: 15, flex: 1}}>
                            <Text style={{
                                fontSize: 14, marginRight: 20, fontFamily: 'IRANSansMobile(FaNum)', flex: 2
                            }}>شرح</Text>
                        </View>
                    </View>
                    {/* .........................imagepicker.................................. */}
                    <View style={{marginTop: 8, marginHorizontal: 30}}>
                        <Card>
                            <CardItem bordered
                                      style={{backgroundColor: '#c5f3c1', borderStyle: 'dashed', borderWidth: 0.5}}>
                                <Left>


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
                            marginLeft: 25,
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
                            marginBottom: 20
                        }}
                                onPress={this.UserRegistrCost.bind(this)}
                                titleStyle={{color: '#fff', fontFamily: 'IRANSansMobile(FaNum)', fontSize: 18}}

                                title="ثبت"
                        />
                    </View>


                </ScrollView>

                {/*........................دسته و زیر دسته......................*/}
                <Modal
                    style={[styles.modal4]}
                    position={'bottom'}
                    ref={'modal5'}
                    coverScreen={true}>
                    <LinearGradient
                        style={{
                            borderTopLeftRadius: 15, borderTopRightRadius: 15, alignItems: 'center'
                            , justifyContent: 'center',
                        }}
                        start={{x: 0.3, y: 0.0}} end={{x: 0.5, y: 1.0}}
                        locations={[0.1, 0.6, 0.9]}
                        colors={['#3e843d', '#3ede30', '#47b03e']}>
                        <View style={{
                            paddingVertical: 7,
                            alignItems: 'center'
                            , justifyContent: 'center',

                        }}>

                            <Text style={{fontSize: 20, color: '#fff', fontFamily: 'Far_Aref', alignSelf: 'center'}}>اضافه
                                کردن دسته و زیر دسته</Text>

                        </View>
                    </LinearGradient>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputs}
                                placeholder="نام دسته جدید را وارد نمایید"
                                underlineColorAndroid="transparent"
                                onChangeText={category_name => this.setState({category_name_cost: category_name})}

                            />
                        </View>
                        <View style={{marginTop: 20, flex: 1}}>
                            <Text style={{fontSize: 16, marginRight: 5}}> نام دسته</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 3}}>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputs}
                                placeholder="نام زیر دسته جدید را وارد نمایید"
                                underlineColorAndroid="transparent"
                                onChangeText={sub_category => this.setState({sub_category_cost: sub_category})}

                            />
                        </View>
                        <View style={{marginTop: 20, flex: 2}}>
                            <Text style={{fontSize: 16, marginRight: 7, flex: 2}}> زیر دسته:</Text>
                        </View>
                    </View>
                    <Button buttonStyle={{
                        marginTop: 50,
                        marginLeft: 25,
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
                        marginBottom: 20
                    }}
                            onPress={this.UserRegistrcategory}
                            titleStyle={{color: '#fff', fontFamily: 'IRANSansMobile(FaNum)', fontSize: 18}}

                            title="ثبت"
                    />
                </Modal>

                {/*....................حساب جدید................................. */}
                <Modal
                    style={[styles.modal4]}
                    position={'bottom'}
                    ref={'modal4'}
                    coverScreen={true}>
                    <LinearGradient
                        style={{
                            borderTopLeftRadius: 15, borderTopRightRadius: 15, alignItems: 'center'
                            , justifyContent: 'center',
                        }}
                        start={{x: 0.3, y: 0.0}} end={{x: 0.5, y: 1.0}}
                        locations={[0.1, 0.6, 0.9]}
                        colors={['#3e843d', '#3ede30', '#47b03e']}>
                        <View style={{
                            paddingVertical: 7,

                        }}>

                            <Text style={{fontSize: 20, color: '#fff', fontFamily: 'Far_Aref', alignSelf: 'center'}}>
                                اضافه کردن نوع حساب </Text>
                        </View>
                    </LinearGradient>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputs}
                                placeholder="نام حساب جدید را وارد نمایید"
                                underlineColorAndroid="transparent"
                                onChangeText={acount_name => this.setState({acount_name_cost: acount_name})}

                            />
                        </View>
                        <View style={{marginTop: 20, flex: 1}}>
                            <Text style={{fontSize: 12, marginRight: 2, fontFamily: 'IRANSansMobile(FaNum)'}}> نام
                                حساب</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 3}}>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputs}
                                placeholder=" شماره حساب خود را وارد کنید"
                                underlineColorAndroid="transparent"
                                onChangeText={acount_num => this.setState({acount_num_cost: acount_num})}

                            />
                        </View>
                        <View style={{marginTop: 20, flex: 1}}>
                            <Text style={{fontSize: 12, marginRight: 2, fontFamily: 'IRANSansMobile(FaNum)'}}> شماره
                                حساب</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 3}}>

                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputs}
                                placeholder="شماره کارت خود را وارد کنید "
                                underlineColorAndroid="transparent"
                                onChangeText={card_num => this.setState({card_num_cost: card_num})}

                            />
                        </View>
                        <View style={{marginTop: 20, flex: 1}}>
                            <Text style={{fontSize: 12, marginRight: 2, fontFamily: 'IRANSansMobile(FaNum)'}}> شماره
                                کارت:</Text>
                        </View>
                    </View>


                    <Button buttonStyle={{
                        marginTop: 20,
                        marginLeft: 25,
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
                        marginBottom: 20
                    }}
                            onPress={this.UserRegistrAccont}
                            titleStyle={{color: '#fff', fontFamily: 'IRANSansMobile(FaNum)', fontSize: 18}}

                            title="ثبت"
                    />
                </Modal>
                {/*............ ........پرداخت................................. */}

                <Modal
                    style={[styles.modal4]}
                    position={'bottom'}
                    ref={'modal3'}
                    coverScreen={true}>
                    <LinearGradient
                        style={{
                            borderTopLeftRadius: 15, borderTopRightRadius: 15, alignItems: 'center'
                            , justifyContent: 'center',
                        }}
                        start={{x: 0.3, y: 0.0}} end={{x: 0.5, y: 1.0}}
                        locations={[0.1, 0.6, 0.9]}
                        colors={['#3e843d', '#3ede30', '#47b03e']}>
                        <View style={{
                            paddingVertical: 7,
                            alignItems: 'center'
                            , justifyContent: 'center',
                        }}>

                            <Text style={{fontSize: 20, color: '#fff', marginBottom: 5, fontFamily: 'Far_Aref'}}>اضافه
                                کردن روش پرداختی جدید </Text>

                        </View>
                    </LinearGradient>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputs}
                                placeholder="نام روش پرداخت جدید را وارد نمایید"
                                underlineColorAndroid="transparent"
                                onChangeText={type_name => this.setState({type_name_cost: type_name})}

                            />
                        </View>
                        <View style={{marginTop: 20, flex: 1}}>
                            <Text style={{fontSize: 16,}}> روش پرداخت:</Text>
                        </View>
                    </View>
                    <Button buttonStyle={{
                        marginTop: 60,
                        marginLeft: 25,
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
                        marginBottom: 20
                    }}
                            onPress={this.UserRegistrType}
                            titleStyle={{color: '#fff', fontFamily: 'IRANSansMobile(FaNum)', fontSize: 18}}
                            title="ثبت"
                    />
                </Modal>
                {/*....................پیغام با موفیقت ثبت شد................................. */}
                <AwesomeAlert
                    show={this.state.showAlertSuccess}
                    showProgress={false}
                    // title="اطلاعات  را به طور کامل وارد نمائید"
                    message={this.state.textMessageBox}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    titleStyle={{fontSize: 14, fontFamily: 'IRANSansMobile(FaNum)'}}
                    messageStyle={{fontSize: 15, fontFamily: 'IRANSansMobile(FaNum)'}}
                    confirmText="بله"
                    confirmButtonColor="#3d933c"
                    confirmButtonStyle={{}}
                    confirmButtonTextStyle={{fontSize: 17, fontFamily: 'IRANSansMobile(FaNum)'}}
                    onConfirmPressed={() => {
                        this.hideAlertSuccess();
                    }}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        dataLogin: state.loginUser.dataLogin,
    }
}
export default connect(mapStateToProps)(RegisterCost);
const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff',
        justifyContent: 'center',

    },
    SectionStyle: {

        borderRadius: 5, width: '70%', marginLeft: 43, borderWidth: 1.5,
        borderColor: '#3d933c', height: 45, marginTop: 15, backgroundColor: '#fff',


        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        //     marginVertical: 5,
        //     marginRight: 16,
        //     marginBottom: 12

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
    modal4: {
        height: 350,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
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
