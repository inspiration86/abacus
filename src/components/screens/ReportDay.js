
import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor,
    ScrollView, FlatList, Image
} from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, } from 'native-base';

import LinearGradient from 'react-native-linear-gradient';
import { FlatGrid } from 'react-native-super-grid';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator, SafeAreaView } from 'react-navigation';
import { PieChart } from 'react-native-charts-wrapper';

class ReportDay extends React.Component {
    constructor() {
        super();
        this.state = {
            legend: {
                enabled: true,
                textSize: 15,
                direction: 'RIGHT_TO_LEFT',
                horizontalAlignment: "CENTER",
                verticalAlignment: 'BOTTOM',
                orientation:   'HORIZONTAL',
                wordWrapEnabled: true,
            },
            data: {
                dataSets: [{
                    values: [{ value: 45, label: 'نقد' },
                        { value: 21, label: 'کارت به کارت' },
                        { value: 15, label: 'طلا' },
                        { value: 9, label: 'اجاره' },
                        { value: 15, label: 'یارانه' }],

                    label: '',
                    config: {
                        colors: [processColor('#66d808'), processColor('#c6b807'), processColor('#ffdc2e'), processColor('#8CEAFF'), processColor('#FF8C9D')],
                        valueTextSize: 16,
                        valueTextColor: processColor('green'),
                        sliceSpace: 1,
                        selectionShift: 2,
                        // form: 'SQUARE',
                        // xValuePosition: "OUTSIDE_SLICE",
                        // yValuePosition: "OUTSIDE_SLICE",
                        valueFormatter: "#.#'%'",
                        valueLineColor: processColor('green'),
                        valueLinePart1Length:5
                    }
                }],

            },
            highlights: [{ x: 1 }],
            description: {
                text: '',
                textSize: 15,
                textColor: processColor('darkgray'),

            },

            datap: {
                dataSets: [{
                    values: [{ value: 45, label: 'کنسرت' },
                        { value: 2, label: 'رستوران' },
                        { value: 13, label: 'طلا' },
                        { value: 19, label: 'اجاره' },
                        { value: 15, label: 'ارانه' }],

                    label: '',
                    config: {
                        colors: [processColor('#66d808'), processColor('#c6b807'), processColor('#ffdc2e'), processColor('#8CEAFF'), processColor('#FF8C9D')],
                        valueTextSize: 16,
                        valueTextColor: processColor('green'),
                        sliceSpace: 1,
                        selectionShift: 0,
                        form: 'SQUARE',
                        // xValuePosition: "OUTSIDE_SLICE",
                        // yValuePosition: "OUTSIDE_SLICE",
                        valueFormatter: "#.#'%'",
                        valueLineColor: processColor('green'),
                        valueLinePart1Length: 0.80
                    }
                }],

            },

            highlights: [{ x: 50 }],
            description: {
                text: '',
                textSize: 15,
                textColor: processColor('darkgray'),

            },
            Daydata: [
                {
                    id: 1,
                    day: 'دوشنبه',

                    priceincom: 10000000,
                    nameaccont: 'بانک ملی',
                    date: '1/3/1399'

                }
                ,

            ],
        };
    }

    handleSelect(event) {
        let entry = event.nativeEvent
        if (entry == null) {
            this.setState({ ...this.state, selectedEntry: null })
        } else {
            this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) })
        }

        console.log(event.nativeEvent)
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <LinearGradient
                    style={styles.header}
                    start={{ x: 0.3, y: 0.0 }} end={{ x: 0.5, y: 1.0 }}
                    locations={[0.1, 0.6, 0.9]}
                    colors={['#3e843d', '#3ede30', '#47b03e']}>
                    <View style={styles.headerContent}>

                        <Text style={{ fontSize: 20, color: '#fff', marginBottom: 5, fontFamily: 'Far_Aref' }}>
                            گزارشات روزانه
                        </Text>
                    </View>
                </LinearGradient>
                <Tabs tabBarUnderlineStyle={{ backgroundColor: '#3ede30', height: 3 }} initialPage={1}>
                    <Tab heading={<TabHeading style={{ backgroundColor: '#fff' }}>
                        <Text style={{ color: 'green', fontWeight: 'bold', fontFamily: 'IRANSansMobile' }}>هزینه ها</Text>
                        <Icon name="money" style={{ color: 'green', marginLeft: 5, fontSize: 20 }} />
                        {/* <Image style={{
              width: 50,
              height: 50,
            }} source={require('../image/get-cash.png')} /> */}

                    </TabHeading>}>
                        <View style={{ flex: 1, backgroundColor: '#DCDCDC', }}>
                            <Card style={styles.cardStyle}>

                                <PieChart
                                    style={styles.chart}
                                    logEnabled={true}
                                    chartBackgroundColor={processColor('#FFF')}

                                    chartDescription={this.state.description}
                                    data={this.state.datap}
                                    legend={this.state.legend}
                                    highlights={this.state.highlights}

                                    entryLabelColor={processColor('green')}
                                    entryLabelTextSize={16}
                                    drawEntryLabels={false}

                                    rotationEnabled={true}
                                    rotationAngle={45}
                                    usePercentValues={true}
                                    styledCenterText={{ text: 'نمودار', color: processColor('pink'), size: 15 }}
                                    centerTextRadiusPercent={100}
                                    holeRadius={40}
                                    holeColor={processColor('#fF4500')}
                                    transparentCircleRadius={50}
                                    transparentCircleColor={processColor('#f0f0f088')}
                                    maxAngle={360}
                                    onSelect={this.handleSelect.bind(this)}
                                    onChange={(event) => console.log(event.nativeEvent)}
                                />
                            </Card>
                            <View style={{ flex: 1, marginTop: 10 }}>
                                <FlatList style={styles.notificationList} enableEmptySections={true}
                                          data={this.state.Daydata}
                                          keyExtractor={(item) => {
                                              return item.id;
                                          }}
                                          renderItem={({ item }) => {
                                              return (

                                                  <Card style={{ marginTop: 10, paddingRight: 10, paddingLeft: 10, backgroundColor: '#fff', height: 65, marginHorizontal: 10 }} key={0}>
                                                      <View style={{ flex: 1, flexDirection: 'row' }}>
                                                          <View style={{ flex: 3, marginTop: 17, alignItems: 'flex-start', paddingLeft: 15 }}>

                                                              <Text style={{ fontSize: 14, color: 'red', fontFamily: 'IRANSansMobile(FaNum)' }}> هزینه:  <Text style={{ fontSize: 16, color: '#777777', fontFamily: 'IRANSansMobile(FaNum)' }}> {item.priceincom}</Text></Text>

                                                          </View>
                                                          <View style={{ flex: 3, marginTop: 12 }}>
                                                              <Text style={{ fontSize: 14, color: '#777777', fontFamily: 'IRANSansMobile(FaNum)' }}>{item.day}</Text>
                                                              <Text style={{ fontSize: 13, color: '#777777', fontFamily: 'IRANSansMobile(FaNum)', marginTop: 3, textAlign: 'right' }}>{item.date}</Text>


                                                          </View>
                                                      </View>

                                                  </Card>



                                              )
                                          }} />
                            </View>
                        </View>

                    </Tab>
                    <Tab
                        heading={<TabHeading style={{ backgroundColor: '#fff' }}>
                            <Text style={{ color: 'green', fontWeight: 'bold', fontFamily: 'IRANSansMobile' }}>درآمدها</Text>
                            <Icon name="credit-card" style={{ color: 'green', fontSize: 20, marginLeft: 5 }} />
                            {/* <Image style={{width:40,height:40}} source={require('../image/payment.png')} /> */}

                        </TabHeading>}>
                        <View style={{ flex: 1, backgroundColor: '#DCDCDC', }}>
                            <Card style={styles.cardStyle}>

                                <PieChart
                                    style={styles.chart}
                                    logEnabled={true}
                                    chartBackgroundColor={processColor('#FFF')}

                                    chartDescription={this.state.description}
                                    data={this.state.data}
                                    legend={this.state.legend}
                                    highlights={this.state.highlights}

                                    entryLabelColor={processColor('red')}
                                    entryLabelTextSize={16}
                                    drawEntryLabels={false}

                                    rotationEnabled={true}
                                    rotationAngle={45}
                                    usePercentValues={true}
                                    styledCenterText={{ text: 'نمودار', color: processColor('pink'), size: 15 }}
                                    centerTextRadiusPercent={100}
                                    holeRadius={40}
                                    holeColor={processColor('#fF4500')}
                                    transparentCircleRadius={50}
                                    transparentCircleColor={processColor('#f0f0f088')}
                                    maxAngle={360}
                                    onSelect={this.handleSelect.bind(this)}
                                    onChange={(event) => console.log(event.nativeEvent)}
                                />
                            </Card>
                            <View style={{ flex: 1, marginTop: 10 }}>
                                <FlatList style={styles.notificationList} enableEmptySections={true}
                                          data={this.state.Daydata}
                                          keyExtractor={(item) => {
                                              return item.id;
                                          }}
                                          renderItem={({ item }) => {
                                              return (

                                                  <Card style={{ marginTop: 10, paddingRight: 10, paddingLeft: 10, backgroundColor: '#fff', height: 65, marginHorizontal: 10 }} key={0}>
                                                      <View style={{ flex: 1, flexDirection: 'row' }}>
                                                          <View style={{ flex: 3, marginTop: 17, alignItems: 'flex-start', paddingLeft: 15 }}>

                                                              <Text style={{ fontSize: 14, color: 'green', fontFamily: 'IRANSansMobile(FaNum)' }}> درآمدها:  <Text style={{ fontSize: 16, color: '#777777', fontFamily: 'IRANSansMobile(FaNum)' }}> {item.priceincom}</Text></Text>

                                                          </View>
                                                          <View style={{ flex: 3, marginTop: 12 }}>
                                                              <Text style={{ fontSize: 14, color: '#777777', fontFamily: 'IRANSansMobile(FaNum)' }}>{item.day}</Text>
                                                              <Text style={{ fontSize: 13, color: '#777777', fontFamily: 'IRANSansMobile(FaNum)', marginTop: 3, textAlign: 'right' }}>{item.date}</Text>
                                                          </View>
                                                      </View>

                                                  </Card>

                                              )
                                          }} />
                            </View>
                        </View>
                    </Tab>
                </Tabs>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({

    chart: {
        flex: 1,
        marginTop: 1,
        borderRadius: 10,

    },
    header: {
        backgroundColor: '#3d933c',
    },
    headerContent: {
        padding: 45,
        alignItems: 'center',
    },
    cardStyle: {

        marginTop: 10, paddingRight: 10, paddingLeft: 10, backgroundColor: '#fff', marginHorizontal: 10, height: 200,


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


});

export default ReportDay;
