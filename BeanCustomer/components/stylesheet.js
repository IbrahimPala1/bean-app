import { BottomTabBarHeightCallbackContext } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0BA8D3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollcontainer: {
    backgroundColor: '#0BA8D3',
    flex: 1,
  },
  title: {
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 3,
    paddingHorizontal: 30
  },
  buttontext:{
    fontWeight: 'bold'
  },
  homeImage: {
    height: 320,
    width: 320,
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 2,
  },
  image: {
    height: 200,
    width: 200,
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  input: {
    height: 40,
    width: 240,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    placeholderTextColor: '#000000'
  },
  card_container: {
    alignItems: 'center',

  },
  card_template: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    width: 250,
    height: 250,
    margin: 10,
    backgroundColor: "silver"
  },
  card_title: {
    left: 10,
    color: "white",
    fontWeight: 'bold',
  },
  card_beanCount: {
    left: 190,
    bottom: 17,
    color: "white",
    fontWeight: 'bold',
  },
  text_container:{
    position: "absolute",
    width: 248,
    height: 30,
    bottom:0,
    padding: 5,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius : 10,
    borderBottomRightRadius: 10
  },
  card_image: {
    left: 24,
    top: 10,
    align: 'top',
    width: 200,
    height: 200,
    borderRadius : 10, 
  },
  shop_info: {
    width: '94%', 
    height: 600,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 50,
    flex: 1,
    marginTop: 20,
    marginLeft: 10,
    zIndex: 1,
  },
  back_button:{
    top: 2,
    right: 2,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 3,
    paddingHorizontal: 30,
  }
});