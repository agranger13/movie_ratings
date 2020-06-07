import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListeFilm from './vueListe';
import FormFilm from './vueFormulaire';
import ItemDetail from './ItemDetail';
import{createStackNavigator}from '@react-navigation/stack'; 
import{NavigationContainer}from '@react-navigation/native'; 

const Stack=createStackNavigator();

export default class App extends Component {
  constructor(){
    super();
    this.films = [{
            id:1,
            nom : "Salut 1",
            image : "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fmovie_ratings-7ef067e8-59be-4132-9cee-71b243c8606f/ImagePicker/7d0563a3-6897-4b00-94cf-80eb5320c865.jpg",
            resume : "efzfeezf",
            commentaires : "fzfze",
            note : 5
        },{
            id:2,
            nom : "Salut 2",
            image : "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fmovie_ratings-7ef067e8-59be-4132-9cee-71b243c8606f/ImagePicker/7d0563a3-6897-4b00-94cf-80eb5320c865.jpg",
            resume : "efzfeezf",
            commentaires : "fzfze",
            note : 5
        },{
            id:3,
            nom : "Salut 3",
            image : "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fmovie_ratings-7ef067e8-59be-4132-9cee-71b243c8606f/ImagePicker/7d0563a3-6897-4b00-94cf-80eb5320c865.jpg",
            resume : "efzfeezf",
            commentaires : "fzfze",
            note : 5
        }]
    this.state = {
        refresh : false,
        filmsHolder:[],
        idCount:3
        }
  }

  componentDidMount = () =>{
 
    this.setState({ filmsHolder: [...this.films] })
 
  }

  ajoutFilm = (film) =>{
    film.id = this.state.idCount + 1;
    this.setState({idCount : this.state.idCount ++})
    this.films.push(film);
    this.setState({filmsHolder : [...this.films]});
    this.setState({refresh : true});
    console.log(this.state.refresh);
    console.log(this.state.filmsHolder);
    //this.forceUpdate();
  }

  render (){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "ListeFilm">
          {props => <ListeFilm {...props} films={this.state.filmsHolder} refresh={this.state.refresh}></ListeFilm>}
        </Stack.Screen>
        <Stack.Screen name = "FormFilm">
          {props => <FormFilm {...props} ajoutFilm={this.ajoutFilm} idCount={this.state.idCount}></FormFilm>}
        </Stack.Screen>
        <Stack.Screen name = "FilmDetail">
          {props => <ItemDetail {...props} ></ItemDetail>}
        </Stack.Screen>
      </Stack.Navigator>

    </NavigationContainer>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
