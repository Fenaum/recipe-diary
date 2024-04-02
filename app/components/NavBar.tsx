import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const NavBar = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={[
          styles.container,
          {backgroundColor: isDarkMode ? '#FFF' : '#333'},
        ]}>
        <Text style={styles.text}>NavBar</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Add padding for better appearance
  },
  text: {
    fontSize: 20, // Increase font size for better readability
    fontWeight: 'bold', // Make the text bold
    color: '#000', // Default text color
  },
});

export default NavBar;
