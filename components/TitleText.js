import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = (props) => {
  return (
    <Text style={{ ...props.style, ...styles.title }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'funky-one',
    fontSize: 35,
  },
});

export default TitleText;
