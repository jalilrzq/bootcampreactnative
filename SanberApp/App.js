import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Settings, StyleSheet, Text, View } from 'react-native';

// import Component from './Latihan/Compoent/component';
// import Telegram from './Tugas/Tugas12/Telegram';
// import Flexbox from './Latihan/Flexbox/flexbox';
// import Props from './Latihan/Flexbox/props';
// import Login from './Tugas/Tugas13/LoginScreen';
// import About from './Tugas/Tugas13/AboutScreen';
// import RestApi from './Tugas/Tugas14/RestApi'
// import Login from './Tugas/Tugas15/Pages/Login';
// import Tugas15 from './Tugas/Tugas15/index';
// import QuizNo6 from './Quiz3/soalNomer6';
// import QuizNo7 from './Quiz3/soalNomer7';
// import index from './Quiz3';
// import Latihan15 from './Latihan/Latihan15/index';
import Latihan15 from './Latihan/Latihan15/index2';

export default function App() {
  return (
    <Latihan15 />
    // <index />
    // <QuizNo7 />
    // <QuizNo6 />
    // <Tugas15 />
    // <Login />
    // <RestApi />
    // <About />
    // <Login />
    // <>
    //   <Flexbox />
    //   { <Props /> }
    // </>
    // <Telegram />
    // <Component />
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
