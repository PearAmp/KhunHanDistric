import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HeaderNews from '../components/HeaderNews';
import Campange from '../components/Campange';
import Popular from '../components/Popular';
import BannerContent from '../components/BannerContent';

export default function AllnewsScreen() {
  return (
    <ScrollView>
      <HeaderNews />
      <Campange />
      <Popular />
      <BannerContent />
    </ScrollView>
  );
}