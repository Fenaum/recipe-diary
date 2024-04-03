import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#F5FCFF',
    padding: 20,
    borderRadius: 10,
    width: 100,
    height: 140,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardElevated: {},
});




export default ElevatedCard