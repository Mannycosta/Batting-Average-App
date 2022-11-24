import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './components/Header/Header';
import Field from './components/Field/Field';
import Realm from 'realm';

// Schema for database objects

const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'int',
    name: 'string',
    status: 'string?',
  },
  primaryKey: '_id',
};

(async () => {
  // Use realm to interact with DB
  const realm = await Realm.open({
    path: 'myrealm',
    schema: [TaskSchema],
  });

  let task1, task2;
  realm.write(() => {
    task1 = realm.create('Task', {
      _id: 1,
      name: 'go grocery shopping',
      status: 'Open',
    });
    task2 = realm.create('Task', {
      _id: 2,
      name: 'go exercise',
      status: 'Open',
    });
    console.log(`created two tasks: ${task1.name} & ${task2.name}`);
  });
  const tasks = realm.objects('Task');
  console.log(`The lists of tasks are: ${tasks.map((task: any) => task.name)}`);
})();

type Props = {};

const App = (props: Props) => {
  return (
    <View style={styles.container}>
      <Header />
      <Field />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
