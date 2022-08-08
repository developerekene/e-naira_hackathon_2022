import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MainContainerScreen from './navigation/MainContainer';
import TabLayoutContainer from './navigation/TabLayoutContainer';

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1
    }}>
      <TabLayoutContainer />
      {/* <MainContainerScreen/> */}
    </SafeAreaView>
  );
}