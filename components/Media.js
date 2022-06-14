import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'

const items = [
    {
      image: require('../assets/images/youtube1.png'),
    },
    {
        image: require('../assets/images/youtube1.png'),
    },
    {
      image: require('../assets/images/youtube1.png'),
    },
    {
     image: require('../assets/images/youtube1.png'),
    },
    {
     image: require('../assets/images/youtube1.png'),
    },
  ];
  

export default function Media() {
  return (
    <SafeAreaView>
        <View style={styles.container}>
        {/* headtext */}
      <View>
      <Text style={styles.headText}>สื่อและวิดีทัศน์</Text>
      </View>
      {/* small text */}
      <View style={{marginTop: 5}}>
        <Text style={styles.smallText}>ข่าวอำเภอขุนหาญ จังหวัดศรีสะเกษ </Text>
      </View>

      {/* media */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{marginTop: 20,}}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.contentText}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>

    </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    headText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    smallText: {
        fontSize: 16,
        color: '#C0C0C0',
        fontWeight: '500',

    },
    itemImage: {
        width: 225,
        height: 155,
        marginRight: 20,
    },

});