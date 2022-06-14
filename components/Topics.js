import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function Topics() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.textHeader}>
        <Text style={styles.textblack}>หัวข้อแนะนำ</Text>
        <Text style={styles.textorange}>แสดงทั้งหมด</Text>
      </View>
      
      {/* Content */}
      <View style={styles.content}>
      <View style={styles.headerText}>
        <Text style={styles.texttitle}>ท.ต.ขุนหาญ ออกให้บริการฉีดวัคซีนป้องกัน</Text>
        <Text style={styles.texttitle}>โรคพิษสุนัขบ้า</Text>

        {/* Bottom */}
        <View style={styles.textBottom}>
      <Text style={styles.textorange}>ข่าววันนี้</Text>
      <Text style={styles.textcenter}>•</Text>
      <Text style={styles.textgray}>4 นาทีที่แล้ว</Text>

      </View>
      </View>
      {/* Image */}
      <View>
        <Image style={{width: 80, height: 80, borderRadius: 10,}} source={require('../assets/images/service.jpeg')} />
      </View>

      </View>
      {/* content 2 */}

      <View style={styles.content}>
      <View style={styles.headerText}>
        <Text style={styles.texttitle}>ท.ต.ขุนหาญ ออกให้บริการฉีดวัคซีนป้องกัน</Text>
        <Text style={styles.texttitle}>โรคพิษสุนัขบ้า</Text>

        {/* Bottom */}
        <View style={styles.textBottom}>
      <Text style={styles.textorange}>ข่าววันนี้</Text>
      <Text style={styles.textcenter}>•</Text>
      <Text style={styles.textgray}>4 นาทีที่แล้ว</Text>

      </View>
      </View>
      {/* Image */}
      <View>
        <Image style={{width: 80, height: 80, borderRadius: 10,}} source={require('../assets/images/service.jpeg')} />
      </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  textHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textblack: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  textorange: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#F98121',
  },
  content: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  headerText: {
    alignSelf: 'center',
  },
  texttitle: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18,

  },
  textBottom: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textorange: {
    fontSize: 10,
    fontWeight: '300',
    color: '#F98121',
    paddingRight: 10,
  },
  textcenter: {
    fontWeight: '500',
    color: '#C4C4C4',
  },
  textgray: {
    fontSize: 10,
    fontWeight: '500',
    color: '#C4C4C4',
    paddingRight: 10,
    paddingLeft: 10,
  },

});
