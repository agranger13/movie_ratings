import React from 'react';
import { FlatList, View,Text ,Button, Alert } from 'react-native';
import ItemFilm from './ItemFilm';
import {styles} from './style.js';

export default class listeFilms extends React.Component{
    constructor(){
        super();
    }
    render(){
        console.log("films liste :");

        console.log(this.props.films);

        return (
            <View style={styles.container}>
            <Button title="Ajouter un film" onPress={() =>this.props.navigation.navigate("FormFilm")} />
            <FlatList
            keyExtractor={(item,index) => index.toString()}
            data={this.props.films}
            extraData={this.props.films}
            renderItem={({item})=> 
                <ItemFilm navigate={this.props.navigation.navigate} film={item}/>
                }
            />
            
            </View>
        )
    }
}