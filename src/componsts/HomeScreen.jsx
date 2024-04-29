import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (
        <LinearGradient colors={['#3261c8', '#0c2762', '#041a57']} style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.content}>
                    <Text style={styles.location}>Kochi, Kerala</Text>
                    <Text style={styles.time}>June 20, 3:01pm</Text>
                    <View style={styles.max}>
                        <Image style={styles.image} source={require("../astess/image/535239.png")} />
                    </View>
                </View>
                <View style={styles.logo}>
                    <Image style={styles.imag} source={require("../astess/icons/Assests/thunder.png")} />
                </View>
                <View style={styles.muhad}>
                    <Text style={styles.temp}>25°C</Text>
                    <Text style={styles.weather}>Wind: 7.90 km/h</Text>
                    <Text style={styles.humidity}>Humidity: 80%</Text>
                </View>
                <View style={styles.view}>
                    <Text style={styles.today}>Today</Text>
                    <TouchableOpacity style={styles.opsit}>
                        <Text style={styles.viewall}>View all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={styles.scrollContainer}>
                    <View style={styles.scrollContent}>
                        {/* Content to be scrolled */}
                        <View style={styles.scrollItem1}>
                            <Image source={require("../astess/icons/Assests/lighting.png")} />
                            <Text style={styles.dgree}>14.00</Text>
                            <Text style={styles.middle}>25°</Text>
                        </View>
                        <View style={styles.scrollItem2}>
                            <Image source={require("../astess/icons/Assests/rain.png")} />
                            <Text style={styles.dgree}>11.00</Text>
                            <Text style={styles.middle}>30°</Text>
                        </View>
                        <View style={styles.scrollItem3}>
                            <Image source={require("../astess/icons/Assests/rainy-cloud.png")} />
                            <Text style={styles.dgree}>10.00</Text>
                            <Text style={styles.middle}>40°</Text>
                        </View>
                        <View style={styles.scrollItem4}>
                            <Image source={require("../astess/icons/Assests/thunder.png")} />
                            <Text style={styles.dgree}>6.00</Text>
                            <Text style={styles.middle}>10°</Text>
                        </View>
                        {/* Add more content here */}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    content: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    location: {
        color: 'white',
        marginBottom: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        width: 30,
        height: 30,
        marginTop: -100,
    },
    time: {
        color: 'white',
        fontSize: 20,
    },
    max: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 330,
    },
    logo: {
        justifyContent: 'center',
        marginTop: 50,
        alignItems: 'center',
    },
    imag: {
        width: 180,
        height: 180,
    },
    muhad: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    temp: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    weather: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    humidity: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
        gap: 200,
    },
    today: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    viewall: {
        color: '#000000',
        fontWeight: 'bold',
    },
    opsit: {
        backgroundColor: '#ffffff',
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    scrollContainer: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'row',
    },
    scrollContent: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        // flexWrap: 'wrap',
    },
    scrollItem1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
        marginLeft: 10,
        backgroundColor: '#7596d0',
        borderRadius: 20,
        padding: 10,
    },
    scrollItem2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
        marginLeft: 10,
        backgroundColor: '#061633',
        borderRadius: 20,
        padding: 10,
    },
    scrollItem4: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
        marginLeft: 10,
        backgroundColor: '#111213',
        borderRadius: 20,
        padding: 10,
    },
    scrollItem3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 10,
        marginLeft: 10,
        backgroundColor: '#ced67f',
        borderRadius: 20,
        padding: 10,
    },
    dgree: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
      width: 50,
      height: 50,
    },
    middle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
    },
});
