import React, { useState } from 'react';
import { Modal, View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';

const DriverLicenceTypeModal = ({ visible, onClose, onSelect }) => {
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

  const handleClose = () => {
    onSelect(selectedOptions);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>סוג רישיון נהיגה</Text>
          <Text style={styles.subtitle}>בחרו את סוג רישיון הנהיגה שברשותכם</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.optionsContainer}>
            {renderOption('A2')}
            {renderOption('A1')}
            {renderOption('A')}
            {renderOption('B')}
            {renderOption('C1')}
            {renderOption('C')}
            {renderOption('D')}
            {renderOption('D1')}
            {renderOption('D2')}
            {renderOption('D3')}
            {renderOption('E')}
            {renderOption('1')}
          </ScrollView>
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Text style={styles.closeButtonText}>סגירה</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'right',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'right',
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
