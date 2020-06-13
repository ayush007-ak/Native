import React, { Component } from 'react';
import Menu from './MenuComponent';
import Placdetail from './PlacdetailComponent';
//import { PLACES } from '../shared/places';
import { View, Platform  } from 'react-native';
import { createStackNavigator , createDrawerNavigator  } from 'react-navigation';
import Home from './HomeComponent';
//import { Icon } from 'react-native-elements';
import ContactUs from './ContactComponent';
import About from './AboutusComponent';

const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu },
  Placdetail: { screen: Placdetail }
},
{
  initialRouteName: 'Menu',
  navigationOptions: {
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
          color: "#fff"            
      }
  }
}
);


const HomeNavigator = createStackNavigator({
  Home: { screen: Home }
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#21618C"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff"  
  })
});


const ContactUsNavigator = createStackNavigator({
  ContacUs: { screen: ContactUs}
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#21618C"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff"  
  })
});



const AboutNavigator = createStackNavigator({
  AboutUs: { screen: About}
}, {
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
        backgroundColor: "#21618C"
    },
    headerTitleStyle: {
        color: "#fff"            
    },
    headerTintColor: "#fff"  
  })
});




const MainNavigator = createDrawerNavigator({
  Home: 
    { screen: HomeNavigator,                  //this main handle
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home'
      },
    },
  Menu: 
    { screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu'
      }, 
    },

    ContactUs: 
    { screen: ContactUsNavigator,
      navigationOptions: {
        title: 'Contact Us',
        drawerLabel: 'Contact Us'
      },
    },


    AboutUs: 
    { screen: AboutNavigator,
      navigationOptions: {
        title: 'About Us',
        drawerLabel: 'About Us'
      },
    },




}, {
drawerBackgroundColor: '#D1C4E9'
});








class Main extends Component {

  render() {
 
    return (
       
      <View  style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
       <MainNavigator />
  </View>
    );
  }
}
  
export default Main;