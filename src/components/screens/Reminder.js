// import React, {Component} from 'react';
// import {View, TouchableOpacity, Image, ScrollView, StatusBar} from 'react-native';
// import {Provider, Portal, FAB, Avatar, Card, IconButton,Button } from 'react-native-paper';
// import Header from '../layouts/Header';
// import {FlatGrid} from 'react-native-super-grid';
// import Icon from 'react-native-vector-icons/FontAwesome';
//
// class Reminder extends Component {
//     state = {
//         open: false,
//         data: [
//             {
//                 id: 1,
//                 title: 'برگزاری کلاس آنلاین',
//                 subtitle:'هماهنگی برای اعلام تاریخ و ساعت برگزاری کلاس آنلاین با مهندس گردان ',
//                 image: require('../../../assets/images/icons/1792931.png'),
//             }
//             ,
//             {
//                 id: 2,
//                 title: 'برگزاری کلاس آنلاین',
//                 subtitle:'هماهنگی برای اعلام تاریخ و ساعت برگزاری کلاس آنلاین با مهندس گردان ',
//                 image: require('../../../assets/images/icons/1792931.png'),
//             }
//             ,
//             {
//                 id: 3,
//                 title: 'برگزاری کلاس آنلاین',
//                 subtitle:'هماهنگی برای اعلام تاریخ و ساعت برگزاری کلاس آنلاین با مهندس گردان ',
//                 image: require('../../../assets/images/icons/1792931.png'),
//             }
//             ,
//             {
//                 id: 4,
//                 title: 'برگزاری کلاس آنلاین',
//                 subtitle:'هماهنگی برای اعلام تاریخ و ساعت برگزاری کلاس آنلاین با مهندس گردان ',
//                 image: require('../../../assets/images/icons/1792931.png'),
//             }
//             ,
//             {
//                 id: 5,
//                 title: 'برگزاری کلاس آنلاین',
//                 subtitle:'هماهنگی برای اعلام تاریخ و ساعت برگزاری کلاس آنلاین با مهندس گردان ',
//                 image: require('../../../assets/images/icons/1792931.png'),
//             },
//         ],
//     };
//     _onStateChange = ({open}) => this.setState({open});
//
//     render() {
//         const {open} = this.state;
//         return (
//             <View style={{flex: 1}}>
//                 <StatusBar
//                     hidden={false}
//                     backgroundColor='#47b03e'
//                 />
//                 <View style={{marginTop:23}}>
//                 <Header  title='یادآوری ها' />
//                 </View>
//                 <ScrollView>
//                 <FlatGrid
//                     itemDimension={200}
//                     items={this.state.data}
//                     style={{marginTop: 3}}
//                     contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
//                     renderItem={({item, index}) => (
//                         <View>
//                             <TouchableOpacity activeOpacity={0.9} onPress={() => {
//                                 this.clickEventListener(item);
//                             }}>
//                                 <Card style={{marginTop: 5, paddingRight: 10,backgroundColor:'#ecfaed'}}>
//                                     <Card.Title
//                                         title={item.title}
//                                         titleStyle={{
//                                             textAlign: 'right',
//                                             marginRight: 10,
//                                             fontFamily: 'IRANSansMobile',
//                                             fontSize: 14,
//                                             color:'#3e843d'
//                                         }}
//                                         subtitle={ item.subtitle}
//                                         subtitleStyle={{
//                                             marginRight: 20,
//                                             textAlign: 'right',
//                                             fontFamily: 'IRANSansMobile',
//                                             fontSize: 12,
//                                         }}
//                                         left={(props) =>
//                                             <View>
//                                             <Icon
//                                                 name="edit"
//                                                 color="#3e843d"
//                                                 style={{fontSize: 20, marginLeft: 5, marginVertical: 8}}
//                                             />
//                                                 <Icon
//                                                     name="trash"
//                                                     color="#3e843d"
//                                                     style={{fontSize: 20, marginLeft: 5, marginVertical: 8}}
//                                                 />
//                                             </View>
//                                         }
//                                         right={(props) => <Image
//                                             style={{height: 50, width: 50, padding: 2, borderRadius: 10}}
//                                             source={item.image}/>}
//                                     />
//                                 </Card>
//                             </TouchableOpacity>
//                         </View>
//                     )}/>
//                 </ScrollView>
//
//                 <Provider>
//                     <Portal>
//                         <FAB.Group
//                             fabstyle={{color: '#fff', backgroundColor: '#3d933c'}}
//                             open={open}
//                             icon={open ? 'calendar-today' : 'plus'}
//                             actions={[
//                                 {icon: 'plus', onPress: () => console.log('Pressed add')},
//                                 {icon: 'star', label: 'Star', onPress: () => console.log('Pressed star')},
//                                 {icon: 'email', label: 'Email', onPress: () => console.log('Pressed email')},
//                                 {icon: 'bell', label: 'Remind', onPress: () => console.log('Pressed notifications')},
//                             ]}
//                             onStateChange={this._onStateChange}
//                             onPress={() => {
//                                 if (open) {
//                                     // do something if the speed dial is open
//                                 }
//                             }}
//                         />
//                     </Portal>
//                 </Provider>
//             </View>
//
//         );
//     }
// }
//
// export default Reminder;



import React, { Component } from 'react';
import { View, TouchableOpacity, Image, ScrollView, StatusBar, StyleSheet, Text, Picker ,} from 'react-native';
import { Provider, Portal, FAB, Avatar, Card, IconButton } from 'react-native-paper';
import Modal from 'react-native-modalbox';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import Select2 from 'react-native-select-two';
import ImagePicker from 'react-native-image-picker';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu'
import Header from '../layouts/Header';
import LinearGradient from 'react-native-linear-gradient';
const typeIncome = [
    { id: 1, name: 'هرگز' },
    { id: 2, name: 'روزانه' },
    { id: 3, name: 'هفتگی' },
    { id: 4, name: 'ماهانه' },
    { id: 5, name: 'سالیانه' },
    { id: 6, name: 'سفر' },
    { id: 7, name: 'شرکت' },
];

const renderImage = (image) => {
    console.log(image)
    return [
        <>
            <Card >

                <CardItem bordered>
                    <Left>

                    </Left>
                    <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{
                            borderRadius: 10,
                            width: '200%',
                            height: 200,

                        }} source={{ uri: image }} />
                    </Body>

                    <Right>

                    </Right>
                </CardItem>
            </Card>

        </>,
    ];
};
import { CardItem, Tabs, Tab, ListItem, TabHeading, Left, Body, Title, Right, Form, Input, Item, Label, Button, } from 'native-base';

// import Header from '../layouts/Header';
import { FlatGrid } from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome';

class Reminder extends Component {
    state = {
        image: '',
        open: false,
        selected: "key1",
        data: [
            {
                id: 1,
                title: 'برگزاری کلاس آنلاین',
                subtitle: 'هماهنگی برای اعلام تاریخ و ساعت برگزاری کلاس آنلاین با مهندس گردان ',
                image: require('../../../assets/images/icons/1792931.png'),
            }
            ,
            {
                id: 2,
                title: 'برگزاری کلاس آنلاین',
                subtitle: 'هماهنگی برای اعلام تاریخ و ساعت برگزاری کلاس آنلاین با مهندس گردان ',
                image: require('../../../assets/images/icons/1792931.png'),
            }
            ,
            {
                id: 3,
                title: 'برگزاری کلاس آنلاین',
                subtitle: 'هماهنگی برای اعلام تاریخ و ساعت برگزاری کلاس آنلاین با مهندس گردان ',
                image: require('../../../assets/images/icons/1792931.png'),
            }
            ,
            {
                id: 4,
                title: 'برگزاری کلاس آنلاین',
                subtitle: 'هماهنگی برای اعلام تاریخ و ساعت برگزاری کلاس آنلاین با مهندس گردان ',
                image: require('../../../assets/images/icons/1792931.png'),
            }
            ,
            {
                id: 5,
                title: 'برگزاری کلاس آنلاین',
                subtitle: 'هماهنگی برای اعلام تاریخ و ساعت برگزاری کلاس آنلاین با مهندس گردان ',
                image: require('../../../assets/images/icons/1792931.png'),
            },
        ],
    };
    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }
    // ..............imagepicker............................
    renderAsset(image) {
        return renderImage(image);
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
                this.setState({ image: response.uri });
                // console.log(this.state.image);
                if (this.state.image != null) {

                    this.setState({ isVisableBoxImag: 'flex' });
                } else {
                    console.log('image empty');
                }
            }
        });

    };

    _onStateChange = ({ open }) => this.setState({ open });

    render() {
        const image = this.state;
        const { open } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    hidden={false}
                    backgroundColor='#47b03e'
                />
                <View style={{marginTop:23}}>
                <Header title={'یادآوری ها'} />
                </View>
                <View style={{ marginTop: 23 }}>
                    {/* <Header  title='یادآوری ها' /> */}
                </View>
                <ScrollView>
                    <FlatGrid
                        itemDimension={200}
                        items={this.state.data}
                        style={{marginTop: 3}}
                        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                        renderItem={({item, index}) => (
                            <View>
                                <TouchableOpacity activeOpacity={0.9} onPress={() => {
                                    this.clickEventListener(item);
                                }}>
                                    <Card style={{marginTop: 5, paddingRight: 10,backgroundColor:'#ecfaed'}}>
                                        <Card.Title
                                            title={item.title}
                                            titleStyle={{
                                                textAlign: 'right',
                                                marginRight: 10,
                                                fontFamily: 'IRANSansMobile',
                                                fontSize: 14,
                                                color:'#3e843d'
                                            }}
                                            subtitle={ item.subtitle}
                                            subtitleStyle={{
                                                marginRight: 20,
                                                textAlign: 'right',
                                                fontFamily: 'IRANSansMobile',
                                                fontSize: 12,
                                            }}
                                            left={(props) =>
                                                <View>
                                                    <Icon
                                                        name="edit"
                                                        color="#3e843d"
                                                        style={{fontSize: 20, marginLeft: 5, marginVertical: 8}}
                                                    />
                                                    <Icon
                                                        name="trash"
                                                        color="#3e843d"
                                                        style={{fontSize: 20, marginLeft: 5, marginVertical: 8}}
                                                    />
                                                </View>
                                            }
                                            right={(props) => <Image
                                                style={{height: 50, width: 50, padding: 2, borderRadius: 10}}
                                                source={item.image}/>}
                                        />
                                    </Card>
                                </TouchableOpacity>
                            </View>
                        )}/>
                </ScrollView>

                <Provider>
                    <Portal>
                        <FAB.Group
                            fabstyle={{ color: '#fff', backgroundColor: '#3d933c' }}
                            open={open}
                            icon={open ? 'calendar-today' : 'plus'}
                            actions={[
                                // {icon: 'plus', onPress: () => console.log('Pressed add')},
                                { icon: 'text', label: 'متنی', onPress: () => this.refs.modal1.open() },
                                { icon: 'voice', label: 'صدا', onPress: () => console.log('Pressed email') },
                                { icon: 'camera', label: 'تصویری', onPress: () => this.refs.modal2.open() },
                            ]}
                            onStateChange={this._onStateChange}
                            onPress={() => {
                                if (open) {
                                    // do something if the speed dial is open
                                }
                            }}
                        />
                    </Portal>
                </Provider>
                {/*............ ........modal4................................. */}
                <Modal
                    style={[styles.modal4]}
                    position={'bottom'}
                    ref={'modal1'}
                    coverScreen={true}
                    swipeToClose={false}
                >
                    <LinearGradient
                        style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, }}
                        start={{ x: 0.3, y: 0.0 }} end={{ x: 0.5, y: 1.0 }}
                        locations={[0.1, 0.6, 0.9]}
                        colors={['#3e843d', '#3ede30', '#47b03e']}>
                        <View style={{
                            padding: 7,
                            alignItems: 'center',
                        }}>

                            <Text style={{ fontSize: 20, color: '#fff', marginBottom: 5, fontFamily: 'Far_Aref' }}>
                                یادآور متنی
                            </Text>
                        </View>
                    </LinearGradient>



                    <View style={{ marginTop: 2, flex: 1, }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View>
                                <Item fixedLabel>
                                    <Left>
                                        <Button transparent onPress={() => this.refs.modal1.open()}>
                                            <Icon active name="text-height" style={{ color: '#00C851', fontSize: 20, marginLeft: 8 }} />
                                        </Button>
                                    </Left>
                                    <Input style={{ color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light', alignItems: 'center', justifyContent: 'center' }} />
                                    <Label style={{
                                        paddingRight
                                            : 20
                                    }}><Text style={{
                                        color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light', paddingRight: 20, height: 15,

                                    }}>عنوان:</Text></Label>

                                </Item>

                                <Item fixedLabel>
                                    <Left>
                                        <Button transparent onPress={() => this.refs.modal1.open()}>
                                            <Icon active name="edit" style={{ color: '#00C851', fontSize: 20, marginLeft: 8 }} />
                                        </Button>
                                    </Left>
                                    <Input multiline={true} style={{ color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light', alignItems: 'center' }} />
                                    <Label style={{
                                        paddingRight
                                            : 20
                                    }}><Text style={{
                                        color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light', paddingRight: 20, height: 15,

                                    }}>یاداشت :</Text></Label>

                                </Item>

                                <Item fixedLabel onPress={() => this.refs.modal1.open()}>
                                    <Left>
                                        <Button transparent onPress={() => this.refs.modal1.open()}>
                                            <Icon active name="calendar" style={{ color: '#00C851', fontSize: 20, marginLeft: 8 }} />
                                        </Button>
                                    </Left>

                                    <Text style={{ color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light' }}>{this.state.DateStartTextCost} </Text>
                                    <Label style={{
                                        paddingRight
                                            : 20
                                    }}><Text style={{
                                        color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light', paddingRight

                                            : 20
                                    }}> تاریخ:</Text></Label>


                                </Item>

                                <ListItem Icon>
                                    <Left>
                                        <Button transparent style={{ marginLeft: -20, }}>
                                            <Icon active name="bell" style={{ color: '#00C851', fontSize: 20, marginLeft: 8 }} />
                                        </Button>

                                    </Left>
                                    <Body style={{ marginLeft: -80, marginRight: 100, width: '100%' }}>
                                        {/* <Select2

                                            isSelectSingle={true}
                                            // colorTheme='#3d933c'
                                            popupTitle="انتخاب نوع  دسته ها"
                                            cancelButtonText="انصراف"
                                            // newButtonText="جدید"
                                            selectButtonText="تایید"
                                            // title="نوع دسته ها"
                                            style={{ color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light', width: '140%' }}
                                            searchPlaceHolderText="جستجو نوع دسته"
                                            data={typeIncome}
                                            onSelect={data => {
                                                this.setState({ data });
                                            }}
                                            onRemoveItem={data => {
                                                this.setState({ data });
                                            }}
                                        />  */}
                                        <Picker
                                            mode="dropdown"

                                            iosIcon={<Icon name="arrow-down" />}

                                            textStyle={{ color: "#777777" }}
                                            itemStyle={{
                                                backgroundColor: "#d3d3d3",
                                                marginLeft: 0,
                                                paddingLeft: 1,
                                                color:'#777777'
                                            }}
                                            itemTextStyle={{ color: '#777777' }}
                                            style={{ width: undefined }}
                                            selectedValue={this.state.selected}
                                            onValueChange={this.onValueChange.bind(this)}
                                        >
                                            <Picker.Item label="هرگز" value="key0" style={{fontFamilyfontFamily:'IRANSansMobile(FaNum)_Light',color:'#777777'}} />
                                            <Picker.Item label="روزانه" value="key1" />
                                            <Picker.Item label="هفتگی" value="key2" />
                                            <Picker.Item label="ماهانه" value="key3" />
                                            <Picker.Item label="سالانه" value="key4" />
                                        </Picker>
                                    </Body>
                                    <Right>
                                        <Text style={{ color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light', marginHorizontal: -40, marginRight: -2 }}> تکرار یاداوری</Text>

                                    </Right>
                                </ListItem>


                                <Modal
                                    style={[styles.modal4]}
                                    position={"bottom"}
                                    ref={"modal1"}
                                    coverScreen={true}
                                    swipeToClose={true}
                                >

                                    <DatePicker isGregorian={false}
                                                mode="date"
                                                options={{
                                                    defaultFont: 'Shabnam-Light',
                                                    headerFont: 'Shabnam-Medium',
                                                }}
                                                onDateChange={date => {
                                                    this.setState({ DateStartTextCost: date });
                                                    this.refs.modal1.close()
                                                }

                                                }

                                                placeholder="Select date"
                                    />
                                    <Button full success>
                                        <Text style={{ color: '#fff' }}>تایید</Text>
                                    </Button>
                                </Modal>

                            </View>
                        </ScrollView>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>
                        <TouchableOpacity style={{
                            borderRadius: 5, width: '45%', marginLeft: 10, backgroundColor: '#fff', borderColor: '#47b03e', borderWidth: 1.5,
                            height: 40, marginBottom: 2,
                        }}>

                            <Text style={{ color: '#47b03e', textAlign: 'center', fontSize: 16, marginTop: 8 }}>لغو</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderRadius: 5, width: '45%', marginLeft: 10, backgroundColor: '#47b03e',
                            height: 40, marginBottom: 2,

                        }}>

                            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, marginTop: 8 }}>ذخیره</Text>
                        </TouchableOpacity>


                    </View>
                </Modal>
                {/*............ ........modal2................................. */}
                <Modal
                    style={[styles.modal4]}
                    position={'bottom'}
                    ref={'modal2'}
                    coverScreen={true}
                    swipeToClose={false}
                >
                    <LinearGradient
                        style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, }}
                        start={{ x: 0.3, y: 0.0 }} end={{ x: 0.5, y: 1.0 }}
                        locations={[0.1, 0.6, 0.9]}
                        colors={['#3e843d', '#3ede30', '#47b03e']}>
                        <View style={{
                            padding: 7,
                            alignItems: 'center',
                        }}>

                            <Text style={{ fontSize: 20, color: '#fff', marginBottom: 5, fontFamily: 'Far_Aref' }}>
                                یادآور تصویری
                            </Text>
                        </View>
                    </LinearGradient>



                    <View style={{ marginTop: 2, flex: 1, }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View>
                                <Item fixedLabel>
                                    <Left>
                                        <Button transparent onPress={() => this.refs.modal1.open()}>
                                            <Icon active name="text-height" style={{ color: '#00C851', fontSize: 20, marginLeft: 8 }} />
                                        </Button>
                                    </Left>
                                    <Input style={{ color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light' }} />
                                    <Label style={{
                                        paddingRight
                                            : 20
                                    }}><Text style={{
                                        color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light', paddingRight: 20, height: 15,

                                    }}>عنوان:</Text></Label>

                                </Item>
                                <Item fixedLabel>
                                    <Left>
                                        <Button transparent onPress={() => this.refs.modal1.open()}>
                                            <Icon active name="calendar" style={{ color: '#00C851', fontSize: 20, marginLeft: 8 }} />
                                        </Button>
                                    </Left>
                                    <Text style={{ color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light' }}>{this.state.DateStartTextCost} </Text>
                                    <Label style={{
                                        paddingRight
                                            : 20
                                    }}><Text style={{
                                        color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light', paddingRight

                                            : 20
                                    }}> تاریخ:</Text></Label>

                                </Item>
                                <ListItem Icon>
                                    <Left>
                                        <Button transparent style={{ marginLeft: -20, }}>
                                            <Icon active name="bell" style={{ color: '#00C851', fontSize: 20, marginLeft: 8 }} />
                                        </Button>

                                    </Left>
                                    <Body style={{ marginLeft: -80, marginRight: 100, width: '100%' }}>
                                        {/* <Select2

                                            isSelectSingle={true}
                                            // colorTheme='#3d933c'
                                            popupTitle="انتخاب نوع  دسته ها"
                                            cancelButtonText="انصراف"
                                            // newButtonText="جدید"
                                            selectButtonText="تایید"
                                            // title="نوع دسته ها"
                                            style={{ color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light', width: '140%' }}
                                            searchPlaceHolderText="جستجو نوع دسته"
                                            data={typeIncome}
                                            onSelect={data => {
                                                this.setState({ data });
                                            }}
                                            onRemoveItem={data => {
                                                this.setState({ data });
                                            }}
                                        />  */}
                                        <Picker
                                            mode="dropdown"

                                            iosIcon={<Icon name="arrow-down" />}

                                            textStyle={{ color: "#777777" }}
                                            itemStyle={{
                                                backgroundColor: "#d3d3d3",
                                                marginLeft: 0,
                                                paddingLeft: 1,
                                                color:'#777777'
                                            }}
                                            itemTextStyle={{ color: '#777777' }}
                                            style={{ width: undefined }}
                                            selectedValue={this.state.selected}
                                            onValueChange={this.onValueChange.bind(this)}
                                        >
                                            <Picker.Item label="هرگز" value="key0" style={{fontFamilyfontFamily:'IRANSansMobile(FaNum)_Light',color:'#777777'}} />
                                            <Picker.Item label="روزانه" value="key1" />
                                            <Picker.Item label="هفتگی" value="key2" />
                                            <Picker.Item label="ماهانه" value="key3" />
                                            <Picker.Item label="سالانه" value="key4" />
                                        </Picker>
                                    </Body>
                                    <Right>
                                        <Text style={{ color: '#777', fontFamily: 'IRANSansMobile(FaNum)_Light', marginHorizontal: -40, marginRight: -2 }}> تکرار یاداوری</Text>

                                    </Right>
                                </ListItem>
                                {/* .........................imagepicker.................................. */}

                                <View style={{ marginTop: 8 }}>
                                    <Card>
                                        <CardItem bordered style={{ backgroundColor: '#e0e0e0', borderStyle: 'dashed', borderWidth: 0.5, }}>
                                            <Left>
                                                <Icon name='ellipsis-v' style={{  marginTop: 5, marginLeft:-5, fontSize:20,color:'#47b03e'}} onPress={this.showMenu} />
                                                <Menu
                                                    ref={this.setMenuRef}>

                                                    <MenuItem onPress={this.hideMenu}>ویرایش</MenuItem>
                                                    <MenuItem onPress={this.hideMenu}>حذف</MenuItem>

                                                </Menu>
                                            </Left>
                                            <Body></Body>

                                            <Right style={{ alignItems:'flex-end',justifyContent:'flex-end' }}>
                                                <Text style={{ color: '#777', textAlign: 'right' }} onPress={this.handleClick.bind(this)}>پیوست فایل</Text>
                                            </Right>

                                        </CardItem>
                                    </Card>

                                    <View>
                                        {this.state.image ? this.renderAsset(this.state.image) : null}
                                    </View>


                                </View>



                                <Modal
                                    style={[styles.modal4]}
                                    position={"bottom"}
                                    ref={"modal1"}
                                    coverScreen={true}
                                    swipeToClose={true}
                                >

                                    <DatePicker isGregorian={false}
                                                mode="date"
                                                options={{
                                                    defaultFont: 'Shabnam-Light',
                                                    headerFont: 'Shabnam-Medium',
                                                }}
                                                onDateChange={date => {
                                                    this.setState({ DateStartTextCost: date });
                                                    this.refs.modal1.close()
                                                }

                                                }

                                                placeholder="Select date"
                                    />
                                    <Button full success>
                                        <Text style={{ color: '#fff' }}>تایید</Text>
                                    </Button>
                                </Modal>

                            </View>
                        </ScrollView>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>
                        <TouchableOpacity style={{
                            borderRadius: 5, width: '45%', marginLeft: 10, backgroundColor: '#fff', borderColor: '#47b03e', borderWidth: 1.5,
                            height: 40, marginBottom: 2,
                        }}>

                            <Text style={{ color: '#47b03e', textAlign: 'center', fontSize: 16, marginTop: 8 }}>لغو</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderRadius: 5, width: '45%', marginLeft: 10, backgroundColor: '#47b03e',
                            height: 40, marginBottom: 2,

                        }}>

                            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16, marginTop: 8 }}>ذخیره</Text>
                        </TouchableOpacity>


                    </View>
                </Modal>


            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#04c1a5',
    },
    modal4: {
        height: 426,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,

    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    root: {
        marginTop:20,
        marginHorizontal:20
    },
    card: {
        padding:10,
        marginTop:5,
        marginBottom:5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius:10,
    },

    text: {
        marginBottom: 5,
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    content: {
        flex: 1,

        marginRight:10
    },
    mainContent: {
        marginRight: 60
    },
    img: {
        height: 50,
        width: 50,
        margin: 0
    },
});


export default Reminder;
// import React, { Component } from 'react';
// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   FlatList
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Card } from 'native-base';
// export default class Comments extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data:[
//         {id:1, image: require('../image/ha.jpg'), name:"پرداخت قبض",  comment: 'هماهنگی برای ابا مهندس گردان '},
//         {id:2,image: require('../image/ha.jpg'), name:"پرداخت چک",     comment: 'هماهنگی برای اعلام تاریخ و ساعت برگزاری کلاس آنلاین با مهندس گردان '},
//         {id:3,image: require('../image/ha.jpg'), name:"پول مامان", comment: 'هماهنگی برای اعلام تاریخ و ساعت برگزاری کلاس آنلاین با مهندس گردان '},
//         {id:4,image: require('../image/ha.jpg'), name:"پول شارز خانه",  comment: 'هماهنگی برای اعلام تاریخ و ساعت برگزاری کلاس آنلاین با مهندس گردان '},

//       ]
//     }
//   }

//   render() {
//     return (
//       <FlatList
//         style={styles.root}
//         data={this.state.data}
//         extraData={this.state}
//         ItemSeparatorComponent={() => {
//           return (
//             <View />
//           )
//         }}
//         keyExtractor={(item)=>{
//           return item.id;
//         }}
//         renderItem={(item) => {
//           const Notification = item.item;
//           return(
//             <Card style={styles.container}>
//                <View
//                                           style={{

//                                               flexDirection:'row'

//                                           }}>
//                                           <TouchableOpacity>
//                                               <Icon
//                                                   name="trash"
//                                                   color="red"
//                                                   style={{fontSize: 20, marginLeft: 5, marginTop: 5}}
//                                               />
//                                           </TouchableOpacity>
//                                           <TouchableOpacity>
//                                               <Icon
//                                                   name="edit"
//                                                   color="green"
//                                                   style={{fontSize: 20, marginLeft: 5, marginTop: 5}}
//                                               />
//                                           </TouchableOpacity>

//                                       </View>
//               <View style={styles.content}>
//                 <View style={styles.contentHeader}>

//                   <Text  style={styles.name}>{Notification.name}</Text>

//                 </View>
//                 <Text rkType='primary3 mediumLine' style={{color:'#777777', fontFamily: 'IRANSansMobile',fontSize:12}}>{Notification.comment}</Text>
//               </View>
//               <Image style={styles.image} source={ Notification.image}/>
//           </Card>
//           );
//         }}/>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   root: {
//     backgroundColor: "#ffffff",
//     marginTop:30,
//     marginHorizontal:20
//   },
//   container: {
//     shadowColor: '#00000021',
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.37,
//     shadowRadius: 7.49,
//     elevation: 12,


//     marginVertical: 20,
//     marginTop:2,
//     backgroundColor:"white",
//     padding: 10,
//     flexDirection:'row',
//     borderRadius:15,
//   },
//   content: {
//     marginLeft: 1,
//     flex:2,
//   },
//   contentHeader: {
//     flexDirection: 'row',
//     alignItems:'flex-end',
//     justifyContent:'flex-end',
//     marginBottom: 1
//   },

//   image:{
//     width:60,
//     height:60,
//     borderRadius:60,
//     marginLeft:20
//   },

//   name:{
//     fontSize:14,
//     fontWeight:"bold",
//     color:'green' ,
//     fontFamily: 'IRANSansMobile',

//   },
// });
