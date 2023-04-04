import React, {useState, useContext, version} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  SafeAreaView,
  Button,
  FlatList,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/utils/Color';
import {AlbumsContext} from './AlbumProvider';

const roomList = [
  {
    id: 1,
    name: 'vui ve',
    image: '',
  },
  {
    id: 2,
    name: 'vui ve',
    image: '',
  },
  {
    id: 3,
    name: 'vui ve',
    image: '',
  },
  {
    id: 4,
    name: 'vui ve',
    image: '',
  },
  {
    id: 5,
    name: 'vui ve',
    image: '',
  },
  {
    id: 6,
    name: 'vui ve',
    image: '',
  },
  {
    id: 7,
    name: 'vui ve',
    image: '',
  },
  {
    id: 8,
    name: 'vui ve',
    image: '',
  },
  {
    id: 9,
    name: 'vui ve',
    image: '',
  },
  {
    id: 10,
    name: 'vui ve',
    image: '',
  },
  {
    id: 11,
    name: 'vui ve',
    image: '',
  },
  {
    id: 12,
    name: 'vui ve',
    image: '',
  },
  {
    id: 13,
    name: 'vui ve',
    image: '',
  },
  {
    id: 14,
    name: 'vui ve',
    image: '',
  },
];

const Room = ({navigation}) => {
  renderItem = (item, index) => {
    return (
      <TouchableOpacity
        style={{
          padding: 10,
          marginBottom: 5,
          borderRadius: 20,
          borderWidth: 1,
          flexDirection: 'row',
        }}>
        <Image
          style={{width: 50, height: 50, borderRadius: 25}}
          source={{
            uri: 'https://toplist.vn/images/800px/rihanna-428403.jpg',
          }}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{fontWeight: '400', fontSize: 15, color: Colors.BLACK}}>
            Vui ve
          </Text>
          <Text>A Nguyễn: abcdef</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          margin: 15,
          justifyContent: 'space-between',
        }}>
        <Text style={{color: Colors.BLACK, fontSize: 30}}>Room</Text>
        <View style={{flexDirection: 'row', width: '40%'}}>
          <TouchableOpacity style={{justifyContent: 'center', marginLeft: 10}}>
            <FontAwesome name="heart-o" size={30} color={'#ff69b4'} />
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent: 'center', marginLeft: 10}}>
            <FontAwesome name="copyright" size={30} color="#ff9c00" />
          </TouchableOpacity>
          <TouchableOpacity style={{justifyContent: 'center', marginLeft: 10}}>
            <Ionicons name="cart-outline" size={30} color={Colors.BLACK} />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: 'green',
            width: 150,
            marginLeft: 20,
            color: 'while',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{color: Colors.WHILE, fontSize: 15, fontWeight: '700'}}>
            New Room
          </Text>
        </TouchableOpacity>

        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <FlatList
            data={roomList}
            renderItem={renderItem}
            keyExtractor={item => `key-${item.id}`}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Room;
