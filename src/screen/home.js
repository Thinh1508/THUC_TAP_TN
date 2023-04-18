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
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../assets/utils/Color';
import {AlbumsContext} from './AlbumProvider';

const Home = ({navigation}) => {
  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            margin: 15,
            justifyContent: 'space-between',
          }}>
          <Text style={{color: Colors.BLACK, fontSize: 30}}></Text>

          <View style={{flexDirection: 'row', width: '60%'}}>
            <TouchableOpacity
              style={{justifyContent: 'center', marginLeft: 15}}>
              <FontAwesome name="heart-o" size={30} color={'#ff69b4'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{justifyContent: 'center', marginLeft: 15}}>
              <FontAwesome name="copyright" size={30} color="#ff9c00" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{justifyContent: 'center', marginLeft: 15}}>
              <Ionicons name="cart-outline" size={30} color={Colors.BLACK} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{justifyContent: 'center', marginLeft: 15}}>
              <FontAwesome name="bell-o" size={30} color={Colors.BLACK} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image
            style={{
              marginHorizontal: 20,
              borderRadius: 20,
              height: 200,
              position: 'relative',
            }}
            source={{
              uri: 'https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-lang-que-doi-moi_110522520.jpg',
            }}
          />

          <Image
            style={{
              height: 70,
              width: 70,
              borderRadius: 35,
              position: 'absolute',
              top: 80,
              left: 50,
            }}
            source={{
              uri: 'https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg',
            }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: Colors.WHILE,
              backgroundColor: '#456922',
              width: 60,
              padding: 5,
              borderRadiusl: 5,
              position: 'absolute',
              top: 150,
              left: 60,
            }}>
            fun T
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginHorizontal: 20,
            marginTop: 10,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{fontSize: 25, fontWeight: '400', color: Colors.BLACK}}>
              14
            </Text>
            <Text
              style={{fontSize: 15, fontWeight: '400', color: Colors.BLACK}}>
              Post
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{fontSize: 25, fontWeight: '400', color: Colors.BLACK}}>
              14
            </Text>
            <Text
              style={{fontSize: 15, fontWeight: '400', color: Colors.BLACK}}>
              Followers
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{fontSize: 25, fontWeight: '400', color: Colors.BLACK}}>
              14
            </Text>
            <Text
              style={{fontSize: 15, fontWeight: '400', color: Colors.BLACK}}>
              Following
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#ff69b4',
              height: 40,
              borderRadius: 10,
              paddingHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{fontWeight: '400', color: Colors.WHILE, fontSize: 20}}>
              Following
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', margin: 20, alignItems: 'center'}}>
          <Text
            style={{
              fontWeight: '400',
              color: 'black',
              fontSize: 25,
              marginRight: 20,
            }}>
            Postings
          </Text>
          <FontAwesome
            name="cut"
            style={{marginRight: 20}}
            size={30}
            color={Colors.BLACK}
          />
          <FontAwesome name="trash-o" size={30} color={Colors.BLACK} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('VideoPLay');
            }}>
            <Image
              style={{height: 90, width: 115, borderRadius: 20}}
              source={{
                uri: 'https://img1.kienthucvui.vn/uploads/2021/12/31/anh-cuc-dep-ve-not-nhac_051349308.jpg',
              }}
            />
            <Text style={{fontSize: 18, fontWeight: '600'}}>Demo</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="eye" size={20} color={'black'} />
              <Text style={{fontSize: 15, fontWeight: '400', marginLeft: 5}}>
                (8)
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <Image
              style={{height: 90, width: 115, borderRadius: 20}}
              source={{
                uri: 'https://img1.kienthucvui.vn/uploads/2021/12/31/anh-cuc-dep-ve-not-nhac_051349308.jpg',
              }}
            />
            <Text style={{fontSize: 18, fontWeight: '600'}}>Demo</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="eye" size={20} color={'black'} />
              <Text style={{fontSize: 15, fontWeight: '400', marginLeft: 5}}>
                (8)
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={{height: 90, width: 115, borderRadius: 20}}
              source={{
                uri: 'https://img1.kienthucvui.vn/uploads/2021/12/31/anh-cuc-dep-ve-not-nhac_051349308.jpg',
              }}
            />
            <Text style={{fontSize: 18, fontWeight: '600'}}>Demo</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="eye" size={20} color={'black'} />
              <Text style={{fontSize: 15, fontWeight: '400', marginLeft: 5}}>
                (8)
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'space-around',
          }}>
          <View>
            <Image
              style={{height: 90, width: 115, borderRadius: 20}}
              source={{
                uri: 'https://img1.kienthucvui.vn/uploads/2021/12/31/anh-cuc-dep-ve-not-nhac_051349308.jpg',
              }}
            />
            <Text style={{fontSize: 18, fontWeight: '600'}}>Demo</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="eye" size={20} color={'black'} />
              <Text style={{fontSize: 15, fontWeight: '400', marginLeft: 5}}>
                (8)
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={{height: 90, width: 115, borderRadius: 20}}
              source={{
                uri: 'https://img1.kienthucvui.vn/uploads/2021/12/31/anh-cuc-dep-ve-not-nhac_051349308.jpg',
              }}
            />
            <Text style={{fontSize: 18, fontWeight: '600'}}>Demo</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="eye" size={20} color={'black'} />
              <Text style={{fontSize: 15, fontWeight: '400', marginLeft: 5}}>
                (8)
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={{height: 90, width: 115, borderRadius: 20}}
              source={{
                uri: 'https://img1.kienthucvui.vn/uploads/2021/12/31/anh-cuc-dep-ve-not-nhac_051349308.jpg',
              }}
            />
            <Text style={{fontSize: 18, fontWeight: '600'}}>Demo</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="eye" size={20} color={'black'} />
              <Text style={{fontSize: 15, fontWeight: '400', marginLeft: 5}}>
                (8)
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'space-around',
          }}>
          <View>
            <Image
              style={{height: 90, width: 115, borderRadius: 20}}
              source={{
                uri: 'https://img1.kienthucvui.vn/uploads/2021/12/31/anh-cuc-dep-ve-not-nhac_051349308.jpg',
              }}
            />
            <Text style={{fontSize: 18, fontWeight: '600'}}>Demo</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="eye" size={20} color={'black'} />
              <Text style={{fontSize: 15, fontWeight: '400', marginLeft: 5}}>
                (8)
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={{height: 90, width: 115, borderRadius: 20}}
              source={{
                uri: 'https://img1.kienthucvui.vn/uploads/2021/12/31/anh-cuc-dep-ve-not-nhac_051349308.jpg',
              }}
            />
            <Text style={{fontSize: 18, fontWeight: '600'}}>Demo</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="eye" size={20} color={'black'} />
              <Text style={{fontSize: 15, fontWeight: '400', marginLeft: 5}}>
                (8)
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={{height: 90, width: 115, borderRadius: 20}}
              source={{
                uri: 'https://img1.kienthucvui.vn/uploads/2021/12/31/anh-cuc-dep-ve-not-nhac_051349308.jpg',
              }}
            />
            <Text style={{fontSize: 18, fontWeight: '600'}}>Demo</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="eye" size={20} color={'black'} />
              <Text style={{fontSize: 15, fontWeight: '400', marginLeft: 5}}>
                (8)
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'space-around',
          }}>
          <View>
            <Image
              style={{height: 90, width: 115, borderRadius: 20}}
              source={{
                uri: 'https://img1.kienthucvui.vn/uploads/2021/12/31/anh-cuc-dep-ve-not-nhac_051349308.jpg',
              }}
            />
            <Text style={{fontSize: 18, fontWeight: '600'}}>Demo</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="eye" size={20} color={'black'} />
              <Text style={{fontSize: 15, fontWeight: '400', marginLeft: 5}}>
                (8)
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={{height: 90, width: 115, borderRadius: 20}}
              source={{
                uri: 'https://img1.kienthucvui.vn/uploads/2021/12/31/anh-cuc-dep-ve-not-nhac_051349308.jpg',
              }}
            />
            <Text style={{fontSize: 18, fontWeight: '600'}}>Demo</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="eye" size={20} color={'black'} />
              <Text style={{fontSize: 15, fontWeight: '400', marginLeft: 5}}>
                (8)
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={{height: 90, width: 115, borderRadius: 20}}
              source={{
                uri: 'https://img1.kienthucvui.vn/uploads/2021/12/31/anh-cuc-dep-ve-not-nhac_051349308.jpg',
              }}
            />
            <Text style={{fontSize: 18, fontWeight: '600'}}>Demo</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="eye" size={20} color={'black'} />
              <Text style={{fontSize: 15, fontWeight: '400', marginLeft: 5}}>
                (8)
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
