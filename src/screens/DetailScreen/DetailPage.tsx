import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';

export interface NavigationProps {
  navigation?: any;
  route?: any;
}

export default function DetailPage(props: NavigationProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);
  const {navigation} = props;

  return (
    <View style={{width: '100%', padding: 20, height: '100%'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>This is Details screen</Text>
      </ScrollView>
    </View>
  );
}
