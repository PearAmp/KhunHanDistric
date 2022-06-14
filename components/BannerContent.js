import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const items = [
    {
      title: 'กำลังมาแรง',
    },
    {
        title: 'กำลังมาแรง',
      },
      {
        title: 'กำลังมาแรง',
      },
      {
        title: 'กำลังมาแรง',
      },
      {
        title: 'กำลังมาแรง',
      },
      {
        title: 'กำลังมาแรง',
      },
      {
        title: 'กำลังมาแรง',
      },
      {
        title: 'กำลังมาแรง',
      },
  ];

export default function BannerContent() {
  return (
    <View style={styles.container} >

      {/* Text Head */}
      <View>
        <Text style={styles.textHead}>เรียกดูโดย</Text>
      </View>

       {/* Loop items */}

       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <TouchableOpacity key={index} style={styles.contentItems}>
            <Text style={styles.contentText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Block Content */}
      <View style={styles.blockwrap}>
      <View >
        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#000'}}>ฮีโร่แคมเปญแฮปปี้บัตเตอร์มาร์ต ไคลแมกซ์อีสต์</Text>
        <View>
        <Text  style={{fontSize: 12, color: '#000', marginTop: 5}}>แบรนด์อยุติธรรมแหววแครกเกอร์ลอร์ดพาส</Text>
        <Text style={{fontSize: 12, color: '#000', marginTop: 3}}>เจอร์ไรส์โบกี้สงบสุข ลอร์ดเทควันโดรีวิวรอยัลตี้</Text>
        <Text style={{fontSize: 12, color: '#000', marginTop: 3}}> พาสเจอร์ไรส์โบกี้สงบสุข ลอร์ด</Text>
        </View>
      </View>
      <View>
        <Image style={styles.imageRigth} source={require('../assets/images/profile.png')} />
      </View>

      </View>

      {/* Block Content */}
      <View style={styles.blockwrap}>
      <View >
        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#000'}}>ฮีโร่แคมเปญแฮปปี้บัตเตอร์มาร์ต ไคลแมกซ์อีสต์</Text>
        <View>
        <Text  style={{fontSize: 12, color: '#000', marginTop: 5}}>แบรนด์อยุติธรรมแหววแครกเกอร์ลอร์ดพาส</Text>
        <Text style={{fontSize: 12, color: '#000', marginTop: 3}}>เจอร์ไรส์โบกี้สงบสุข ลอร์ดเทควันโดรีวิวรอยัลตี้</Text>
        <Text style={{fontSize: 12, color: '#000', marginTop: 3}}> พาสเจอร์ไรส์โบกี้สงบสุข ลอร์ด</Text>
        </View>
      </View>
      <View>
        <Image style={styles.imageRigth} source={require('../assets/images/profile.png')} />
      </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    textHead: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
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
    blockwrap: {
        flexDirection: 'row',
        marginTop: 20,
    },
    imageRigth: {
        width: 100,
        height: 100,
        marginHorizontal: 20,
        borderRadius: 20,
    },

});