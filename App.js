import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListeFilm from './vueListe';
import FormFilm from './vueFormulaire';
import{createStackNavigator}from '@react-navigation/stack'; 
import{NavigationContainer}from '@react-navigation/native'; 

const Stack=createStackNavigator();

export default class App extends Component {
  constructor(){
    super();
    this.films = [{
            id:1,
            nom : "Salut 1",
            image : "",
            resume : "efzfeezf",
            commentaires : "fzfze",
            note : 5
        },{
            id:2,
            nom : "Salut 2",
            image : "",
            resume : "efzfeezf",
            commentaires : "fzfze",
            note : 5
        },{
            id:3,
            nom : "Salut 3",
            image : "",
            resume : "efzfeezf",
            commentaires : "fzfze",
            note : 5
        }],
    this.state = {
        refresh : false,
        filmsHolder:[]
        }
  }

  componentDidMount = () =>{
 
    this.setState({ filmsHolder: [...this.films] })
 
  }

  ajoutFilm = (film) =>{
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
          {props => <FormFilm {...props} ajoutFilm={this.ajoutFilm}></FormFilm>}
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
