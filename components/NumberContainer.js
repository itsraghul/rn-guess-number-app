import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = (props) => {
  return (
    <View styles={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    color: Colors.primary,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 10,
    color: Colors.primary,
    marginVertical: 10,
    padding: 10,
    fontFamily: 'garden-reg',
    fontSize: 40,
    alignItems: 'center',
  },
});

export default NumberContainer;
