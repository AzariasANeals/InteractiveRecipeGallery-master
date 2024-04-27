import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Image, ScrollView,  Alert, TextInput} from 'react-native';
// imageList.js

export const images = [
    {
      id: 1,
      image:require("./assets/pizza.jpg"),
      description: 'This is a picture of Pizza!'
    },

    {
      id: 2,
      image:require("./assets/Classic-Lasagna.jpg"),
      description: 'This is a picture of Lasagna!'
    },
    {id: 3,
      image:require("./assets/sushi.jpg"),
      description: 'This is a picture of Sushi!'
    }

  ];

