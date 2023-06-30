import React, { useState } from 'react';
import { Modal, View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';

const DriverLicenceTypeModal = ({ visible, onClose }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionPress = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const renderOption = (option) => {
    const isSelected = selectedOptions.includes(option);

    return (
      <TouchableOpacity
        key={option}
        style={[styles.option, isSelected && styles.selectedOption]}
        onPress={() => handleOptionPress(option)}
      >
        <Text style={styles.optionText}>{option}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Select Driver's License Types</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.optionsContainer}>
            {renderOption('Option 1')}
            {renderOption('Option 2')}
            {renderOption('Option 3')}
            {renderOption('Option 1')}
            {renderOption('Option 2')}
            {renderOption('Option 3')}
            {renderOption('Option 1')}
            {renderOption('Option 2')}
            {renderOption('Option 3')}
          </ScrollView>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#EAEAEA',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  selectedOption: {
    backgroundColor: '#3498DB',
  },
  optionText: {
    fontSize: 14,
    color: '#000',
  },
  closeButton: {
    alignSelf: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#3498DB',
  },
});

export default DriverLicenceTypeModal;
