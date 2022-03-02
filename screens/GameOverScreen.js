import React from 'react';
import { View, StyleSheet, Button, Image, Text } from 'react-native';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <View style={styles.imageCont}>
        <Image
          fadeDuration={1000}
          style={styles.image}
          source={require('../assets/success.png')}
          //   source={{
          //     uri: 'https://img.freepik.com/free-vector/successful-business-man-holding-trophy_1150-35042.jpg?size=626&ext=jpg',
          //   }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.box}>
        <TitleText style={{ textAlign: 'center' }}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{props.numRounds} </Text> rounds to
          guess number <Text style={styles.highlight}>{props.userNumber}</Text>.
        </TitleText>
      </View>
      <View style={styles.button}>
        <MainButton onPress={props.onRestart}>New Game</MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageCont: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: 'black',
    borderWidth: 0.25,
    overflow: 'hidden',
    elevation: 20,
    marginVertical: 20,
  },
  button: {
    marginVertical: 10,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'garden-reg',
  },
  box: {
    width: '70%',
  },
});

export default GameOverScreen;
