import { View, Text } from 'react-native'
import React from 'react'
import SearchContent from '../components/SearchContent'
import UpdateNews from '../components/UpdateNews'
import Topics from '../components/Topics'

export default function SearchScreen() {
  return (
    <View>
     <SearchContent />
     <UpdateNews />
     <Topics />
    </View>
  )
}