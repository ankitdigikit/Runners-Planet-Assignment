import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker, Dimensions, Image, ScrollView, } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import mapData from './CustomData.json';
import Icon from 'react-native-vector-icons/Ionicons';
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;
const App = () => {
  const [selectedValue, setSelectedValue] = useState('0');
  const [state, setstate] = useState(
    mapData.data.allLandmarks[selectedValue].location,
  );
  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.topOfMap}>
          <Picker
            selectedValue={selectedValue}
            style={styles.pickerStyle}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedValue(itemValue);
              setstate(mapData.data.allLandmarks[itemValue].location);
            }}>
            {mapData.data.allLandmarks.map((value, index) => <Picker.Item label={value.name} value={index} />)}
          </Picker>
        </View>
        <View style={{ flex: 1 }}>
          <MapView
            style={styles.map}
            region={{
              latitude: state.latitude,
              longitude: state.longitude,
              latitudeDelta: 0.009,
              longitudeDelta: 0.009,
            }}>
            <Marker
              coordinate={{
                latitude: state.latitude,
                longitude: state.longitude,
              }}>
              <Callout tooltip>
                <View>
                  <Text>Jewel Changi Airport</Text>
                  <Text>Singapore</Text>
                  <Text>Singapore</Text>
                  <Text>
                    Marvel at the intricate architecture of the striking glass
                    and steel dome as you run through the Changi Airport park
                    connecter
                  </Text>
                </View>
              </Callout>
            </Marker>
          </MapView>
        </View>
        <View style={styles.card}>
          <View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {mapData.data.allLandmarks[selectedValue].images.map((value, index) =>
                <Image style={styles.imageStyle} source={{ uri: value.url }} />
              )}
            </ScrollView>
          </View>
          <View style={{ marginStart: 7 }}>
            <View style={{ flexDirection: 'row', width: Devicewidth / 1.35, }}>
              <Text>{mapData.data.allLandmarks[selectedValue].name}</Text>
              <View style={{ flexDirection: 'row', }}>
                <Icon
                  name="flag"
                  size={20}
                  color="#ffd900"
                  style={{ marginLeft: 20 }}
                />
                <Icon
                  name="flag"
                  size={20}
                  color="#ffd900"
                  style={{ marginLeft: 5 }}
                />
                <Icon
                  name="flag"
                  size={20}
                  color="#ffd900"
                  style={{ marginLeft: 5 }}
                /></View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                name="location"
                size={25}
                color="black"
              />
              <Text>{mapData.data.allLandmarks[selectedValue].city}, {mapData.data.allLandmarks[selectedValue].country}</Text>
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>100 Pts</Text>
            <Text style={{ width: Devicewidth / 1.9 }}>{mapData.data.allLandmarks[selectedValue].description}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default App;
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  topOfMap: {
    // flex: 0.1,
    position: 'absolute',
    elevation: 0.1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    top: 40,
    borderRadius: 5,
    marginHorizontal: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  pickerStyle: {
    width: Devicewidth / 1.11,
    height: Deviceheight / 15,
    color: '#fff'
  },
  card: {
    flex: 1,
    position: 'absolute',
    top: '82%',
    height: 155,
    elevation: 1,
    backgroundColor: '#fff',
    padding: 7,
    borderRadius: 7,
    alignSelf: 'center',
    flexDirection: 'row',
    width: Devicewidth / 1.1,
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 7,
  }
});
