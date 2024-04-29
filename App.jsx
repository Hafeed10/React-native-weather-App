import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from './src/componsts/HomeScreen';
import AboutScreen from './src/componsts/AboutScreen';
import SettingScreen from './src/componsts/SettingScreen';

const Tab = createBottomTabNavigator(); 

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconSource;
            if (route.name === 'WeatherApp') {
              iconSource = focused
                ? require('./src/astess/image/home-active.png')
                : require('./src/astess/image/home-active.png');
            } else if (route.name === 'Weather') {
              iconSource = focused
                ? require('./src/astess/image/download-removebg-preview.png')
                : require('./src/astess/image/download-removebg-preview.png');
            } else if (route.name === 'Notification') {
              iconSource = focused
                ? require('./src/astess/image/pngtree-vector-bell-icon-png-image_927119-removebg-preview.png')
                : require('./src/astess/image/pngtree-vector-bell-icon-png-image_927119-removebg-preview.png');
            }
            return <Image source={iconSource} style={styles.img} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'green',
        })}
        // tabBarOptions={{
        //   headerShown: false, // Remove the header
        // }}
      >
        <Tab.Screen name='WeatherApp' component={HomeScreen} />
        <Tab.Screen name="Weather" component={AboutScreen} />
        <Tab.Screen
          name="Notification"
          component={SettingScreen}
          options={{ tabBarBadge: 4 }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 24,
    height: 24,
  },
});

export default App;
