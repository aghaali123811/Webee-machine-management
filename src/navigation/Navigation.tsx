// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Local imports
// import Home from '../screens/home/Home';
import DetailPage from '../screens/DetailScreen/DetailPage';
import Dashboard from '../screens/Dashboard/Dashboard';
import ManageCategories from '../screens/ManageCategories/ManageCategories';
// import Home from '../screens/Dashboard/Dashboard';

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

      // const CustomDrawerContent = (props) => (
      //     <View style={styles.drawerContainer}>
      //         {/* <StatusBar hidden /> */}
      //         {/* <StatusBar barStyle="light-content" backgroundColor="#fff" /> */}
      //         <AntDesign
      //             name="close"
      //             size={24}
      //             style={styles.close}
      //             onPress={() => props.navigation.toggleDrawer()} />

      //         <Image
      //             source={require('./assets/logo.png')}
      //             style={styles.logo} />

      //         <View style={styles.divider} />

      //         <TouchableOpacity style={styles.btn} >
      //             <Text style={styles.btnTxt}>About Law Zebras</Text>
      //         </TouchableOpacity>

      //         <TouchableOpacity style={styles.btn} >
      //             <Text style={styles.btnTxt}>Settings</Text>
      //         </TouchableOpacity>

      //         <TouchableOpacity style={styles.btn}>
      //             <Text style={styles.btnTxt}>Privacy Policy</Text>
      //         </TouchableOpacity>

      //         <TouchableOpacity style={styles.btn}>
      //             <Text style={styles.btnTxt}>Terms & Conditions</Text>
      //         </TouchableOpacity>

      //         <TouchableOpacity style={styles.btn}>
      //             <Text style={styles.btnTxt}>Disclaimers</Text>
      //         </TouchableOpacity>

      //         <TouchableOpacity style={styles.btn}>
      //             <Text style={styles.btnTxt}>Saved</Text>
      //         </TouchableOpacity>

      //         <TouchableOpacity>
      //             <Text style={styles.logout}>Logout</Text>
      //         </TouchableOpacity>
      //     </View>
      // );
      return (
          <Drawer.Navigator 
          //  drawerContent={props => <CustomDrawerContent {...props} />}
              // overlayColor={Colors.transparent}
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