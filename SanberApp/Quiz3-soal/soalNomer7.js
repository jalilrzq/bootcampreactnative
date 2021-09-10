import React from 'react';
import { View, Text } from 'react-native';

const Quiz = () => {
  const data = [
    {
      id: 1,
      title: 'Test',
      description: 'Lorem ipsum'
    },
    {
      id: 2,
      title: 'Test 1',
      description: 'Lorem ipsum 1'
    },
    {
      id: 3,
      title: 'Test 2',
      description: 'Lorem ipsum 2'
    }
  ]
  return (
    <View>
      {
        data.map((item) => {
          <Text>{item.title}</Text>
        })
      }
    </View>
  )
}

export default Quiz