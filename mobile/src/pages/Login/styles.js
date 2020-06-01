import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    // justifyContent: 'center',
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 24,
    backgroundColor: "#FFCBDB"
  },

  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //paddingBottom: 35
  },

  textHeader: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  logo: {
    width: 500,
    height: (Dimensions.get("window").height)*0.4,
    resizeMode: 'contain',
  },

  formEntry: {
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },

  entry: {
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 50,
    height: 60,
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  icon: {
    paddingRight:20
  },

  actions: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25
  },

  button: {
    backgroundColor: "#0060ff",
    borderRadius: 50,
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: 'bold'
  },

  forgetText: {
    color: "#000",
    fontSize: 17,
    fontWeight: 'bold',
    paddingTop: 15
  }
})