import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import Card from '../components/Card';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Lets Start the Game!</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.norText}>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color="#c717fc" />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color="#f7287b" />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    // backgroundCol,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  norText: {
    fontSize: 20,
  },
  button: {
    width: 80,
  },
});

export default StartGameScreen;
