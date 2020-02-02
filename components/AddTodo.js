import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = val => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        value={text}
        style={styles.input}
        placeholder="New To Do..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => {
          submitHandler(text);
          setText("");
        }}
        title="Add Todo"
        color="#33cc00"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});
