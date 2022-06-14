import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import updatenewsData from '../assets/data/updatenewsData';

export default function UpdateNews() {

    const renderupdatenewsItem = ({item}) => {
        return (
          <TouchableOpacity>
            <View style={styles.block}>
              <Image style={styles.imageList} source={item.image} />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.listText}>{item.title}</Text>
              <Text style={styles.listText}>{item.titles}</Text>
              <View style={styles.bottomText}>
              <Text style={styles.listTextorange}>{item.titleorange}</Text>
              <Text style={styles.listTextcenter}>{item.textcenter}</Text>

              <Text style={styles.listTextgray}>{item.titlegray}</Text>

              </View>
            </View>
          </TouchableOpacity>
        );
      };

  return (
   <View>
     <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerText}>
        <Text style={styles.textTitle1}>ข่าวล่าสุด</Text>
        <Text style={styles.textTitle2}>แสดงทั้งหมด</Text>
      </View>

      {/* Data */}
      <FlatList
            data={updatenewsData}
            renderItem={renderupdatenewsItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />


    </View>

    <View
  style={{
    marginTop: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  }}
/>
   </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textTitle1: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    textTitle2: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#F98121',
    },
    block: {
        marginTop: 20,
        paddingRight: 20,

    },
    imageList: {
        width: 260,
        height: 140,
        borderRadius: 8,
    },
    listText: {
        textAlign: 'left',
        fontSize: 12,
        fontWeight: '500',
        color: '#000',
    },
    bottomText: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    listTextorange: {
        fontSize: 10,
        fontWeight: '400',
        color: '#F98121',
        paddingRight: 10,
    },
    listTextcenter: {
        color: '#C4C4C4',
        fontWeight: 'bold'
    },
    listTextgray: {
        fontSize: 10,
        fontWeight: '400',
        color: '#C4C4C4',
    },

});