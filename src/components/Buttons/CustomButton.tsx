import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

// Local Imports
import Colors from '../../common/colors/Colors';

export interface NavigationProps {
  navigation?: any;
  route?: any;
  title?: string;
  style?: any;
  titleStyle?: any;
  onPress?: () => void;
}

function CustomButton(props: NavigationProps) {
  const {title, style,titleStyle,onPress} = props;
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.title,titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 35,
    backgroundColor: Colors.lightBlue,
    borderRadius: 5,
    justifyContent: 'center',
  },
  title: {
    color: Colors.white, 
    alignSelf: 'center',
    fontSize:14
},
});

export default CustomButton;
