import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Recharge from './screens/Recharge';

export default function App() {
  return (
    <NavigationContainer>
      <Recharge />
    </NavigationContainer>
  );
}
