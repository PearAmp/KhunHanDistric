import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function IgProfile() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.itemprofile}>
            <Image
              source={require('../assets/instagram/igprofile.jpg')}
              style={styles.profileimage}
            />
          </View>
          <View style={styles.textTitle}>
          <View style={styles.textTitl1}>
          <Text>2,230</Text>
          <Text>โพสต์</Text>

          </View>
          <View style={styles.textTitle2}>
          <Text>1.635</Text>
          <Text>ผู้ติดตาม</Text>

          </View>

          <View style={styles.textTitle3}>
          <Text>1,170</Text>
          <Text>กำลังติดตาม</Text>

          </View>


          </View>
        </View>

        <View style={styles.borderText}>
          <Text style={styles.textleft}>+ ตั้งสถานะ</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileimage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  borderText: {
    backgroundColor: '#eee',
    width: 100,
    borderRadius: 30,
  },
  textleft: {
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 12,
  },
  textTitle: {
    flexDirection: 'row',
    marginLeft: 50,
  },
  textTitle1: {
    alignItems: 'center',
  },
  textTitle2: {
    alignItems: 'center',
  },
  textTitle3: {
    alignItems: 'center',
  },
});
