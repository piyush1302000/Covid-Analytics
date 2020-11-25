import React from 'react';
import {View, Text,StyleSheet} from 'react-native'

export class indiaScreen extends React.Component{
   static navigationOptions = ({navigation}) => ({
      title: `${navigation.getParam('state')}`,
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        width: '100%'
      },
      headerRight: <View></View>,
    });
   render(){
       return(
          <View style={styles.all}>
            <Text style={styles.text}>State:- {this.props.navigation.getParam('state')}</Text>
            <Text>----------------------------------------------------------</Text>
            <Text style={styles.text1}>Confirmed:- {this.props.navigation.getParam('confirmed')}</Text>
            <Text>----------------------------------------------------------</Text>
            <Text style={styles.text2}>Recovered:- {this.props.navigation.getParam('recovered')}</Text>
            <Text>--------------------------------------------------------</Text>
            <Text style={styles.text3}>Deaths:- {this.props.navigation.getParam('deaths')}</Text>
            <Text>--------------------------------------------------</Text>
            <Text style={styles.text4}>Active:- {this.props.navigation.getParam('active')}</Text>
            <Text>------------------------------------------------</Text>
          </View>
       );
   }
}
const styles = StyleSheet.create({
  all: {
     alignItems: 'center',
     justifyContent: 'center',
    flex: 1,
    margin: 10,
    alignSelf: "stretch",
    backgroundColor: '#D3D3D3' 
  },
  text:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    color: '#000000',
    borderRadius: 20,
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    borderColor: '#00FFFF',
    borderWidth: 3,
   shadowColor: "#000",
   shadowOffset: {
     width: 0,
     height: 2,
   },
   shadowOpacity: 0.23,
   shadowRadius: 2.62,
   elevation: 4
  },
  text1:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    color: '#000000',
    borderRadius: 20,
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
  borderColor: '#FED8B1',
  borderWidth: 3,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4
  },
  text2:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    color: '#000000',
    borderRadius: 20,
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
  borderColor: '#FFFF99',
  borderWidth: 3,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4
  },
  text3:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    color: '#000000',
    borderRadius: 20,
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
  borderColor: '#90EE90',
  borderWidth: 3,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4
  },
  text4:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    color: '#000000',
    borderRadius: 20,
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
  borderColor: '#B19CD9',
  borderWidth: 3,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4
  },
})
