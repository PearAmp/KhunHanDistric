import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Campange() {
  return (
    <View style={styles.container}>
      {/* Head Content */}
      <View style={{marginTop: 10, marginLeft: 10,}} >
        <Text style={styles.textHead}>ปลัดอำเภอขุนหาญ เชิญชวนชาวขุนหาญทุกท่าน เข้าร่วมกิจกรรม วิ่งเพื่อสุขภาพ
        มินิฮาฟ มาราธอน ระยะทาง 3 กิโลเมตร</Text>
      </View>
      {/* Textsmall Content */}
      <View style={styles.smallText}>
        <Text style={styles.textTitle}>ข่าวสด ทันสถานการณ์</Text>
        <Text style={styles.textTitles}> • 36 นาทีที่แล้ว</Text>
      </View>

      {/* Image Content */}
      <View style={styles.ImageRow}>
        <View >
        <Image style={{width: 185, height: 210, borderRadius: 10}} source={require('../assets/images/run.jpeg')} />

        </View>
       <View style={styles.ImageCols}>
       <View style={{marginBottom: 10,}}>
        <Image style={{width: 100, height: 100, borderRadius: 10}} source={require('../assets/images/run.jpeg')} />

        </View>
        <View >
        <Image style={{width: 100, height: 100, borderRadius: 10}} source={require('../assets/images/run.jpeg')} />

        </View>
      </View>
       </View>

       {/* .... */}
       <View style={{marginTop: 5}}>
        <Text style={{textAlign: 'right', marginRight: 30, color: '#828282'}}>•••</Text>
       </View>


       {/* Bottom Text */}
       <View style={styles.Bottom}>
       <View style={styles.textBottom}>
        <Image style={styles.imageIcons} source={require('../assets/icons/like.png')} />
        <Text style={styles.bottomtitleText}>800</Text>
        
        {/* item 2 */}
       <View style={{marginLeft: 20, flexDirection: 'row'}}>
       <Image style={styles.imageIcons} source={require('../assets/icons/comment.png')} />
        <Text style={styles.bottomtitleText}>201</Text>
       </View>
       <View style={{marginLeft: 20, flexDirection: 'row'}}>
       <Image style={styles.imageIcons} source={require('../assets/icons/share.png')} />
        <Text style={styles.bottomtitleText}>122</Text>
       </View>

       

       </View>
       

       

      

       </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F2F2',
        marginHorizontal: 20,
        borderRadius: 10,
        height: 'auto',

    },
    textHead: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    smallText: {
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 20,

    },
    textTitle: {
        color: '#F98121',
        fontSize: 12,
        fontWeight: 'bold',
        marginRight: 20,
    },
    textTitles: {
        color: '#C4C4C4',
        fontSize: 12,
        fontWeight: 'bold',
    },
    ImageRow: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 10,

    },
    ImageCols: {
        flexDirection: 'column',
        marginHorizontal: 20,
        
    },
    Bottom: {
        marginHorizontal: 20,
        marginBottom: 10
    },
    imageIcons: {
        width: 11,
        height: 11,

    },
    textBottom: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    bottomtitleText: {
        color: '#828282',
        marginLeft: 10,
        fontSize: 10,
    },

});