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
            <Button title="Ajouter un film" onPress={() =>this.props.navigation.navigate("FormFilm")} />
            <FlatList
            keyExtractor={(item,index) => index.toString()}
            data={this.props.films}
            extraData={this.props.films}
            renderItem={({item})=> 
                <Text >{item.nom}</Text>
                }
            />
            
            </View>
        )
    }
}