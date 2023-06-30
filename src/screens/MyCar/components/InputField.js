import React from "react";
import { TextInput, View, Text, StyleSheet, Dimensions } from "react-native";

const InputField = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.labelStyle}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor="#ccc"
          autoCorrect={false}
          style={[styles.inputStyle, { width: Dimensions.get('window').width - 40 }]}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'right',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputStyle: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    textAlign: 'right',
  },
});

export default InputField;
