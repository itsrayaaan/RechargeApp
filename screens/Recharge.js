import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BestOffers from './BestOffers';
import Header from './Header';

const Tab = createMaterialTopTabNavigator();

export default function Recharge() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header />
        <Tab.Navigator
          screenOptions={{
            tabBarScrollEnabled: true,
            tabBarLabelStyle: {fontSize: 10, marginTop: 20},
            tabBarIndicatorStyle: {
              backgroundColor: '#F1800D',
            },
            tabBarItemStyle: {flex: 1},
          }}>
          <Tab.Screen name="Best Offers" component={BestOffers} />
          <Tab.Screen name="Popular" component={BestOffers} />
          <Tab.Screen name="Special Recharge" component={BestOffers} />
          <Tab.Screen name="Top-up" component={BestOffers} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
}
