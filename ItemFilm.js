import React from 'react';
import { FlatList, View,Text ,Button, Alert, Image} from 'react-native';
import {styles} from './style.js';

export default class listeFilms extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <View style={styles.itemContainer}>
                <Image style={styles.imageItem} source={{ uri: this.props.film.image }}/>
                <View style={styles.wrapTitleResume}>
                    <Text style={styles.title}>{this.props.film.nom}</Text>
                    <Text style={styles.resume}>Résumé : {this.props.film.resume}</Text>
                    <Text style={styles.resume}>Note : {this.props.film.note}/10</Text>
                </View>
                <View style={styles.wrapButton}>
                    <Button title="Consulter" style={styles.button} onPress={() =>this.props.navigate("FilmDetail",{film:this.props.film})}/>
                    {/* <Button title="Supprimer" color="red" style={styles.button}/> */}
                </View>
                
            </View>
        )
    }
}