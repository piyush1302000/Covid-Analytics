import React from 'react';
import {View, Text, ActivityIndicator, ScrollView, TouchableOpacity, Platform, Linking, Dimensions, Image} from 'react-native'
import {Surface} from 'react-native-paper'

const windowwidth = Dimensions.get('window').width
export class zoneScreen extends React.Component{
   static navigationOptions = {
      title: 'Helpline Numbers',
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

    fetch('https://api.rootnet.in/covid19-in/contacts')
    .then((response) => response.json())
    .then((responseJson) => { 
         this.setState({
           isloading: false,
           result: [responseJson]
         })
    })
    .catch(error => console.log(error))
 }

  makeCall = () => {
   let placeholder = '';
   if(Platform.OS === 'android'){
     placeholder = 'tel:(8662410978)';
   }else{
     placeholder = 'telprompt:(8662410978)';
   }

   Linking.openURL(placeholder);
 }

 makeCalla = () => {
  let placeholdera = '';
  if(Platform.OS === 'android'){
    placeholdera = 'tel:(9436055743)';
  }else{
    placeholdera = 'telprompt:(9436055743)';
  }

  Linking.openURL(placeholdera);
}

makeCallb = () => {
  let placeholderb = '';
  if(Platform.OS === 'android'){
    placeholderb = 'tel:(6913347770)';
  }else{
    placeholderb = 'telprompt:(6913347770)';
  }

  Linking.openURL(placeholderb);
}

makeCallc = () => {
  let placeholderc = '';
  if(Platform.OS === 'android'){
    placeholderc = 'tel:(104)';
  }else{
    placeholderc = 'telprompt:(104)';
  }

  Linking.openURL(placeholderc);
}

makeCalld = () => {
  let placeholderd = '';
  if(Platform.OS === 'android'){
    placeholderd = 'tel:(8558893911)';
  }else{
    placeholderd = 'telprompt:(8558893911)';
  }

  Linking.openURL(placeholderd);
}

makeCalle = () => {
  let placeholdere = '';
  if(Platform.OS === 'android'){
    placeholdere = 'tel:(4712552056)';
  }else{
    placeholdere = 'telprompt:(4712552056)';
  }

  Linking.openURL(placeholdere);
}

makeCallf = () => {
  let placeholderf = '';
  if(Platform.OS === 'android'){
    placeholderf = 'tel:(7552527177)';
  }else{
    placeholderf = 'telprompt:(7552527177)';
  }

  Linking.openURL(placeholderf);
}

makeCallg = () => {
  let placeholderg = '';
  if(Platform.OS === 'android'){
    placeholderg = 'tel:(2026127394)';
  }else{
    placeholderg = 'telprompt:(2026127394)';
  }

  Linking.openURL(placeholderg);
}

makeCallh = () => {
  let placeholderh = '';
  if(Platform.OS === 'android'){
    placeholderh = 'tel:(3852411668)';
  }else{
    placeholderh = 'telprompt:(3852411668)';
  }

  Linking.openURL(placeholderh);
}

makeCalli = () => {
  let placeholderi = '';
  if(Platform.OS === 'android'){
    placeholderi = 'tel:(108)';
  }else{
    placeholderi = 'telprompt:(108)';
  }

  Linking.openURL(placeholderi);
}

makeCallj = () => {
  let placeholderj = '';
  if(Platform.OS === 'android'){
    placeholderj = 'tel:(102)';
  }else{
    placeholderj = 'telprompt:(102)';
  }

  Linking.openURL(placeholderj);
}

makeCallk = () => {
  let placeholderk = '';
  if(Platform.OS === 'android'){
    placeholderk = 'tel:(7005539653)';
  }else{
    placeholderk = 'telprompt:(7005539653)';
  }

  Linking.openURL(placeholderk);
}

makeCalll = () => {
  let placeholderl = '';
  if(Platform.OS === 'android'){
    placeholderl = 'tel:(9439994859)';
  }else{
    placeholderl = 'telprompt:(9439994859)';
  }

  Linking.openURL(placeholderl);
}

makeCallm = () => {
  let placeholderm = '';
  if(Platform.OS === 'android'){
    placeholderm = 'tel:(1412225624)';
  }else{
    placeholderm = 'telprompt:(1412225624)';
  }

  Linking.openURL(placeholderm);
}

makeCalln = () => {
  let placeholdern = '';
  if(Platform.OS === 'android'){
    placeholdern = 'tel:(4429510500)';
  }else{
    placeholdern = 'telprompt:(4429510500)';
  }

  Linking.openURL(placeholdern);
}

makeCallo = () => {
  let placeholdero = '';
  if(Platform.OS === 'android'){
    placeholdero = 'tel:(3812315879)';
  }else{
    placeholdero = 'telprompt:(3812315879)';
  }

  Linking.openURL(placeholdero);
}

makeCallp = () => {
  let placeholderp = '';
  if(Platform.OS === 'android'){
    placeholderp = 'tel:(18001805145)';
  }else{
    placeholderp = 'telprompt:(18001805145)';
  }

  Linking.openURL(placeholderp);
}

makeCallq = () => {
  let placeholderq = '';
  if(Platform.OS === 'android'){
    placeholderq = 'tel:(1800313444222)';
  }else{
    placeholderq = 'telprompt:(1800313444222)';
  }

  Linking.openURL(placeholderq);
}

makeCallr = () => {
  let placeholderr = '';
  if(Platform.OS === 'android'){
    placeholderr = 'tel:(3192232102)';
  }else{
    placeholderr = 'telprompt:(3192232102)';
  }

  Linking.openURL(placeholderr);
}

makeCalls = () => {
  let placeholders = '';
  if(Platform.OS === 'android'){
    placeholders = 'tel:(9779558282)';
  }else{
    placeholders = 'telprompt:(9779558282)';
  }

  Linking.openURL(placeholders);
}


makeCallt = () => {
  let placeholdert = '';
  if(Platform.OS === 'android'){
    placeholdert = 'tel:(1122307145)';
  }else{
    placeholdert = 'telprompt:(1122307145)';
  }

  Linking.openURL(placeholdert);
}


makeCallu = () => {
  let placeholderu = '';
  if(Platform.OS === 'android'){
    placeholderu = 'tel:(1912520982)';
  }else{
    placeholderu = 'telprompt:(1912520982)';
  }

  Linking.openURL(placeholderu);
}

makeCallv = () => {
  let placeholderv = '';
  if(Platform.OS === 'android'){
    placeholderv = 'tel:(1982256462)';
  }else{
    placeholderv = 'telprompt:(1982256462)';
  }

  Linking.openURL(placeholderv);
}

   render(){
    if(this.state.isloading){
      return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#000000" />
          </View>
      )
  }else{
    const covid = this.state.result.map((val, key) => {
      return (
          <View key={key} style={{flex: 1, marginTop: 10, borderTopWidth: 1,borderTopColor: '#E6E6FA', marginLeft: 10, marginRight: 10, alignItems: 'center'}}>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[0].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[0].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCall}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[1].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[1].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCalla}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[2].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[2].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallb}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[3].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[3].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallc}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[4].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[4].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallc}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[5].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[5].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallc}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[6].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[6].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallc}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[7].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[7].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCalld}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[8].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[8].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallc}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[9].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[9].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallc}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[10].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[10].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallc}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[11].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[11].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCalle}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[12].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[12].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallf}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[13].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[13].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallg}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[14].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[14].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallh}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[15].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[15].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCalli}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[16].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[16].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallj}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[17].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[17].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallk}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[18].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[18].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCalll}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[19].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[19].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallc}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[20].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[20].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallm}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[21].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[21].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallc}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[22].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[22].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCalln}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[23].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[23].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallc}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[24].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[24].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallo}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[25].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[25].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallc}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[26].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[26].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallp}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 140, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[27].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[27].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallq}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[28].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[28].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallr}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[29].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[29].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCalls}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[30].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[30].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallc}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[31].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[31].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallc}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[32].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[32].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallt}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 140, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[33].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[33].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallu}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[34].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[34].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallv}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', marginBottom: 20}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[35].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[35].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallc}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
              <Surface style={{padding: 5, height: 120, width: windowwidth - 50, elevation: 5, borderRadius: 10, marginTop: 20, alignItems: 'center', marginBottom: 20}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4847c1', marginTop: 10}}>Region:- {val.data.contacts.regional[36].loc}</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 5}}>Helpline No:- {val.data.contacts.regional[36].number}</Text>
                <View style={{borderWidth: 1, borderColor: '#E6E6FA', width: windowwidth - 50, marginTop: 10}}></View>
                <TouchableOpacity onPress={this.makeCallc}>
                  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#00BFFF', marginTop: 5}}>Call Now</Text>
                </TouchableOpacity>
              </Surface>
          </View>
      )
      })

      return(
          <ScrollView style={{marginTop: 10}}>
            <View style={{flex: 1, backgroundColor: '#abbaab', height: 300, width: windowwidth, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('../assets/animation4.gif')} style={{height: 220, width: 220}} />
              <Text style={{color: '#fff', fontSize: 20, marginTop: 5, fontWeight: 'bold'}}>Call if you feel unhealthy!</Text>
            </View>
              {covid}
          </ScrollView>
      )
  }
}
}

