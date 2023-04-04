import React, {useContext, useEffect, useState, Component} from 'react';
import {AuthContext} from '../navigation/AuthProvider';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import Colors from '../assets/utils/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile({navigation}) {
  const {logout} = useContext(AuthContext);
  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{padding: 10, width '100%', backgroundColor: '#000', height: 150}}>
          <TouchableOpacity>
            <Image source={'https://cdn-icons-png.flaticon.com/512/507/507257.png'} style={width: 30, height: 30}>
            </Image>
            <View></View>
            <View></View>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image source={'https://i.kym-cdn.com/photos/images/newsfeed/002/205/323/176.jpg'} style={{width 140, height: 140, borderRadius: 100, marginTop: -70}}></Image>
          <Text style={{fontSize: 25, fontWeight: 'bold', padding: 10}}> Fun E</Text>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'grey'}}>fune@gmail.com</Text>
        </View>

        <View style={{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent 'center',
          backgroundColor: '#fff',
          width: '90%',
          padding: 20,
          paddingBottom: 22,
          borderRadius: 10,
          shadowOpacity: 80,
          elevation: 15,
          marginTop: 20
        }}>
          <Text>Profile</Text>
        </View>

        <View style={{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent 'center',
          backgroundColor: '#fff',
          width: '90%',
          padding: 20,
          paddingBottom: 22,
          borderRadius: 10,
          shadowOpacity: 80,
          elevation: 15,
          marginTop: 20
        }}>
          <Text>Email address</Text>
        </View>

        <View style={{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent 'center',
          backgroundColor: '#fff',
          width: '90%',
          padding: 20,
          paddingBottom: 22,
          borderRadius: 10,
          shadowOpacity: 80,
          elevation: 15,
          marginTop: 20
        }}>
          <Text>Phone number</Text>
        </View>

        <View style={{
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent 'center',
          backgroundColor: '#fff',
          width: '90%',
          padding: 20,
          paddingBottom: 22,
          borderRadius: 10,
          shadowOpacity: 80,
          elevation: 15,
          marginTop: 20
        }}>
          <Text>Sign out</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
