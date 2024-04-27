import { StyleSheet, Text, View, Pressable, Image,} from 'react-native';

export default function App() {
  return (
      <Pressable 
      onPress={()=> console.log("Pressed Button!")}
      style={ ( { pressed } ) => {
        return{opacity: pressed ? 0.5 : 1 }} 
        }>
      <Image source= {require("./assets/pizza.jpg")} style={styles.imageStyle}/>      
      </Pressable>
  );
}

const styles = StyleSheet.create({
 image:{
    width:100,
    height:100
 }
});