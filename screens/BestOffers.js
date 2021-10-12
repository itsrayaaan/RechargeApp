import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function BestOffers() {
  const data = [
    {
      price: '₹399',
      validity: '365 days',
      data: '1.5GB/Day',
      description:
        'Enjoy TRULY unlimited Local, STD & Roaming calls on any network, 1 GB data per day, 100 National SMS/day for 28 days.',
    },
    {
      price: '₹399',
      validity: '365 days',
      data: '1.5GB/Day',
      description:
        'Enjoy TRULY unlimited Local, STD & Roaming calls on any network, 1 GB data per day, 100 National SMS/day for 28 days.',
    },
    {
      price: '₹399',
      validity: '365 days',
      data: '1.5GB/Day',
      description:
        'Enjoy TRULY unlimited Local, STD & Roaming calls on any network, 1 GB data per day, 100 National SMS/day for 28 days.',
    },
  ];
  return (
    <View>
      {data.map(item => (
        <View style={styles.container}>
          <View style={styles.pricing}>
            <Text style={styles.priceText}>{item.price}</Text>
            <TouchableOpacity style={styles.selectButton}>
              <Text style={styles.selectText}>Select</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.validity}>Validity: {item.validity}</Text>
            <Text style={styles.data}>Data: {item.data}</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginHorizontal: 38, marginTop: 18},
  pricing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectButton: {
    paddingHorizontal: 20,
    borderRadius: 30 / 2,
    borderWidth: 1,
    paddingVertical: 3,
    borderColor: '#F1800D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectText: {color: '#F1800D'},
  priceText: {fontSize: 18, fontWeight: '600'},
  infoContainer: {
    marginVertical: 8,
    flexDirection: 'row',
  },
  validity: {fontSize: 12, color: '#263238'},
  data: {fontSize: 12, marginLeft: 22, color: '#263238B2'},
  descriptionContainer: {
    marginVertical: 8,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  descriptionText: {
    fontSize: 12,
    color: '#263238',
    fontWeight: '300',
    marginBottom: 12,
    lineHeight: 18,
  },
});
