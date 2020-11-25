import React from 'react'
import {View, Text, Image, Dimensions, ScrollView, ImageBackground, TouchableOpacity} from 'react-native'
import {Surface} from 'react-native-paper'

const windowwidth = Dimensions.get('window').width
const globe = {uri: 'https://cdn.pixabay.com/photo/2017/07/10/10/02/globe-2489596_960_720.jpg'}
const india = {uri: 'https://i.pinimg.com/originals/fc/d0/91/fcd0919a125e21d9f775c2ba70a024ba.jpg'}
const call = {uri: 'https://play-lh.googleusercontent.com/1K9Ko931ri88nQQjTVhHPgEpd-HObnsA1DA5KULInT07L8HUb78yu2oZrMkgjtkfrlI'}
const covid = {uri: 'https://www.euro.who.int/__data/assets/image/0005/436640/coronavirus-COVID-19-WHO-Europe_250x.png'}

export class HomeScreen extends React.Component{


    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <Image source={require('../assets/animation1.gif')} style={{height: 275, width: windowwidth}} />
                    <Text style={{marginTop: 25, marginLeft: 20, fontSize: 25, fontWeight: 'bold'}}>We Project</Text>
                    <ScrollView style={{marginTop: 10}}>
                 <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                 <View>
                     <TouchableOpacity onPress={() => this.props.navigation.navigate('mainScreen')}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 5, borderRadius: 15}}>
                        <ImageBackground source={globe} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, marginTop: 10}}>World</Text>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('secondScreen')} >
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4, borderRadius: 15}}>
                        <ImageBackground source={india} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, marginTop: 10}}>India</Text>
                    </View>
                </View>
                 <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, marginBottom: 10}}>
                 <View>
                     <TouchableOpacity onPress={() => this.props.navigation.navigate('zoneScreen')}>
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 5, borderRadius: 15}}>
                        <ImageBackground source={call} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, marginTop: 10}}>Helplines</Text>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AboutScreen')}>   
                    <Surface style={{padding: 5, height: 160, width: 160, elevation: 4, borderRadius: 15}}>
                        <ImageBackground source={covid} style={{height: 150, width: 150}} />
                    </Surface>
                    </TouchableOpacity>
                    <Text style={{fontWeight: 'bold', fontSize: 22, marginTop: 10}}>About</Text>
                    </View>
            </View>            
            </ScrollView>
            </View>
            </View>
        )
    }
}