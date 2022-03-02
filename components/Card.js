import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 10,
    padding: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 0.3,
    // only ios
    // shadowColor: 'black',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowRadius: 6,
    // shadowOpacity: 0.26,
    backgroundColor: 'white',
  },
});

export default Card;
