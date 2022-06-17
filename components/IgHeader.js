import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

export default function IgHeader() {
  return (
    <SafeAreaView>
       <View style={styles.container}>
       <View style={styles.header}>
       {/* left */}
        <View style={styles.headerLeft}>
        <Image source={require('../assets/icons/padlock.png')} style={styles.imagelock} />
        <Text style={styles.textLeft}>Pear_1999</Text>
        <Image source={require('../assets/icons/down-arrow.png')} style={styles.imagearrow}/>     
        </View>

        {/* right */}
        <View style={styles.headerRight}>
        <Image source={require('../assets/icons/more.png')} style={styles.imagelock}/>
        <View style={{paddingHorizontal: 10,}} />
        <Image source={require('../assets/icons/menu.png')} style={styles.imagelock} />
        </View>

        </View>
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },

    imagelock: {
        width: 20,
        height: 20,
    },
    headerLeft: {
        flexDirection: 'row',
        alignContent: 'center',
    },
    textLeft: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 5,
        color: '#000',
    },
    imagearrow: {
        width: 15,
        height: 15,
        marginTop: 5,
    },
    headerRight: {
        flexDirection: 'row',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

});