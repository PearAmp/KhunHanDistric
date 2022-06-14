import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'



export default function Home() {
  return (
      <SafeAreaView style={styles.container}>
       <View style={styles.contentHead} >
      <Text style={styles.headerText}>KHUNHAN NEWS</Text>
      <Image style={{width: 20, height: 20, marginRight: 10}} source={require("../assets/icons/menu.png")} />
      </View>

      {/* image */}
      <View style={styles.imageContent}>
      <Image style={styles.image} source={require("../assets/images/khunhan.jpeg")} />

      </View>
      
      {/* Text Bottom */}
      <View style={{marginTop: 15}}>
        <Text style={{textAlign: 'center', fontSize: 16, color: '#000'}}>อำเภอขุนหาญ จังหวัดศรีสะเกษ ภาคตะวันออกเฉียงเหนือ</Text>
      </View>
     </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },

  contentHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 80,
  },
  imageContent: {
    marginTop: 20,

  },
  image: {
    width: '100%',
    height: 200, 
  },
  

});