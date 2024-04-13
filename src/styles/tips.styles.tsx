import { StyleSheet } from "react-native";

export const tipsStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    backgroundColor: '#2B2B2B'
  },
  header: {
    backgroundColor: '#000000',
    opacity: .5,
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'center'
  },
  textHeader: {
    color: '#ffffff',
    fontSize: 28,
    fontFamily: 'Irish',
    marginLeft: 30,
  },
  textBody: {
    fontSize: 35,
    fontFamily: 'Irish',
    fontWeight: '500',
    color: '#ffffff',
    padding: 20
  },
  listTips: {
    padding: 20,
  },
  itemMenuTip: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  textItemMenuTip: {
    fontSize: 15,
    fontFamily: 'Irish',
    fontWeight: '300',
    color: '#ffffff',
  },
  itemSubMenuTip: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 10,
  },
  textItemSubMenuTip: {
    fontSize: 12,
    fontFamily: 'Irish',
    color: '#ffffff',
  },
});