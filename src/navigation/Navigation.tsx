// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Local imports
import DetailPage from '../screens/DetailScreen/DetailPage';
import Dashboard from '../screens/Dashboard/Dashboard';
import ManageCategories from '../screens/ManageCategories/ManageCategories';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Navigation() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
        <Stack.Screen name="DetailPage" component={DetailPage} options={{headerShown:false}} />
        <Stack.Screen name="ManageCategories" component={ManageCategories} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function Drawers () {

      const CustomDrawerContent = (props) => (
          <View style={{}}>

          </View>
      );
      return (
          <Drawer.Navigator 
           drawerContent={props => <CustomDrawerContent {...props} />}
              drawerContentOptions={{
                  activeTintColor: '#e91e63',
                  itemStyle: { marginVertical: 30 },
              }}
          >
              <Drawer.Screen name="Dashboard" component={Dashboard} />


          </Drawer.Navigator>
      );
  }
// }


export default Navigation;