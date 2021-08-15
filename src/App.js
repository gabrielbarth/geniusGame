import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from "react-native-splash-screen";

import { Game as GameScreen } from './screens/Game';

import { GameProvider } from './context';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GameProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <GameScreen />
    </GameProvider>
  );
};

export { App };
