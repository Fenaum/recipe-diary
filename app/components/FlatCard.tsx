import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}> Books </Text >
        <View style={styles.container}>
          <View style={styles.card}>
              <Text style={styles.bodyText}>Body 0</Text>
          </View>
          <View style={styles.card}>
            <View>
                <Text style={styles.bodyText}>Body 1</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View>
                <Text style={styles.bodyText}>Body 2</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View>
                <Text style={styles.bodyText}>Body 2</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View>
                <Text style={styles.bodyText}>Body 2</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View>
                <Text style={styles.bodyText}>Body 2</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View>
                <Text style={styles.bodyText}>Body 2</Text>
            </View>
          </View>
          <View style={styles.card}>
            <View>
                <Text style={styles.bodyText}>Body 2</Text>
            </View>
          </View>
        </View>
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
  bodyText: {
    fontSize: 16,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
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
});
