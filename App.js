import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { Text } from 'react-native';

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    // preloading APIs, assets or database..
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // await Font.loadAsync(Ionicons.load);
  };

  if (!ready) {
    return <AppLoading onFinish={onFinish} onError={console.error} startAsync={startLoading} />;
  }

  // loading done
  return <Text>We are done loading</Text>;
}
