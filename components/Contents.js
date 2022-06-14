import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import districtData from '../assets/data/districtData';
import hospitalData from '../assets/data/hospitalData';
import schoolData from '../assets/data/schoolData';
import durainlavaData from '../assets/data/durainlavaData';
import travelData from '../assets/data/travelData';

export default function Contents() {
  const renderdistrictlItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.block}>
          <Image style={styles.imageList} source={item.image} />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.listText}>{item.title}</Text>
          <Text style={styles.listText}>{item.title2}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderhospitalItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.block}>
          <Image style={styles.imageList} source={item.image} />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.listText}>{item.title}</Text>
          <Text style={styles.listText}>{item.title2}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderschoolItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.block}>
          <Image style={styles.imageList} source={item.image} />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.listText}>{item.title}</Text>
          <Text style={styles.listText}>{item.title2}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderdurainlavaItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.block}>
          <Image style={styles.imageList} source={item.image} />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.listText}>{item.title}</Text>
          <Text style={styles.listText}>{item.title2}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const rendertravelItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.block}>
          <Image style={styles.imageList} source={item.image} />
        </View>
        <View style={{marginTop: 10, marginBottom: 30,}}>
          <Text style={styles.listText}>{item.title}</Text>
          <Text style={styles.listText}>{item.title2}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
    {/* DistrictData */}
      <View>
        <View style={{marginBottom: 10}}>
          <View style={styles.newHead}>
            <Text style={styles.newHeadText}>ข่าวอำเภอขุนหาญ</Text>
          </View>

          <FlatList
            data={districtData}
            renderItem={renderdistrictlItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>

      {/* HospitalData */}

      <View>
        <View style={{marginBottom: 10}}>
          <View style={styles.newHead}>
            <Text style={styles.newHeadText}>โรงพยาบาล</Text>
          </View>

          <FlatList
            data={hospitalData}
            renderItem={renderhospitalItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>

      {/* SchoolData */}
      <View>
        <View style={{marginBottom: 10}}>
          <View style={styles.newHead}>
            <Text style={styles.newHeadText}>โรงเรียน</Text>
          </View>

          <FlatList
            data={schoolData}
            renderItem={renderschoolItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>
      
      {/* DurainlavaData */}
      <View>
        <View style={{marginBottom: 10}}>
          <View style={styles.newHead}>
            <Text style={styles.newHeadText}>ทุเรียนภูเขาไฟ</Text>
          </View>

          <FlatList
            data={durainlavaData}
            renderItem={renderdurainlavaItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>

{/* TravelData */}
<View>
        <View style={{marginBottom: 10}}>
          <View style={styles.newHead}>
            <Text style={styles.newHeadText}>สถานที่ท่องเที่ยว</Text>
          </View>

          <FlatList
            data={travelData}
            renderItem={rendertravelItem}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 20,
    backgroundColor: '#eee',
    borderRadius: 25,
    justifyContent: 'center',
  },
  imageList: {
    width: 150,
    height: 150,
    borderRadius: 16,
  },
  block: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  listText: {
    textAlign: 'center',
    fontSize: 12,
    marginHorizontal: 20,
  },
  newHead: {
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  newHeadText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});
