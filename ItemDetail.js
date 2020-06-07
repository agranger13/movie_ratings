import React from 'react';
import { Button, Text, View, TextInput,Image, SafeAreaView, ScrollView } from 'react-native';

export default class formFilm extends React.Component{
    constructor(){
        super();
    }



    render(){
        return (
            <SafeAreaView>
                <ScrollView>
                    <Text>Titre : {this.props.route.params.film.nom}</Text>
                    <Image source={{ uri: this.props.route.params.film.image }} style={{ width: 200, height: 300 }} />
                    <Text>Votre résumé : {this.props.route.params.film.resume}</Text>
                    <Text>Votre commentaire : {this.props.route.params.film.commentaires}</Text>
                    <Text>Note : {this.props.route.params.film.note}/10</Text>

                    <Button title="Retour à l'accueil" onPress={() =>this.props.navigation.navigate("ListeFilm")} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}