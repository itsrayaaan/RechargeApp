import React from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.browseText}>Browse Plans</Text>
        <View style={styles.closeButton}>
          <Text style={styles.closeX}>X</Text>
        </View>
      </View>
      <View style={styles.palceContainer}>
        <Text style={styles.placeText}>For Airtel Kolkata</Text>
      </View>

      <View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchText}
            placeholder={'Search Plan Amount, Talktime'}
          />
          <Image source={require('../assets/search.png')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 38,
  },
  headingContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  browseText: {fontSize: 18, color: '#F1800D', fontWeight: '600'},
  closeButton: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeX: {fontSize: 12, color: 'white'},
  palceContainer: {marginTop: 10},
  placeText: {fontWeight: '400', fontSize: 16},
  searchContainer: {
    borderColor: 'transparent',
    borderBottomColor: 'rgba(38, 50, 56, 0.1)',
    borderWidth: 0.5,
    width: '90%',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchText: {fontSize: 14, paddingVertical: 10},
});
