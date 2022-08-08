import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function HomeScreen() {
     return (
          <View style={styles.homeContainer}>
               <Text>
                    Home Screen
               </Text>
          </View>
     );
}
const styles = StyleSheet.create({
     homeContainer: {
          backgroundColor: 'white',
          flex: 1
     }
})