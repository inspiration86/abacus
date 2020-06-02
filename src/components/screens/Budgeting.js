import React, {Component, useState} from 'react';
import {CardItem, Input, Item, Label, View} from 'native-base';
import {StatusBar, StyleSheet, Image, ImageBackground} from 'react-native';
// import DefineBudgeting from './defineBudgeting'
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Text, ScrollView} from 'react-native';
import {Card, List, Content, ListItem, Icon, Left, Body, Right, Title, Button} from 'native-base';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import {
    faCar,
    faDollarSign, faHome, faMoneyBill,
    faPlane,
    faShuttleVan,
    faUser,
    faUsers,
    faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../layouts/Header';

import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import {Divider} from 'react-native-paper';

export default class Budgeting extends Component {
    render() {
        return <AppContainer/>;
    }
}


function HomeScreen({navigation}) {

    return (
        <View style={{flex: 1}}>
            <StatusBar
                hidden={false}
                backgroundColor='#3e843d'
            />
                <Header title={'بودجه بندی'}/>
            <View style={{flex: 1}}>
                <ScrollView>
                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: '#00C851'}}>
                                <Icon active name="home"/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)_Light'}}>خانه</Text>
                        </Body>
                        <Right>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)_Light', color: '#00C851'}}>5000
                                تومان</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: '#33b5e5'}}>
                                <FontAwesomeIcon icon={faUtensils} color='#fff'/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)_Light'}}>غذا و
                                خاروبار</Text>
                        </Body>
                        <Right>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)_Light', color: '#00C851'}}>50000
                                تومان</Text>
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: '#FF8800'}}>
                                <Icon active name="home"/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)_Light'}}>قبوض</Text>
                        </Body>
                        <Right>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)_Light', color: '#00C851'}}>5000
                                تومان</Text>
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: '#aa66cc'}}>
                                <FontAwesomeIcon icon={faCar} color='#fff'/>

                            </Button>
                        </Left>
                        <Body>
                            <Text style={{textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)_Light'}}>ماشین</Text>
                        </Body>
                        <Right>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)_Light', color: '#00C851'}}>5000
                                تومان</Text>
                        </Right>
                    </ListItem>

                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: '#2BBBAD'}}>
                                <FontAwesomeIcon icon={faShuttleVan} color='#fff'/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)_Light'}}>حمل و
                                نقل</Text>
                        </Body>
                        <Right>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)_Light', color: '#00C851'}}>5000
                                تومان</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: '#039be5'}}>
                                <FontAwesomeIcon icon={faUser} color='#fff'/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)_Light'}}>شخصی</Text>
                        </Body>
                        <Right>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)_Light', color: '#00C851'}}>5000
                                تومان</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: '#ef6c00'}}>
                                <FontAwesomeIcon icon={faPlane} color='#fff'/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)'}}>سفر</Text>
                        </Body>
                        <Right>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)', color: '#00C851'}}>5000
                                تومان</Text>
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{backgroundColor: '#004d40'}}>
                                <FontAwesomeIcon icon={faMoneyBill} color='#fff'/>
                            </Button>
                        </Left>
                        <Body>
                            <Text style={{textAlign: 'left', fontFamily: 'IRANSansMobile(FaNum)'}}>مالی</Text>
                        </Body>
                        <Right>
                            <Text style={{fontFamily: 'IRANSansMobile(FaNum)', color: '#00C851'}}>5000
                                تومان</Text>
                        </Right>
                    </ListItem>

                </ScrollView>
            </View>


            <Button iconLeft full style={{backgroundColor: '#47b03e'}}
                    onPress={() => navigation.navigate('DefineBudget')}>

                <Text style={{color: '#fff', fontSize: 19, fontFamily: 'IRANSansMobile(FaNum)'}}>
                    تعریف بودجه</Text>
                <Icon name='add-circle' style={{marginLeft: 30, fontSize: 27}}/>
            </Button>
        </View>
    );
}

function DefineBudgeting({navigation}) {
    const options = [
        {label: 'SS', value: 'خانه'},
        {label: 'غذا و خاروبار', value: 'خانه'},
        {label: 'قبوض', value: 'خانه'},
        {label: 'ماشين', value: 'خانه'},
    ];
    const items = [
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
    const [selectedItems, setSelectedItems] = useState([]);
    let modalRef;
    const openModal = () => modalRef.show();
    const saveModalRef = ref => modalRef = ref;
    const onSelectedOption = value => {
        console.log(`You selected: ${value}`);
    };

    function handleOrangeClick(selectedItems) {

        setSelectedItems(selectedItems);
    }

    return (
        <View style={styles.container}>
            <CardItem cardBody style={{marginTop:50}}>
                <Image source={require('../../../assets/images/icons/818203.png')} style={{height: 200, flex: 1}}/>
            </CardItem>
            <View style={{
                borderStyle: 'solid',
                borderWidth: 1.5,
                borderColor: '#00C851',
                borderRadius: 10,
                marginHorizontal: 10,
                marginTop: 20,
            }}>
                <Card>
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
                        onSelectedItemsChange={handleOrangeClick}
                        selectedItems={selectedItems}
                    />
                    <Divider/>
                    <CardItem>
                        <Body>
                            <Item fixedLabel>
                                <Left>

                                    <View style={{flex: 1, marginTop: 10, marginLeft: 10}}>
                                        <Text style={{
                                            color: '#777',
                                            fontFamily: 'IRANSansMobile(FaNum)',
                                        }}>ریال</Text>

                                    </View>
                                </Left>
                                <Input style={{color: '#777', fontFamily: 'IRANSansMobile(FaNum)'}}/>
                                <Label><Text style={{
                                    color: '#777', fontFamily: 'IRANSansMobile(FaNum)', paddingRight: 20,
                                }}>هزینه :</Text></Label>

                            </Item>
                        </Body>
                    </CardItem>
                    <CardItem footer style={{justifyContent: 'flex-end'}}>
                        <Text style={{fontFamily: 'IRANSansMobile(FaNum)'}}>بودجه بندی به صورت ماهانه می
                            باشد</Text>
                    </CardItem>
                    <Button iconRight full style={{backgroundColor: '#47b03e'}}>
                        <Text style={{color: '#fff', fontSize: 19, fontFamily: 'IRANSansMobile(FaNum)'}}> ثبت
                            بودجه</Text>
                        <Icon name='add-circle' style={{marginLeft: 30, fontSize: 27}}/>
                    </Button>
                </Card>
            </View>
        </View>
    );
}

const AppNavigator = createStackNavigator({
        Home: {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => ({
                headerShown: false,
            }),
        },
        DefineBudget: {
            screen: DefineBudgeting,
            navigationOptions: ({navigation}) => ({
                headerShown: false,
            }),
        },

    },
);

const AppContainer = createAppContainer(AppNavigator);
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent:'center'
    },
    header: {
        backgroundColor: '#3d933c',
    },

    headerContent: {
        padding: 50,
        alignItems: 'center',
    },
});

