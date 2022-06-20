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

          {/* text */}

          <View
            style={{
              marginLeft: 50,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{marginRight: 30}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#000',
                }}>
                2,230
              </Text>
              <Text style={{textAlign: 'center', color: '#000'}}>โพสต์</Text>
            </View>

            <View style={{marginRight: 30}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#000',
                }}>
                1,635
              </Text>
              <Text style={{textAlign: 'center', color: '#000'}}>
                ผู้ติดตาม
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#000',
                }}>
                1,170
              </Text>
              <Text style={{textAlign: 'center', color: '#000'}}>
                กำลังติดตาม
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.borderText}>
          <Text style={styles.textleft}>+ ตั้งสถานะ</Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 12, color: '#000'}}>
            So I want to happy again
          </Text>
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
    alignItems: 'center',
  },
  profileimage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  borderText: {
    backgroundColor: '#eee',
    width: 80,
    borderRadius: 30,
    marginTop: 20,
  },
  textleft: {
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 12,
    color: '#000',
  },
});
