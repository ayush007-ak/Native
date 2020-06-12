import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import {PLACES} from '../shared/places';



class Menu extends Component {

   


        constructor(props) {
            super(props);                 
            this.state = {
                places: PLACES
            };
        }


        static navigationOptions = {
            title: 'Menu'
        };
   

    render(){



        const renderMenuItem = ({item, index}) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={false}
                    onPress={() =>navigate('Placdetail', { placId: item.id })}
                    leftAvatar={{ source: require('./images/uthappizza.png')}}
                  />
            );
        }
        
        const { navigate } = this.props.navigation;
        return (
            <FlatList 
                data={this.state.places}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
       );


    }
  
}


export default Menu;