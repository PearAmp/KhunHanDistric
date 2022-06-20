import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function IgGelery() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.gallerywrap}>
          <View>
            <Image
              style={styles.imageIcons}
              source={require('../assets/instagram/table.png')}
            />
          </View>
          <View>
            <Image
              style={styles.imageIcons}
              source={require('../assets/instagram/video.png')}
            />
          </View>
          <View>
            <Image
              style={styles.imageIcons}
              source={require('../assets/instagram/play.png')}
            />
          </View>
          <View>
            <Image
              style={styles.imageIcons}
              source={require('../assets/instagram/user.png')}
            />
          </View>
        </View>
      </View>

      <View style={{borderColor: '#eee', borderWidth: 1}} />
      <View style={styles.galeryItems}>
        <View style={{paddingRight: 2, paddingBottom: 2}}>
          <Image
            style={styles.imageGallery}
            source={require('../assets/instagram/cat.jpeg')}
          />
        </View>
        <View style={{paddingRight: 2, paddingBottom: 2}}>
          <Image
            style={styles.imageGallery}
            source={require('../assets/instagram/cat.jpeg')}
          />
        </View>
        <View>
          <Image
            style={styles.imageGallery}
            source={require('../assets/instagram/cat.jpeg')}
          />
        </View>
      </View>
      {/* Row2 */}
      <View style={styles.galeryItems}>
        <View style={{paddingRight: 2, paddingBottom: 2}}>
          <Image
            style={styles.imageGallery}
            source={require('../assets/instagram/cat.jpeg')}
          />
        </View>
        <View style={{paddingRight: 2, paddingBottom: 2}}>
          <Image
            style={styles.imageGallery}
            source={require('../assets/instagram/cat.jpeg')}
          />
        </View>
        <View>
          <Image
            style={styles.imageGallery}
            source={require('../assets/instagram/cat.jpeg')}
          />
        </View>
      </View>
      {/* Row 3 */}
      <View style={styles.galeryItems}>
        <View style={{paddingRight: 2, paddingBottom: 2}}>
          <Image
            style={styles.imageGallery}
            source={require('../assets/instagram/cat.jpeg')}
          />
        </View>
        <View style={{paddingRight: 2, paddingBottom: 2}}>
          <Image
            style={styles.imageGallery}
            source={require('../assets/instagram/cat.jpeg')}
          />
        </View>
        <View>
          <Image
            style={styles.imageGallery}
            source={require('../assets/instagram/cat.jpeg')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  gallerywrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  imageIcons: {
    width: 25,
    height: 25,
  },
  galeryItems: {
    flexDirection: 'row',
  },
  imageGallery: {
    width: 129,
    height: 120,
  },
});
