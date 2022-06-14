import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import React from 'react';

const items = [
  {
    title: 'ท.ต.กันทรอม',
  },
  {
    title: 'ท.ต.กระหวัน',
  },
  {
    title: 'ท.ต.ขุนหาญ',
  },
  {
    title: 'ท.ต.โพธิ์กระสัง',
  },
  {
    title: 'ท.ต.โนนสูง',
  },
  {
    title: 'ท.ต.หนองผือ',
  },
  {
    title: 'ท.ต.ห้วยจันทร์',
  },
];

export default function Municipality() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text style={styles.headerText}>องค์การบริหารส่วนตำบล</Text>
        </View>
        {/* Scroll Content */}
        <View style={styles.itemContent}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
            {items.map((item, index) => (
              <TouchableOpacity>
              <View key={index} style={{marginTop: 20}}>
                <Text style={styles.contentText}>{item.title}</Text>
              </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View>
            <Image
              style={{width: 20, height: 20}}
              source={require('../assets/icons/search.png')}
            />
          </View>
        </View>

        {/* news */}
        <View style={styles.columItem}>
        <View>
            <Text style={styles.newsText}>เทศบาลตำบลกระหวันจัดงาน ฟุตบอล</Text>
            <Text style={styles.newsText}>ชิงแชมป์ ประจำปีงบประมาณ 2565</Text>
             {/* small text */}
            <View style={styles.smallText}>
                <Text style={styles.textgray}>วันจันทร์</Text>
                <View style={{borderRightColor: '#C0C0C0', borderRightWidth: 1, marginRight: 10, }} />
                <Text style={styles.textgray}>4 นาทีที่แล้ว</Text>
            </View>
        </View>
        {/* image */}
        <View>
            <Image style={{width: 100, height: 95, borderRadius: 10}} source={require('../assets/images/footbal.jpg')} />
        </View>

        </View>
        <View
  style={{
    marginTop: 20,
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 1,
  }}
/>

<View style={styles.columItem}>
        <View>
            <Text style={styles.newsText}>เทศบาลตำบลกระหวันจัดงาน ฟุตบอล</Text>
            <Text style={styles.newsText}>ชิงแชมป์ ประจำปีงบประมาณ 2565</Text>
             {/* small text */}
            <View style={styles.smallText}>
                <Text style={styles.textgray}>วันจันทร์</Text>
                <View style={{borderRightColor: '#C0C0C0', borderRightWidth: 1, marginRight: 10, }} />
                <Text style={styles.textgray}>4 นาทีที่แล้ว</Text>
            </View>
        </View>
        {/* image */}
        <View>
            <Image style={{width: 100, height: 95, borderRadius: 10}} source={require('../assets/images/footbal.jpg')} />
        </View>

        </View>
        <View
  style={{
    marginTop: 20,
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 1,
  }}
/>

<View style={styles.columItem}>
        <View>
            <Text style={styles.newsText}>เทศบาลตำบลกระหวันจัดงาน ฟุตบอล</Text>
            <Text style={styles.newsText}>ชิงแชมป์ ประจำปีงบประมาณ 2565</Text>
             {/* small text */}
            <View style={styles.smallText}>
                <Text style={styles.textgray}>วันจันทร์</Text>
                <View style={{borderRightColor: '#C0C0C0', borderRightWidth: 1, marginRight: 10, }} />
                <Text style={styles.textgray}>4 นาทีที่แล้ว</Text>
            </View>
        </View>
        {/* image */}
        <View>
            <Image style={{width: 100, height: 95, borderRadius: 10}} source={require('../assets/images/footbal.jpg')} />
        </View>

        </View>
        <View
  style={{
    marginTop: 20,
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 1,
  }}
/>

<View style={styles.columItem}>
        <View>
            <Text style={styles.newsText}>เทศบาลตำบลกระหวันจัดงาน ฟุตบอล</Text>
            <Text style={styles.newsText}>ชิงแชมป์ ประจำปีงบประมาณ 2565</Text>
             {/* small text */}
            <View style={styles.smallText}>
                <Text style={styles.textgray}>วันจันทร์</Text>
                <View style={{borderRightColor: '#C0C0C0', borderRightWidth: 1, marginRight: 10, }} />
                <Text style={styles.textgray}>4 นาทีที่แล้ว</Text>
            </View>
        </View>
        {/* image */}
        <View>
            <Image style={{width: 100, height: 95, borderRadius: 10}} source={require('../assets/images/footbal.jpg')} />
        </View>

        </View>
        <View
  style={{
    marginTop: 20,
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 1,
  }}
/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentText: {
    marginRight: 20,
    fontSize: 16,
    fontWeight: '500',
    color: '#C0C0C0',
  },
  columItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  newsText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  smallText: {
    flexDirection: 'row',
    marginTop: 5,
    alignContent: 'center',
  },
  textgray: {
    fontSize: 14,
    fontWeight: '500',
    color: '#C0C0C0',
    paddingRight: 10,
  },
});
