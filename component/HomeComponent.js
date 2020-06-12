import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import {Card} from 'react-native-elements';
import {PLACES} from '../shared/places';
import {PROMOTIONS} from '../shared/promotion';
import {LEADERS} from '../shared/leaders';
import {COMMENTS} from '../shared/comments';


function RenderItem(props) {
    
    const item = props.item;                              //full method is new added
    
    if (item != null) {
        return(
            <Card
                featuredTitle={item.name}
                featuredSubtitle={item.designation}
                image={require('./images/uthappizza.png')}>
                <Text
                    style={{margin: 10}}>
                    {item.description}</Text>
            </Card>
        );
    }
    else {
        return(<View></View>);
    }
}



class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
          places: PLACES,
          promotions: PROMOTIONS,
          leaders: LEADERS
        };
    }

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return(
            <ScrollView>
            <RenderItem item={this.state.places.filter((plac) => plac.featured)[0]} />
            <RenderItem item={this.state.promotions.filter((promo) => promo.featured)[0]} />
            <RenderItem item={this.state.leaders.filter((leader) => leader.featured)[0]} />
        </ScrollView>
        );
    }
}

export default Home;