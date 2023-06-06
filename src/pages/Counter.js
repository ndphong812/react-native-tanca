import {Button, View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment} from '../redux/tasks/action';

const Counter = () => {
  const onIncrement = () => {
    dispatch(increment(5));
  };

  const dispatch = useDispatch();

  const selector = useSelector(state => state.counter);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Button title="Incremen" onPress={() => onIncrement()} />
          <Text>{selector.value}</Text>
          <Text>Hello</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Counter;
