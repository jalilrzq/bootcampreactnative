import React, { useEffect, useState, UseState } from 'react';
import { View, Text } from 'react-native';

const Quiz = () => {
  const [name, setName] = useState('John Doe')
  useEffect(() => {
    setTimeout(() => {
      setName('Zakky Muhammad Fajar')
    }, 2000)
    return () => {
      setName('Achmad Hilmy')
    }
  }, [])
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default Quiz