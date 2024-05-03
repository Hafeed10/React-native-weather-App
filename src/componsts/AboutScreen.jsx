import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, ScrollView, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AboutScreen = () => {
    return (
        <LinearGradient colors={['#3261c8', '#0c2762', '#041a57']} style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.aboutitem}>
                    <Text style={styles.loop}>Widgets</Text>
                </View>
                <ScrollView horizontal={true} style={styles.scrollContainer}>
                    <View style={styles.scrollContent}>
                        <View style={styles.scrollItem1}>
                            <Image source={require("../astess/icons/Assests/lighting.png")} />
                            <Text style={styles.dgree}>Kochi, Kerala</Text>
                            <Text style={styles.middle}>Thunderstorm</Text>
                            <Text style={styles.pop}>29°C</Text>
                        </View>
                        <View style={styles.scrollItem2}>
                            <Image source={require("../astess/icons/Assests/rainy-cloud.png")} />
                            <Text style={styles.dgree}>Palakkad, Kerala</Text>
                            <Text style={styles.middle}>Thunderstorm</Text>
                            <Text style={styles.pop}>30°C</Text>
                        </View>
                        <View style={styles.scrollItem3}>
                            <Image source={require("../astess/icons/Assests/rain.png")} />
                            <Text style={styles.dgree}>Kozicode, Kerala</Text>
                            <Text style={styles.middle}>Thunderstorm</Text>
                            <Text style={styles.pop}>40°C</Text>
                        </View>
                        <View style={styles.scrollItem4}>
                            <Image source={require("../astess/icons/Assests/snow.png")} />
                            <Text style={styles.dgree}>Kotayam, Kerala</Text>
                            <Text style={styles.middle}>Thunderstorm</Text>
                            <Text style={styles.pop}>31°C</Text>
                        </View>
                        {/* Additional scroll items */}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    aboutitem: {
        flex: 1,
        alignItems: 'center',
    },
    loop: {
        fontSize: 30,
        fontWeight: '400',
        color: 'white',
        marginTop: 50,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContainer: {
        marginTop: 20,
        flexDirection: 'row',
    },
    scrollContent: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 550, // Adjust as needed
    },
    scrollItem1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginLeft: 10,
        // width: 340,
        backgroundColor: '#124bad',
        borderRadius: 20,
        padding: 10,
    },
    scrollItem2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginLeft: 10,
        // width: 340,
        backgroundColor: '#c8ced8',
        borderRadius: 20,
        padding: 10,
    },
    scrollItem3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginLeft: 10,
        // width: 340,
        backgroundColor: '#30343b',
        borderRadius: 20,
        padding: 10,
    },
    scrollItem4: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        marginLeft: 10,
        // width: 340,
        backgroundColor: '#2859ad',
        borderRadius: 20,
        padding: 10,
    },
    dgree: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        width: 100,
        height: 50,
    },
    middle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        width: 100,
        height: 30,
    },
    pop: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        width: 56,
        height: 50,
    },
});

export default AboutScreen;
