import React from 'react'
import {createAppContainer, createSwitchNavigator, createStackNavigator} from 'react-navigation'
import {LinearGradient} from 'expo-linear-gradient'
import {HomeScreen} from './screens/HomeScreen'
import {secondScreen} from './screens/secondscreen'
import {mainScreen} from './screens/mainscreen'
import {detailScreen} from './screens/detailScreen'
import {zoneScreen} from './screens/zoneScreen'
import {AboutScreen} from './screens/AboutScreen'


const AppSwitchContainer = createSwitchNavigator({
    HomeScreen
})

const AppStackContainer = createStackNavigator({
    AppSwitchContainer: {
        screen: AppSwitchContainer,
         navigationOptions: {
            headerBackground: (
             <LinearGradient  
              colors={['#da22ff', '#9733ee']}
              style={{flex: 1}}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}/>
            )
           }
     },
     secondScreen: {
        screen: secondScreen,
         navigationOptions: {
            headerBackground: (
             <LinearGradient  
              colors={['#536976', '#292e49']}
              style={{flex: 1}}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}/>
            )
           }
     },
     mainScreen: {
      screen: mainScreen,
       navigationOptions: {
          headerBackground: (
           <LinearGradient  
            colors={['#536976', '#292e49']}
            style={{flex: 1}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}/>
          )
         }
   },
     detailScreen: {
      screen: detailScreen,
       navigationOptions: {
          headerBackground: (
           <LinearGradient  
            colors={['#536976', '#292e49']}
            style={{flex: 1}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}/>
          )
       }
   },
   zoneScreen: {
      screen: zoneScreen,
       navigationOptions: {
          headerBackground: (
           <LinearGradient  
            colors={['#536976', '#292e49']}
            style={{flex: 1}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}/>
          )
       }
   },
   AboutScreen: {
      screen: AboutScreen,
       navigationOptions: {
          headerBackground: (
           <LinearGradient  
            colors={['#536976', '#292e49']}
            style={{flex: 1}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}/>
          )
       }
   }
})

const AppContainer = createAppContainer(AppStackContainer)

export default AppContainer;