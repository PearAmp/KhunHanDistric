import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import React from 'react';

export default function IgEditprofile() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* edit */}
        <View style={styles.box}>
          <View style={styles.textBox}>
            <Text style={styles.texttitle}>แก้ไขโปรไฟล์</Text>
          </View>
          <View style={styles.imageBox}>
            <Image
              style={styles.imageIcons}
              source={require('../assets/instagram/add.png')}
            />
          </View>
        </View>
        {/* Hilight */}
        <View style={styles.hilight}>
          <View style={styles.imageItems}>
            <Image
              style={styles.imageHilight}
              source={require('../assets/instagram/cat.jpeg')}
            />
            <Image
              style={styles.smallImage}
              source={require('../assets/instagram/cat.png')}
            />
          </View>

          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <View style={styles.imageItems2}>
              <Image
                style={styles.imageHilight2}
                source={require('../assets/instagram/plus.png')}
              />
            </View>
            <View>
              <Text style={{color: '#000', fontSize: 12}}>ใหม่</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBox: {
    flex: 0.95,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
  },
  texttitle: {
    paddingVertical: 5,
    textAlign: 'center',
    color: '#000',
    fontSize: 14,
  },
  imageBox: {
    flex: 0.1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 5,
    borderRadius: 4,
    marginLeft: 5,
  },
  imageIcons: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  hilight: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  imageHilight: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },

  smallImage: {
    width: 15,
    height: 15,
  },
  imageItems: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 20,
  },
  imageItems2: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#000',
    padding: 18,
  },
  imageHilight2: {
    width: 20,
    height: 20,
  },
});
