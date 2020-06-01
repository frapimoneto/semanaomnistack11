import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal:15
  },

  texto: {
    fontWeight: 'bold',
    fontSize: 25
  }
})