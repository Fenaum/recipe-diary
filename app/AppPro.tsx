import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import NavBar from './components/NavBar';

const appPro = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <NavBar />
        <FlatCard />
        <ElevatedCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default appPro;
