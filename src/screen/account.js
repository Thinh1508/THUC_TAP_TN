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

import Colors from '../assets/utils/Color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Account({navigation}) {
  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            margin: 15,
            justifyContent: 'space-between',
          }}>
          <Text style={{color: Colors.BLACK, fontSize: 30}}>Account</Text>
          <View style={{flexDirection: 'row', width: '40%'}}>
            <TouchableOpacity
              style={{justifyContent: 'center', marginLeft: 10}}>
              <FontAwesome name="heart-o" size={30} color={'#ff69b4'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{justifyContent: 'center', marginLeft: 10}}>
              <FontAwesome name="copyright" size={30} color="#ff9c00" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{justifyContent: 'center', marginLeft: 10}}>
              <FontAwesome
                name="shopping-cart"
                size={30}
                color={Colors.BLACK}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={{margin: 20}}>Account Settings</Text>
          <TouchableOpacity
            style={{
              borderTopWidth: 1,
              flexDirection: 'row',
              padding: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="person" size={20} color={Colors.BLACK} />
              <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '700'}}>
                Profile
              </Text>
            </View>
            <FontAwesome name="angle-right" size={20} color={Colors.BLACK} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderTopWidth: 1,
              flexDirection: 'row',
              padding: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome
                name="shopping-cart"
                size={20}
                color={Colors.BLACK}
              />
              <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '700'}}>
                Store Info
              </Text>
            </View>
            <FontAwesome name="angle-right" size={20} color={Colors.BLACK} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderTopWidth: 1,
              flexDirection: 'row',
              padding: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="qr-code" size={20} color={Colors.BLACK} />
              <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '700'}}>
                My QR Code
              </Text>
            </View>
            <FontAwesome name="angle-right" size={20} color={Colors.BLACK} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderTopWidth: 1,
              flexDirection: 'row',
              padding: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome
                name="cc-mastercard"
                size={20}
                color={Colors.BLACK}
              />
              <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '700'}}>
                Payment
              </Text>
            </View>
            <FontAwesome name="angle-right" size={20} color={Colors.BLACK} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderTopWidth: 1,
              flexDirection: 'row',
              padding: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="analytics" size={20} color={Colors.BLACK} />
              <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '700'}}>
                Analytics
              </Text>
            </View>
            <FontAwesome name="angle-right" size={20} color={Colors.BLACK} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderTopWidth: 1,
              flexDirection: 'row',
              padding: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="wallet" size={20} color={Colors.BLACK} />
              <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '700'}}>
                My Wallet
              </Text>
            </View>
            <FontAwesome name="angle-right" size={20} color={Colors.BLACK} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              flexDirection: 'row',
              padding: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="wallet-sharp" size={20} color={Colors.BLACK} />
              <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '700'}}>
                My Community Wallet
              </Text>
            </View>
            <FontAwesome name="angle-right" size={20} color={Colors.BLACK} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{margin: 20}}>Security Settings</Text>
          <TouchableOpacity
            style={{
              borderTopWidth: 1,
              flexDirection: 'row',
              padding: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="key" size={20} color={Colors.BLACK} />
              <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '700'}}>
                Password Reset
              </Text>
            </View>
            <FontAwesome name="angle-right" size={20} color={Colors.BLACK} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              flexDirection: 'row',
              padding: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="keypad" size={20} color={Colors.BLACK} />
              <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '700'}}>
                Face ID and PIN
              </Text>
            </View>
            <FontAwesome name="angle-right" size={20} color={Colors.BLACK} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{margin: 20}}>Security Settings</Text>
          <TouchableOpacity
            style={{
              borderTopWidth: 1,
              flexDirection: 'row',
              padding: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="warning" size={20} color={Colors.BLACK} />
              <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '700'}}>
                Privacy Notice
              </Text>
            </View>
            <FontAwesome name="angle-right" size={20} color={Colors.BLACK} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderTopWidth: 1,
              flexDirection: 'row',
              padding: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="warning" size={20} color={Colors.BLACK} />
              <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '700'}}>
                Community Rules
              </Text>
            </View>
            <FontAwesome name="angle-right" size={20} color={Colors.BLACK} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              flexDirection: 'row',
              padding: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons name="warning" size={20} color={Colors.BLACK} />
              <Text style={{marginLeft: 10, fontSize: 15, fontWeight: '700'}}>
                Help & FeedBack
              </Text>
            </View>
            <FontAwesome name="angle-right" size={20} color={Colors.BLACK} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
