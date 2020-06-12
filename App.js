import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import db from './Localdb'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks:[],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <Image
        style={styles.imageicon}
        source={{
          uri:'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'
        }}/>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ chunks: db[this.state.text].chunks });
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
        {this.state.chunks.map(item=>{
          return(
            <TouchableOpacity
            style={styles.chunkbutton}>
            <Text style={styles.displaytext}> {item} </Text>
            </TouchableOpacity>
          ) 
        })}
        </View>
        <Text style={styles.displayText}>{this.state.displayText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  imageicon:{
    width:150,
    height:150,
    marginLeft:85,
    
  },
  chunkbutton:{
    width:'60%',
    height:50,
    borderRadius:4,
    justifyContent:"center",
    alignItems:'center',
    alignSelf:'center',
    backgroundColor:'white',
    margin:5,
    marginTop:100
  }
});
