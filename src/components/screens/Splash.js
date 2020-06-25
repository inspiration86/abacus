import React, {Component} from 'react';
import {
    StyleSheet,
    Animated,
    Easing,
    View,
    TouchableOpacity,
    Alert,
    Image,
    Text,
    ImageBackground,
    StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default class Splash extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
        this.animatedValue3 = new Animated.Value(0);

        // this.state = {
        //     logourl: require('../../../assets/images/user.jpg'),
        //     backgroundurl: require('../../../assets/images/avatar.png'),
        // };
    }

    componentDidMount() {
        this.animate();
        this.splash();

    }
    splash() {
        setTimeout(() => {
            //this.props.navigation.navigate('DashboardUser');
            this.props.navigation.navigate('Slider');

        }, 6000);
    }

    animate() {
        this.animatedValue1.setValue(0);
        this.animatedValue2.setValue(0);
        this.animatedValue3.setValue(0);
        const createAnimation = (value, duration, easing, delay = 0) => {
            return Animated.timing(value, {
                toValue: 1,
                duration,
                easing,
                delay,
                useNativeDriver:false
            });
        };
        Animated.sequence([
            createAnimation(this.animatedValue1, 600, Easing.ease),
            createAnimation(this.animatedValue2, 800, Easing.ease),
            createAnimation(this.animatedValue3, 800, Easing.ease),

        ]).start();
    }

    render() {
        const scale = this.animatedValue2.interpolate({
            inputRange: [0, 1],
            outputRange: [0.1, 1],
        });
        const opacity = this.animatedValue3.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        });
        const introtext = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [-500, 10],
        });

        return (
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={true}
                           barStyle="light-content"/>

                {/*start={{x: -0.1, y: 0.9}} end={{x: 0.6, y: 1.0}}*/}
                {/*locations={[0,0.28,0.20]}*/}
                <LinearGradient start={{x: -0.1, y: 0.9}} end={{x: 0.6, y: 1.0}}
                                locations={[0,0.5,0.9]}
                                colors={['#3e843d','#3ede30','#47b03e']} style={{flex:5,alignItems:'center',justifyContent:'center'}}>
                    <Animated.View style={[{ flex: 1, justifyContent: 'center',marginTop:250,
                        alignItems: 'center',},{transform: [{scale: scale}]}]}>
                        <Image
                            source={require('../../../assets/images/icons/857385.png')}
                            style={{width: 140, height: 140}}
                        />
                        <Text style={styles.text}>چرتکه</Text>
                    </Animated.View>


                    <View style={{
                        flex: 1, justifyContent: 'center',
                        alignItems: 'center',
                        marginTop:180,
                    }}>

                        <Animated.View   style={[styles.inputContainer,{bottom: introtext,}]}>
                            <Text style={{fontSize:20,fontFamily:'Lalezar-Regular',color:'green',}}>اپلیکیشن مالی حسابداری شخصی</Text>
                        </Animated.View>
                    </View>



                    <View style={{
                        flex: 4, justifyContent: 'center',
                        alignItems: 'center',
                    }}>

                        <Animated.View style={[{opacity}]}>
                            <Text style={{fontSize: 16, color: '#fff', fontFamily: 'Lalezar-Regular'}}>طراحی و پیاده سازی
                                شرکت دانش بنیان آرکا</Text>
                        </Animated.View>
                        <Animated.View style={{transform: [{scale: scale}]}}>
                            <Text style={styles.textversion}>نسخه 1.0.0</Text>
                        </Animated.View>
                    </View>
                </LinearGradient>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3d933c',
    },
    textContainer: {
        // marginTop: 450,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'black',
        // opacity:0.5,
    },
    text: {
        marginTop: 5,
        fontSize: 60,
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center',
        // fontFamily: 'GreatVibes-Regular',
        fontFamily: 'Far_Aref',
        // fontFamily: 'IRANSansMobile(FaNum)',
    },
    textversion: {
        fontSize: 12,
        marginTop:5,
        color: '#fff',
        // fontFamily: 'GreatVibes-Regular',
        fontFamily: 'IRANSansMobile(FaNum)',
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius:100,
        textAlign:'center',

        width:300,
        height:30,

        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',

        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation:19,
    },
});
