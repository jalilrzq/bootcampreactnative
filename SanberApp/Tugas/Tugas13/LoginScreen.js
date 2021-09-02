import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Image style={styles.logo} source={require('./assets/Logo.png')} />
          <Text style={styles.title}>Login</Text>
          <View style={styles.input}>
            <Text>Username</Text>
            <TextInput style={styles.inputText} editable maxLength={40} />
          </View>
          <View style={styles.input}>
            <Text>Password</Text>
            <TextInput style={styles.inputText} editable maxLength={40} />
          </View>
          <TouchableOpacity>
            <View style={styles.buttonMasuk}>
              <Text style={{color: 'white', fontSize: 20}}>Masuk</Text>
            </View>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', fontSize: 18, marginTop: 20}}>atau</Text>
          <TouchableOpacity>
            <View style={styles.buttonDaftar}>
              <Text style={{color: '#3EC6FF', fontSize: 18}}>Daftar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
    body: {
    flex: 1,
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 353,
    height: 97,
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    color: '#003366'
  },
  input: {
    marginTop: 9,
    width: 277,
  },  
  inputText: {
    borderColor: 'black',
    borderWidth: 1,
    height: 45,
    marginTop: 10
  },
  buttonMasuk: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: 150,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#003366',
  },
  buttonDaftar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 150,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: '#003366',
    borderWidth: 1,
  }
});
