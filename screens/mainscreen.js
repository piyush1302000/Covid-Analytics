import React from 'react';
import {View, Text, ActivityIndicator, Dimensions, TouchableOpacity, ScrollView, Image} from 'react-native';
import {Surface} from 'react-native-paper'
import Flag from 'react-native-flags'

const windowwidth = Dimensions.get('window').width
export class mainScreen extends React.Component{
  static navigationOptions = {
    title: 'All Countries',
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
      fetch('https://api.covid19api.com/summary')
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
                 <ActivityIndicator size="large" color="#000000" />
                 </View>
             )
         }else{
                     let covid = this.state.result.map((val, key) => {
                             return(
                                 <View key={key} style={{flex: 1, marginTop: 10, borderTopWidth: 1,borderTopColor: '#E6E6FA', marginLeft: 10, marginRight: 10, alignItems: 'center'}}>
                                   <TouchableOpacity onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[0].NewRecovered,NewDeaths: val.Countries[0].NewDeaths,Country: val.Countries[0].Country,CountryCode: val.Countries[0].CountryCode,Date: val.Countries[0].Date,NewConfirmed: val.Countries[0].NewConfirmed,TotalConfirmed: val.Countries[0].TotalConfirmed,TotalDeaths: val.Countries[0].TotalDeaths,TotalRecovered: val.Countries[0].TotalRecovered,Slug: val.Countries[0].Slug})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="AF" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[0].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[1].NewRecovered,NewDeaths: val.Countries[1].NewDeaths,Country: val.Countries[1].Country,CountryCode: val.Countries[1].CountryCode,Date: val.Countries[1].Date,NewConfirmed: val.Countries[1].NewConfirmed,TotalDeaths: val.Countries[1].TotalDeaths,TotalRecovered: val.Countries[1].TotalRecovered,Slug: val.Countries[1].Slug,TotalConfirmed: val.Countries[1].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="AL" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[1].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text> 
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[2].NewRecovered,NewDeaths: val.Countries[2].NewDeaths,Country: val.Countries[2].Country,CountryCode: val.Countries[2].CountryCode,Date: val.Countries[2].Date,NewConfirmed: val.Countries[2].NewConfirmed,TotalDeaths: val.Countries[2].TotalDeaths,TotalRecovered: val.Countries[2].TotalRecovered,Slug: val.Countries[2].Slug,TotalConfirmed: val.Countries[2].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="DZ" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[2].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[3].NewRecovered,NewDeaths: val.Countries[3].NewDeaths,Country: val.Countries[3].Country,CountryCode: val.Countries[3].CountryCode,Date: val.Countries[3].Date,NewConfirmed: val.Countries[3].NewConfirmed,TotalDeaths: val.Countries[3].TotalDeaths,TotalRecovered: val.Countries[3].TotalRecovered,Slug: val.Countries[3].Slug,TotalConfirmed: val.Countries[3].TotalConfirmed})}>
                                    <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="AD" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[3].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[4].NewRecovered,NewDeaths: val.Countries[4].NewDeaths,Country: val.Countries[4].Country,CountryCode: val.Countries[4].CountryCode,Date: val.Countries[4].Date,NewConfirmed: val.Countries[4].NewConfirmed,TotalDeaths: val.Countries[4].TotalDeaths,TotalRecovered: val.Countries[4].TotalRecovered,Slug: val.Countries[4].Slug,TotalConfirmed: val.Countries[4].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="AO" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[4].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[5].NewRecovered,NewDeaths: val.Countries[5].NewDeaths,Country: val.Countries[5].Country,CountryCode: val.Countries[5].CountryCode,Date: val.Countries[5].Date,NewConfirmed: val.Countries[5].NewConfirmed,TotalDeaths: val.Countries[5].TotalDeaths,TotalRecovered: val.Countries[5].TotalRecovered,Slug: val.Countries[5].Slug,TotalConfirmed: val.Countries[5].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="AG" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[5].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[6].NewRecovered,NewDeaths: val.Countries[6].NewDeaths,Country: val.Countries[6].Country,CountryCode: val.Countries[6].CountryCode,Date: val.Countries[6].Date,NewConfirmed: val.Countries[6].NewConfirmed,TotalDeaths: val.Countries[6].TotalDeaths,TotalRecovered: val.Countries[6].TotalRecovered,Slug: val.Countries[6].Slug,TotalConfirmed: val.Countries[6].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="AR" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[6].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[7].NewRecovered,NewDeaths: val.Countries[7].NewDeaths,Country: val.Countries[7].Country,CountryCode: val.Countries[7].CountryCode,Date: val.Countries[7].Date,NewConfirmed: val.Countries[7].NewConfirmed,TotalDeaths: val.Countries[7].TotalDeaths,TotalRecovered: val.Countries[7].TotalRecovered,Slug: val.Countries[7].Slug,TotalConfirmed: val.Countries[7].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="AM" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[7].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[8].NewRecovered,NewDeaths: val.Countries[8].NewDeaths,Country: val.Countries[8].Country,CountryCode: val.Countries[8].CountryCode,Date: val.Countries[8].Date,NewConfirmed: val.Countries[8].NewConfirmed,TotalDeaths: val.Countries[8].TotalDeaths,TotalRecovered: val.Countries[8].TotalRecovered,Slug: val.Countries[8].Slug,TotalConfirmed: val.Countries[8].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="AU" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[8].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[9].NewRecovered,NewDeaths: val.Countries[9].NewDeaths,Country: val.Countries[9].Country,CountryCode: val.Countries[9].CountryCode,Date: val.Countries[9].Date,NewConfirmed: val.Countries[9].NewConfirmed,TotalDeaths: val.Countries[9].TotalDeaths,TotalRecovered: val.Countries[9].TotalRecovered,Slug: val.Countries[9].Slug,TotalConfirmed: val.Countries[9].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="AT" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[9].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[10].NewRecovered,NewDeaths: val.Countries[10].NewDeaths,Country: val.Countries[10].Country,CountryCode: val.Countries[10].CountryCode,Date: val.Countries[10].Date,NewConfirmed: val.Countries[10].NewConfirmed,TotalDeaths: val.Countries[10].TotalDeaths,TotalRecovered: val.Countries[10].TotalRecovered,Slug: val.Countries[10].Slug,TotalConfirmed: val.Countries[10].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="AZ" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[10].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[11].NewRecovered,NewDeaths: val.Countries[11].NewDeaths,Country: val.Countries[11].Country,CountryCode: val.Countries[11].CountryCode,Date: val.Countries[11].Date,NewConfirmed: val.Countries[11].NewConfirmed,TotalDeaths: val.Countries[11].TotalDeaths,TotalRecovered: val.Countries[11].TotalRecovered,Slug: val.Countries[11].Slug,TotalConfirmed: val.Countries[11].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="BS" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[11].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[12].NewRecovered,NewDeaths: val.Countries[12].NewDeaths,Country: val.Countries[12].Country,CountryCode: val.Countries[12].CountryCode,Date: val.Countries[12].Date,NewConfirmed: val.Countries[12].NewConfirmed,TotalDeaths: val.Countries[12].TotalDeaths,TotalRecovered: val.Countries[12].TotalRecovered,Slug: val.Countries[12].Slug,TotalConfirmed: val.Countries[12].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="BH" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[12].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity> 
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[13].NewRecovered,NewDeaths: val.Countries[13].NewDeaths,Country: val.Countries[13].Country,CountryCode: val.Countries[13].CountryCode,Date: val.Countries[13].Date,NewConfirmed: val.Countries[13].NewConfirmed,TotalDeaths: val.Countries[13].TotalDeaths,TotalRecovered: val.Countries[13].TotalRecovered,Slug: val.Countries[13].Slug,TotalConfirmed: val.Countries[13].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="BD" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[13].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[14].NewRecovered,NewDeaths: val.Countries[14].NewDeaths,Country: val.Countries[14].Country,CountryCode: val.Countries[14].CountryCode,Date: val.Countries[14].Date,NewConfirmed: val.Countries[14].NewConfirmed,TotalDeaths: val.Countries[14].TotalDeaths,TotalRecovered: val.Countries[14].TotalRecovered,Slug: val.Countries[14].Slug,TotalConfirmed: val.Countries[14].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="BB" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[14].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[15].NewRecovered,NewDeaths: val.Countries[15].NewDeaths,Country: val.Countries[15].Country,CountryCode: val.Countries[15].CountryCode,Date: val.Countries[15].Date,NewConfirmed: val.Countries[15].NewConfirmed,TotalDeaths: val.Countries[15].TotalDeaths,TotalRecovered: val.Countries[15].TotalRecovered,Slug: val.Countries[15].Slug,TotalConfirmed: val.Countries[15].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="BY" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[15].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[16].NewRecovered,NewDeaths: val.Countries[16].NewDeaths,Country: val.Countries[16].Country,CountryCode: val.Countries[16].CountryCode,Date: val.Countries[16].Date,NewConfirmed: val.Countries[16].NewConfirmed,TotalDeaths: val.Countries[16].TotalDeaths,TotalRecovered: val.Countries[16].TotalRecovered,Slug: val.Countries[16].Slug,TotalConfirmed: val.Countries[16].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="BE" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[16].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[17].NewRecovered,NewDeaths: val.Countries[17].NewDeaths,Country: val.Countries[17].Country,CountryCode: val.Countries[17].CountryCode,Date: val.Countries[17].Date,NewConfirmed: val.Countries[17].NewConfirmed,TotalDeaths: val.Countries[17].TotalDeaths,TotalRecovered: val.Countries[17].TotalRecovered,Slug: val.Countries[17].Slug,TotalConfirmed: val.Countries[17].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="BZ" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[17].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[18].NewRecovered,NewDeaths: val.Countries[18].NewDeaths,Country: val.Countries[18].Country,CountryCode: val.Countries[18].CountryCode,Date: val.Countries[18].Date,NewConfirmed: val.Countries[18].NewConfirmed,TotalDeaths: val.Countries[18].TotalDeaths,TotalRecovered: val.Countries[18].TotalRecovered,Slug: val.Countries[18].Slug,TotalConfirmed: val.Countries[18].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="BJ" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[18].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[19].NewRecovered,NewDeaths: val.Countries[19].NewDeaths,Country: val.Countries[19].Country,CountryCode: val.Countries[19].CountryCode,Date: val.Countries[19].Date,NewConfirmed: val.Countries[19].NewConfirmed,TotalDeaths: val.Countries[19].TotalDeaths,TotalRecovered: val.Countries[19].TotalRecovered,Slug: val.Countries[19].Slug,TotalConfirmed: val.Countries[19].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="BT" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[19].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[20].NewRecovered,NewDeaths: val.Countries[20].NewDeaths,Country: val.Countries[20].Country,CountryCode: val.Countries[20].CountryCode,Date: val.Countries[20].Date,NewConfirmed: val.Countries[20].NewConfirmed,TotalDeaths: val.Countries[20].TotalDeaths,TotalRecovered: val.Countries[20].TotalRecovered,Slug: val.Countries[20].Slug,TotalConfirmed: val.Countries[20].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="BO" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[20].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[21].NewRecovered,NewDeaths: val.Countries[21].NewDeaths,Country: val.Countries[21].Country,CountryCode: val.Countries[21].CountryCode,Date: val.Countries[21].Date,NewConfirmed: val.Countries[21].NewConfirmed,TotalDeaths: val.Countries[21].TotalDeaths,TotalRecovered: val.Countries[21].TotalRecovered,Slug: val.Countries[21].Slug,TotalConfirmed: val.Countries[21].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="BA" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[21].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[22].NewRecovered,NewDeaths: val.Countries[22].NewDeaths,Country: val.Countries[22].Country,CountryCode: val.Countries[22].CountryCode,Date: val.Countries[22].Date,NewConfirmed: val.Countries[22].NewConfirmed,TotalDeaths: val.Countries[22].TotalDeaths,TotalRecovered: val.Countries[22].TotalRecovered,Slug: val.Countries[22].Slug,TotalConfirmed: val.Countries[22].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="BW" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[22].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[23].NewRecovered,NewDeaths: val.Countries[23].NewDeaths,Country: val.Countries[23].Country,CountryCode: val.Countries[23].CountryCode,Date: val.Countries[23].Date,NewConfirmed: val.Countries[23].NewConfirmed,TotalDeaths: val.Countries[23].TotalDeaths,TotalRecovered: val.Countries[23].TotalRecovered,Slug: val.Countries[23].Slug,TotalConfirmed: val.Countries[23].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="BR" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[23].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[24].NewRecovered,NewDeaths: val.Countries[24].NewDeaths,Country: val.Countries[24].Country,CountryCode: val.Countries[24].CountryCode,Date: val.Countries[24].Date,NewConfirmed: val.Countries[24].NewConfirmed,TotalDeaths: val.Countries[24].TotalDeaths,TotalRecovered: val.Countries[24].TotalRecovered,Slug: val.Countries[24].Slug,TotalConfirmed: val.Countries[24].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="BN" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[24].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[25].NewRecovered,NewDeaths: val.Countries[25].NewDeaths,Country: val.Countries[25].Country,CountryCode: val.Countries[25].CountryCode,Date: val.Countries[25].Date,NewConfirmed: val.Countries[25].NewConfirmed,TotalDeaths: val.Countries[25].TotalDeaths,TotalRecovered: val.Countries[25].TotalRecovered,Slug: val.Countries[25].Slug,TotalConfirmed: val.Countries[25].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="BG" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[25].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[26].NewRecovered,NewDeaths: val.Countries[26].NewDeaths,Country: val.Countries[26].Country,CountryCode: val.Countries[26].CountryCode,Date: val.Countries[26].Date,NewConfirmed: val.Countries[26].NewConfirmed,TotalDeaths: val.Countries[26].TotalDeaths,TotalRecovered: val.Countries[26].TotalRecovered,Slug: val.Countries[26].Slug,TotalConfirmed: val.Countries[26].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="BF" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[26].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[27].NewRecovered,NewDeaths: val.Countries[27].NewDeaths,Country: val.Countries[27].Country,CountryCode: val.Countries[27].CountryCode,Date: val.Countries[27].Date,NewConfirmed: val.Countries[27].NewConfirmed,TotalDeaths: val.Countries[27].TotalDeaths,TotalRecovered: val.Countries[27].TotalRecovered,Slug: val.Countries[27].Slug,TotalConfirmed: val.Countries[27].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="BI" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[27].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[28].NewRecovered,NewDeaths: val.Countries[28].NewDeaths,Country: val.Countries[28].Country,CountryCode: val.Countries[28].CountryCode,Date: val.Countries[28].Date,NewConfirmed: val.Countries[28].NewConfirmed,TotalDeaths: val.Countries[28].TotalDeaths,TotalRecovered: val.Countries[28].TotalRecovered,Slug: val.Countries[28].Slug,TotalConfirmed: val.Countries[28].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="KH" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[28].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[29].NewRecovered,NewDeaths: val.Countries[29].NewDeaths,Country: val.Countries[29].Country,CountryCode: val.Countries[29].CountryCode,Date: val.Countries[29].Date,NewConfirmed: val.Countries[29].NewConfirmed,TotalDeaths: val.Countries[29].TotalDeaths,TotalRecovered: val.Countries[29].TotalRecovered,Slug: val.Countries[29].Slug,TotalConfirmed: val.Countries[29].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="CM" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[29].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[30].NewRecovered,NewDeaths: val.Countries[30].NewDeaths,Country: val.Countries[30].Country,CountryCode: val.Countries[30].CountryCode,Date: val.Countries[30].Date,NewConfirmed: val.Countries[30].NewConfirmed,TotalDeaths: val.Countries[30].TotalDeaths,TotalRecovered: val.Countries[30].TotalRecovered,Slug: val.Countries[30].Slug,TotalConfirmed: val.Countries[30].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="CA" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[30].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[31].NewRecovered,NewDeaths: val.Countries[31].NewDeaths,Country: val.Countries[31].Country,CountryCode: val.Countries[31].CountryCode,Date: val.Countries[31].Date,NewConfirmed: val.Countries[31].NewConfirmed,TotalDeaths: val.Countries[31].TotalDeaths,TotalRecovered: val.Countries[31].TotalRecovered,Slug: val.Countries[31].Slug,TotalConfirmed: val.Countries[31].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="CV" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[31].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[32].NewRecovered,NewDeaths: val.Countries[32].NewDeaths,Country: val.Countries[32].Country,CountryCode: val.Countries[32].CountryCode,Date: val.Countries[32].Date,NewConfirmed: val.Countries[32].NewConfirmed,TotalDeaths: val.Countries[32].TotalDeaths,TotalRecovered: val.Countries[32].TotalRecovered,Slug: val.Countries[32].Slug,TotalConfirmed: val.Countries[32].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="CF" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[32].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[33].NewRecovered,NewDeaths: val.Countries[33].NewDeaths,Country: val.Countries[33].Country,CountryCode: val.Countries[33].CountryCode,Date: val.Countries[33].Date,NewConfirmed: val.Countries[33].NewConfirmed,TotalDeaths: val.Countries[33].TotalDeaths,TotalRecovered: val.Countries[33].TotalRecovered,Slug: val.Countries[33].Slug,TotalConfirmed: val.Countries[33].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="TD" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[33].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[34].NewRecovered,NewDeaths: val.Countries[34].NewDeaths,Country: val.Countries[34].Country,CountryCode: val.Countries[34].CountryCode,Date: val.Countries[34].Date,NewConfirmed: val.Countries[34].NewConfirmed,TotalDeaths: val.Countries[34].TotalDeaths,TotalRecovered: val.Countries[34].TotalRecovered,Slug: val.Countries[34].Slug,TotalConfirmed: val.Countries[34].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="CL" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[34].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[35].NewRecovered,NewDeaths: val.Countries[35].NewDeaths,Country: val.Countries[35].Country,CountryCode: val.Countries[35].CountryCode,Date: val.Countries[35].Date,NewConfirmed: val.Countries[35].NewConfirmed,TotalDeaths: val.Countries[35].TotalDeaths,TotalRecovered: val.Countries[35].TotalRecovered,Slug: val.Countries[35].Slug,TotalConfirmed: val.Countries[35].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="CN" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[35].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[36].NewRecovered,NewDeaths: val.Countries[36].NewDeaths,Country: val.Countries[36].Country,CountryCode: val.Countries[36].CountryCode,Date: val.Countries[36].Date,NewConfirmed: val.Countries[36].NewConfirmed,TotalDeaths: val.Countries[36].TotalDeaths,TotalRecovered: val.Countries[36].TotalRecovered,Slug: val.Countries[36].Slug,TotalConfirmed: val.Countries[36].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="CO" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[36].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[37].NewRecovered,NewDeaths: val.Countries[37].NewDeaths,Country: val.Countries[37].Country,CountryCode: val.Countries[37].CountryCode,Date: val.Countries[37].Date,NewConfirmed: val.Countries[37].NewConfirmed,TotalDeaths: val.Countries[37].TotalDeaths,TotalRecovered: val.Countries[37].TotalRecovered,Slug: val.Countries[37].Slug,TotalConfirmed: val.Countries[37].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="KM" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[37].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[38].NewRecovered,NewDeaths: val.Countries[38].NewDeaths,Country: val.Countries[38].Country,CountryCode: val.Countries[38].CountryCode,Date: val.Countries[38].Date,NewConfirmed: val.Countries[38].NewConfirmed,TotalDeaths: val.Countries[38].TotalDeaths,TotalRecovered: val.Countries[38].TotalRecovered,Slug: val.Countries[38].Slug,TotalConfirmed: val.Countries[38].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="CG" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[38].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[39].NewRecovered,NewDeaths: val.Countries[39].NewDeaths,Country: val.Countries[39].Country,CountryCode: val.Countries[39].CountryCode,Date: val.Countries[39].Date,NewConfirmed: val.Countries[39].NewConfirmed,TotalDeaths: val.Countries[39].TotalDeaths,TotalRecovered: val.Countries[39].TotalRecovered,Slug: val.Countries[39].Slug,TotalConfirmed: val.Countries[39].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="CD" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[39].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[40].NewRecovered,NewDeaths: val.Countries[40].NewDeaths,Country: val.Countries[40].Country,CountryCode: val.Countries[40].CountryCode,Date: val.Countries[40].Date,NewConfirmed: val.Countries[40].NewConfirmed,TotalDeaths: val.Countries[40].TotalDeaths,TotalRecovered: val.Countries[40].TotalRecovered,Slug: val.Countries[40].Slug,TotalConfirmed: val.Countries[40].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="CR" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[40].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[41].NewRecovered,NewDeaths: val.Countries[41].NewDeaths,Country: val.Countries[41].Country,CountryCode: val.Countries[41].CountryCode,Date: val.Countries[41].Date,NewConfirmed: val.Countries[41].NewConfirmed,TotalDeaths: val.Countries[41].TotalDeaths,TotalRecovered: val.Countries[41].TotalRecovered,Slug: val.Countries[41].Slug,TotalConfirmed: val.Countries[41].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="HR" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[41].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[42].NewRecovered,NewDeaths: val.Countries[42].NewDeaths,Country: val.Countries[42].Country,CountryCode: val.Countries[42].CountryCode,Date: val.Countries[42].Date,NewConfirmed: val.Countries[42].NewConfirmed,TotalDeaths: val.Countries[42].TotalDeaths,TotalRecovered: val.Countries[42].TotalRecovered,Slug: val.Countries[42].Slug,TotalConfirmed: val.Countries[42].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="CU" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[42].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[43].NewRecovered,NewDeaths: val.Countries[43].NewDeaths,Country: val.Countries[43].Country,CountryCode: val.Countries[43].CountryCode,Date: val.Countries[43].Date,NewConfirmed: val.Countries[43].NewConfirmed,TotalDeaths: val.Countries[43].TotalDeaths,TotalRecovered: val.Countries[43].TotalRecovered,Slug: val.Countries[43].Slug,TotalConfirmed: val.Countries[43].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="CY" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[43].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[44].NewRecovered,NewDeaths: val.Countries[44].NewDeaths,Country: val.Countries[44].Country,CountryCode: val.Countries[44].CountryCode,Date: val.Countries[44].Date,NewConfirmed: val.Countries[44].NewConfirmed,TotalDeaths: val.Countries[44].TotalDeaths,TotalRecovered: val.Countries[44].TotalRecovered,Slug: val.Countries[44].Slug,TotalConfirmed: val.Countries[44].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="CZ" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[44].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[45].NewRecovered,NewDeaths: val.Countries[45].NewDeaths,Country: val.Countries[45].Country,CountryCode: val.Countries[45].CountryCode,Date: val.Countries[45].Date,NewConfirmed: val.Countries[45].NewConfirmed,TotalDeaths: val.Countries[45].TotalDeaths,TotalRecovered: val.Countries[45].TotalRecovered,Slug: val.Countries[45].Slug,TotalConfirmed: val.Countries[45].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="CI" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[45].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[46].NewRecovered,NewDeaths: val.Countries[46].NewDeaths,Country: val.Countries[46].Country,CountryCode: val.Countries[46].CountryCode,Date: val.Countries[46].Date,NewConfirmed: val.Countries[46].NewConfirmed,TotalDeaths: val.Countries[46].TotalDeaths,TotalRecovered: val.Countries[46].TotalRecovered,Slug: val.Countries[46].Slug,TotalConfirmed: val.Countries[46].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="DK" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[46].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[47].NewRecovered,NewDeaths: val.Countries[47].NewDeaths,Country: val.Countries[47].Country,CountryCode: val.Countries[47].CountryCode,Date: val.Countries[47].Date,NewConfirmed: val.Countries[47].NewConfirmed,TotalDeaths: val.Countries[47].TotalDeaths,TotalRecovered: val.Countries[47].TotalRecovered,Slug: val.Countries[47].Slug,TotalConfirmed: val.Countries[47].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="DJ" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[47].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[48].NewRecovered,NewDeaths: val.Countries[48].NewDeaths,Country: val.Countries[48].Country,CountryCode: val.Countries[48].CountryCode,Date: val.Countries[48].Date,NewConfirmed: val.Countries[48].NewConfirmed,TotalDeaths: val.Countries[48].TotalDeaths,TotalRecovered: val.Countries[48].TotalRecovered,Slug: val.Countries[48].Slug,TotalConfirmed: val.Countries[48].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="DM" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[48].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[49].NewRecovered,NewDeaths: val.Countries[49].NewDeaths,Country: val.Countries[49].Country,CountryCode: val.Countries[49].CountryCode,Date: val.Countries[49].Date,NewConfirmed: val.Countries[49].NewConfirmed,TotalDeaths: val.Countries[49].TotalDeaths,TotalRecovered: val.Countries[49].TotalRecovered,Slug: val.Countries[49].Slug,TotalConfirmed: val.Countries[49].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="DO" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[49].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[50].NewRecovered,NewDeaths: val.Countries[50].NewDeaths,Country: val.Countries[50].Country,CountryCode: val.Countries[50].CountryCode,Date: val.Countries[50].Date,NewConfirmed: val.Countries[50].NewConfirmed,TotalDeaths: val.Countries[50].TotalDeaths,TotalRecovered: val.Countries[50].TotalRecovered,Slug: val.Countries[50].Slug,TotalConfirmed: val.Countries[50].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="EC" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[50].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[51].NewRecovered,NewDeaths: val.Countries[51].NewDeaths,Country: val.Countries[51].Country,CountryCode: val.Countries[51].CountryCode,Date: val.Countries[51].Date,NewConfirmed: val.Countries[51].NewConfirmed,TotalConfirmed: val.Countries[51].TotalConfirmed,TotalDeaths: val.Countries[51].TotalDeaths,TotalRecovered: val.Countries[51].TotalRecovered,Slug: val.Countries[51].Slug})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="EG" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[51].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[52].NewRecovered,NewDeaths: val.Countries[52].NewDeaths,Country: val.Countries[52].Country,CountryCode: val.Countries[52].CountryCode,Date: val.Countries[52].Date,NewConfirmed: val.Countries[52].NewConfirmed,TotalDeaths: val.Countries[52].TotalDeaths,TotalRecovered: val.Countries[52].TotalRecovered,Slug: val.Countries[52].Slug,TotalConfirmed: val.Countries[52].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="SV" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[52].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[53].NewRecovered,NewDeaths: val.Countries[53].NewDeaths,Country: val.Countries[53].Country,CountryCode: val.Countries[53].CountryCode,Date: val.Countries[53].Date,NewConfirmed: val.Countries[53].NewConfirmed,TotalDeaths: val.Countries[53].TotalDeaths,TotalRecovered: val.Countries[53].TotalRecovered,Slug: val.Countries[53].Slug,TotalConfirmed: val.Countries[53].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="GQ" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[53].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[54].NewRecovered,NewDeaths: val.Countries[54].NewDeaths,Country: val.Countries[54].Country,CountryCode: val.Countries[54].CountryCode,Date: val.Countries[54].Date,NewConfirmed: val.Countries[54].NewConfirmed,TotalDeaths: val.Countries[54].TotalDeaths,TotalRecovered: val.Countries[54].TotalRecovered,Slug: val.Countries[54].Slug,TotalConfirmed: val.Countries[54].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="ER" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[54].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[55].NewRecovered,NewDeaths: val.Countries[55].NewDeaths,Country: val.Countries[55].Country,CountryCode: val.Countries[55].CountryCode,Date: val.Countries[55].Date,NewConfirmed: val.Countries[55].NewConfirmed,TotalDeaths: val.Countries[55].TotalDeaths,TotalRecovered: val.Countries[55].TotalRecovered,Slug: val.Countries[55].Slug,TotalConfirmed: val.Countries[55].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="EE" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[55].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[56].NewRecovered,NewDeaths: val.Countries[56].NewDeaths,Country: val.Countries[56].Country,CountryCode: val.Countries[56].CountryCode,Date: val.Countries[56].Date,NewConfirmed: val.Countries[56].NewConfirmed,TotalDeaths: val.Countries[56].TotalDeaths,TotalRecovered: val.Countries[56].TotalRecovered,Slug: val.Countries[56].Slug,TotalConfirmed: val.Countries[56].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="ET" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[56].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[57].NewRecovered,NewDeaths: val.Countries[57].NewDeaths,Country: val.Countries[57].Country,CountryCode: val.Countries[57].CountryCode,Date: val.Countries[57].Date,NewConfirmed: val.Countries[57].NewConfirmed,TotalDeaths: val.Countries[57].TotalDeaths,TotalRecovered: val.Countries[57].TotalRecovered,Slug: val.Countries[57].Slug,TotalConfirmed: val.Countries[57].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="FJ" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[57].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[58].NewRecovered,NewDeaths: val.Countries[58].NewDeaths,Country: val.Countries[58].Country,CountryCode: val.Countries[58].CountryCode,Date: val.Countries[58].Date,NewConfirmed: val.Countries[58].NewConfirmed,TotalDeaths: val.Countries[58].TotalDeaths,TotalRecovered: val.Countries[58].TotalRecovered,Slug: val.Countries[58].Slug,TotalConfirmed: val.Countries[58].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="FI" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[58].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[59].NewRecovered,NewDeaths: val.Countries[59].NewDeaths,Country: val.Countries[59].Country,CountryCode: val.Countries[59].CountryCode,Date: val.Countries[59].Date,NewConfirmed: val.Countries[59].NewConfirmed,TotalDeaths: val.Countries[59].TotalDeaths,TotalRecovered: val.Countries[59].TotalRecovered,Slug: val.Countries[59].Slug,TotalConfirmed: val.Countries[59].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="FR" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[59].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[60].NewRecovered,NewDeaths: val.Countries[60].NewDeaths,Country: val.Countries[60].Country,CountryCode: val.Countries[60].CountryCode,Date: val.Countries[60].Date,NewConfirmed: val.Countries[60].NewConfirmed,TotalDeaths: val.Countries[60].TotalDeaths,TotalRecovered: val.Countries[60].TotalRecovered,Slug: val.Countries[60].Slug,TotalConfirmed: val.Countries[60].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="GA" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[60].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[61].NewRecovered,NewDeaths: val.Countries[61].NewDeaths,Country: val.Countries[61].Country,CountryCode: val.Countries[61].CountryCode,Date: val.Countries[61].Date,NewConfirmed: val.Countries[61].NewConfirmed,TotalDeaths: val.Countries[61].TotalDeaths,TotalRecovered: val.Countries[61].TotalRecovered,Slug: val.Countries[61].Slug,TotalConfirmed: val.Countries[61].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="GM" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[61].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[62].NewRecovered,NewDeaths: val.Countries[62].NewDeaths,Country: val.Countries[62].Country,CountryCode: val.Countries[62].CountryCode,Date: val.Countries[62].Date,NewConfirmed: val.Countries[62].NewConfirmed,TotalDeaths: val.Countries[62].TotalDeaths,TotalRecovered: val.Countries[62].TotalRecovered,Slug: val.Countries[62].Slug,TotalConfirmed: val.Countries[62].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="GE" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[62].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[63].NewRecovered,NewDeaths: val.Countries[63].NewDeaths,Country: val.Countries[63].Country,CountryCode: val.Countries[63].CountryCode,Date: val.Countries[63].Date,NewConfirmed: val.Countries[63].NewConfirmed,TotalDeaths: val.Countries[63].TotalDeaths,TotalRecovered: val.Countries[63].TotalRecovered,Slug: val.Countries[63].Slug,TotalConfirmed: val.Countries[63].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="DE" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[63].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[64].NewRecovered,NewDeaths: val.Countries[64].NewDeaths,Country: val.Countries[64].Country,CountryCode: val.Countries[64].CountryCode,Date: val.Countries[64].Date,NewConfirmed: val.Countries[64].NewConfirmed,TotalDeaths: val.Countries[64].TotalDeaths,TotalRecovered: val.Countries[64].TotalRecovered,Slug: val.Countries[64].Slug,TotalConfirmed: val.Countries[64].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="GH" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[64].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[65].NewRecovered,NewDeaths: val.Countries[65].NewDeaths,Country: val.Countries[65].Country,CountryCode: val.Countries[65].CountryCode,Date: val.Countries[65].Date,NewConfirmed: val.Countries[65].NewConfirmed,TotalDeaths: val.Countries[65].TotalDeaths,TotalRecovered: val.Countries[65].TotalRecovered,Slug: val.Countries[65].Slug,TotalConfirmed: val.Countries[65].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="GR" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[65].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[66].NewRecovered,NewDeaths: val.Countries[66].NewDeaths,Country: val.Countries[66].Country,CountryCode: val.Countries[66].CountryCode,Date: val.Countries[66].Date,NewConfirmed: val.Countries[66].NewConfirmed,TotalDeaths: val.Countries[66].TotalDeaths,TotalRecovered: val.Countries[66].TotalRecovered,Slug: val.Countries[66].Slug,TotalConfirmed: val.Countries[66].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="GD" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[66].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[67].NewRecovered,NewDeaths: val.Countries[67].NewDeaths,Country: val.Countries[67].Country,CountryCode: val.Countries[67].CountryCode,Date: val.Countries[67].Date,NewConfirmed: val.Countries[67].NewConfirmed,TotalDeaths: val.Countries[67].TotalDeaths,TotalRecovered: val.Countries[67].TotalRecovered,Slug: val.Countries[67].Slug,TotalConfirmed: val.Countries[67].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="GT" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[67].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[68].NewRecovered,NewDeaths: val.Countries[68].NewDeaths,Country: val.Countries[68].Country,CountryCode: val.Countries[68].CountryCode,Date: val.Countries[68].Date,NewConfirmed: val.Countries[68].NewConfirmed,TotalDeaths: val.Countries[68].TotalDeaths,TotalRecovered: val.Countries[68].TotalRecovered,Slug: val.Countries[68].Slug,TotalConfirmed: val.Countries[68].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="GN" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[68].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[69].NewRecovered,NewDeaths: val.Countries[69].NewDeaths,Country: val.Countries[69].Country,CountryCode: val.Countries[69].CountryCode,Date: val.Countries[69].Date,NewConfirmed: val.Countries[69].NewConfirmed,TotalDeaths: val.Countries[69].TotalDeaths,TotalRecovered: val.Countries[69].TotalRecovered,Slug: val.Countries[69].Slug,TotalConfirmed: val.Countries[69].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="GW" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[69].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[70].NewRecovered,NewDeaths: val.Countries[70].NewDeaths,Country: val.Countries[70].Country,CountryCode: val.Countries[70].CountryCode,Date: val.Countries[70].Date,NewConfirmed: val.Countries[70].NewConfirmed,TotalDeaths: val.Countries[70].TotalDeaths,TotalRecovered: val.Countries[70].TotalRecovered,Slug: val.Countries[70].Slug,TotalConfirmed: val.Countries[70].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="GY" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[70].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[71].NewRecovered,NewDeaths: val.Countries[71].NewDeaths,Country: val.Countries[71].Country,CountryCode: val.Countries[71].CountryCode,Date: val.Countries[71].Date,NewConfirmed: val.Countries[71].NewConfirmed,TotalDeaths: val.Countries[71].TotalDeaths,TotalRecovered: val.Countries[71].TotalRecovered,Slug: val.Countries[71].Slug,TotalConfirmed: val.Countries[71].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="HT" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[71].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[72].NewRecovered,NewDeaths: val.Countries[72].NewDeaths,Country: val.Countries[72].Country,CountryCode: val.Countries[72].CountryCode,Date: val.Countries[72].Date,NewConfirmed: val.Countries[72].NewConfirmed,TotalDeaths: val.Countries[72].TotalDeaths,TotalRecovered: val.Countries[72].TotalRecovered,Slug: val.Countries[72].Slug,TotalConfirmed: val.Countries[72].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="VA" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[72].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[73].NewRecovered,NewDeaths: val.Countries[73].NewDeaths,Country: val.Countries[73].Country,CountryCode: val.Countries[73].CountryCode,Date: val.Countries[73].Date,NewConfirmed: val.Countries[73].NewConfirmed,TotalDeaths: val.Countries[73].TotalDeaths,TotalRecovered: val.Countries[73].TotalRecovered,Slug: val.Countries[73].Slug,TotalConfirmed: val.Countries[73].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="HN" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[73].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[74].NewRecovered,NewDeaths: val.Countries[74].NewDeaths,Country: val.Countries[74].Country,CountryCode: val.Countries[74].CountryCode,Date: val.Countries[74].Date,NewConfirmed: val.Countries[74].NewConfirmed,TotalDeaths: val.Countries[74].TotalDeaths,TotalRecovered: val.Countries[74].TotalRecovered,Slug: val.Countries[74].Slug,TotalConfirmed: val.Countries[74].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="HU" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[74].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[75].NewRecovered,NewDeaths: val.Countries[75].NewDeaths,Country: val.Countries[75].Country,CountryCode: val.Countries[75].CountryCode,Date: val.Countries[75].Date,NewConfirmed: val.Countries[75].NewConfirmed,TotalDeaths: val.Countries[75].TotalDeaths,TotalRecovered: val.Countries[75].TotalRecovered,Slug: val.Countries[75].Slug,TotalConfirmed: val.Countries[75].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="IS" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[75].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[76].NewRecovered,NewDeaths: val.Countries[76].NewDeaths,Country: val.Countries[76].Country,CountryCode: val.Countries[76].CountryCode,Date: val.Countries[76].Date,NewConfirmed: val.Countries[76].NewConfirmed,TotalDeaths: val.Countries[76].TotalDeaths,TotalRecovered: val.Countries[76].TotalRecovered,Slug: val.Countries[76].Slug,TotalConfirmed: val.Countries[76].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="IN" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[76].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[77].NewRecovered,NewDeaths: val.Countries[77].NewDeaths,Country: val.Countries[77].Country,CountryCode: val.Countries[77].CountryCode,Date: val.Countries[77].Date,NewConfirmed: val.Countries[77].NewConfirmed,TotalDeaths: val.Countries[77].TotalDeaths,TotalRecovered: val.Countries[77].TotalRecovered,Slug: val.Countries[77].Slug,TotalConfirmed: val.Countries[77].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="ID" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[77].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[78].NewRecovered,NewDeaths: val.Countries[78].NewDeaths,Country: val.Countries[78].Country,CountryCode: val.Countries[78].CountryCode,Date: val.Countries[78].Date,NewConfirmed: val.Countries[78].NewConfirmed,TotalDeaths: val.Countries[78].TotalDeaths,TotalRecovered: val.Countries[78].TotalRecovered,Slug: val.Countries[78].Slug,TotalConfirmed: val.Countries[78].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="IR" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[78].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[79].NewRecovered,NewDeaths: val.Countries[79].NewDeaths,Country: val.Countries[79].Country,CountryCode: val.Countries[79].CountryCode,Date: val.Countries[79].Date,NewConfirmed: val.Countries[79].NewConfirmed,TotalDeaths: val.Countries[79].TotalDeaths,TotalRecovered: val.Countries[79].TotalRecovered,Slug: val.Countries[79].Slug,TotalConfirmed: val.Countries[79].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="IQ" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[79].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[80].NewRecovered,NewDeaths: val.Countries[80].NewDeaths,Country: val.Countries[80].Country,CountryCode: val.Countries[80].CountryCode,Date: val.Countries[80].Date,NewConfirmed: val.Countries[80].NewConfirmed,TotalDeaths: val.Countries[80].TotalDeaths,TotalRecovered: val.Countries[80].TotalRecovered,Slug: val.Countries[80].Slug,TotalConfirmed: val.Countries[80].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="IE" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[80].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[81].NewRecovered,NewDeaths: val.Countries[81].NewDeaths,Country: val.Countries[81].Country,CountryCode: val.Countries[81].CountryCode,Date: val.Countries[81].Date,NewConfirmed: val.Countries[81].NewConfirmed,TotalDeaths: val.Countries[81].TotalDeaths,TotalRecovered: val.Countries[81].TotalRecovered,Slug: val.Countries[81].Slug,TotalConfirmed: val.Countries[81].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="IL" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[81].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[82].NewRecovered,NewDeaths: val.Countries[82].NewDeaths,Country: val.Countries[82].Country,CountryCode: val.Countries[82].CountryCode,Date: val.Countries[82].Date,NewConfirmed: val.Countries[82].NewConfirmed,TotalDeaths: val.Countries[82].TotalDeaths,TotalRecovered: val.Countries[82].TotalRecovered,Slug: val.Countries[82].Slug,TotalConfirmed: val.Countries[82].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="IT" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[82].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[83].NewRecovered,NewDeaths: val.Countries[83].NewDeaths,Country: val.Countries[83].Country,CountryCode: val.Countries[83].CountryCode,Date: val.Countries[83].Date,NewConfirmed: val.Countries[83].NewConfirmed,TotalDeaths: val.Countries[83].TotalDeaths,TotalRecovered: val.Countries[83].TotalRecovered,Slug: val.Countries[83].Slug,TotalConfirmed: val.Countries[83].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="JM" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[83].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[84].NewRecovered,NewDeaths: val.Countries[84].NewDeaths,Country: val.Countries[84].Country,CountryCode: val.Countries[84].CountryCode,Date: val.Countries[84].Date,NewConfirmed: val.Countries[84].NewConfirmed,TotalDeaths: val.Countries[84].TotalDeaths,TotalRecovered: val.Countries[84].TotalRecovered,Slug: val.Countries[84].Slug,TotalConfirmed: val.Countries[84].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="JP" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[84].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[85].NewRecovered,NewDeaths: val.Countries[85].NewDeaths,Country: val.Countries[85].Country,CountryCode: val.Countries[85].CountryCode,Date: val.Countries[85].Date,NewConfirmed: val.Countries[85].NewConfirmed,TotalDeaths: val.Countries[85].TotalDeaths,TotalRecovered: val.Countries[85].TotalRecovered,Slug: val.Countries[85].Slug,TotalConfirmed: val.Countries[85].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="JO" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[85].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[86].NewRecovered,NewDeaths: val.Countries[86].NewDeaths,Country: val.Countries[86].Country,CountryCode: val.Countries[86].CountryCode,Date: val.Countries[86].Date,NewConfirmed: val.Countries[86].NewConfirmed,TotalDeaths: val.Countries[86].TotalDeaths,TotalRecovered: val.Countries[86].TotalRecovered,Slug: val.Countries[86].Slug,TotalConfirmed: val.Countries[86].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="KZ" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[86].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[87].NewRecovered,NewDeaths: val.Countries[87].NewDeaths,Country: val.Countries[87].Country,CountryCode: val.Countries[87].CountryCode,Date: val.Countries[87].Date,NewConfirmed: val.Countries[87].NewConfirmed,TotalDeaths: val.Countries[87].TotalDeaths,TotalRecovered: val.Countries[87].TotalRecovered,Slug: val.Countries[87].Slug,TotalConfirmed: val.Countries[87].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="KE" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[87].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[88].NewRecovered,NewDeaths: val.Countries[88].NewDeaths,Country: val.Countries[88].Country,CountryCode: val.Countries[88].CountryCode,Date: val.Countries[88].Date,NewConfirmed: val.Countries[88].NewConfirmed,TotalDeaths: val.Countries[88].TotalDeaths,TotalRecovered: val.Countries[88].TotalRecovered,Slug: val.Countries[88].Slug,TotalConfirmed: val.Countries[88].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="KR" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[88].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[89].NewRecovered,NewDeaths: val.Countries[89].NewDeaths,Country: val.Countries[89].Country,CountryCode: val.Countries[89].CountryCode,Date: val.Countries[89].Date,NewConfirmed: val.Countries[89].NewConfirmed,TotalDeaths: val.Countries[89].TotalDeaths,TotalRecovered: val.Countries[89].TotalRecovered,Slug: val.Countries[89].Slug,TotalConfirmed: val.Countries[89].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="KW" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[89].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[90].NewRecovered,NewDeaths: val.Countries[90].NewDeaths,Country: val.Countries[90].Country,CountryCode: val.Countries[90].CountryCode,Date: val.Countries[90].Date,NewConfirmed: val.Countries[90].NewConfirmed,TotalDeaths: val.Countries[90].TotalDeaths,TotalRecovered: val.Countries[90].TotalRecovered,Slug: val.Countries[90].Slug,TotalConfirmed: val.Countries[90].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="KG" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[90].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[91].NewRecovered,NewDeaths: val.Countries[91].NewDeaths,Country: val.Countries[91].Country,CountryCode: val.Countries[91].CountryCode,Date: val.Countries[91].Date,NewConfirmed: val.Countries[91].NewConfirmed,TotalDeaths: val.Countries[91].TotalDeaths,TotalRecovered: val.Countries[91].TotalRecovered,Slug: val.Countries[91].Slug,TotalConfirmed: val.Countries[91].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="LA" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[91].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[92].NewRecovered,NewDeaths: val.Countries[92].NewDeaths,Country: val.Countries[92].Country,CountryCode: val.Countries[92].CountryCode,Date: val.Countries[92].Date,NewConfirmed: val.Countries[92].NewConfirmed,TotalDeaths: val.Countries[92].TotalDeaths,TotalRecovered: val.Countries[92].TotalRecovered,Slug: val.Countries[92].Slug,TotalConfirmed: val.Countries[92].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="LV" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[92].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[93].NewRecovered,NewDeaths: val.Countries[93].NewDeaths,Country: val.Countries[93].Country,CountryCode: val.Countries[93].CountryCode,Date: val.Countries[93].Date,NewConfirmed: val.Countries[93].NewConfirmed,TotalDeaths: val.Countries[93].TotalDeaths,TotalRecovered: val.Countries[93].TotalRecovered,Slug: val.Countries[93].Slug,TotalConfirmed: val.Countries[93].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="LB" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[93].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[94].NewRecovered,NewDeaths: val.Countries[94].NewDeaths,Country: val.Countries[94].Country,CountryCode: val.Countries[94].CountryCode,Date: val.Countries[94].Date,NewConfirmed: val.Countries[94].NewConfirmed,TotalDeaths: val.Countries[94].TotalDeaths,TotalRecovered: val.Countries[94].TotalRecovered,Slug: val.Countries[94].Slug,TotalConfirmed: val.Countries[94].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="LS" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[94].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[95].NewRecovered,NewDeaths: val.Countries[95].NewDeaths,Country: val.Countries[95].Country,CountryCode: val.Countries[95].CountryCode,Date: val.Countries[95].Date,NewConfirmed: val.Countries[95].NewConfirmed,TotalDeaths: val.Countries[95].TotalDeaths,TotalRecovered: val.Countries[95].TotalRecovered,Slug: val.Countries[95].Slug,TotalConfirmed: val.Countries[95].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="LR" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[95].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[96].NewRecovered,NewDeaths: val.Countries[96].NewDeaths,Country: val.Countries[96].Country,CountryCode: val.Countries[96].CountryCode,Date: val.Countries[96].Date,NewConfirmed: val.Countries[96].NewConfirmed,TotalDeaths: val.Countries[96].TotalDeaths,TotalRecovered: val.Countries[96].TotalRecovered,Slug: val.Countries[96].Slug,TotalConfirmed: val.Countries[96].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="LY" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[96].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[97].NewRecovered,NewDeaths: val.Countries[97].NewDeaths,Country: val.Countries[97].Country,CountryCode: val.Countries[97].CountryCode,Date: val.Countries[97].Date,NewConfirmed: val.Countries[97].NewConfirmed,TotalDeaths: val.Countries[97].TotalDeaths,TotalRecovered: val.Countries[97].TotalRecovered,Slug: val.Countries[97].Slug,TotalConfirmed: val.Countries[97].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="LI" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[97].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[98].NewRecovered,NewDeaths: val.Countries[98].NewDeaths,Country: val.Countries[98].Country,CountryCode: val.Countries[98].CountryCode,Date: val.Countries[98].Date,NewConfirmed: val.Countries[98].NewConfirmed,TotalDeaths: val.Countries[98].TotalDeaths,TotalRecovered: val.Countries[98].TotalRecovered,Slug: val.Countries[98].Slug,TotalConfirmed: val.Countries[98].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="LT" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[98].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[99].NewRecovered,NewDeaths: val.Countries[99].NewDeaths,Country: val.Countries[99].Country,CountryCode: val.Countries[99].CountryCode,Date: val.Countries[99].Date,NewConfirmed: val.Countries[99].NewConfirmed,TotalDeaths: val.Countries[99].TotalDeaths,TotalRecovered: val.Countries[99].TotalRecovered,Slug: val.Countries[99].Slug,TotalConfirmed: val.Countries[99].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="LU" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[99].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[100].NewRecovered,NewDeaths: val.Countries[100].NewDeaths,Country: val.Countries[100].Country,CountryCode: val.Countries[100].CountryCode,Date: val.Countries[100].Date,NewConfirmed: val.Countries[100].NewConfirmed,TotalDeaths: val.Countries[100].TotalDeaths,TotalRecovered: val.Countries[100].TotalRecovered,Slug: val.Countries[100].Slug,TotalConfirmed: val.Countries[100].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="MO" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[100].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[101].NewRecovered,NewDeaths: val.Countries[101].NewDeaths,Country: val.Countries[101].Country,CountryCode: val.Countries[101].CountryCode,Date: val.Countries[101].Date,NewConfirmed: val.Countries[101].NewConfirmed,TotalDeaths: val.Countries[101].TotalDeaths,TotalRecovered: val.Countries[101].TotalRecovered,Slug: val.Countries[101].Slug,TotalConfirmed: val.Countries[101].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="MK" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[101].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[102].NewRecovered,NewDeaths: val.Countries[102].NewDeaths,Country: val.Countries[102].Country,CountryCode: val.Countries[102].CountryCode,Date: val.Countries[102].Date,NewConfirmed: val.Countries[102].NewConfirmed,TotalConfirmed: val.Countries[102].TotalConfirmed,TotalDeaths: val.Countries[102].TotalDeaths,TotalRecovered: val.Countries[102].TotalRecovered,Slug: val.Countries[102].Slug})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="MG" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[102].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[103].NewRecovered,NewDeaths: val.Countries[103].NewDeaths,Country: val.Countries[103].Country,CountryCode: val.Countries[103].CountryCode,Date: val.Countries[103].Date,NewConfirmed: val.Countries[103].NewConfirmed,TotalDeaths: val.Countries[103].TotalDeaths,TotalRecovered: val.Countries[103].TotalRecovered,Slug: val.Countries[103].Slug,TotalConfirmed: val.Countries[103].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="MW" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[103].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[104].NewRecovered,NewDeaths: val.Countries[104].NewDeaths,Country: val.Countries[104].Country,CountryCode: val.Countries[104].CountryCode,Date: val.Countries[104].Date,NewConfirmed: val.Countries[104].NewConfirmed,TotalDeaths: val.Countries[104].TotalDeaths,TotalRecovered: val.Countries[104].TotalRecovered,Slug: val.Countries[104].Slug,TotalConfirmed: val.Countries[104].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="MY" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[104].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[105].NewRecovered,NewDeaths: val.Countries[105].NewDeaths,Country: val.Countries[105].Country,CountryCode: val.Countries[105].CountryCode,Date: val.Countries[105].Date,NewConfirmed: val.Countries[105].NewConfirmed,TotalDeaths: val.Countries[105].TotalDeaths,TotalRecovered: val.Countries[105].TotalRecovered,Slug: val.Countries[105].Slug,TotalConfirmed: val.Countries[105].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="MV" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[105].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[106].NewRecovered,NewDeaths: val.Countries[106].NewDeaths,Country: val.Countries[106].Country,CountryCode: val.Countries[106].CountryCode,Date: val.Countries[106].Date,NewConfirmed: val.Countries[106].NewConfirmed,TotalDeaths: val.Countries[106].TotalDeaths,TotalRecovered: val.Countries[106].TotalRecovered,Slug: val.Countries[106].Slug,TotalConfirmed: val.Countries[106].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="ML" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[106].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[107].NewRecovered,NewDeaths: val.Countries[107].NewDeaths,Country: val.Countries[107].Country,CountryCode: val.Countries[107].CountryCode,Date: val.Countries[107].Date,NewConfirmed: val.Countries[107].NewConfirmed,TotalDeaths: val.Countries[107].TotalDeaths,TotalRecovered: val.Countries[107].TotalRecovered,Slug: val.Countries[107].Slug,TotalConfirmed: val.Countries[107].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="MT" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[107].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[108].NewRecovered,NewDeaths: val.Countries[108].NewDeaths,Country: val.Countries[108].Country,CountryCode: val.Countries[108].CountryCode,Date: val.Countries[108].Date,NewConfirmed: val.Countries[108].NewConfirmed,TotalDeaths: val.Countries[108].TotalDeaths,TotalRecovered: val.Countries[108].TotalRecovered,Slug: val.Countries[108].Slug,TotalConfirmed: val.Countries[108].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="MH" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[108].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[109].NewRecovered,NewDeaths: val.Countries[109].NewDeaths,Country: val.Countries[109].Country,CountryCode: val.Countries[109].CountryCode,Date: val.Countries[109].Date,NewConfirmed: val.Countries[109].NewConfirmed,TotalDeaths: val.Countries[109].TotalDeaths,TotalRecovered: val.Countries[109].TotalRecovered,Slug: val.Countries[109].Slug,TotalConfirmed: val.Countries[109].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="MR" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[109].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[110].NewRecovered,NewDeaths: val.Countries[110].NewDeaths,Country: val.Countries[110].Country,CountryCode: val.Countries[110].CountryCode,Date: val.Countries[110].Date,NewConfirmed: val.Countries[110].NewConfirmed,TotalDeaths: val.Countries[110].TotalDeaths,TotalRecovered: val.Countries[110].TotalRecovered,Slug: val.Countries[110].Slug,TotalConfirmed: val.Countries[110].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="MU" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[110].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[111].NewRecovered,NewDeaths: val.Countries[111].NewDeaths,Country: val.Countries[111].Country,CountryCode: val.Countries[111].CountryCode,Date: val.Countries[111].Date,NewConfirmed: val.Countries[111].NewConfirmed,TotalDeaths: val.Countries[111].TotalDeaths,TotalRecovered: val.Countries[111].TotalRecovered,Slug: val.Countries[111].Slug,TotalConfirmed: val.Countries[111].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="MX" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[111].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[112].NewRecovered,NewDeaths: val.Countries[112].NewDeaths,Country: val.Countries[112].Country,CountryCode: val.Countries[112].CountryCode,Date: val.Countries[112].Date,NewConfirmed: val.Countries[112].NewConfirmed,TotalDeaths: val.Countries[112].TotalDeaths,TotalRecovered: val.Countries[112].TotalRecovered,Slug: val.Countries[112].Slug,TotalConfirmed: val.Countries[112].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="MD" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[112].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[113].NewRecovered,NewDeaths: val.Countries[113].NewDeaths,Country: val.Countries[113].Country,CountryCode: val.Countries[113].CountryCode,Date: val.Countries[113].Date,NewConfirmed: val.Countries[113].NewConfirmed,TotalDeaths: val.Countries[113].TotalDeaths,TotalRecovered: val.Countries[113].TotalRecovered,Slug: val.Countries[113].Slug,TotalConfirmed: val.Countries[113].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="MC" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[113].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[114].NewRecovered,NewDeaths: val.Countries[114].NewDeaths,Country: val.Countries[114].Country,CountryCode: val.Countries[114].CountryCode,Date: val.Countries[114].Date,NewConfirmed: val.Countries[114].NewConfirmed,TotalDeaths: val.Countries[114].TotalDeaths,TotalRecovered: val.Countries[114].TotalRecovered,Slug: val.Countries[114].Slug,TotalConfirmed: val.Countries[114].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="MN" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[114].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[115].NewRecovered,NewDeaths: val.Countries[115].NewDeaths,Country: val.Countries[115].Country,CountryCode: val.Countries[115].CountryCode,Date: val.Countries[115].Date,NewConfirmed: val.Countries[115].NewConfirmed,TotalDeaths: val.Countries[115].TotalDeaths,TotalRecovered: val.Countries[115].TotalRecovered,Slug: val.Countries[115].Slug,TotalConfirmed: val.Countries[115].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="ME" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[115].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[116].NewRecovered,NewDeaths: val.Countries[116].NewDeaths,Country: val.Countries[116].Country,CountryCode: val.Countries[116].CountryCode,Date: val.Countries[116].Date,NewConfirmed: val.Countries[116].NewConfirmed,TotalDeaths: val.Countries[116].TotalDeaths,TotalRecovered: val.Countries[116].TotalRecovered,Slug: val.Countries[116].Slug,TotalConfirmed: val.Countries[116].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="MA" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[116].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[117].NewRecovered,NewDeaths: val.Countries[117].NewDeaths,Country: val.Countries[117].Country,CountryCode: val.Countries[117].CountryCode,Date: val.Countries[117].Date,NewConfirmed: val.Countries[117].NewConfirmed,TotalDeaths: val.Countries[117].TotalDeaths,TotalRecovered: val.Countries[117].TotalRecovered,Slug: val.Countries[117].Slug,TotalConfirmed: val.Countries[117].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="MZ" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[117].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[118].NewRecovered,NewDeaths: val.Countries[118].NewDeaths,Country: val.Countries[118].Country,CountryCode: val.Countries[118].CountryCode,Date: val.Countries[118].Date,NewConfirmed: val.Countries[118].NewConfirmed,TotalDeaths: val.Countries[118].TotalDeaths,TotalRecovered: val.Countries[118].TotalRecovered,Slug: val.Countries[118].Slug,TotalConfirmed: val.Countries[118].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="MM" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[118].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[119].NewRecovered,NewDeaths: val.Countries[119].NewDeaths,Country: val.Countries[119].Country,CountryCode: val.Countries[119].CountryCode,Date: val.Countries[119].Date,NewConfirmed: val.Countries[119].NewConfirmed,TotalDeaths: val.Countries[119].TotalDeaths,TotalRecovered: val.Countries[119].TotalRecovered,Slug: val.Countries[119].Slug,TotalConfirmed: val.Countries[119].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="NA" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[119].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[120].NewRecovered,NewDeaths: val.Countries[120].NewDeaths,Country: val.Countries[120].Country,CountryCode: val.Countries[120].CountryCode,Date: val.Countries[120].Date,NewConfirmed: val.Countries[120].NewConfirmed,TotalDeaths: val.Countries[120].TotalDeaths,TotalRecovered: val.Countries[120].TotalRecovered,Slug: val.Countries[120].Slug,TotalConfirmed: val.Countries[120].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="NP" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[120].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[121].NewRecovered,NewDeaths: val.Countries[121].NewDeaths,Country: val.Countries[121].Country,CountryCode: val.Countries[121].CountryCode,Date: val.Countries[121].Date,NewConfirmed: val.Countries[121].NewConfirmed,TotalDeaths: val.Countries[121].TotalDeaths,TotalRecovered: val.Countries[121].TotalRecovered,Slug: val.Countries[121].Slug,TotalConfirmed: val.Countries[121].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="NL" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[121].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[122].NewRecovered,NewDeaths: val.Countries[122].NewDeaths,Country: val.Countries[122].Country,CountryCode: val.Countries[122].CountryCode,Date: val.Countries[122].Date,NewConfirmed: val.Countries[122].NewConfirmed,TotalDeaths: val.Countries[122].TotalDeaths,TotalRecovered: val.Countries[122].TotalRecovered,Slug: val.Countries[122].Slug,TotalConfirmed: val.Countries[122].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="NZ" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[122].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[123].NewRecovered,NewDeaths: val.Countries[123].NewDeaths,Country: val.Countries[123].Country,CountryCode: val.Countries[123].CountryCode,Date: val.Countries[123].Date,NewConfirmed: val.Countries[123].NewConfirmed,TotalDeaths: val.Countries[123].TotalDeaths,TotalRecovered: val.Countries[123].TotalRecovered,Slug: val.Countries[123].Slug,TotalConfirmed: val.Countries[123].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="NI" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[123].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[124].NewRecovered,NewDeaths: val.Countries[124].NewDeaths,Country: val.Countries[124].Country,CountryCode: val.Countries[124].CountryCode,Date: val.Countries[124].Date,NewConfirmed: val.Countries[124].NewConfirmed,TotalDeaths: val.Countries[124].TotalDeaths,TotalRecovered: val.Countries[124].TotalRecovered,Slug: val.Countries[124].Slug,TotalConfirmed: val.Countries[124].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="NE" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[124].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[125].NewRecovered,NewDeaths: val.Countries[125].NewDeaths,Country: val.Countries[125].Country,CountryCode: val.Countries[125].CountryCode,Date: val.Countries[125].Date,NewConfirmed: val.Countries[125].NewConfirmed,TotalDeaths: val.Countries[125].TotalDeaths,TotalRecovered: val.Countries[125].TotalRecovered,Slug: val.Countries[125].Slug,TotalConfirmed: val.Countries[125].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="NG" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[125].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[126].NewRecovered,NewDeaths: val.Countries[126].NewDeaths,Country: val.Countries[126].Country,CountryCode: val.Countries[126].CountryCode,Date: val.Countries[126].Date,NewConfirmed: val.Countries[126].NewConfirmed,TotalDeaths: val.Countries[126].TotalDeaths,TotalRecovered: val.Countries[126].TotalRecovered,Slug: val.Countries[126].Slug,TotalConfirmed: val.Countries[126].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="NO" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[126].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[127].NewRecovered,NewDeaths: val.Countries[127].NewDeaths,Country: val.Countries[127].Country,CountryCode: val.Countries[127].CountryCode,Date: val.Countries[127].Date,NewConfirmed: val.Countries[127].NewConfirmed,TotalDeaths: val.Countries[127].TotalDeaths,TotalRecovered: val.Countries[127].TotalRecovered,Slug: val.Countries[127].Slug,TotalConfirmed: val.Countries[127].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="OM" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[127].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[128].NewRecovered,NewDeaths: val.Countries[128].NewDeaths,Country: val.Countries[128].Country,CountryCode: val.Countries[128].CountryCode,Date: val.Countries[128].Date,NewConfirmed: val.Countries[128].NewConfirmed,TotalDeaths: val.Countries[128].TotalDeaths,TotalRecovered: val.Countries[128].TotalRecovered,Slug: val.Countries[128].Slug,TotalConfirmed: val.Countries[128].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="PK" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[128].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[129].NewRecovered,NewDeaths: val.Countries[129].NewDeaths,Country: val.Countries[129].Country,CountryCode: val.Countries[129].CountryCode,Date: val.Countries[129].Date,NewConfirmed: val.Countries[129].NewConfirmed,TotalDeaths: val.Countries[129].TotalDeaths,TotalRecovered: val.Countries[129].TotalRecovered,Slug: val.Countries[129].Slug,TotalConfirmed: val.Countries[129].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="PS" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[129].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[130].NewRecovered,NewDeaths: val.Countries[130].NewDeaths,Country: val.Countries[130].Country,CountryCode: val.Countries[130].CountryCode,Date: val.Countries[130].Date,NewConfirmed: val.Countries[130].NewConfirmed,TotalDeaths: val.Countries[130].TotalDeaths,TotalRecovered: val.Countries[130].TotalRecovered,Slug: val.Countries[130].Slug,TotalConfirmed: val.Countries[130].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="PA" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[130].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[131].NewRecovered,NewDeaths: val.Countries[131].NewDeaths,Country: val.Countries[131].Country,CountryCode: val.Countries[131].CountryCode,Date: val.Countries[131].Date,NewConfirmed: val.Countries[131].NewConfirmed,TotalDeaths: val.Countries[131].TotalDeaths,TotalRecovered: val.Countries[131].TotalRecovered,Slug: val.Countries[131].Slug,TotalConfirmed: val.Countries[131].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="PG" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[131].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[132].NewRecovered,NewDeaths: val.Countries[132].NewDeaths,Country: val.Countries[132].Country,CountryCode: val.Countries[132].CountryCode,Date: val.Countries[132].Date,NewConfirmed: val.Countries[132].NewConfirmed,TotalDeaths: val.Countries[132].TotalDeaths,TotalRecovered: val.Countries[132].TotalRecovered,Slug: val.Countries[132].Slug,TotalConfirmed: val.Countries[132].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="PY" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[132].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[133].NewRecovered,NewDeaths: val.Countries[133].NewDeaths,Country: val.Countries[133].Country,CountryCode: val.Countries[133].CountryCode,Date: val.Countries[133].Date,NewConfirmed: val.Countries[133].NewConfirmed,TotalDeaths: val.Countries[133].TotalDeaths,TotalRecovered: val.Countries[133].TotalRecovered,Slug: val.Countries[133].Slug,TotalConfirmed: val.Countries[133].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="PE" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[133].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[134].NewRecovered,NewDeaths: val.Countries[134].NewDeaths,Country: val.Countries[134].Country,CountryCode: val.Countries[134].CountryCode,Date: val.Countries[134].Date,NewConfirmed: val.Countries[134].NewConfirmed,TotalDeaths: val.Countries[134].TotalDeaths,TotalRecovered: val.Countries[134].TotalRecovered,Slug: val.Countries[134].Slug,TotalConfirmed: val.Countries[134].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="PH" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[134].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[135].NewRecovered,NewDeaths: val.Countries[135].NewDeaths,Country: val.Countries[135].Country,CountryCode: val.Countries[135].CountryCode,Date: val.Countries[135].Date,NewConfirmed: val.Countries[135].NewConfirmed,TotalDeaths: val.Countries[135].TotalDeaths,TotalRecovered: val.Countries[135].TotalRecovered,Slug: val.Countries[135].Slug,TotalConfirmed: val.Countries[135].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="PL" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[135].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[136].NewRecovered,NewDeaths: val.Countries[136].NewDeaths,Country: val.Countries[136].Country,CountryCode: val.Countries[136].CountryCode,Date: val.Countries[136].Date,NewConfirmed: val.Countries[136].NewConfirmed,TotalDeaths: val.Countries[136].TotalDeaths,TotalRecovered: val.Countries[136].TotalRecovered,Slug: val.Countries[136].Slug,TotalConfirmed: val.Countries[136].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="PT" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[136].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[137].NewRecovered,NewDeaths: val.Countries[137].NewDeaths,Country: val.Countries[137].Country,CountryCode: val.Countries[137].CountryCode,Date: val.Countries[137].Date,NewConfirmed: val.Countries[137].NewConfirmed,TotalDeaths: val.Countries[137].TotalDeaths,TotalRecovered: val.Countries[137].TotalRecovered,Slug: val.Countries[137].Slug,TotalConfirmed: val.Countries[137].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="QA" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[137].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[138].NewRecovered,NewDeaths: val.Countries[138].NewDeaths,Country: val.Countries[138].Country,CountryCode: val.Countries[138].CountryCode,Date: val.Countries[138].Date,NewConfirmed: val.Countries[138].NewConfirmed,TotalDeaths: val.Countries[138].TotalDeaths,TotalRecovered: val.Countries[138].TotalRecovered,Slug: val.Countries[138].Slug,TotalConfirmed: val.Countries[138].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="XK" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[138].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[139].NewRecovered,NewDeaths: val.Countries[139].NewDeaths,Country: val.Countries[139].Country,CountryCode: val.Countries[139].CountryCode,Date: val.Countries[139].Date,NewConfirmed: val.Countries[139].NewConfirmed,TotalDeaths: val.Countries[139].TotalDeaths,TotalRecovered: val.Countries[139].TotalRecovered,Slug: val.Countries[139].Slug,TotalConfirmed: val.Countries[139].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="RO" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[139].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[140].NewRecovered,NewDeaths: val.Countries[140].NewDeaths,Country: val.Countries[140].Country,CountryCode: val.Countries[140].CountryCode,Date: val.Countries[140].Date,NewConfirmed: val.Countries[140].NewConfirmed,TotalDeaths: val.Countries[140].TotalDeaths,TotalRecovered: val.Countries[140].TotalRecovered,Slug: val.Countries[140].Slug,TotalConfirmed: val.Countries[140].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="RU" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[140].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[141].NewRecovered,NewDeaths: val.Countries[141].NewDeaths,Country: val.Countries[141].Country,CountryCode: val.Countries[141].CountryCode,Date: val.Countries[141].Date,NewConfirmed: val.Countries[141].NewConfirmed,TotalDeaths: val.Countries[141].TotalDeaths,TotalRecovered: val.Countries[141].TotalRecovered,Slug: val.Countries[141].Slug,TotalConfirmed: val.Countries[141].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="RW" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[141].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[142].NewRecovered,NewDeaths: val.Countries[142].NewDeaths,Country: val.Countries[142].Country,CountryCode: val.Countries[142].CountryCode,Date: val.Countries[142].Date,NewConfirmed: val.Countries[142].NewConfirmed,TotalDeaths: val.Countries[142].TotalDeaths,TotalRecovered: val.Countries[142].TotalRecovered,Slug: val.Countries[142].Slug,TotalConfirmed: val.Countries[142].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="RE" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[142].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[143].NewRecovered,NewDeaths: val.Countries[143].NewDeaths,Country: val.Countries[143].Country,CountryCode: val.Countries[143].CountryCode,Date: val.Countries[143].Date,NewConfirmed: val.Countries[143].NewConfirmed,TotalDeaths: val.Countries[143].TotalDeaths,TotalRecovered: val.Countries[143].TotalRecovered,Slug: val.Countries[143].Slug,TotalConfirmed: val.Countries[143].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="KN" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[143].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[144].NewRecovered,NewDeaths: val.Countries[144].NewDeaths,Country: val.Countries[144].Country,CountryCode: val.Countries[144].CountryCode,Date: val.Countries[144].Date,NewConfirmed: val.Countries[144].NewConfirmed,TotalDeaths: val.Countries[144].TotalDeaths,TotalRecovered: val.Countries[144].TotalRecovered,Slug: val.Countries[144].Slug,TotalConfirmed: val.Countries[144].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="LC" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[144].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[145].NewRecovered,NewDeaths: val.Countries[145].NewDeaths,Country: val.Countries[145].Country,CountryCode: val.Countries[145].CountryCode,Date: val.Countries[145].Date,NewConfirmed: val.Countries[145].NewConfirmed,TotalDeaths: val.Countries[145].TotalDeaths,TotalRecovered: val.Countries[145].TotalRecovered,Slug: val.Countries[145].Slug,TotalConfirmed: val.Countries[145].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="VC" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[145].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[146].NewRecovered,NewDeaths: val.Countries[146].NewDeaths,Country: val.Countries[146].Country,CountryCode: val.Countries[146].CountryCode,Date: val.Countries[146].Date,NewConfirmed: val.Countries[146].NewConfirmed,TotalDeaths: val.Countries[146].TotalDeaths,TotalRecovered: val.Countries[146].TotalRecovered,Slug: val.Countries[146].Slug,TotalConfirmed: val.Countries[146].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="SM" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[146].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[147].NewRecovered,NewDeaths: val.Countries[147].NewDeaths,Country: val.Countries[147].Country,CountryCode: val.Countries[147].CountryCode,Date: val.Countries[147].Date,NewConfirmed: val.Countries[147].NewConfirmed,TotalDeaths: val.Countries[147].TotalDeaths,TotalRecovered: val.Countries[147].TotalRecovered,Slug: val.Countries[147].Slug,TotalConfirmed: val.Countries[147].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="ST" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[147].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[148].NewRecovered,NewDeaths: val.Countries[148].NewDeaths,Country: val.Countries[148].Country,CountryCode: val.Countries[148].CountryCode,Date: val.Countries[148].Date,NewConfirmed: val.Countries[148].NewConfirmed,TotalDeaths: val.Countries[148].TotalDeaths,TotalRecovered: val.Countries[148].TotalRecovered,Slug: val.Countries[148].Slug,TotalConfirmed: val.Countries[148].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="SA" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[148].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[149].NewRecovered,NewDeaths: val.Countries[149].NewDeaths,Country: val.Countries[149].Country,CountryCode: val.Countries[149].CountryCode,Date: val.Countries[149].Date,NewConfirmed: val.Countries[149].NewConfirmed,TotalDeaths: val.Countries[149].TotalDeaths,TotalRecovered: val.Countries[149].TotalRecovered,Slug: val.Countries[149].Slug,TotalConfirmed: val.Countries[149].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="SN" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[149].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[150].NewRecovered,NewDeaths: val.Countries[150].NewDeaths,Country: val.Countries[150].Country,CountryCode: val.Countries[150].CountryCode,Date: val.Countries[150].Date,NewConfirmed: val.Countries[150].NewConfirmed,TotalDeaths: val.Countries[150].TotalDeaths,TotalRecovered: val.Countries[150].TotalRecovered,Slug: val.Countries[150].Slug,TotalConfirmed: val.Countries[150].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="RS" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[150].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[151].NewRecovered,NewDeaths: val.Countries[151].NewDeaths,Country: val.Countries[151].Country,CountryCode: val.Countries[151].CountryCode,Date: val.Countries[151].Date,NewConfirmed: val.Countries[151].NewConfirmed,TotalDeaths: val.Countries[151].TotalDeaths,TotalRecovered: val.Countries[151].TotalRecovered,Slug: val.Countries[151].Slug,TotalConfirmed: val.Countries[151].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="SC" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[151].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[152].NewRecovered,NewDeaths: val.Countries[152].NewDeaths,Country: val.Countries[152].Country,CountryCode: val.Countries[152].CountryCode,Date: val.Countries[152].Date,NewConfirmed: val.Countries[152].NewConfirmed,TotalDeaths: val.Countries[152].TotalDeaths,TotalRecovered: val.Countries[152].TotalRecovered,Slug: val.Countries[152].Slug,TotalConfirmed: val.Countries[152].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="SL" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[152].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[153].NewRecovered,NewDeaths: val.Countries[153].NewDeaths,Country: val.Countries[153].Country,CountryCode: val.Countries[153].CountryCode,Date: val.Countries[153].Date,NewConfirmed: val.Countries[153].NewConfirmed,TotalConfirmed: val.Countries[153].TotalConfirmed,TotalDeaths: val.Countries[153].TotalDeaths,TotalRecovered: val.Countries[153].TotalRecovered,Slug: val.Countries[153].Slug})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="SG" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[153].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[154].NewRecovered,NewDeaths: val.Countries[154].NewDeaths,Country: val.Countries[154].Country,CountryCode: val.Countries[154].CountryCode,Date: val.Countries[154].Date,NewConfirmed: val.Countries[154].NewConfirmed,TotalDeaths: val.Countries[154].TotalDeaths,TotalRecovered: val.Countries[154].TotalRecovered,Slug: val.Countries[154].Slug,TotalConfirmed: val.Countries[154].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="SK" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[154].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[155].NewRecovered,NewDeaths: val.Countries[155].NewDeaths,Country: val.Countries[155].Country,CountryCode: val.Countries[155].CountryCode,Date: val.Countries[155].Date,NewConfirmed: val.Countries[155].NewConfirmed,TotalDeaths: val.Countries[155].TotalDeaths,TotalRecovered: val.Countries[155].TotalRecovered,Slug: val.Countries[155].Slug,TotalConfirmed: val.Countries[155].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="SI" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[155].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[156].NewRecovered,NewDeaths: val.Countries[156].NewDeaths,Country: val.Countries[156].Country,CountryCode: val.Countries[156].CountryCode,Date: val.Countries[156].Date,NewConfirmed: val.Countries[156].NewConfirmed,TotalDeaths: val.Countries[156].TotalDeaths,TotalRecovered: val.Countries[156].TotalRecovered,Slug: val.Countries[156].Slug,TotalConfirmed: val.Countries[156].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="SB" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[156].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[157].NewRecovered,NewDeaths: val.Countries[157].NewDeaths,Country: val.Countries[157].Country,CountryCode: val.Countries[157].CountryCode,Date: val.Countries[157].Date,NewConfirmed: val.Countries[157].NewConfirmed,TotalDeaths: val.Countries[157].TotalDeaths,TotalRecovered: val.Countries[157].TotalRecovered,Slug: val.Countries[157].Slug,TotalConfirmed: val.Countries[157].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="SO" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[157].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[158].NewRecovered,NewDeaths: val.Countries[158].NewDeaths,Country: val.Countries[158].Country,CountryCode: val.Countries[158].CountryCode,Date: val.Countries[158].Date,NewConfirmed: val.Countries[158].NewConfirmed,TotalDeaths: val.Countries[158].TotalDeaths,TotalRecovered: val.Countries[158].TotalRecovered,Slug: val.Countries[158].Slug,TotalConfirmed: val.Countries[158].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="ZA" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[158].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[159].NewRecovered,NewDeaths: val.Countries[159].NewDeaths,Country: val.Countries[159].Country,CountryCode: val.Countries[159].CountryCode,Date: val.Countries[159].Date,NewConfirmed: val.Countries[159].NewConfirmed,TotalDeaths: val.Countries[159].TotalDeaths,TotalRecovered: val.Countries[159].TotalRecovered,Slug: val.Countries[159].Slug,TotalConfirmed: val.Countries[159].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="SS" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[159].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[160].NewRecovered,NewDeaths: val.Countries[160].NewDeaths,Country: val.Countries[160].Country,CountryCode: val.Countries[160].CountryCode,Date: val.Countries[160].Date,NewConfirmed: val.Countries[160].NewConfirmed,TotalDeaths: val.Countries[160].TotalDeaths,TotalRecovered: val.Countries[160].TotalRecovered,Slug: val.Countries[160].Slug,TotalConfirmed: val.Countries[160].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="ES" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[160].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[161].NewRecovered,NewDeaths: val.Countries[161].NewDeaths,Country: val.Countries[161].Country,CountryCode: val.Countries[161].CountryCode,Date: val.Countries[161].Date,NewConfirmed: val.Countries[161].NewConfirmed,TotalDeaths: val.Countries[161].TotalDeaths,TotalRecovered: val.Countries[161].TotalRecovered,Slug: val.Countries[161].Slug,TotalConfirmed: val.Countries[161].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="LK" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[161].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[162].NewRecovered,NewDeaths: val.Countries[162].NewDeaths,Country: val.Countries[162].Country,CountryCode: val.Countries[162].CountryCode,Date: val.Countries[162].Date,NewConfirmed: val.Countries[162].NewConfirmed,TotalDeaths: val.Countries[162].TotalDeaths,TotalRecovered: val.Countries[162].TotalRecovered,Slug: val.Countries[162].Slug,TotalConfirmed: val.Countries[162].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="SD" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[162].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[163].NewRecovered,NewDeaths: val.Countries[163].NewDeaths,Country: val.Countries[163].Country,CountryCode: val.Countries[163].CountryCode,Date: val.Countries[163].Date,NewConfirmed: val.Countries[163].NewConfirmed,TotalDeaths: val.Countries[163].TotalDeaths,TotalRecovered: val.Countries[163].TotalRecovered,Slug: val.Countries[163].Slug,TotalConfirmed: val.Countries[163].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="SR" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[163].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[164].NewRecovered,NewDeaths: val.Countries[164].NewDeaths,Country: val.Countries[164].Country,CountryCode: val.Countries[164].CountryCode,Date: val.Countries[164].Date,NewConfirmed: val.Countries[164].NewConfirmed,TotalDeaths: val.Countries[164].TotalDeaths,TotalRecovered: val.Countries[164].TotalRecovered,Slug: val.Countries[164].Slug,TotalConfirmed: val.Countries[164].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="SZ" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[164].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[165].NewRecovered,NewDeaths: val.Countries[165].NewDeaths,Country: val.Countries[165].Country,CountryCode: val.Countries[165].CountryCode,Date: val.Countries[165].Date,NewConfirmed: val.Countries[165].NewConfirmed,TotalDeaths: val.Countries[165].TotalDeaths,TotalRecovered: val.Countries[165].TotalRecovered,Slug: val.Countries[165].Slug,TotalConfirmed: val.Countries[165].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="SE" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[165].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[166].NewRecovered,NewDeaths: val.Countries[166].NewDeaths,Country: val.Countries[166].Country,CountryCode: val.Countries[166].CountryCode,Date: val.Countries[166].Date,NewConfirmed: val.Countries[166].NewConfirmed,TotalDeaths: val.Countries[166].TotalDeaths,TotalRecovered: val.Countries[166].TotalRecovered,Slug: val.Countries[166].Slug,TotalConfirmed: val.Countries[166].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="CH" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[166].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[167].NewRecovered,NewDeaths: val.Countries[167].NewDeaths,Country: val.Countries[167].Country,CountryCode: val.Countries[167].CountryCode,Date: val.Countries[167].Date,NewConfirmed: val.Countries[167].NewConfirmed,TotalDeaths: val.Countries[167].TotalDeaths,TotalRecovered: val.Countries[167].TotalRecovered,Slug: val.Countries[167].Slug,TotalConfirmed: val.Countries[167].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="SY" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[167].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[168].NewRecovered,NewDeaths: val.Countries[168].NewDeaths,Country: val.Countries[168].Country,CountryCode: val.Countries[168].CountryCode,Date: val.Countries[168].Date,NewConfirmed: val.Countries[168].NewConfirmed,TotalDeaths: val.Countries[168].TotalDeaths,TotalRecovered: val.Countries[168].TotalRecovered,Slug: val.Countries[168].Slug,TotalConfirmed: val.Countries[168].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="TW" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[168].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[169].NewRecovered,NewDeaths: val.Countries[169].NewDeaths,Country: val.Countries[169].Country,CountryCode: val.Countries[169].CountryCode,Date: val.Countries[169].Date,NewConfirmed: val.Countries[169].NewConfirmed,TotalDeaths: val.Countries[169].TotalDeaths,TotalRecovered: val.Countries[169].TotalRecovered,Slug: val.Countries[169].Slug,TotalConfirmed: val.Countries[169].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="TJ" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[169].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[170].NewRecovered,NewDeaths: val.Countries[170].NewDeaths,Country: val.Countries[170].Country,CountryCode: val.Countries[170].CountryCode,Date: val.Countries[170].Date,NewConfirmed: val.Countries[170].NewConfirmed,TotalDeaths: val.Countries[170].TotalDeaths,TotalRecovered: val.Countries[170].TotalRecovered,Slug: val.Countries[170].Slug,TotalConfirmed: val.Countries[170].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="TZ" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[170].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[171].NewRecovered,NewDeaths: val.Countries[171].NewDeaths,Country: val.Countries[171].Country,CountryCode: val.Countries[171].CountryCode,Date: val.Countries[171].Date,NewConfirmed: val.Countries[171].NewConfirmed,TotalDeaths: val.Countries[171].TotalDeaths,TotalRecovered: val.Countries[171].TotalRecovered,Slug: val.Countries[171].Slug,TotalConfirmed: val.Countries[171].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="TH" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[171].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[172].NewRecovered,NewDeaths: val.Countries[172].NewDeaths,Country: val.Countries[172].Country,CountryCode: val.Countries[172].CountryCode,Date: val.Countries[172].Date,NewConfirmed: val.Countries[172].NewConfirmed,TotalDeaths: val.Countries[172].TotalDeaths,TotalRecovered: val.Countries[172].TotalRecovered,Slug: val.Countries[172].Slug,TotalConfirmed: val.Countries[172].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="TL" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[172].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[173].NewRecovered,NewDeaths: val.Countries[173].NewDeaths,Country: val.Countries[173].Country,CountryCode: val.Countries[173].CountryCode,Date: val.Countries[173].Date,NewConfirmed: val.Countries[173].NewConfirmed,TotalDeaths: val.Countries[173].TotalDeaths,TotalRecovered: val.Countries[173].TotalRecovered,Slug: val.Countries[173].Slug,TotalConfirmed: val.Countries[173].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="TG" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[173].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[174].NewRecovered,NewDeaths: val.Countries[174].NewDeaths,Country: val.Countries[174].Country,CountryCode: val.Countries[174].CountryCode,Date: val.Countries[174].Date,NewConfirmed: val.Countries[174].NewConfirmed,TotalDeaths: val.Countries[174].TotalDeaths,TotalRecovered: val.Countries[174].TotalRecovered,Slug: val.Countries[174].Slug,TotalConfirmed: val.Countries[174].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="TT" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[174].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[175].NewRecovered,NewDeaths: val.Countries[175].NewDeaths,Country: val.Countries[175].Country,CountryCode: val.Countries[175].CountryCode,Date: val.Countries[175].Date,NewConfirmed: val.Countries[175].NewConfirmed,TotalDeaths: val.Countries[175].TotalDeaths,TotalRecovered: val.Countries[175].TotalRecovered,Slug: val.Countries[175].Slug,TotalConfirmed: val.Countries[175].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="TN" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[175].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[176].NewRecovered,NewDeaths: val.Countries[176].NewDeaths,Country: val.Countries[176].Country,CountryCode: val.Countries[176].CountryCode,Date: val.Countries[176].Date,NewConfirmed: val.Countries[176].NewConfirmed,TotalDeaths: val.Countries[176].TotalDeaths,TotalRecovered: val.Countries[176].TotalRecovered,Slug: val.Countries[176].Slug,TotalConfirmed: val.Countries[176].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="TR" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[176].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[177].NewRecovered,NewDeaths: val.Countries[177].NewDeaths,Country: val.Countries[177].Country,CountryCode: val.Countries[177].CountryCode,Date: val.Countries[177].Date,NewConfirmed: val.Countries[177].NewConfirmed,TotalDeaths: val.Countries[177].TotalDeaths,TotalRecovered: val.Countries[177].TotalRecovered,Slug: val.Countries[177].Slug,TotalConfirmed: val.Countries[177].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="UG" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[177].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[178].NewRecovered,NewDeaths: val.Countries[178].NewDeaths,Country: val.Countries[178].Country,CountryCode: val.Countries[178].CountryCode,Date: val.Countries[178].Date,NewConfirmed: val.Countries[178].NewConfirmed,TotalDeaths: val.Countries[178].TotalDeaths,TotalRecovered: val.Countries[178].TotalRecovered,Slug: val.Countries[178].Slug,TotalConfirmed: val.Countries[178].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="UA" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[178].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[179].NewRecovered,NewDeaths: val.Countries[179].NewDeaths,Country: val.Countries[179].Country,CountryCode: val.Countries[179].CountryCode,Date: val.Countries[179].Date,NewConfirmed: val.Countries[179].NewConfirmed,TotalDeaths: val.Countries[179].TotalDeaths,TotalRecovered: val.Countries[179].TotalRecovered,Slug: val.Countries[179].Slug,TotalConfirmed: val.Countries[179].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="AE" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[179].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[180].NewRecovered,NewDeaths: val.Countries[180].NewDeaths,Country: val.Countries[180].Country,CountryCode: val.Countries[180].CountryCode,Date: val.Countries[180].Date,NewConfirmed: val.Countries[180].NewConfirmed,TotalDeaths: val.Countries[180].TotalDeaths,TotalRecovered: val.Countries[180].TotalRecovered,Slug: val.Countries[180].Slug,TotalConfirmed: val.Countries[180].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="GB" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[180].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[181].NewRecovered,NewDeaths: val.Countries[181].NewDeaths,Country: val.Countries[181].Country,CountryCode: val.Countries[181].CountryCode,Date: val.Countries[181].Date,NewConfirmed: val.Countries[181].NewConfirmed,TotalDeaths: val.Countries[181].TotalDeaths,TotalRecovered: val.Countries[181].TotalRecovered,Slug: val.Countries[181].Slug,TotalConfirmed: val.Countries[181].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="US" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[181].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[182].NewRecovered,NewDeaths: val.Countries[182].NewDeaths,Country: val.Countries[182].Country,CountryCode: val.Countries[182].CountryCode,Date: val.Countries[182].Date,NewConfirmed: val.Countries[182].NewConfirmed,TotalDeaths: val.Countries[182].TotalDeaths,TotalRecovered: val.Countries[182].TotalRecovered,Slug: val.Countries[182].Slug,TotalConfirmed: val.Countries[182].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="UY" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[182].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[183].NewRecovered,NewDeaths: val.Countries[183].NewDeaths,Country: val.Countries[183].Country,CountryCode: val.Countries[183].CountryCode,Date: val.Countries[183].Date,NewConfirmed: val.Countries[183].NewConfirmed,TotalDeaths: val.Countries[183].TotalDeaths,TotalRecovered: val.Countries[183].TotalRecovered,Slug: val.Countries[183].Slug,TotalConfirmed: val.Countries[183].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="UZ" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[183].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[184].NewRecovered,NewDeaths: val.Countries[184].NewDeaths,Country: val.Countries[184].Country,CountryCode: val.Countries[184].CountryCode,Date: val.Countries[184].Date,NewConfirmed: val.Countries[184].NewConfirmed,TotalDeaths: val.Countries[184].TotalDeaths,TotalRecovered: val.Countries[184].TotalRecovered,Slug: val.Countries[184].Slug,TotalConfirmed: val.Countries[184].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}} >
                                   <Flag size={24} code="VU" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[184].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>
                                   <Text></Text>
                                   <TouchableOpacity  onPress={() => this.props.navigation.navigate('detailScreen',{NewRecovered: val.Countries[185].NewRecovered,NewDeaths: val.Countries[185].NewDeaths,Country: val.Countries[185].Country,CountryCode: val.Countries[185].CountryCode,Date: val.Countries[185].Date,NewConfirmed: val.Countries[185].NewConfirmed,TotalDeaths: val.Countries[185].TotalDeaths,TotalRecovered: val.Countries[185].TotalRecovered,Slug: val.Countries[185].Slug,TotalConfirmed: val.Countries[185].TotalConfirmed})}>
                                   <Surface style={{ padding: 5, height: 60, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginBottom: 20}} >
                                   <Flag size={24} code="VE" style={{marginRight: 10}}/>
                                   <Text style={{color: '#4847c1', fontSize: 17, fontWeight: 'bold'}}>{val.Countries[185].Country}</Text>
                                   </Surface>
                                   </TouchableOpacity>  
                                   </View>
                                   
                             )}
                     )
                              
 return(
   <View style={{flex: 1}}>  
  <ScrollView style={{marginTop: 10}}>
  <View style={{flex: 1, backgroundColor: '#abbaab', height: 300, width: windowwidth, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('../assets/animation3.gif')} style={{height: 220, width: 220}} />
              <Text style={{color: '#fff', fontSize: 20, marginTop: 5, fontWeight: 'bold'}}>Follow Social Distancing!</Text>
            </View>
    {covid}
  </ScrollView>
  </View>
         )
      }
    }
  }
