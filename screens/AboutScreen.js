import React from 'react'
import {View, Text, ImageBackground, ScrollView, Image, Dimensions} from 'react-native'
import {Surface} from 'react-native-paper'

const windowwidth = Dimensions.get('window').width
const fever = {uri: 'https://cdn4.iconfinder.com/data/icons/medical-flat-19/128/avatar_people_patient_boy_fever_sick_illness-512.png'}
const shivering = {uri: 'https://i.pinimg.com/originals/c6/08/71/c608711429ac4f75ab731245d03ea681.jpg'}
const breathing = {uri: 'https://thumbs.dreamstime.com/b/coronavirus-symptoms-illustration-epidemic-information-concept-sick-person-displaying-one-covid-difficulty-breathing-isolated-177009783.jpg'}
const tired = {uri: 'https://image.freepik.com/free-vector/businessman-sad-tired-disappointed-concept-vector-flat-illustration_76775-17.jpg'}
const hands = {uri: 'https://previews.123rf.com/images/amin268/amin2682004/amin268200400010/144491503-washing-your-hands-20-seconds-line-icon-wash-and-hygiene-wash-your-hands-sign-vector-graphics-a-line.jpg'}
const mask = {uri: 'https://www.umc.edu/news/News_Articles/2019/03/Images/4B_Correct_Mask_usage.jpg'}
const sd = {uri: 'https://lscuinsight.lscu.coop/wp-content/uploads/2020/05/socialdistancing-1920x500.jpg'}
const alert = {uri: 'https://image.shutterstock.com/image-vector/2019ncov-symptoms-treatment-coronovirus-alert-600w-1660894369.jpg'}

export class AboutScreen extends React.Component{
    static navigationOptions = {
        title: 'About',
        headerTintColor: '#fff',
        headerTitleStyle: {
         fontWeight: 'bold',
         textAlign: 'center',
         alignSelf: 'center',
         width: '100%'
        },
        headerRight: <View></View>
      };

    render(){
        return(
            <View style={{flex: 1}}>
                <ScrollView style={{marginTop: 10}}>
                <View style={{flex: 1, backgroundColor: '#abbaab', height: 300, width: windowwidth, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/animation5.gif')} style={{height: 230, width: 230}} />
                <Text style={{color: '#fff', fontSize: 20, marginTop: 5, fontWeight: 'bold'}}>Protect Yourself!</Text>
                </View>
                <View style={{flex: 1, marginTop: 10, borderTopWidth: 1,borderTopColor: '#E6E6FA', marginLeft: 10, marginRight: 10}}>
                    <Text style={{marginTop: 20, marginLeft: 15, fontSize: 25, fontWeight: 'bold'}}>Symptoms</Text>
                 <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
                 <View>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 5, borderRadius: 15, alignItems: 'center'}}>
                        <ImageBackground source={fever} style={{height: 100, width: 100, alignItems: 'center'}} />
                            <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8, marginLeft: 39}}>Fever or Sweating</Text>
                    </Surface>
                    </View>
                    <View>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4, borderRadius: 15, alignItems: 'center'}}>
                        <ImageBackground source={shivering} style={{height: 100, width: 100}} />
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8, marginLeft: 39}}>Repeated Shivering</Text>
                    </Surface>
                    </View>
                </View>
                 <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, marginBottom: 10}}>
                 <View>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 5, borderRadius: 15, alignItems: 'center'}}>
                        <ImageBackground source={breathing} style={{height: 100, width: 100}} />
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8, marginLeft: 39}}>Difficulty Breathing</Text>
                    </Surface>
                    </View>
                    <View>  
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4, borderRadius: 15, alignItems: 'center'}}>
                        <ImageBackground source={tired} style={{height: 100, width: 100}} />
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8, marginLeft: 10}}>Tiredness</Text>
                    </Surface>
                    </View>
            </View>
            <Text style={{marginTop: 20, marginLeft: 15, fontSize: 25, fontWeight: 'bold'}}>Measures</Text>
                 <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
                 <View>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 5, borderRadius: 15, alignItems: 'center'}}>
                        <ImageBackground source={hands} style={{height: 100, width: 100, alignItems: 'center'}} />
                            <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8, marginLeft: 39}}>Wash your hands</Text>
                    </Surface>
                    </View>
                    <View>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4, borderRadius: 15, alignItems: 'center'}}>
                        <ImageBackground source={mask} style={{height: 100, width: 100}} />
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8, marginLeft: 10}}>Wear a Mask</Text>
                    </Surface>
                    </View>
                </View>
                 <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, marginBottom: 10}}>
                 <View>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 5, borderRadius: 15, alignItems: 'center'}}>
                        <ImageBackground source={sd} style={{height: 100, width: 150}} />
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8, marginLeft: 30}}>Follow Social Distancing</Text>
                    </Surface>
                    </View>
                    <View>  
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4, borderRadius: 15, alignItems: 'center', marginBottom: 20}}>
                        <ImageBackground source={alert} style={{height: 100, width: 100}} />
                        <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 8, marginLeft: 10}}>Symptoms Alert</Text>
                    </Surface>
                    </View>
            </View>                        
            </View>
            </ScrollView>
            </View>
        )
    }
}