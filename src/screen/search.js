import React, {useState, useContext, version} from 'react';
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
  FlatList,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../assets/utils/Color';

const RecentlyViewed_List = [
  {
    id: 1,
    name: 'Book China',
    price: '999$',
    avatar:
      'http://1.bp.blogspot.com/-ThIfCgZCXRw/VV6PogUIpqI/AAAAAAAAAVg/c8oTgwg62kM/s1600/bi-kip-vo-cong.png',
  },
  {
    id: 2,
    name: 'Book China',
    price: '999$',
    avatar:
      'http://1.bp.blogspot.com/-ThIfCgZCXRw/VV6PogUIpqI/AAAAAAAAAVg/c8oTgwg62kM/s1600/bi-kip-vo-cong.png',
  },
  {
    id: 3,
    name: 'Book China',
    price: '999$',
    avatar:
      'http://1.bp.blogspot.com/-ThIfCgZCXRw/VV6PogUIpqI/AAAAAAAAAVg/c8oTgwg62kM/s1600/bi-kip-vo-cong.png',
  },
  {
    id: 4,
    name: 'Book China',
    price: '999$',
    avatar:
      'http://1.bp.blogspot.com/-ThIfCgZCXRw/VV6PogUIpqI/AAAAAAAAAVg/c8oTgwg62kM/s1600/bi-kip-vo-cong.png',
  },
  {
    id: 5,
    name: 'Book China',
    price: '999$',
    avatar:
      'http://1.bp.blogspot.com/-ThIfCgZCXRw/VV6PogUIpqI/AAAAAAAAAVg/c8oTgwg62kM/s1600/bi-kip-vo-cong.png',
  },
];

const Search = ({navigation}) => {
  renderItem = (item, index) => {
    console.log(item);
    return (
      <TouchableOpacity style={{marginRight: 10}}>
        <Image
          style={{width: 120, height: 150}}
          source={{
            uri: 'http://1.bp.blogspot.com/-ThIfCgZCXRw/VV6PogUIpqI/AAAAAAAAAVg/c8oTgwg62kM/s1600/bi-kip-vo-cong.png',
          }}
        />
        <Text style={{fontWeight: '400', fontSize: 15, color: Colors.BLACK}}>
          Book China
        </Text>
        <Text>2$</Text>
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
        <Text style={{color: Colors.BLACK, fontSize: 30}}>Search</Text>
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

      <View style={{position: 'relative'}}>
        <TextInput
          style={{
            height: 50,
            marginVertical: 10,
            marginHorizontal: 20,
            borderWidth: 1,
            paddingLeft: 10,
            borderRadius: 10,
          }}
          placeholder="Search Fostings / Room"
          placeholderTextColor={Colors.PLACEHOLDER}
          type="input"
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 40,
            top: 20,
          }}>
          <FontAwesome name="search" size={25} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 20,
          }}>
          <Text style={{color: '#ff69b4', fontWeight: '700'}}>Recommended</Text>
          <Text style={{color: Colors.BLACK, fontWeight: '700'}}>Clear</Text>
        </View>

        <View style={{flexDirection: 'row', marginHorizontal: 20}}>
          <Text
            style={{
              borderWidth: 1,
              padding: 5,
              borderRadius: 5,
              marginLeft: 5,
            }}>
            Demin Jeans
          </Text>
          <Text
            style={{
              borderWidth: 1,
              padding: 5,
              borderRadius: 5,
              marginLeft: 5,
            }}>
            Demin Jeans
          </Text>
          <Text
            style={{
              borderWidth: 1,
              padding: 5,
              borderRadius: 5,
              marginLeft: 5,
            }}>
            Demin Jeans
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 100,
          }}>
          <Text style={{color: '#ff69b4', fontWeight: '700'}}>
            Recently Viewed
          </Text>
          <Text style={{color: Colors.BLACK, fontWeight: '700'}}>Clear</Text>
        </View>

        <View style={{marginHorizontal: 20, marginTop: 10}}>
          <FlatList
            data={RecentlyViewed_List}
            renderItem={renderItem}
            keyExtractor={item => `key-${item.id}`}
            horizontal
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Search;
