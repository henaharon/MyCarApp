import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import Summary from './Summary';

const SuccessPage = () => {
  return (
    <View>
      <Text style={styles.tnkTitle}> תודה</Text>
      <Text style={styles.approveTile}>קריאה נשלחה בהצלחה! </Text>
      <Button style={styles.showReport}>צפיה בסטטוס הקריאה</Button>
      <Button style={styles.approveSecondTitle}>אישור</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: '15%',
  },
});

export default SuccessPage;
