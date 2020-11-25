import React from 'react'
import {View, Image} from 'react-native'
import AppContainer from './AppNavigator'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            access: false
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({access: true})
        },4300);
    }
   
     render(){

       if(!this.state.access){
         return <MainView />;
    }
     return(
        <View style={{flex: 1}}>
                <AppContainer />
            </View>
     )}
   }
   
    class MainView extends React.Component{
   
      render() {
        return (
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('./assets/animation.gif')} style={{width: 300, height: 300}}/>
          </View>
        );
      }
    }
  