import {View, Text, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

const items = [
  {
    title: 'ข่าวทั้งหมด',
  },
  {
      title: 'ธุรกิจ',
    },
    {
      title: 'การเมือง',
    },
    {
      title: 'เทคโนโลยี',
    },
    {
      title: 'สุขภาพ',
    },
    {
      title: 'วิทยาศาสตร์',
    },
    {
      title: 'การท่องเที่ยวและกีฬา',
    },
   
];


export default function HeaderNews() {
   
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.blockHead}>
          <Text style={styles.textHead}>LATEST</Text>
        </View>
        <View style={styles.blockHead1}>
          <Text style={styles.textHead}> NEWS</Text>
        </View>
        <View style={{marginHorizontal: 200, justifyContent: 'center'}}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../assets/icons/bell.png')}
          />
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <TouchableOpacity key={index} style={styles.contentItems}>
            <Text style={styles.contentText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  content: {
    flexDirection: 'row',
    marginTop: 30,
  },
  blockHead: {
    backgroundColor: 'orange',
    width: 60,
  },
  textHead: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  blockHead1: {
    backgroundColor: '#000',
    width: 60,
  },
  imageList: {
    width: 150,
    height: 150,
    borderRadius: 16,
  },
  block: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  listText: {
    textAlign: 'center',
    fontSize: 12,
    marginHorizontal: 20,
  },
  newHead: {
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  newHeadText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  navbar: {
    marginHorizontal: 20,
  },
  listText: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: '#C4C4C4',

    
 
  },
  contentItems: {
    marginTop: 15,
    paddingRight: 20,
},
contentText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#C4C4C4', 
},
  
});
