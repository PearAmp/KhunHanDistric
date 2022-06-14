import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import HomeScreen from './screen/HomeScreen';
import AllnewsScreen from './screen/AllnewsScreen';
// import Bottom from './components/Bottom';
import SearchScreen from './screen/SearchScreen';
import MediaScreen from './screen/MediaScreen'

export default function App() {
  return (
    <ScrollView>
      <View style={{flex: 1, marginTop: 20,}}>
        {/* <HomeScreen /> */}
        {/* <AllnewsScreen /> */}
        {/* <SearchScreen /> */}
        {/* <Bottom /> */}
        <MediaScreen />
      </View>
    </ScrollView>
  );
}
