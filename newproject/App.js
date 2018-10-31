/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
// import { black } from 'ansi-colors';


//   export default class App extends React.Component {
    
// state = {
//   placeName = ""
// }

// placeNameChangeHandler = (event) => {
//    alert(event);
// }

//   render() {
//     return (
//       <View style={styles.container}>
//        <TextInput 
//        style={{width: 300, borderColor: "black", borderWidth: 1}}
//        value={this.state.placeName} 
//        onChange={this.placeNameChangeHandler}  
//        />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class App extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  render() {
    return (
      <View style={styles.container}>

      <View style={styles.inputContainer}>
      <TextInput
          // style={{width: 300}}
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
       <Button title="Add" style={styles.placeButton} />
      </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
  ,inputContainer: {
  // flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  top: 50,
  alignItems: "center",
  width: "100%",
  },
  placeInput: {
    width: "70%",
  },
  placeButton: {
    width: "30%",
  }
});
