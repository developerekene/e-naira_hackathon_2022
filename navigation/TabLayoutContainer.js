
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import {StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './TablayoutScreens/HomeScreen';
import BuyScreen from './TablayoutScreens/BuyScreen';
import SwapScreen from './TablayoutScreens/SwapScreen';
import TransactionsScreen from './TablayoutScreens/TransactionsScreen';
import SettingsScreen from './TablayoutScreens/SettingsScreen';
import { COLORS } from '../constants/colors';



//Screen Names
const HomeName = 'Home'
const BuyName = 'Buy'
const SwapName = 'Swap'
const TransactionName = 'Transaction'
const SettingsName = 'Setting'

const Tab = createBottomTabNavigator();
export default function TabLayoutContainer() {
     return (
          <NavigationContainer>
               <Tab.Navigator initialRouteName={HomeName}
               screenOptions={({route}) => ({
                    tabBarActiveTintColor: COLORS.colorBlack,
                    tabBarInactiveTintColor: COLORS.colorGrey,
                    headerShown: false,
                    tabBarStyle: {backgroundColor: COLORS.colorWhite},
                    headerStyle: {
                         // backgroundColor: 'green',
                         
                    },
                    tabBarIcon: ({focused, color, size}) => {
                         let iconName;
                         let routeName = route.name

                         if(routeName === HomeName){
                              iconName = focused ? 'home-sharp' : 'home-outline'
                         } else if(routeName === BuyName){
                              iconName = focused ? 'analytics-sharp' : 'analytics-sharp'
                         }else if(routeName === SwapName){
                              iconName = focused ? 'scan-sharp' : 'scan-sharp'
                         }else if(routeName === TransactionName){
                              iconName = focused ? 'wallet-sharp' : 'wallet-sharp'
                         }else if(routeName === SettingsName){
                              iconName = focused ? 'settings-sharp' : 'settings-sharp'
                         }

                         return <Ionicons name={iconName} size={size} color={color}/>
                    }
               
               })}>
                    <Tab.Screen name={HomeName} component={HomeScreen}/>
                    <Tab.Screen name={BuyName} component={BuyScreen}/>
                    <Tab.Screen name={SwapName} component={SwapScreen}/>
                    <Tab.Screen name={TransactionName} component={TransactionsScreen}/>
                    <Tab.Screen name={SettingsName} component={SettingsScreen}/>

               </Tab.Navigator>
          </NavigationContainer>
     );
}
const styles = StyleSheet.create({
     
})