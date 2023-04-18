import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VideoItem from '../components/videoItem';
import {dataVideo} from '../components/videoData';

export default function VideoPLay() {
  return <VideoItem data={dataVideo[0]} />;
}
