import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import IgHeader from '../components/IgHeader';
import IgProfile from '../components/IgProfile';
import IgEditprofile from '../components/IgEditprofile';
import IgGelery from '../components/IgGelery';

export default function InstagramScreen() {
  return (
    <ScrollView>
      <View>
      <IgHeader />
      <IgProfile />
      <IgEditprofile />
      <IgGelery />
    </View>
    </ScrollView>
  );
}