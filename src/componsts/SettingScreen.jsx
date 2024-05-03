import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SettingScreen = ({ route }) => {

    const heading = [
        {
            id: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit elit, aliquam id nibh sit amet, porttitor ',
            backgroundColor: '#342f74',
            
        },
        {
            id: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit elit, aliquam id nibh sit amet, porttitor ',
            backgroundColor: '#141046',
        },
        {
            id: 3,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit elit, aliquam id nibh sit amet, porttitor ',
            backgroundColor: '#9997b8',
        },
        {
            id: 4,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas velit elit, aliquam id nibh sit amet, porttitor ',
            backgroundColor: '#24232b',
        },
    ]
    console.warn(route.params);
    return (
        <LinearGradient colors={['#1c47a3', '#0c2762', '#041a57']} style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.aboutitem}>
                    <Text style={styles.loop}>Notification</Text>
                </View>
                <ScrollView horizontal={true} style={styles.scrollContainer}>
                    <View style={styles.scrollContent}>
                        {heading.map((item) => (
                            <View key={item.id} style={styles.scrollItem1}>
                                <Image style={styles.img} source={require("../astess/icons/Assests/lighting.png")} />
                                <Text style={styles.description}>{item.description},{item.backgroundColor}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default SettingScreen;

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
        marginTop: 20,
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
        marginLeft: 50,
        backgroundColor: '#17428c',
        borderRadius: 12,
        shadowColor: '#0c0355',
        padding: 10,
    },
    description: {
        fontSize: 15,
        fontWeight: '300',
        marginTop: 10,
        color: 'white',
        width: 200,
        height: 100,
        marginLeft: 20,
    },
    img: {
        width: 22,
        height: 22,
        marginBottom: 10,
        backgroundColor: '#050750',
        borderRadius: 40,
        padding: 20,
    },
});
