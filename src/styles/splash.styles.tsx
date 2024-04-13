import { StyleSheet } from "react-native";

export const splashStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  text: {
    fontSize: 30,
    position: 'absolute',
    top: '25%',
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '400',
    fontFamily: 'Irish',
  },
});