import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    StatusBar,
    Text,
    Image,
    ScrollView, Alert,
} from 'react-native';
import Modal from 'react-native-modalbox';
import Select2 from 'react-native-select-two';
import { FlatGrid } from 'react-native-super-grid';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Header from '../layouts/Header';

import LinearGradient from 'react-native-linear-gradient';

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
    Card
} from 'native-base';
import { Divider } from 'react-native-paper';
import {connect} from 'react-redux';


class AdvancedSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isLoading: true,
            user_id: this.props.dataLogin['id'],
            selectedItems: [],
            //..............income...............
            DateStartTextIncome: '',
            DateEndTextIncome: '',
            fromamount_income: '',
            toamount_income: '',
            category_income: '',
            Account_income: '',
            sub_category_incom: '',
            //..............cost...............
            DateStartTextCost: '',
            DateEndTextCost: '',
            fromamount_cost: '',
            toamount_cost: '',
            category_cost: '',
            Type_cost: '',
            sub_category_cost: '',

            //  ..........showRecords.............

            acount_income: [],
            categoryIncome: [],
            categoryCost: [],
            type_cost: [],
        };
        this.ShowAcountIncome();
        this.ShowTypeRecordCost();
        this.getCategoryIncome();
        this.getCategoryCost();
    }

    // ................getCategoryincome.........
    getCategoryIncome() {
        let userId = this.state.user_id;
        let url = "http://194.5.175.25:2000/api/v1/categoryincome/" + userId;
        fetch(url, {
            method: 'GET',
        }).then((response) => response.json()).then((responseJson) => {
            if (responseJson.success === true) {
                for (var i = 0; i < responseJson.data.length; i++) {
                    if (responseJson.data[i]['SubCategoryIncome'].length > 0) {
                        let resultSubcategory = responseJson.data[i]['SubCategoryIncome'];
                        let childrenCategory = [];
                        for (var j = 0; j < responseJson.data[i]['SubCategoryIncome'].length; j++) {
                            childrenCategory.push({
                                name: resultSubcategory[j]['sub_category'],
                                id: resultSubcategory[j]['_id']
                            })
                        }
                        this.state.categoryIncome.push({
                            name: responseJson.data[i]['category_name'],
                            id: responseJson.data[i]['_id'],
                            children: childrenCategory
                        })
                    } else {
                        this.state.categoryIncome.push({
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
        this.setState({ selectedItems });
    };

    onSelectedItemObjectsChangeincom = (selectedItems) => {
        this.setState({ category_income: selectedItems[0]['name'] })
        this.setState({ sub_category_incom: selectedItems[0]['name'] })

        console.log(selectedItems);

    }
    // ................getCategoryCost.........
    getCategoryCost() {
        let userId = this.state.user_id;
        let url = "http://194.5.175.25:2000/api/v1/categorycost/" + userId;
        fetch(url, {
            method: 'GET',
        }).then((response) => response.json()).then((responseJson) => {
            if (responseJson.success === true) {
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
                        this.state.categoryCost.push({
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
        this.setState({ selectedItems });
    };

    onSelectedItemObjectsChange = (selectedItems) => {
        this.setState({ sub_category_cost: selectedItems[0]['name'] })
        this.setState({ category_cost: selectedItems[0]['name'] })
        console.log(selectedItems);

    }
    // .............. SearchAdvencedincome..............
    SearchAdvencedincome = () => {

        // console.log("DateStartTextIncome=" +this.state.DateStartTextIncome);
        // console.log(" DateEndTextIncome=" +this.state.DateEndTextIncome);
        // console.log("fromamount_income=" +this.state.fromamount_income);
        // console.log("toamount_income="+ this.state.toamount_income);
        // console.log("category_income="+ this.state.category_income);
        // console.log("Type_income="+ this.state.Type_income);
        fetch('http://194.5.175.25:2000/api/v1/reportASearchIncome', {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: '5ee8e38613983412c8dd544c',
                todate: this.state.DateEndTextIncome,
                fromdate: this.state.DateStartTextIncome,
                fromamount: this.state.fromamount,
                toamount: this.state.toamount,
                category: this.state.category_income,
                sub_category: this.state.sub_category_incom,


            })

        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.success === true) {
                    console.log(responseJson)
                    this.setState({
                        isLoading: false,
                        dataSource: responseJson.data
                    })

                    this.refs.modal5.open()


                } else {
                    alert('جستجوی یافت نشد')

                }
            }).catch((error) => {
            console.error(error);
        });

    }
    // .............. SearchAdvencedincome..............
    SearchAdvencedcost = () => {
        // console.log("DateStartTextCost=" + this.state.DateStartTextCost);
        // console.log("DateStartTextCost=" + this.state.DateEndTextCost);
        // console.log("fromamount_Cost=" + this.state.fromamount_cost);
        // console.log("toamount_cost=" + this.state.toamount_cost);
        // console.log("category_cost=" + this.state.category_cost);
        // console.log("sub_category_cost=" + this.state.sub_category_cost);
        // console.log("Type_cost=" + this.state.Type_cost);
        fetch('http://194.5.175.25:2000/api/v1/reportASearchcost', {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: '5ee8e38613983412c8dd544c',
                todate: this.state.DateStartTextcost,
                fromdate: this.state.DateEndTextcost,
                fromamount: this.state.fromamount,
                toamount: this.state.toamount,
                category: this.state.category_cost,
                sub_category:this.state.sub_category_cost,
                type: this.state.Type_cost,

            })

        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.data
                })
                if (responseJson.success === true){
                    this.refs.modal6.open()


                } else if(responseJson.success ===false) {
                    alert('جستجوی یافت نشد')

                }
            }).catch((error) => {
            console.error(error);
        });

    }
    //   .............. ShowTypeRecordincom...................

    ShowAcountIncome = () => {
        this.state.acount_income.push({
            id: '1',
            name: 'نقد'
        })
        // let id
        // id = '5ee8e38613983412c8dd544c';
        let userId = this.state.user_id;
        fetch('http://194.5.175.25:2000/api/v1/acount/' + userId)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.data);
                for (var i = 0; i < responseJson.data.length; i++) {
                    this.state.acount_income.push({
                        id: responseJson.data[i]['_id'],
                        name: responseJson.data[i]['acount_name']
                    })
                }

            })
            .catch((error) => {
                console.error(error);
            });
    }
    //   .............. ShowTypeRecord...................

    ShowTypeRecordCost = () => {
        this.state.type_cost.push({
            id: '1',
            name: 'نقد'
        })
        let userId = this.state.user_id;
        fetch('http://194.5.175.25:2000/api/v1/Type/' + userId)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.data);
                for (var i = 0; i < responseJson.data.length; i++) {
                    this.state.type_cost.push({
                        id: responseJson.data[i]['_id'],
                        name: responseJson.data[i]['type_name']
                    })
                }

            })
            .catch((error) => {
                console.error(error);
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
                    start={{ x: 0.3, y: 0.0 }} end={{ x: 0.5, y: 1.0 }}
                    locations={[0.1, 0.6, 0.9]}
                    colors={['#3e843d', '#3ede30', '#47b03e']}>
                    <View style={styles.headerContent}>
                        {/* <Image
                            source={require('../../../assets/images/icons/1312175.png')}
                            style={{width: 50, height: 50}}
                        /> */}
                        <Text style={{ fontSize: 30, color: '#fff', marginBottom: 5, fontFamily: 'Far_Aref' }}>
                            جستجوی پیشرفته
                        </Text>
                    </View>
                </LinearGradient>
                <Tabs initialPage={1} tabBarUnderlineStyle={{ backgroundColor: '#3ede30', height: 3 }}>
                    <Tab heading={<TabHeading style={{ backgroundColor: '#fff' }}>

                        <Text style={{ color: 'green', fontWeight: 'bold', fontFamily: 'IRANSansMobile(FaNum)', marginRight: 7 }}>هزینه ها</Text>
                        <Image style={{ width: 30, height: 30 }} source={require('../../../assets/images/icons/2506838.png')} />

                    </TabHeading>}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View>
                                <Item fixedLabel onPress={() => this.refs.modal1.open()}>
                                    <Left>
                                        <Button transparent >
                                            <Icon active name="calendar" style={{ color: '#00C851', fontSize: 35 }} />
                                        </Button>
                                    </Left>
                                    <Text style={{ color: '#777', fontFamily: 'IRANSansMobile(FaNum)' }}>{this.state.DateStartTextCost}</Text>

                                    <Label style={{
                                        paddingRight: 20,
                                    }}><Text style={{
                                        color: '#777', fontFamily: 'IRANSansMobile', paddingRight: 20,
                                        fontSize: 14
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
                                                    defaultFont: 'IRANSansMobile(FaNum)',
                                                    headerFont: 'IRANSansMobile(FaNum)',
                                                }}
                                                onDateChange={date => {
                                                    this.setState({ DateStartTextCost: date });
                                                    this.refs.modal1.close();
                                                }

                                                }

                                                placeholder="Select date"
                                    />
                                    <Button full success>
                                        <Text style={{ color: '#fff' }}>تایید</Text>
                                    </Button>
                                </Modal>


                                <Item fixedLabel Icon onPress={() => this.refs.modal2.open()}>
                                    <Left>
                                        <Button transparent >
                                            <Icon active name="calendar" style={{ color: '#00C851', fontSize: 35 }} />
                                        </Button>
                                    </Left>
                                    <Text style={{ color: '#777', fontFamily: 'IRANSansMobile(FaNum)' }}> {this.state.DateEndTextCost} </Text>

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
                                                    defaultFont: 'IRANSansMobile(FaNum)',
                                                    headerFont: 'IRANSansMobile(FaNum)',
                                                }}
                                                onDateChange={date => {
                                                    this.setState({ DateEndTextCost: date });
                                                    this.refs.modal2.close();
                                                }

                                                }

                                                placeholder="Select date"
                                    />
                                    <Button full success>
                                        <Text style={{ color: '#fff' }}>تایید</Text>
                                    </Button>
                                </Modal>
                                <Item fixedLabel Icon>

                                    <Left>
                                        <Text style={{
                                            color: '#777', fontFamily: 'IRANSansMobile(FaNum)', marginLeft: 15,
                                        }}>ریال</Text>

                                    </Left>
                                    <Input keyboardType='number-pad'
                                           onChangeText={fromamount => this.setState({ fromamount_cost: fromamount })}

                                           style={{ color: '#777', fontFamily: 'IRANSansMobile(FaNum)', alignSelf: 'center' }} />
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
                                           onChangeText={toamount => this.setState({ toamount_cost: toamount })}

                                           style={{ color: '#777', fontFamily: 'IRANSansMobile(FaNum)', alignItems: 'center', justifyContent: 'center' }} />
                                    <Label style={{
                                        paddingRight: 20,
                                    }}><Text style={{
                                        color: '#777', fontFamily: 'IRANSansMobile(FaNum)', marginRight: 10,
                                    }}>تا مبلغ:</Text></Label>

                                </Item>
                                <ListItem Icon>
                                    <Left>
                                        <Button transparent style={{ marginLeft: -16 }}>
                                            <Icon active name="list" style={{ color: '#00C851', fontSize: 35 }} />
                                        </Button>

                                    </Left>
                                    <Body style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                        <View style={{
                                            justifyContent: 'center',
                                            borderRadius: 5,
                                            height: 48,
                                            width: '180%',
                                            borderColor: '#e2e2e2',
                                            borderWidth: 1,
                                        }}>

                                            <SectionedMultiSelect
                                                itemFontFamily={{ fontWeight: 'bold', }}
                                                subItemFontFamily={{ fontWeight: 'bold', color: '#555' }}
                                                items={this.state.categoryCost}
                                                confirmText={{
                                                    fontSize: 50,
                                                    fontFamily: 'IRANSansMobile(FaNum)',
                                                    backgroundColor: 'green',
                                                }}
                                                colors={{ primary: '#47b03e' }}
                                                single={true}
                                                showChips={true}
                                                uniqueKey='id'
                                                subKey='children'
                                                selectText='دسته و زیر دسته راانتخاب نمائيد'

                                                showDropDowns={true}
                                                readOnlyHeadings={true}
                                                confirmText="بستن"
                                                text="#2e2e2e"
                                                numberOfLines="3"
                                                success="green"
                                                searchPlaceholderText="جستجو"
                                                onSelectedItemsChange={this.onSelectedItemsChange}
                                                selectedItems={this.state.selectedItems}
                                                onSelectedItemObjectsChange={this.onSelectedItemObjectsChange}
                                            />
                                        </View>
                                    </Body>
                                    <Right>
                                        <Text style={{
                                            color: '#777',
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            marginHorizontal: -10,
                                            fontSize: 14
                                        }}>دسته ها:</Text>

                                    </Right>
                                </ListItem>
                                <ListItem Icon>
                                    <Left>
                                        <Button transparent style={{ marginLeft: -15 }}>
                                            <Icon active name="card" style={{ color: '#00C851', fontSize: 35 }} />
                                        </Button>
                                    </Left>
                                    <Body style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                        <View >
                                            <Select2
                                                style={{
                                                    justifyContent: 'center',
                                                    borderRadius: 5,
                                                    height: 48,
                                                    width: '166%',
                                                    marginRight: 8,

                                                }}
                                                isSelectSingle={true}
                                                colorTheme='#3d933c'
                                                popupTitle="انتخاب حساب"
                                                cancelButtonText="انصراف"
                                                selectButtonText="تایید"
                                                title="انتخاب حساب"
                                                searchPlaceHolderText="جستجو حساب"
                                                data={this.state.acount_income}
                                                onSelect={acount_income => {
                                                    for (var i = 0; i < this.state.acount_income.length; i++) {

                                                        if (this.state.acount_income[i]['id'] == acount_income) {
                                                            //   Alert.alert(this.state.acount[i]['name'])
                                                            this.setState({ Account_income: this.state.acount_income[i]['name'] });

                                                        }
                                                    }
                                                }}
                                            />
                                        </View>

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
                            <Modal
                                swipeToClose={false}
                                style={[styles.modal]}
                                position={'center'}
                                ref={'modal6'}
                                coverScreen={true}>
                                <LinearGradient
                                    style={{ width: '100%' }}
                                    start={{ x: 0.3, y: 0.0 }} end={{ x: 0.5, y: 1.0 }}
                                    locations={[0.1, 0.6, 0.9]}
                                    colors={['#3e843d', '#3ede30', '#47b03e']}>
                                    <View style={{
                                        paddingVertical: 7,
                                        alignItems: 'center'
                                        , justifyContent: 'space-around',
                                        flexDirection: 'row'
                                    }}>
                                        <Text></Text>

                                        <Text style={{ fontSize: 20, color: '#fff', marginBottom: 5, fontFamily: 'Far_Aref' }}>جستجوی پیشرفته </Text>
                                        <Button transparent style={{  color: '#fff', marginRight: -20 }} onPress={() => this.refs.modal6.close()}>
                                            <Icon name='close' style={{ fontSize: 30, color: '#fff', marginRight: 20 }} />
                                        </Button>



                                    </View>
                                </LinearGradient>
                                <ScrollView >
                                    <FlatGrid
                                        itemDimension={200}
                                        items={this.state.dataSource}
                                        style={{ marginTop: 3, }}
                                        contentContainerStyle={{}}
                                        renderItem={({ item, index }) => (
                                            <Card style={styles.card} key={0}>
                                                <View style={{flexDirection:'row-reverse',flex:1,backgroundColor:'#7cb342',marginHorizontal:-10}}>
                                                    <View style={{ flex: 1,marginTop:5}}>

                                                        <Text style={styles.title2}>مبلغ:</Text>

                                                    </View>

                                                    <View style={{ flex: 1,marginTop:5, alignItems: 'flex-start', }}>
                                                        <Text style={styles.title2}>{item.amount} </Text>

                                                    </View>


                                                </View>
                                                <View style={{flexDirection:'row-reverse',flex:1,backgroundColor:'#fff',marginHorizontal:-10}}>
                                                    <View style={{ flex: 1,marginTop:5}}>

                                                        <Text style={styles.title}>تاریخ:</Text>

                                                    </View>

                                                    <View style={{ flex: 1,marginTop:5, alignItems: 'flex-start', }}>
                                                        <Text style={styles.title}>{item.year}/{item.month}/{item.day} </Text>

                                                    </View>


                                                </View>
                                                <View style={{flexDirection:'row-reverse',flex:1,backgroundColor:'#e2e2e2',marginHorizontal:-10}}>
                                                    <View style={{ flex: 1,marginTop:5}}>

                                                        <Text style={styles.title}>دسته:</Text>

                                                    </View>

                                                    <View style={{ flex: 1,marginTop:5, alignItems: 'flex-start', }}>
                                                        <Text style={styles.title}>{item.category} </Text>

                                                    </View>


                                                </View>
                                                <View style={{flexDirection:'row-reverse',flex:1,backgroundColor:'#fff',marginHorizontal:-10}}>
                                                    <View style={{ flex: 1,marginTop:5}}>

                                                        <Text style={styles.title}>زیردسته:</Text>

                                                    </View>

                                                    <View style={{ flex: 1,marginTop:5, alignItems: 'flex-start', }}>
                                                        <Text style={styles.title}>{item.sub_category} </Text>

                                                    </View>


                                                </View>


                                            </Card>

                                        )} />

                                </ScrollView>


                            </Modal>

                        </ScrollView>
                        <Button full style={{ backgroundColor: '#47b03e' }} onPress={this.SearchAdvencedcost} >
                            <Text
                                style={{ color: '#fff', fontSize: 16, fontFamily: 'IRANSansMobile(FaNum)' }}>جستجو</Text>
                        </Button>
                    </Tab>
                    <Tab heading={<TabHeading style={{ backgroundColor: '#fff' }}>
                        <Text style={{ color: '#3e843d', fontFamily: 'IRANSansMobile(FaNum)', marginRight: 7 }}> درآمدها</Text>
                        <Image style={{ width: 30, height: 30 }} source={require('../../../assets/images/icons/1420341.png')} />

                    </TabHeading>}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View>
                                <TouchableOpacity>
                                    <Item fixedLabel Icon onPress={() => this.refs.modal3.open()}>
                                        <Left>
                                            <Button transparent onPress={() => this.refs.modal3.open()}>
                                                <Icon active name="calendar" style={{ color: '#00C851', fontSize: 35 }} />
                                            </Button>
                                        </Left>
                                        <Text style={{ color: '#777', fontFamily: 'IRANSansMobile(FaNum)' }}>{this.state.DateStartTextIncome}</Text>
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
                                                    this.setState({ DateStartTextIncome: date });
                                                    this.refs.modal3.close();
                                                }

                                                }

                                                placeholder="Select date"
                                    />
                                    <Button full success>
                                        <Text style={{ color: '#fff' }}>تایید</Text>
                                    </Button>
                                </Modal>


                                <Item fixedLabel Icon onPress={() => this.refs.modal4.open()}>

                                    <Left>
                                        <Button transparent onPress={() => this.refs.modal4.open()}>
                                            <Icon active name="calendar" style={{ color: '#00C851', fontSize: 35 }} />
                                        </Button>
                                    </Left>
                                    <Text style={{ color: '#777', fontFamily: 'IRANSansMobile(FaNum)' }}>{this.state.DateEndTextIncome}</Text>
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
                                                    this.setState({ DateEndTextIncome: date });
                                                    this.refs.modal4.close();
                                                }

                                                }

                                                placeholder="Select date"
                                    />
                                    <Button full success>
                                        <Text style={{ color: '#fff' }}
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
                                           onChangeText={fromamount => this.setState({ fromamount_income: fromamount })}

                                           style={{ color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light' }} />
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
                                           onChangeText={toamount => this.setState({ toamount_income: toamount })}

                                           style={{ color: '#777', fontFamily: 'IRANSansMobile(FaNum)', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }} />
                                    <Label style={{
                                        paddingRight: 20,
                                    }}><Text style={{
                                        color: '#777', fontFamily: 'IRANSansMobile(FaNum)', marginRight: 10,
                                    }}>تا مبلغ:</Text></Label>

                                </Item>
                                <ListItem Icon>
                                    <Left>
                                        <Button transparent style={{ marginLeft: -20 }}>
                                            <Icon active name="list" style={{ color: '#00C851', fontSize: 35 }} />
                                        </Button>

                                    </Left>
                                    <Body style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                        <View style={{
                                            justifyContent: 'center',
                                            borderRadius: 5,
                                            height: 48,
                                            width: '180%',


                                            borderColor: '#e2e2e2',
                                            borderWidth: 1,
                                        }}>

                                            <SectionedMultiSelect
                                                itemFontFamily={{ fontWeight: 'bold', }}
                                                subItemFontFamily={{ fontWeight: 'bold', color: '#555' }}
                                                items={this.state.categoryIncome}
                                                styles={{ fontSize: 5 }}
                                                colors={{ primary: '#47b03e' }}

                                                single={true}
                                                showChips={true}
                                                uniqueKey='id'
                                                subKey='children'
                                                selectText='دسته و زیر دسته را انتخاب نمائيد'
                                                styleSelectText={{ fontSize: 12, color: '#e2e2e2' }}
                                                showDropDowns={true}
                                                readOnlyHeadings={true}
                                                confirmText="بستن"
                                                text="#2e2e2e"
                                                numberOfLines="3"
                                                success="green"
                                                searchPlaceholderText="جستجو"
                                                onSelectedItemsChange={this.onSelectedItemsChange}
                                                selectedItems={this.state.selectedItems}
                                                onSelectedItemObjectsChange={this.onSelectedItemObjectsChangeincom}
                                            />
                                        </View>
                                    </Body>
                                    <Right>
                                        <Text style={{
                                            color: '#777',
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                            marginHorizontal: -10,
                                            fontSize: 14
                                        }}>دسته ها:</Text>

                                    </Right>
                                </ListItem>
                                <ListItem Icon>
                                    <Left>
                                        <Button transparent style={{ marginLeft: -15 }}>
                                            <Icon active name="card" style={{ color: '#00C851', fontSize: 35 }} />
                                        </Button>
                                    </Left>
                                    <Body style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                        <View >
                                            <Select2
                                                style={{
                                                    justifyContent: 'center',
                                                    borderRadius: 5,
                                                    height: 48,
                                                    width: '166%',
                                                    marginRight: 8,

                                                }}
                                                isSelectSingle={true}
                                                colorTheme='#3d933c'
                                                popupTitle="انتخاب حساب"
                                                cancelButtonText="انصراف"
                                                selectButtonText="تایید"
                                                title="انتخاب حساب"
                                                searchPlaceHolderText="جستجو حساب"
                                                data={this.state.acount_income}
                                                onSelect={acount_income => {
                                                    for (var i = 0; i < this.state.acount_income.length; i++) {

                                                        if (this.state.acount_income[i]['id'] == acount_income) {
                                                            //   Alert.alert(this.state.acount[i]['name'])
                                                            this.setState({ Account_income: this.state.acount_income[i]['name'] });

                                                        }
                                                    }
                                                }}
                                            />
                                        </View>

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

                            <Modal
                                swipeToClose={false}
                                style={[styles.modal]}
                                position={'center'}
                                ref={'modal5'}
                                coverScreen={true}>
                                <LinearGradient
                                    style={{ width: '100%' }}
                                    start={{ x: 0.3, y: 0.0 }} end={{ x: 0.5, y: 1.0 }}
                                    locations={[0.1, 0.6, 0.9]}
                                    colors={['#3e843d', '#3ede30', '#47b03e']}>
                                    <View style={{
                                        paddingVertical: 7,
                                        alignItems: 'center'
                                        , justifyContent: 'space-around',
                                        flexDirection: 'row'
                                    }}>
                                        <Text></Text>

                                        <Text style={{ fontSize: 20, color: '#fff', marginBottom: 5, fontFamily: 'Far_Aref' }}>جستجوی پیشرفته </Text>
                                        <Button transparent style={{ marginRight: -20 }}>
                                            <Icon name='close' style={{ fontSize: 30, color: '#fff', marginRight: 20 }} onPress={() => this.refs.modal5.close()} />
                                        </Button>



                                    </View>
                                </LinearGradient>
                                <ScrollView >
                                    <FlatGrid
                                        itemDimension={200}
                                        items={this.state.dataSource}
                                        style={{ marginTop: 3, }}
                                        contentContainerStyle={{}}
                                        renderItem={({ item, index }) => (
                                            <Card style={styles.card} key={0}>
                                                <View style={{flexDirection:'row-reverse',flex:1,backgroundColor:'#7cb342',marginHorizontal:-10}}>
                                                    <View style={{ flex: 1,marginTop:5}}>

                                                        <Text style={styles.title2}>مبلغ:</Text>

                                                    </View>

                                                    <View style={{ flex: 1,marginTop:5, alignItems: 'flex-start', }}>
                                                        <Text style={styles.title2}>{item.amount} </Text>

                                                    </View>


                                                </View>
                                                <View style={{flexDirection:'row-reverse',flex:1,backgroundColor:'#fff',marginHorizontal:-10}}>
                                                    <View style={{ flex: 1,marginTop:5}}>

                                                        <Text style={styles.title}>تاریخ:</Text>

                                                    </View>

                                                    <View style={{ flex: 1,marginTop:5, alignItems: 'flex-start', }}>
                                                        <Text style={styles.title}>{item.year}/{item.month}/{item.day} </Text>

                                                    </View>


                                                </View>
                                                <View style={{flexDirection:'row-reverse',flex:1,backgroundColor:'#e2e2e2',marginHorizontal:-10}}>
                                                    <View style={{ flex: 1,marginTop:5}}>

                                                        <Text style={styles.title}>دسته:</Text>

                                                    </View>

                                                    <View style={{ flex: 1,marginTop:5, alignItems: 'flex-start', }}>
                                                        <Text style={styles.title}>{item.category} </Text>

                                                    </View>


                                                </View>
                                                <View style={{flexDirection:'row-reverse',flex:1,backgroundColor:'#fff',marginHorizontal:-10}}>
                                                    <View style={{ flex: 1,marginTop:5}}>

                                                        <Text style={styles.title}>زیردسته:</Text>

                                                    </View>

                                                    <View style={{ flex: 1,marginTop:5, alignItems: 'flex-start', }}>
                                                        <Text style={styles.title}>{item.sub_category} </Text>

                                                    </View>


                                                </View>


                                            </Card>

                                        )} />

                                </ScrollView>


                            </Modal>


                        </ScrollView>
                        <Button full style={{ backgroundColor: '#47b03e' }} onPress={this.SearchAdvencedincome}
                        >
                            <Text
                                style={{ color: '#fff', fontSize: 16, fontFamily: 'IRANSansMobile(FaNum)' }}>جستجو</Text>
                        </Button>

                    </Tab>

                </Tabs>

            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        dataLogin: state.loginUser.dataLogin,
    }
}
export default connect(mapStateToProps)(AdvancedSearch);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#3d933c',
        height: 150,
    },
    headerContent: {
        padding: 50,
        alignItems: 'center',
    },
    card: {
        marginTop: 10,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: '#fff',
        height: 120,
        borderWidth:0.5,
        borderColor:'#47b03e'
    },
    viewbuttom: {
        borderTopWidth: 1,
        borderColor: "#eee",
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1, marginTop: 50
    },
    title3: {
        fontSize: 14,
        color: '#555',
        fontFamily: 'IRANSansMobile(FaNum)',
        marginRight: 15,
        flex: 1, marginBottom: 5,
        marginTop: 5,
    },
    title2: {
        fontSize: 14,
        color: '#fff',
        fontFamily: 'IRANSansMobile(FaNum)_Bold',
        marginRight: 17,
        marginTop:-3,
        marginLeft: 5,
    },
    title: {
        fontSize: 14,
        color: '#555',
        fontFamily: 'IRANSansMobile(FaNum)',
        marginRight: 17,
        marginTop:-3,
        marginLeft: 5,
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
    detailContent: {
        margin: 10,
        alignItems: 'center',
    },
    tabs: {
        backgroundColor: '#fff',
    },
});
