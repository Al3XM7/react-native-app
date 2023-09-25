/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Button, Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Path, Svg } from 'react-native-svg';


function App(): JSX.Element {

  return (
    <View>

      <View style={styles.svgContainer}>

        <Svg
          viewBox="0 0 1440 320"
          height={600}
          width={Dimensions.get('screen').width}
          style={styles.svg}
        >
          <Path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,64L60,85.3C120,107,240,149,360,144C480,139,600,85,720,64C840,43,960,53,1080,74.7C1200,96,1320,128,1380,144L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </Svg>

      </View>
      <Text style={styles.title}>
        Sing to play
      </Text>

      <Image
        source={require('./assets/img/controller.png')}
        style={styles.Image}
      />


      <TextInput
        placeholder='Email'
        style={styles.texInput}
      />
      <TextInput
        placeholder='Password'
        style={styles.texInput}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>login</Text>
      </TouchableOpacity>
      <Text style={styles.textRegister}>REGISTER NOW
      </Text>

    </View >
  );

}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 30,
    color: 'black',
    marginBottom: 20

  },
  Image: {
    height: 200,
    width: 200
  },
  texInput: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    fontSize: 18,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30
  },
  button: {
    backgroundColor: 'red',
    marginLeft: 30,
    marginRight: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  textButton: {
    color: 'white',
    fontSize: 19
  },
  textRegister: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
    marginTop: 20
  },
  svgContainer: {
    backgroundColor: '#0099ff',
    //backgroundColor: 'black',
    height: 300

  },
  svg: {
    postion: 'absolute',
    top: 40
  }

});
export default App;
