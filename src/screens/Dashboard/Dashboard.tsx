import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import Colors from '../../common/colors/Colors';
import ImagePath from '../../common/images/ImagePath';
import CustomButton from '../../components/Buttons/CustomButton';
import SimpleHeader from '../../components/Headers/SimpleHeader';
import styles from './styles';

export interface NavigationProps {
  navigation: any;
  route?: any;
}

export default function Dashboard(props: NavigationProps) {
  const { navigation } = props;
  return (
    <>
      <SimpleHeader
        title={'Dashboard'}
        containerStyle={{}} />

      <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{ alignSelf: 'center', color: Colors.black, fontSize: 14 }}>No Category Found</Text>
          <CustomButton
            title='Add a Category'
            style={{ alignSelf: 'center' }}
            onPress={() => navigation.navigate('ManageCategories')} />
        </ScrollView>
      </View>
    </>
  );
}
