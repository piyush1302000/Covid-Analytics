import React from 'react';
import {View, Text, Dimensions, ScrollView, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

const windowwidth = Dimensions.get('window').width
const windowheight = Dimensions.get('window').height

export class detailScreen extends React.Component{
   static navigationOptions = ({navigation}) => ({
      title: `${navigation.getParam('Country')}`,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
       textAlign: 'center',
       alignSelf: 'center',
       width: '100%'
      },
      headerRight: <View></View>
    });

   render(){
       return(
          <View style={{flex: 1}}>
             <ScrollView>
            <View style={{flex: 1,alignItems: 'center' }}>
             <Image source={require('../assets/animation6.gif')} style={{height: 270, width: 270}} />
              </View>
              <View style={{flex: 1, borderTopLeftRadius: 50, borderTopRightRadius: 50, height: windowheight - 90}}>
              <LinearGradient  
              colors={['#be93c5', '#7bc6cc']}
              style={{flex: 1, alignItems: 'center', borderTopLeftRadius: 50, borderTopRightRadius: 50}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: 90}}>New Confirmed:- {this.props.navigation.getParam('NewConfirmed')} </Text>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: 20}}>New Deaths:- {this.props.navigation.getParam('NewDeaths')} </Text>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: 20}}>New Recovered:- {this.props.navigation.getParam('NewRecovered')} </Text>
             <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop:  20}}>Total Confirmed:- {this.props.navigation.getParam('TotalConfirmed')} </Text>
             <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: 20}}>Total Deaths:- {this.props.navigation.getParam('TotalDeaths')} </Text>
             <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: 20}}>Total Recovered:- {this.props.navigation.getParam('TotalRecovered')} </Text> 
             </LinearGradient>
              </View>
              </ScrollView>
          </View>
       );
   }
}
{/* <View style={{flex: 1}}>
<ScrollView>
<LinearGradient  
 colors={['#16222a', '#3a6073']}
 style={{height: windowheight, alignItems: 'center'}}
 start={{x: 0, y: 0}}
 end={{x: 0, y: 1}}>
<Surface style={{padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 50, alignItems: 'center', justifyContent: 'center'}}>
 <Text style={{fontSize: 17, fontWeight: 'bold', color: '#4847c1'}}>Country:- {this.props.navigation.getParam('Country')} </Text>
</Surface>
<Surface style={{padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
 <Text style={{fontSize: 17, fontWeight: 'bold', color: '#3CB371'}}>New Recovered:- {this.props.navigation.getParam('NewRecovered')} </Text>
</Surface>
<Surface style={{padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
 <Text style={{fontSize: 17, fontWeight: 'bold', color: '#FA8072'}}>New Deaths:- {this.props.navigation.getParam('NewDeaths')} </Text>
</Surface>
<Surface style={{padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
 <Text style={{fontSize: 17, fontWeight: 'bold', color: '#00BFFF'}}>New Confirmed:- {this.props.navigation.getParam('NewConfirmed')} </Text>
</Surface>
<Surface style={{padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
 <Text style={{fontSize: 17, fontWeight: 'bold', color: '#4847c1'}}>Country Code:- {this.props.navigation.getParam('CountryCode')} </Text>
</Surface>
<Surface style={{padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
 <Text style={{fontSize: 17, fontWeight: 'bold', color: '#00BFFF'}}>Total Confirmed:- {this.props.navigation.getParam('TotalConfirmed')} </Text>
</Surface>
<Surface style={{padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
 <Text style={{fontSize: 17, fontWeight: 'bold', color: '#FA8072'}}>Total Deaths:- {this.props.navigation.getParam('TotalDeaths')} </Text>
</Surface>
<Surface style={{padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20, alignItems: 'center', justifyContent: 'center'}}>
 <Text style={{fontSize: 17, fontWeight: 'bold', color: '#3CB371'}}>Total Recovered:- {this.props.navigation.getParam('TotalRecovered')} </Text>
</Surface>
</LinearGradient>
</ScrollView>
</View> */}