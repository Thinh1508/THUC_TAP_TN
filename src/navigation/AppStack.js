import 'react-native-gesture-handler';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screen/home';
import Search from '../screen/search';
import Room from '../screen/room';
import Account from '../screen/account';
import QR from '../screen/qr';
import Profile from '../screen/profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTap = ({navigation}) => {
  function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Room') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'QR') {
              iconName = focused ? 'qr-code' : 'qr-code-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: '#ff69b4',
          tabBarInactiveTintColor: '#000000',
          headerShown: false,
          tabBarInactiveBackgroundColor: '#ffffff',
          tabBarActiveBackgroundColor: '#ffffff',
          // tabBarShowLabel:false,
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Room" component={Room} />
        <Tab.Screen name="Account" component={Account} />
        <Tab.Screen name="QR" component={QR} />
        {/* <Tab.Screen name="Favorite" component={FavoriteMusic} /> */}
      </Tab.Navigator>
    );
  }
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeTabs"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeTabs" component={MyTabs} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default HomeTap;
