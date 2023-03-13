import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Colors from '../../common/colors/Colors';
import ImagePath from '../../common/images/ImagePath';

export interface NavigationProps {
  navigation?: any;
  route?: any;
  title?: string;
  containerStyle?: any;
  onPress?: () => void;
}

function SimpleHeader(props: NavigationProps) {
  const {title,containerStyle,onPress} = props;
  return (
    <View style={[styles.container,containerStyle]}>
      <TouchableOpacity onPress={onPress}>
      <Image source={ImagePath.dummyImg} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.heading}>{title}</Text>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 35,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 20, 
    height: 20, 
    alignSelf: 'center'
},
  heading: {
    alignSelf: 'center', 
    fontWeight: 'bold', 
    color: Colors.black
},
});

export default SimpleHeader;
