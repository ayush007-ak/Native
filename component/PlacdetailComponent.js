import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import {PLACES} from '../shared/places';

function RenderPlac(props) {

    const plac = props.plac;
    
        if (plac != null) {
            return(
                <Card
                featuredTitle={plac.name}
                image={require('./images/uthappizza.png')}>
                    <Text style={{margin: 10}}>
                        {plac.description}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

class Placdetail extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            places: PLACES
        };
    }

    static navigationOptions = {
        title: 'Plac Detail'
    };

    render(){
        const placId = this.props.navigation.getParam('placId','');
        return(<RenderPlac plac={this.state.places[+placId]} />);
    }
    
}

export default Placdetail;