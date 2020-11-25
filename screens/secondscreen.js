import React from 'react';
import {View, Dimensions, Text, ActivityIndicator, ScrollView, Image} from 'react-native'
import {Surface} from 'react-native-paper'
import {LinearGradient} from 'expo-linear-gradient'

const windowwidth = Dimensions.get('window').width
export class secondScreen extends React.Component{
   static navigationOptions = {
      title: 'INDIA',
      headerTintColor: '#fff',
      headerTitleStyle: {
       fontWeight: 'bold',
       textAlign: 'center',
       alignSelf: 'center',
       width: '100%'
      },
      headerRight: <View></View>
    };

constructor(props){
  super(props);
  this.state = {
    isloading: true,
    result: []
  }
}
 componentDidMount(){

    fetch('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise')
    .then((response) => response.json())
    .then((responseJson) => { 
        this.setState({
          isloading: false,
          result: [responseJson]
        })
    })
    .catch(error => console.log(error))
 }

   render(){
    if(this.state.isloading){
      return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size='large' color='#000000' />
          </View>
      )
  }else{
    const covid = this.state.result.map((val, key) => {
      return (
        <View key={key} style={{flex: 1, marginTop: 10, borderTopWidth: 1,borderTopColor: '#E6E6FA', marginLeft: 10, marginRight: 10, alignItems: 'center' }}>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#5f2c82', '#49a09d']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[0].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[0].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[0].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[0].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#fc354c', '#0abfbc']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[1].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[1].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[1].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[1].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#4776e6', '#8e54e9']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[2].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[2].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[2].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[2].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#1d2b64', '#f8cdda']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[3].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[3].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[3].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[3].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#314755', '#26a0da']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[4].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[4].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[4].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[4].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#2b5876', '#4e4376']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[5].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[5].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[5].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[5].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#536976', '#292e49']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[6].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[6].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[6].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[6].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#373b44', '#4286f4']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[7].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[7].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[7].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[7].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#654ea3', '#eaafc8']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[8].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[8].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[8].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[8].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#ad5389', '#3c1053']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[9].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[9].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[9].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[9].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#4e54c8', '#8f94fb']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[10].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[10].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[10].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[10].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#36d1dc', '#5b86e5']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[11].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[11].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[11].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[11].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#000046', '#1cb5e0']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[12].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[12].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[12].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[12].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#de6161', '#2657eb']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[13].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[13].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[13].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[13].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#20002c', '#cbb4d4']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[14].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[14].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[14].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[14].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#c33764', '#1d2671']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[15].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[15].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[15].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[15].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#4568dc', '#b06ab3']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[16].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[16].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[16].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[16].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#2c3e50', '#fd746c']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[17].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[17].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[17].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[17].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#2196f3', '#f44336']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[18].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[18].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[18].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[18].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#16dffd', '#cb3066']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[19].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[19].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[19].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[19].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#1d4350', '#a43931']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[20].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[20].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[20].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[20].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#000000', '#434343']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[21].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[21].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[21].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[21].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#5614b0', '#dbd65c']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[22].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[22].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[22].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[22].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#005c97', '#363795']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[23].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[23].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[23].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[23].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#7b4397', '#dc2430']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[24].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[24].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[24].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[24].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#fc00ff', '#00dbde']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[25].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[25].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[25].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[25].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#360033', '#0b8793']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[26].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[26].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[26].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[26].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#d38312', '#a83279']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[27].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[27].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[27].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[27].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#9d50bb', '#6e48aa']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[28].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[28].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[28].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[28].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#780206', '#061161']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[29].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[29].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[29].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[29].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#f0c27b', '#4b1248']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[30].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[30].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[30].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[30].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#b993d6', '#8ca6db']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[31].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[31].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[31].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[31].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#00d2ff', '#3a7bd5']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[32].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[32].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[32].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[32].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#f2709c', '#ff9472']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[33].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[33].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[33].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[33].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20}}>
           <LinearGradient  
              colors={['#d53369', '#cbad6d']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[34].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[34].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[34].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[34].recovered}</Text>
              </LinearGradient>
           </Surface>
           <Surface style={{flex: 1,padding: 5, height: 200, width: windowwidth - 50, elevation: 5, borderRadius: 15, marginTop: 20, marginBottom: 20}}>
           <LinearGradient  
              colors={['#f857a6', '#ff5858']}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}>
                <Text style={{fontSize: 20, color: "#fff"}}>State: {val.data.statewise[36].state}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Active: {val.data.statewise[36].active}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Deaths: {val.data.statewise[36].deaths}</Text>
                <Text style={{fontSize: 20, color: "#fff"}}>Recovered: {val.data.statewise[36].recovered}</Text>
              </LinearGradient>
           </Surface>
        </View>
    )}
    )
       return(
         <View style={{flex: 1}}>
          <ScrollView style={{marginTop: 10}}>
            <View style={{flex: 1, backgroundColor: '#abbaab', height: 300, width: windowwidth, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('../assets/animation2.gif')} style={{height: 220, width: 220}} />
              <Text style={{color: '#fff', fontSize: 20, marginTop: 5, fontWeight: 'bold'}}>Wash your hands regularly!</Text>
            </View>
            {covid}
          </ScrollView>
          </View>
       );
   }
  }
}

