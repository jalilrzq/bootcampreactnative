import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
        <Text style={styles.title}>Tentang Saya</Text>
          <FontAwesome name="user-circle-o" size={48*2} color="black" />
          <Text style={{fontSize: 24}}>Abdul Jalil Rozaqi</Text>
          <Text style={{fontSize: 18}}>Full Stack Developer</Text>
          <View style={styles.porto}>
            <Text style={{fontSize: 20}}>Portofolio</Text>
            <View style = {styles.lineStyle} />
            <View style={styles.innerPorto}>
              <View style={styles.item}>
                <FontAwesome name="gitlab" size={48} color="black" />
                <Text>@jalilrzq</Text>
              </View>
              <View style={styles.item}>
                <FontAwesome name="github" size={48} color="black" />
                <Text>@jalilrzq</Text>
              </View>
            </View>
          </View>
          <View style={styles.porto}>
            <Text style={{fontSize: 20}}>Contact</Text>
            <View style = {styles.lineStyle} />
            <View style={styles.innerPorto}>
              <View style={styles.item2}>
              <FontAwesome name="linkedin-square" size={48} color="black" />
                <Text>@jalilrzq</Text>
              </View>
              <View style={styles.item2}>
                <FontAwesome name="github" size={48} color="black" />
                <Text>081334567890</Text>
              </View>
              <View style={styles.item2}>
                <FontAwesome name="github" size={48} color="black" />
                <Text style={{fontSize: 12}}>abdul@gmail.com</Text>
              </View>
            </View>
          </View>
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
    alignItems: 'center'
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    color: '#000',
    fontWeight: 600,
  },
  porto: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#DCDCDC',
    padding: 10,
  },
  lineStyle: {
    borderWidth: 1,
    borderColor:'black',
  },
  innerPorto: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    alignItems: 'center',
    width: '50%',
  },
  item2: {
    alignItems: 'center',
  }
});
