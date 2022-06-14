import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Bottom() {
  return (
    <View>
        <View style={styles.container}>
      <TouchableOpacity> 
      <Image style={styles.imageIcons} source={require('../assets/icons/home.png')} />
      <Text style={{textAlign: 'center', fontSize: 10 , color: '#000', marginTop: 10}}>หน้าหลัก</Text>
      </TouchableOpacity>
      <TouchableOpacity> 
      <Image style={styles.imageIcons} source={require('../assets/icons/search.png')} />
      <Text style={{textAlign: 'center', fontSize: 10 , color: '#000', marginTop: 10}}>ค้นหา</Text>
      </TouchableOpacity>
      <TouchableOpacity> 
      <Image style={styles.imageIcons} source={require('../assets/icons/play.png')} />
      <Text style={{textAlign: 'center', fontSize: 10 , color: '#000', marginTop: 10}}>วีดีโอและภาพ</Text>
      </TouchableOpacity>
      <TouchableOpacity> 
      <Image style={styles.imageIcons} source={require('../assets/icons/email.png')} />
      <Text style={{textAlign: 'center', fontSize: 10 ,color: '#000', marginTop: 10}}>ข้อความ</Text>
      </TouchableOpacity>
      <TouchableOpacity> 
      <Image style={{width: 20, height: 20, borderRadius: 10, alignSelf: 'center'}} source={require('../assets/images/profile.png')} />
      <Text style={{textAlign: 'center', fontSize: 10, color: '#000', marginTop: 10}}>โปรไฟล์</Text>
      </TouchableOpacity>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 40,
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    imageIcons: {
        width: 20,
        height: 20,
        alignSelf: 'center',
    },
    

});