import React from 'react';
import { Button, Text, View, TextInput } from 'react-native';

export default class formFilm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            id:1,
            nom : "",
            image : "",
            resume : "",
            commentaires : "",
            note : null
        }
    }

    handleNomChange = nom => {
        this.setState({nom})
    }

    handleImageChange = image => {
        this.setState({image})
    }

    handleResumeChange = resume => {
        this.setState({resume})
    }

    handleCommChange = commentaires => {
        this.setState({commentaires})
    }

    handleNoteChange = note => {
        if(note >= 0 && note <= 10){
            this.setState({note})
        }
    }

    handleSubmit = () =>{
        if(this.state.nom.length>0 && this.state.resume.length>10 && this.state.note != null){
            this.props.ajoutFilm(this.state)
        }
    }

    render(){
        return (
            <View>
                <TextInput value={this.state.nom} onChangeText={this.handleNomChange} placeholder="Nom du film"/>
                <TextInput value={this.state.image} placeholder="Image"/>
                <TextInput value={this.state.resume} onChangeText={this.handleResumeChange} multiline={true} placeholder="Votre résumé"/>
                <TextInput value={this.state.commentaires} onChangeText={this.handleCommChange} multiline={true} placeholder="Votre commentaire"/>
                <TextInput value={this.state.note} onChangeText={this.handleNoteChange} keyboardType='numeric' placeholder="Note /10"/>
                <Button title="Submit" onPress={this.handleSubmit}/>

                <Button title="Retour à la liste" onPress={() =>this.props.navigation.goBack()} />

            </View>
        );
    }
}