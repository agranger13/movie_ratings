import React from 'react';
import { FlatList, View,Text ,Button, Alert } from 'react-native';

export default class listeFilms extends React.Component{
    constructor(){
        super();
    }
    render(){
        console.log("films :");

        console.log(this.props.films);

        return (
            <View>
                <Text>{this.props.nom}</Text>
                <Text>{this.props.resume}</Text>
                
            </View>
        )
    }
}