import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "Coding",
      id: "1"
    },
    {
      text: "Eating",
      id: "2"
    },
    {
      text: "Sleeping",
      id: "3"
    }
  ]);

  const pressHandler = id => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id != id);
    });
    Alert.alert("Success!", "Successfully remove a To Do from To Do List", [
      { text: "Okay" }
    ]);
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [
          {
            text,
            id: Math.random().toString()
          },
          ...prevTodos
        ];
      });
      Alert.alert("Success!", "Successfully added new To Do", [
        { text: "Okay" }
      ]);
      Keyboard.dismiss();
    } else {
      Alert.alert("Warning!", "To Do must be over 3 chars long", [
        { text: "Understood" }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              keyExtractor={todo => todo.id}
              data={todos}
              renderItem={({ item }) => (
                <TodoItem pressHandler={pressHandler} item={item} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
