import React, { Component } from 'react';
import Menu from './MenuComponent';
import Placdetail from './PlacdetailComponent';
//import { PLACES } from '../shared/places';
import { View, Platform,Image,StyleSheet, ScrollView , Text} from 'react-native';
import { createStackNavigator , createDrawerNavigator , DrawerItems, SafeAreaView } from 'react-navigation';
import Home from './HomeComponent';
import { Icon } from 'react-native-elements';
import ContactUs from './ContactComponent';
import About from './AboutusComponent';

const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu,
  navigationOptions:({navigation }) => ({
    headerLeft: <Icon name="menu" size={24} color="white"
    onpress={() => navigation.toggleDrawer()}/>
  })
  },
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
    headerTintColor: "#fff" ,
    headerTitleStyle: {
        color: "#fff"            
    },

    headerLeft: <Icon name="menu" size={24} color="white"
    onpress={() => navigation.toggleDrawer()}/>
    
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
    headerTintColor: "#fff"  ,
    headerLeft: <Icon name="menu" size={24} color="white"
    onpress={() => navigation.toggleDrawer()}/>
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
    headerTintColor: "#fff",
    headerLeft: <Icon name="menu" size={24} color="white"
    onpress={() => navigation.toggleDrawer()}/>
  })
});



const CustomDrawerContentComponent = (props) => (
  <ScrollView>
  <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
    <View style={styles.drawerHeader}>
      <View style={{flex:1}}>
      <Image source={require('./images/jbp.png')} style={styles.drawerImage} />
      </View>
      <View style={{flex: 2}}>
        <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
      </View>
    </View>
    <DrawerItems {...props} />
  </SafeAreaView>
</ScrollView>

);



const MainNavigator = createDrawerNavigator({
  Home: 
    { screen: HomeNavigator,                  //this main handle
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({tintColor}) => (
          <Icon
          name='home'
          type='font-awesome'            
          size={24}
          color={tintColor}
        /> 
        ),
      },
    },
  Menu: 
    { screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='list'
            type='font-awesome'            
            size={24}
            color={tintColor}
          />
        ),
      }, 
    },

    ContactUs: 
    { screen: ContactUsNavigator,
      navigationOptions: {
        title: 'Contact Us',
        drawerLabel: 'Contact Us',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='address-card'
            type='font-awesome'            
            size={22}
            color={tintColor}
          />
        ),
      },
    },


    AboutUs: 
    { screen: AboutNavigator,
      navigationOptions: {
        title: 'About Us',
        drawerLabel: 'About Us',
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='info-circle'
            type='font-awesome'            
            size={24}
            color={tintColor}
          />
        ),
      },
    },




}, {
drawerBackgroundColor: '#98d1ed',
contentComponent: CustomDrawerContentComponent
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

  
export default Main;