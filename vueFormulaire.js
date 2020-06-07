import React from 'react';
import { Button, Text, View,Image, SafeAreaView, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class formFilm extends React.Component{
    constructor(props){
        super(props);

        this.errorTitre = '';
        this.errorResume = '';
        this.errorNote = '';

        this.state = {
            id:1,
            nom : "",
            image : "./assets/icon.png",
            resume : "",
            commentaires : "",
            note : null
        }
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
        }
        }
    };

    _pickImage = async () => {
        try {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });
        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }

        console.log(result);
        } catch (E) {
        console.log(E);
        }
    };

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
            this.props.ajoutFilm(this.state);
            this.props.navigation.navigate("FilmDetail",{film:this.state})
        }
        else{
            this.errorNote = "Champs obligatoire";
            this.errorTitre = "Champs obligatoire";
            this.errorResume = "Champs obligatoire";
        }
    }

    render(){
        let { image } = this.state;
        return (
            <SafeAreaView>
                <ScrollView>
                    <Button title="Sélectionner une affiche" onPress={this._pickImage} />
                    <Image source={{ uri: image }} style={{ width: 200, height: 300 }} />

                    <Input value={this.state.nom} onChangeText={this.handleNomChange} label="Titre" errorMessage={this.errorTitre}/>

                    <Input value={this.state.resume} onChangeText={this.handleResumeChange} multiline={true} label="Résumé" errorMessage={this.errorResume}/>

                    <Input value={this.state.commentaires} onChangeText={this.handleCommChange} multiline={true} label="Commentaire"/>

                    <Input value={this.state.note} onChangeText={this.handleNoteChange} keyboardType='numeric' label="Note" errorMessage={this.errorNote}/>

                    <Button title="Ajouter" onPress={this.handleSubmit}/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}