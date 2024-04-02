import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import NavBar from './components/NavBar'

const appPro = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <NavBar />
        <Text>appPro</Text>
        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default appPro