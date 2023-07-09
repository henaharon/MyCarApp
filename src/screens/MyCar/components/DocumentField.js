import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const DocumentField = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      setSelectedFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the file selection');
      } else {
        console.log('Error occurred while selecting a file:', err);
      }
    }
  };

  return (
    <View>
      <Button title="Select File" onPress={selectFile} />

      {selectedFile && (
        <Text>
          Selected File: {selectedFile.name} ({selectedFile.type})
        </Text>
      )}
    </View>
  );
};

export default DocumentField;
