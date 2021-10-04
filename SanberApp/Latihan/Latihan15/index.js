import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')} 
      />
    </View>
  );
}

function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button 
        title='Go to Details... again'
        onPress={() => navigation.navigate('Details')}
      />
      <Button 
        title='Go to Details... again with push'
        onPress={() => navigation.push('Details')}
      />
      <Button 
        title='Go Back'
        onPress={() => navigation.goBack()}
      />
      <Button 
        title='Go to First Screen'
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{headerShown: true}}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen 
          name='Details' 
          component={DetailScreen}
          options={{ headerShown: true, title: 'Halaman Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;