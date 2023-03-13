import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../common/colors/Colors';
import ImagePath from '../../common/images/ImagePath';
import styles from './Styles';
import CastList from '../../components/Lists/CastList';
import BackgroundBanner from '../../components/Card/BackgroundBanner';
import Constants from '../../common/contant/Constants';
// import Axios from 'axios';



export interface NavigationProps {
  navigation?: any;
  route?: any;
}


export default function DetailPage(props:NavigationProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const {navigation} = props;


  return (
    <View style={{width:'100%',padding:20,height:'100%'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
<Text>This is Details screen</Text>
      </ScrollView>
    </View>
  );
}
