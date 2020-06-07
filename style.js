
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:10,
    justifyContent: 'center',
},
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10
  },
  imageItem:{
    marginRight:10,
    width:100,
    height:150,
  },
  wrapTitleResume:{
    marginLeft:10,
    width:180
  },
  title:{
    fontSize:20,
    marginBottom:10
  },
  wrapButton:{
    display:"flex",
    justifyContent: 'space-between',
    height:110,
    paddingTop: 35
  },
  button:{
    paddingTop: 10
  }
});

