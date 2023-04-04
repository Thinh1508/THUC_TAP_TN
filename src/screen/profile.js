import React, {useContext, useEffect, useState, version} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
  Button,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../navigation/AuthProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/utils/Color';
import {AlbumsContext} from './AlbumProvider';

const Profile = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={{backgroundColor: '#fafafa'}}>
      <View
        style={{
          flexDirection: 'row',
          margin: 15,
          justifyContent: 'space-between',
          backgroundColor: '#fafafa',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome name="angle-left" size={30} color={'#ff69b4'} />
          <Text
            style={{
              color: Colors.BLACK,
              fontSize: 20,
              fontWeight: '500',
              marginLeft: 10,
            }}>
            Profile
          </Text>
        </View>
        <View style={{flexDirection: 'row', width: '40%'}}>
          <TouchableOpacity style={{justifyContent: 'center', marginLeft: 10}}>
            <FontAwesome name="heart-o" size={30} color={'#ff69b4'} />
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent: 'center', marginLeft: 10}}>
            <FontAwesome name="copyright" size={30} color="#ff9c00" />
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent: 'center', marginLeft: 10}}>
            <FontAwesome name="shopping-cart" size={30} color={Colors.BLACK} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          height: 150,
          backgroundColor: 'while',
          marginTop: 30,
          padding: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={{height: 100, width: 100, borderRadius: 50}}
          source={{uri: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg'}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{color: '#ff69b4', fontSize: 30, fontWeight: '400'}}>
            fun T
          </Text>
          <Text style={{fontSize: 20, fontWeight: '400'}}>
            funt123456@gmail.com
          </Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: 15,
            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: 10,
            fontWeight: '500',
          }}>
          Contact Details
        </Text>
        <TouchableOpacity
          style={{
            borderTopWidth: 1,
            flexDirection: 'row',
            padding: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="person-outline" size={30} color={Colors.BLACK} />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 22,
                fontWeight: '400',
                color: Colors.BLACK,
              }}>
              Edit Profile
            </Text>
          </View>
          <FontAwesome name="angle-right" size={30} color={Colors.BLACK} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderTopWidth: 1,
            flexDirection: 'row',
            padding: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              name="mail-unread-outline"
              size={30}
              color={Colors.BLACK}
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 22,
                fontWeight: '400',
                color: Colors.BLACK,
              }}>
              Email Address
            </Text>
          </View>
          <FontAwesome name="angle-right" size={30} color={Colors.BLACK} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderTopWidth: 1,
            flexDirection: 'row',
            padding: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              name="phone-portrait-outline"
              size={30}
              color={Colors.BLACK}
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 22,
                fontWeight: '400',
                color: Colors.BLACK,
              }}>
              Phone Number
            </Text>
          </View>
          <FontAwesome name="angle-right" size={30} color={Colors.BLACK} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderTopWidth: 1,
            flexDirection: 'row',
            padding: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              name="ios-bookmark-outline"
              size={30}
              color={Colors.BLACK}
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 22,
                fontWeight: '400',
                color: Colors.BLACK,
              }}>
              Residential addressse
            </Text>
          </View>
          <FontAwesome name="angle-right" size={30} color={Colors.BLACK} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderTopWidth: 1,
            flexDirection: 'row',
            padding: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onPress={() => {
            logout();
          }}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="log-in-outline" size={30} color={Colors.BLACK} />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 22,
                fontWeight: '400',
                color: Colors.BLACK,
              }}>
              Sing Out
            </Text>
          </View>
          <FontAwesome name="angle-right" size={30} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Profile;
