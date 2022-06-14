import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import SearchBar from 'react-native-dynamic-search-bar';


export default function SearchContent() {
  return (
    <View>
      <View style={styles.container}>
      {/* Search Bar */}
      <SearchBar
        style={{width: '100%'}}
        placeholder="ค้นหา"
        onChangeText={text => console.log(text)}
      />

      {/* Popular Text */}
      <View style={styles.Textwrap}>
        <Text style={styles.title1}>ยอดนิยม</Text>
        <Text style={styles.title2}>แสดงทั้งหมด</Text>
      </View>
      {/* HTag */}
      <View style={{marginTop: 20}}>
        <View style={styles.block}>
          <Text style={styles.textHtag}>#เทศบาลขุนหาญ</Text>
          <Text style={styles.textHtag}>#ข่าวแดนลำดวน</Text>
          <Text style={styles.textHtag}>#ใหม่มาแรง</Text>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <View style={styles.block}>
          <Text style={styles.textHtag}>#เทศบาลขุนหาญ</Text>
          <Text style={styles.textHtag}>#ข่าวแดนลำดวน</Text>
          <Text style={styles.textHtag}>#ใหม่มาแรง</Text>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <View style={styles.block}>
          <Text style={styles.textHtag}>#Bitcoin</Text>
          <Text style={styles.textHtag}>#ข่าวแดนลำดวน</Text>
          <Text style={styles.textHtag}>#tiktok </Text>
        </View>
      </View>

      {/* Line */}

    

    
    </View>
    <View
  style={{
    marginTop: 20,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  }}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  Textwrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  title1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  title2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F98121',
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHtag: {
    backgroundColor: '#eee',
    color: '#6F7789',
    paddingVertical: 5,
    borderRadius: 6,
    
  },
});
