import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import VideoItem from '../components/videoItem';
import {dataVideo} from '../components/videoData';
import {windowHeight} from '../assets/utils/Dimentions';

export default function VideoPLay({navigation}) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  return (
    <FlatList
      data={dataVideo}
      pagingEnabled
      renderItem={({item, index}) => (
        <VideoItem data={item} isActive={activeVideoIndex === index} />
      )}
      onScroll={e => {
        const index = Math.round(e.nativeEvent.contentOffset.y / windowHeight);
        setActiveVideoIndex(index);
      }}
    />
  );
}
