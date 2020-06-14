import React, { Component } from 'react';
import { Text, View, ScrollView,FlatList } from 'react-native';
import { Card , Icon} from 'react-native-elements';
import {PLACES} from '../shared/places';
import {COMMENTS} from '../shared/comments'; 



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

                    <Icon
                    raised                                                  //heart shape fav icon
                    reverse
                    name={ props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
                    />
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}




function RenderComments(props) {

    const comments = props.comments;
            
    const renderCommentItem = ({item, index}) => {
        
        return (
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.date} </Text>
            </View>
        );
    };

    return (
        <Card title='Reviews' >
        <FlatList 
            data={comments}
            renderItem={renderCommentItem}
            keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

    

class Placdetail extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            places: PLACES,
            comments:COMMENTS,
            favorites: []
        };
    }

    static navigationOptions = {
        title: 'Plac Detail'
    };

    markFavorite(placId) {
        this.setState({favorites: this.state.favorites.concat(placId)});
    }
    


    render(){
        const placId = this.props.navigation.getParam('placId','');
        return(
        <ScrollView>
        <RenderPlac plac={this.state.places[+placId]} 
         favorite={this.state.favorites.some(el => el === placId)}
         onPress={() => this.markFavorite(placId)}
        
        />
        <RenderComments comments={this.state.comments.filter((comment) => comment.placId === placId)} />
        </ScrollView>
        );
     
    }
    
}

export default Placdetail;