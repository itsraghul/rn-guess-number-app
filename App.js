import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

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
    <View style={styles.screen}>
      <Header title="Guess the Number!" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
