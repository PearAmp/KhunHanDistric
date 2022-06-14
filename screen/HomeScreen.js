import { View, Text, ScrollView, SafeAreaView} from 'react-native'
import React from 'react'
import Home from '../components/Home'
import Contents from '../components/Contents'
import Bottom from '../components/Bottom'

export default function HomeScreen() {
  return (
    <ScrollView>
      <View>
      <Home />
      <Contents />
    
    </View>
    </ScrollView>
  )
};