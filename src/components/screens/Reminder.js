import React, { Component } from 'react';
import { View, TouchableOpacity, Image, ScrollView, StatusBar, StyleSheet, Text, Picker ,modal} from 'react-native';
import { Provider, Portal, FAB, Avatar,  IconButton } from 'react-native-paper';
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
import { CardItem, Tabs, Tab, ListItem, TabHeading, Left, Body, Title, Right, Form, Input, Item, Label, Button, Card} from 'native-base';

import { FlatGrid } from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome';

class Reminder extends Component {
    state = {
        image: '',
        open: false,
        modalVisible:false,
        userSelected:[],
        selected: "key1",
        data: [
            {id:1,  title: 'برگزاری کلاس آنلاین', description: 'هماهنگی برای اعلام تاریخ و ساعت برگزاری کلاس آنلاین با مهندس گردان ', date:"2019-03-25 ", color:"#228B22", completed:1},
            {id:2,  title: 'برگزاری کلاس آنلاین', description: 'هماهنگی برای اعلام تاریخ و ساعت برگزاری کلاس آنلاین با مهندس گردان ',    date:"2019-03-25", color:"#FF00FF", completed:2},
            {id:3,  title: 'برگزاری کلاس آنلاین', description: 'هماهنگی برای اعلام تاریخ و ساعت برگزاری کلاس آنلاین با مهندس گردان ',date:"2019-03-25 ", color:"#4B0082", completed:0},
            {id:4,  title: 'برگزاری کلاس آنلاین', description: 'هماهنگی برای اعلام تاریخ و ساعت برگزاری کلاس آنلاین با مهندس گردان ', date:"2019-03-25 ", color:"#20B2AA", completed:0},

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
// ..............
    clickEventListener = (item) => {
        Alert.alert("Item selected: "+item.description)
    }

    __getCompletedIcon = (item) => {
        if(item.completed == 1) {
            // return require('../image/photo.png');
            return <Icon   name='camera' color='green'style={{fontSize:25}}/>
        }
        else if(item.completed == 2) {
            return <Icon   name='bell' color='green'style={{fontSize:25}}/>
        }else {
            return <Icon   name="text-height" color='green'style={{fontSize:25}}/>
        }
    }
    render() {
        const image = this.state;
        const { open } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    hidden={false}
                    backgroundColor='#3e843d'
                />
                     <Header  title='یادآوری ها' />
                <FlatGrid
                    itemDimension={200}
                    items={this.state.data}
                    style={{marginTop: 3}}
                    contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                    renderItem={({item, index}) => (
                        <Card>
                            <CardItem>
                                <Left>
                                    <Text style={styles.date}>{item.date}</Text>
                                </Left>
                                <Body>


                                </Body>
                                <Right style={{flexDirection:'row',flex:2,alignSelf:'flex-end',justifyContent:'flex-end',alignItems:'flex-end'}}>
                                    <Text style={styles.titel}>{item.title}</Text>
                                    <Text > { this.__getCompletedIcon(item)}</Text>

                                </Right>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text style={styles.description}>
                                        {item.description}
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem CardItem footer bordered style={{height:35}} >
                                <Left>
                                    <Button transparent >

                                        <Text style={{fontSize:16,color:'#777777',marginRight:5}}>نمایش</Text>
                                        <Icon active name="play-circle-o"  style={{fontSize:20,color:'#777777',marginRight:5}} />
                                    </Button>
                                </Left>
                                <Body>
                                    <Button transparent>

                                    </Button>
                                </Body>
                                <Right>
                                    <Button transparent>

                                        <Icon active name="trash"  style={{fontSize:20,color:'red'}}/>

                                    </Button>
                                </Right>

                            </CardItem>
                        </Card>

                    )}/>


                <Provider>
                    <Portal>
                        <FAB.Group
                            fabstyle={{ color: '#fff', backgroundColor: '#3d933c' }}
                            open={open}
                            icon={open ? '' : 'plus'}
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
                    useNativeDriver={true}
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

                                <View style={{marginTop: 8}}>
                                    <Card>
                                        <CardItem bordered style={{backgroundColor: '#c5f3c1', borderStyle: 'dashed', borderWidth: 0.5}}>
                                            <Left>
                                                <TouchableOpacity
                                                    style={{width:50,justifyContent:'center',alignItems:'center'}}
                                                    activeOpacity={0.9}
                                                    onPress={this.showMenu}>
                                                    <Icon name='ellipsis-v'
                                                          style={{marginTop: 5, fontSize: 25, color: '#47b03e'}}
                                                    />
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
                <Modal
                    animationType={'fade'}
                    transparent={true}
                    onRequestClose={() => this.setModalVisible(false)}
                    visible={this.state.modalVisible}>

                    <View style={styles.popupOverlay}>
                        <View style={styles.popup}>
                            <View style={styles.popupContent}>
                                <ScrollView contentContainerStyle={styles.modalInfo}>
                                    <Image style={styles.image} source={{uri: this.state.userSelected.image}}/>
                                    <Text style={styles.name}>{this.state.userSelected.name}</Text>
                                    <Text style={styles.position}>{this.state.userSelected.position}</Text>
                                    <Text style={styles.about}>{this.state.userSelected.about}</Text>
                                </ScrollView>
                            </View>
                            <View style={styles.popupButtons}>
                                <TouchableOpacity onPress={() => {this.setModalVisible(false) }} style={styles.btnClose}>
                                    <Text style={styles.txtClose}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
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
    tasks:{
        flex:1,
    },
    cardContent: {
        marginRight:20,
        marginTop:2,
    },
    image:{
        width:35,
        height:35,
        // alignSelf:'flex-end',
        // justifyContent:'flex-end',
        // alignItems:'flex-end',
    },

    card:{
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical:2,
        marginHorizontal:20,
        backgroundColor:"white",
        flexBasis: '46%',
        padding: 20,
        flexDirection:'row',
        flexWrap: 'wrap',
        borderRadius:5,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },

    description:{
        fontSize:14,
        flex:1,
        color:"#777777",
        fontFamily: 'IRANSansMobile(FaNum)',
        marginTop:-13

    },
    titel:{
        fontSize:12,
        flex:1,
        color:"green",
        fontFamily: 'IRANSansMobile(FaNum)'

    },
    date:{
        fontSize:14,
        flex:1,
        color:"#696969",
        marginTop:3,
        fontFamily: 'IRANSansMobile(FaNum)'
    },
    /************ modals ************/
    popup: {
        backgroundColor: 'white',
        marginTop: 80,
        marginHorizontal: 20,
        borderRadius: 7,
    },
    popupOverlay: {
        backgroundColor: "#00000057",
        flex: 1,
        marginTop: 30
    },
    popupContent: {
        //alignItems: 'center',
        margin: 5,
        height:250,
    },
    popupHeader: {
        marginBottom: 45
    },
    popupButtons: {
        marginTop: 15,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: "#eee",
        justifyContent:'center'
    },
    popupButton: {
        flex: 1,
        marginVertical: 16
    },
    btnClose:{
        height:20,
        backgroundColor:'#20b2aa',
        padding:20
    },
    modalInfo:{
        alignItems:'center',
        justifyContent:'center',
    },
    followButton: {
        marginTop:-40,
        height:20,
        width:100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
        backgroundColor: "green",
    },
    followButtonText:{
        color: "#FFF",
        fontSize:16,
    },
});

export default Reminder;
