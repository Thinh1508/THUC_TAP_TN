/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeMusic from './src/screen/homeMusic'
import ArtistMusic from './src/screen/artistMusic'
import ProfileMusic from './src/screen/profileMusic';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () =>{
  function MyTabs() {
    return (
      <Tab.Navigator 
        initialRouteName='Home' 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home': 'home-outline';
            } else if (route.name === 'Library') {
              iconName = focused ? 'library' : 'library-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: '#ffd369',
          tabBarInactiveTintColor: 'gray',
          headerShown:false,
          // tabBarShowLabel:false,
        })}    
      >
        <Tab.Screen name="Home" component={HomeMusic} />
        <Tab.Screen name="Library" component={ArtistMusic} />
        <Tab.Screen name="Profile" component={ProfileMusic}  />
      </Tab.Navigator>
    );
  }
  return (
    // <View style={styles.container}>
    //   <PlayMusic />
    // </View>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeTabs" component={MyTabs} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,

  },
});

export default App;