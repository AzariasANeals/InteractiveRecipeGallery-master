import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, ScrollView,  Alert, TextInput, ImageBackground, Button} from 'react-native';
import  { useState } from 'react';
import {images, names, nameList} from './imageList.js';

function Gallery(){

    const[pictureId,setPictureId] = useState(1);
    const[picDesc, setPicDesc] = useState(images[0].description);
    return(
      <>
      <Image source={images.id=pictureId} style={styles.imageStyle}/>
      <Text>{picDesc}</Text>
      <Text>{pictureId}</Text>
      <Button 
        title="Next"
        onPress={() => {
        setPictureId(pictureId => pictureId === images.length?1:pictureId+1);
        setPicDesc(images[pictureId === images.length?0:pictureId].description);
      }}></Button>

      <Button 
        title="Previous"
        onPress={() => {
        setPictureId(pictureId => pictureId === 1?images.length:pictureId-1);
        setPicDesc(images[pictureId - 1 === 0?images.length -1:pictureId-2].description);
      }}></Button>
      <Text>{console.log(images.length)}</Text>      
      </>
    );
    
  }


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
      <Gallery />
      <StatusBar style="auto" />      
      </View>    
    </NavigationContainer> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black'
  },
  text:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  imageStyle:{
    width:300,
    height:300
  },
  scrollView:{
    marginHorizontal:50,
    },

  scrollText:{
    marginTop:20,
    marginLeft:15,
    marginRight:15,
    fontFamily:'Optima',
    fontWeight:'500',
    color:'#00542D',
    fontSize: 30,
  },

  image:{
    width:100,
    height:100
 }
});
