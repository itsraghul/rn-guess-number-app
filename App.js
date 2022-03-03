import { StyleSheet, View, SafeAreaView } from 'react-native';
import { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
// import { useFonts } from '@use-expo/font';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = async () => {
  return await Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'funky-one': require('./assets/fonts/FunkyJunk.ttf'),
    'garden-reg': require('./assets/fonts/garden.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  // const [dataLoad] = useFonts({
  //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  //   'funky-one': require('./assets/fonts/FunkyJunk.ttf'),
  //   'garden-reg': require('./assets/fonts/garden.ttf'),
  // });
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const restartNewGame = () => {
    setGuessRounds(0);
    setUserNumber();
  };

  const startGameHandler = (selectedNum) => {
    setUserNumber(selectedNum);
  };

  const gameOverHandler = (noOfRounds) => {
    setGuessRounds(noOfRounds);
  };

  let content = <StartGameScreen onPass={startGameHandler} />;

  if (!!userNumber && guessRounds <= 0) {
    content = (
      <GameScreen onGameOver={gameOverHandler} userChoice={userNumber} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        numRounds={guessRounds}
        userNumber={userNumber}
        onRestart={restartNewGame}
      />
    );
  }
  return (
    <SafeAreaView style={styles.screen}>
      {/* <View> */}
      <Header title="Guess the Number!" />
      {content}
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
