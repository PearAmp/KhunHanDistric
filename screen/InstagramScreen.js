import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import IgHeader from '../components/IgHeader';
import IgProfile from '../components/IgProfile';

export default function InstagramScreen() {
  return (
    <ScrollView>
      <View>
      <IgHeader />
      <IgProfile />
    </View>
    </ScrollView>
  );
}