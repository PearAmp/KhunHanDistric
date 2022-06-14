import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';

const items = [
  {
    image: require('../assets/news/cnn.png'),
  },
  {
    image: require('../assets/news/bbc.png'),
  },
  {
    image: require('../assets/news/msn.png'),
  },
  {
    image: require('../assets/news/cnbc.png'),
  },
  {
    image: require('../assets/news/cnn.png'),
  },
  {
    image: require('../assets/news/bbc.png'),
  },
  {
    image: require('../assets/news/msn.png'),
  },
  {
    image: require('../assets/news/cnbc.png'),
  },
];

export default function Popular() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textRight}>ดูทั้งหมด</Text>
      </View>

      {/* Popular */}
      <View style={{marginBottom: 20}}>
        <Text style={styles.popularText}>การตีพิมพ์ยอดนิยม</Text>
      </View>

      {/* Loop items */}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={styles.contentItems}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.contentText}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  textRight: {
    textAlign: 'right',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#C4C4C4',
  },
  popularText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  itemImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  contentText: {
    fontSize: 13,
    fontWeight: '900',
  },
  contentItems: {
    marginRight: 20,
    paddingLeft: 14,
    paddingRight: 14,
    borderRadius: 50,
    paddingTop: 10,
    backgroundColor: '#eee',
  },
});
