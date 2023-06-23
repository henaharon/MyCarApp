import React, {useState} from 'react';
import {Modal, StyleSheet, View, ScrollView,TouchableOpacity, Image, Text} from 'react-native';
import BaseView from '../../uiKit/BaseView';
import Header from '../../uiKit/Header';
import {myMessagesIcons} from '../../uiKit/icons';

const MyMessages = () => {
  return (
    <BaseView>
      <ScrollView>
        <Modal>
          <UpdateCard
            image={myMessagesIcons.image1}
            subtitle={'smallTest'}
            text={'test test'}
          />
        </Modal>
      </ScrollView>
    </BaseView>
  );
};

const UpdateCard = ({image, subtitle, text}) => {
  return (
    <View>
      <TouchableOpacity>
        <Image source={image} />
        <Text>{subtitle}</Text>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyMessages;

const styles = StyleSheet.create({});
